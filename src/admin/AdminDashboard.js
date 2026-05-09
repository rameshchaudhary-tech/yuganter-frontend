import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("adminLoggedIn")) {
            navigate("/admin/login");
        }
    }, [navigate]);

    return ( <
        div className = "min-h-screen bg-gray-100 flex" >

        <
        AdminSidebar sidebarOpen = { sidebarOpen }
        setSidebarOpen = { setSidebarOpen }
        />

        <
        div className = "flex-1 p-8" >

        <
        h1 className = "text-3xl font-bold mb-6" >
        Dashboard <
        /h1>

        <
        p className = "mb-6 text-gray-600" >
        Welcome Admin Panel <
        /p>

        { /* CARDS */ } <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-5" >

        { /* COURSES */ } <
        div onClick = {
            () => navigate("/admin/courses") }
        className = "cursor-pointer bg-blue-100 p-5 rounded-xl hover:shadow-lg transition" >
        <
        h2 className = "text-xl font-semibold" > Manage Courses < /h2> <
        p > View and edit course details < /p> <
        /div>

        { /* SERVICES */ } <
        div onClick = {
            () => navigate("/admin/services") }
        className = "cursor-pointer bg-green-100 p-5 rounded-xl hover:shadow-lg transition" >
        <
        h2 className = "text-xl font-semibold" > Manage Services < /h2> <
        p > Update service offerings < /p> <
        /div>

        { /* ANALYTICS */ } <
        div onClick = {
            () => navigate("/admin/analytics") }
        className = "cursor-pointer bg-yellow-100 p-5 rounded-xl hover:shadow-lg transition" >
        <
        h2 className = "text-xl font-semibold" > View Analytics < /h2> <
        p > Check website statistics < /p> <
        /div>

        <
        /div>

        <
        /div> <
        /div>
    );
};

export default AdminDashboard;