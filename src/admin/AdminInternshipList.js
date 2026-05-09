import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import BASE_URL from "../BASEURL";

const AdminInternshipList = () => {
    const [applications, setApplications] = useState([]);
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
       FETCH APPLICATIONS
    ========================= */
    useEffect(() => {
        const fetchInternshipApplications = async() => {
            try {
                const response = await fetch(
                    `${BASE_URL}/api/internship/all`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    }
                );

                const data = await response.json();

                if (data && data.success) {
                    setApplications(data.data || []);
                } else {
                    setApplications([]);
                }

            } catch (error) {
                console.error("Fetch Error:", error);
            }
        };

        if (token) {
            fetchInternshipApplications();
        }
    }, [token]);

    /* =========================
       DELETE APPLICATION
    ========================= */
    const handleDelete = async(id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this application?"
        );

        if (!confirmDelete) return;

        try {
            const response = await fetch(
                `${BASE_URL}/api/internship/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            const data = await response.json();

            if (data && data.success) {
                setApplications((prev) =>
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
        Internship Applications <
        /h1>

        { /* NO DATA */ } {
            applications.length === 0 ? ( <
                p className = "text-gray-600" >
                No internship applications found. <
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
                        "Internship",
                        "Experience",
                        "Message",
                        "Submitted At",
                        "Action",
                    ].map((head) => ( <
                        th key = { head }
                        className = "px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase" >
                        { head } <
                        /th>
                    ))
                } <
                /tr> <
                /thead>

                <
                tbody > {
                    applications.map((app) => ( <
                        tr key = { app._id }
                        className = "border-b hover:bg-gray-50" >
                        <
                        td className = "px-6 py-5 font-medium" > { app.fullName } <
                        /td>

                        <
                        td className = "px-6 py-5 text-gray-600" > { app.email } <
                        /td>

                        <
                        td className = "px-6 py-5 text-gray-600" > { app.phone } <
                        /td>

                        <
                        td className = "px-6 py-5 text-gray-600" > { app.internshipProgram } <
                        /td>

                        <
                        td className = "px-6 py-5" >
                        <
                        span className = "px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700" > { app.experienceLevel } <
                        /span> <
                        /td>

                        <
                        td className = "px-6 py-5 text-gray-600" > { app.message || "N/A" } <
                        /td>

                        <
                        td className = "px-6 py-5 text-sm text-gray-500" > {
                            new Date(
                                app.createdAt
                            ).toLocaleString()
                        } <
                        /td>

                        { /* DELETE BUTTON */ } <
                        td className = "px-6 py-5" >
                        <
                        button onClick = {
                            () =>
                            handleDelete(app._id)
                        }
                        className = "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" >
                        Delete <
                        /button> <
                        /td> <
                        /tr>
                    ))
                } <
                /tbody>

                <
                /table> <
                /div>

                { /* MOBILE CARDS */ } <
                div className = "md:hidden space-y-4" >

                {
                    applications.map((app) => ( <
                        div key = { app._id }
                        className = "bg-white rounded-xl shadow p-4 space-y-3" >
                        <
                        div className = "flex justify-between items-start" >

                        <
                        h3 className = "font-semibold text-lg" > { app.fullName } <
                        /h3>

                        <
                        span className = "text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full" > { app.experienceLevel } <
                        /span>

                        <
                        /div>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        strong > Email: < /strong> {app.email} <
                        /p>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        strong > Phone: < /strong> {app.phone} <
                        /p>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        strong > Internship: < /strong>{" "} { app.internshipProgram } <
                        /p>

                        <
                        p className = "text-sm text-gray-600" >
                        <
                        strong > Message: < /strong>{" "} { app.message || "N/A" } <
                        /p>

                        <
                        p className = "text-xs text-gray-500" >
                        Submitted: { " " } {
                            new Date(
                                app.createdAt
                            ).toLocaleString()
                        } <
                        /p>

                        { /* DELETE BUTTON */ } <
                        button onClick = {
                            () =>
                            handleDelete(app._id)
                        }
                        className = "bg-red-500 text-white px-4 py-2 rounded-lg w-full" >
                        Delete <
                        /button>

                        <
                        /div>
                    ))
                }

                <
                /div> <
                />
            )
        }

        <
        /div> <
        /div>
    );
};

export default AdminInternshipList;