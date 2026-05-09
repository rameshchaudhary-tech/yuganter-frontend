import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import BASE_URL from "../BASEURL";

const AdminServiceInquiries = () => {
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
        const fetchServiceInquiries = async() => {
            try {
                const response = await fetch(
                    `${BASE_URL}/api/service-bookings`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    }
                );

                const data = await response.json();

                if (data && data.success) {
                    setInquiries(data.data || []);
                } else {
                    setInquiries([]);
                }
            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };

        if (token) {
            fetchServiceInquiries();
        }
    }, [token]);

    /* =========================
       DELETE FUNCTION
    ========================= */
    const handleDelete = async(id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete?"
        );

        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `${BASE_URL}/api/service-bookings/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            const data = await response.json();

            if (data && data.success) {
                setInquiries((prev) =>
                    prev.filter((item) => item._id !== id)
                );
            } else {
                alert("Delete failed");
            }
        } catch (error) {
            console.error("Delete Error:", error);
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

        { /* MOBILE MENU */ } <
        div className = "md:hidden mb-4" >
        <
        button onClick = {
            () => setSidebarOpen(true) }
        className = "bg-blue-600 text-white px-4 py-2 rounded-lg shadow" >
        ☰Menu <
        /button> <
        /div>

        { /* PAGE TITLE */ } <
        h1 className = "text-2xl md:text-3xl font-bold mb-6" >
        Service Inquiries <
        /h1>

        { /* NO DATA */ } {
            inquiries.length === 0 ? ( <
                p className = "text-gray-600" >
                No service inquiries found. <
                /p>
            ) : ( <
                > { /* DESKTOP TABLE */ } <
                div className = "hidden md:block bg-white rounded-xl shadow overflow-x-auto" >
                <
                table className = "min-w-full" >
                <
                thead className = "bg-gray-100" >
                <
                tr > {
                    [
                        "Name",
                        "Email",
                        "Phone",
                        "Service",
                        "Message",
                        "Submitted At",
                        "Action",
                    ].map((head) => ( <
                        th key = { head }
                        className = "px-8 py-4 text-left text-xs font-semibold text-gray-500 uppercase" >
                        { head } <
                        /th>
                    ))
                } <
                /tr> <
                /thead>

                <
                tbody > {
                    inquiries.map((inq) => ( <
                        tr key = { inq._id }
                        className = "border-b hover:bg-gray-50" >
                        <
                        td className = "px-8 py-5 font-medium" > { inq.name } <
                        /td>

                        <
                        td className = "px-8 py-5 text-gray-600" > { inq.email } <
                        /td>

                        <
                        td className = "px-8 py-5 text-gray-600" > { inq.phone } <
                        /td>

                        <
                        td className = "px-8 py-5 text-gray-600" > { inq.service } <
                        /td>

                        <
                        td className = "px-8 py-5 text-gray-600" > { inq.message || "N/A" } <
                        /td>

                        <
                        td className = "px-8 py-5 text-sm text-gray-500" > { new Date(inq.createdAt).toLocaleString() } <
                        /td>

                        { /* DELETE BUTTON */ } <
                        td className = "px-8 py-5" >
                        <
                        button onClick = {
                            () => handleDelete(inq._id) }
                        className = "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" >
                        Delete <
                        /button> <
                        /td> <
                        /tr>
                    ))
                } <
                /tbody> <
                /table> <
                /div>

                { /* MOBILE CARDS */ } <
                div className = "md:hidden space-y-4" > {
                    inquiries.map((inq) => ( <
                        div key = { inq._id }
                        className = "bg-white rounded-xl shadow p-4 space-y-3" >
                        <
                        h3 className = "font-semibold text-lg" > { inq.name } <
                        /h3>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        strong > Email: < /strong> {inq.email} <
                        /p>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        strong > Phone: < /strong> {inq.phone} <
                        /p>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        strong > Service: < /strong> {inq.service} <
                        /p>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        strong > Message: < /strong>{" "} { inq.message || "N/A" } <
                        /p>

                        <
                        p className = "text-xs text-gray-500" >
                        Submitted: { " " } { new Date(inq.createdAt).toLocaleString() } <
                        /p>

                        { /* DELETE BUTTON */ } <
                        button onClick = {
                            () => handleDelete(inq._id) }
                        className = "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full" >
                        Delete <
                        /button> <
                        /div>
                    ))
                } <
                /div> <
                />
            )
        } <
        /div> <
        /div>
    );
};

export default AdminServiceInquiries;