import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import BASE_URL from "../BASEURL";

const AdminCourseInquiries = () => {
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
       FETCH FUNCTION (FIXED)
    ========================= */
    const fetchCourseInquiries = useCallback(async() => {
        try {
            const response = await fetch(`${BASE_URL}/api/course-inquiries`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });

            const data = await response.json();

            if (data && data.success) {
                setInquiries(data.data);
            } else {
                console.error("Fetch failed");
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }, [token]);

    /* =========================
       USE EFFECT (FIXED)
    ========================= */
    useEffect(() => {
        if (token) {
            fetchCourseInquiries();
        }
    }, [token, fetchCourseInquiries]);

    /* =========================
       DELETE
    ========================= */
    const handleDelete = async(id) => {
        if (!window.confirm("Delete this inquiry?")) return;

        try {
            const response = await fetch(
                `${BASE_URL}/api/course-inquiries/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );

            const data = await response.json();

            if (data && data.success) {
                setInquiries(inquiries.filter((item) => item._id !== id));
            } else {
                alert("Delete failed");
            }

        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    /* =========================
       LOGOUT
    ========================= */
    const handleLogout = () => {
        if (window.confirm("Logout?")) {
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
        div className = "flex-1 p-4 md:p-8" >

        <
        h1 className = "text-2xl font-bold mb-6" >
        Course Inquiries <
        /h1>

        {
            inquiries.length === 0 ? ( <
                p > No inquiries found. < /p>
            ) : ( <
                table className = "min-w-full bg-white shadow rounded overflow-hidden" >

                <
                thead className = "bg-gray-100" >
                <
                tr >
                <
                th className = "px-6 py-3 text-left" > Name < /th> <
                th className = "px-6 py-3 text-left" > Email < /th> <
                th className = "px-6 py-3 text-left" > Phone < /th> <
                th className = "px-6 py-3 text-left" > Course < /th> <
                th className = "px-6 py-3 text-left" > Date < /th> <
                th className = "px-6 py-3 text-left" > Action < /th> < /
                tr > <
                /thead>

                <
                tbody > {
                    inquiries.map((inq) => ( <
                        tr key = { inq._id }
                        className = "border-b hover:bg-gray-50" >

                        <
                        td className = "px-6 py-4" > { inq.name } < /td> <
                        td className = "px-6 py-4" > { inq.email } < /td> <
                        td className = "px-6 py-4" > { inq.phone } < /td> <
                        td className = "px-6 py-4" > { inq.course } < /td> <
                        td className = "px-6 py-4" > { new Date(inq.createdAt).toLocaleString() } <
                        /td>

                        <
                        td className = "px-6 py-4" >
                        <
                        button onClick = {
                            () => handleDelete(inq._id)
                        }
                        className = "bg-red-500 text-white px-3 py-1 rounded" >
                        Delete <
                        /button> < /
                        td >

                        <
                        /tr>
                    ))
                } <
                /tbody>

                <
                /table>
            )
        }

        <
        /div> < /
        div >
    );
};

export default AdminCourseInquiries;