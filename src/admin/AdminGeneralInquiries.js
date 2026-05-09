import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import BASE_URL from "../BASEURL";

const AdminGeneralInquiries = () => {
    const [inquiries, setInquiries] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem("adminToken");

    /* =========================
       AUTH CHECK
    ========================= */
    useEffect(() => {
        if (!token) {
            navigate("/admin/login");
        }
    }, [token, navigate]);

    /* =========================
       FETCH DATA
    ========================= */
    useEffect(() => {
        const fetchGeneralInquiries = async() => {
            try {
                const response = await fetch(`${BASE_URL}/api/course-inquiries`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                });

                const data = await response.json();

                if (data && data.success) {
                    setInquiries(data.data);
                } else {
                    console.error("API Error:", data);
                    setInquiries([]);
                }
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };

        if (token) {
            fetchGeneralInquiries();
        }
    }, [token]);

    /* =========================
       DELETE FUNCTION
    ========================= */
    const handleDelete = async(id) => {
        if (!window.confirm("Are you sure you want to delete?")) return;

        try {
            const res = await fetch(`${BASE_URL}/api/course-inquiries/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token,
                },
            });

            const data = await res.json();

            if (data && data.success) {
                // UI update without reload
                setInquiries((prev) => prev.filter((item) => item._id !== id));
            } else {
                console.error("Delete failed:", data);
            }
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    /* =========================
       LOGOUT
    ========================= */
    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminLoggedIn");
            navigate("/admin/login");
        }
    };

    return ( <
        div className = "min-h-screen bg-gray-100 flex" >
        <
        AdminSidebar sidebarOpen = { sidebarOpen }
        setSidebarOpen = { setSidebarOpen }
        onLogout = { handleLogout }
        />

        <
        div className = "flex-1 p-4 md:p-8" > { /* Mobile Menu */ } <
        div className = "md:hidden mb-4" >
        <
        button onClick = {
            () => setSidebarOpen(true)
        }
        className = "bg-blue-600 text-white px-4 py-2 rounded-lg shadow" > ☰Menu <
        /button> < /
        div >

        <
        h1 className = "text-2xl md:text-3xl font-bold mb-6" >
        General Inquiries <
        /h1>

        {
            inquiries.length === 0 ? ( <
                p className = "text-gray-600" > No inquiries found. < /p>
            ) : ( <
                >
                { /* DESKTOP TABLE */ } <
                div className = "hidden md:block bg-white rounded-xl shadow overflow-x-auto" >
                <
                table className = "min-w-full divide-y divide-gray-200" >
                <
                thead className = "bg-gray-50" >
                <
                tr > {
                    [
                        "Name",
                        "Email",
                        "Phone",
                        "Course",
                        "Submitted At",
                        "Action",
                    ].map((head) => ( <
                        th key = { head }
                        className = "px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase" > { head } <
                        /th>
                    ))
                } <
                /tr> < /
                thead >

                <
                tbody className = "divide-y divide-gray-200" > {
                    inquiries.map((inq) => ( <
                        tr key = { inq._id }
                        className = "hover:bg-gray-50" >
                        <
                        td className = "px-6 py-4 font-medium" > { inq.name } < /td> <
                        td className = "px-6 py-4 text-gray-600" > { inq.email } <
                        /td> <
                        td className = "px-6 py-4 text-gray-600" > { inq.phone } <
                        /td> <
                        td className = "px-6 py-4 text-gray-600" > { inq.course } <
                        /td> <
                        td className = "px-6 py-4 text-sm text-gray-500" > { new Date(inq.createdAt).toLocaleString() } <
                        /td>

                        { /* DELETE BUTTON */ } <
                        td className = "px-6 py-4" >
                        <
                        button onClick = {
                            () => handleDelete(inq._id)
                        }
                        className = "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded" >
                        Delete <
                        /button> < /
                        td > <
                        /tr>
                    ))
                } <
                /tbody> < /
                table > <
                /div>

                { /* MOBILE CARDS */ } <
                div className = "md:hidden space-y-4" > {
                    inquiries.map((inq) => ( <
                        div key = { inq._id }
                        className = "bg-white rounded-xl shadow p-4 space-y-2" >
                        <
                        h3 className = "font-semibold text-lg" > { inq.name } < /h3>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        b > Email: < /b> {inq.email} < /
                        p >

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        b > Phone: < /b> {inq.phone} < /
                        p >

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        b > Course: < /b> {inq.course} < /
                        p >

                        <
                        p className = "text-xs text-gray-500" >
                        Submitted: { " " } { new Date(inq.createdAt).toLocaleString() } <
                        /p>

                        { /* DELETE BUTTON MOBILE */ } <
                        button onClick = {
                            () => handleDelete(inq._id)
                        }
                        className = "bg-red-500 text-white px-3 py-1 rounded mt-2" >
                        Delete <
                        /button> < /
                        div >
                    ))
                } <
                /div> < /
                >
            )
        } <
        /div> < /
        div >
    );
};

export default AdminGeneralInquiries;