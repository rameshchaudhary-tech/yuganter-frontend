import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import BASE_URL from "../BASEURL";
const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${BASE_URL}/api/auth/login`, {
                email,
                password
            });

            if (res.data && res.data.token) {
                localStorage.clear();
                localStorage.setItem("adminToken", res.data.token);
                localStorage.setItem("adminLoggedIn", "true");

                navigate("/admin");
            } else {
                setError("Login failed");
            }

        } catch (err) {
            setError(
                (err && err.response && err.response.data && err.response.data.message) ||
                "Invalid email or password"
            );
        }
    };

    return ( <
        div className = "min-h-screen flex items-center justify-center bg-gray-100 p-4" >
        <
        div className = "bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-sm md:max-w-md" >
        <
        h2 className = "text-xl md:text-2xl font-bold mb-6 text-center" >
        Admin Login <
        /h2>

        <
        form onSubmit = { handleSubmit } >
        <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 text-sm font-bold mb-2" >
        Email <
        /label> <
        input type = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        className = "shadow border rounded w-full py-2 px-3"
        required /
        >
        <
        /div>

        <
        div className = "mb-6" >
        <
        label className = "block text-gray-700 text-sm font-bold mb-2" >
        Password <
        /label> <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        className = "shadow border rounded w-full py-2 px-3"
        required /
        >
        <
        /div>

        {
            error && ( <
                p className = "text-red-500 text-xs mb-4" > { error } < /p>
            )
        }

        <
        button type = "submit"
        className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" >
        Login <
        /button> < /
        form >

        <
        div className = "mt-2 text-center" >
        <
        a href = "https://www.yugantartechnologies.com"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "text-blue-500 underline" >
        Go To Website:
        <
        /a> < /
        div > <
        /div> < /
        div >
    );
};

export default AdminLogin;