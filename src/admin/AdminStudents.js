// src/admin/AdminStudents.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { studentsAPI } from "../services/studentsAPI";

const AdminStudents = () => {
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    /* =========================
       AUTH CHECK
    ========================= */
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("adminLoggedIn");

        if (!isLoggedIn) {
            navigate("/admin/login");
        } else {
            loadStudents();
        }
    }, [navigate]);

    /* =========================
       LOAD STUDENTS
    ========================= */
    const loadStudents = async() => {
        try {
            setLoading(true);
            setError("");

            const response = await studentsAPI.getAll();

            if (response && response.success) {
                setStudents(response.data || []);
            } else if (Array.isArray(response)) {
                setStudents(response);
            } else {
                setStudents([]);
            }
        } catch (err) {
            console.error(err);
            setError(err.message || "Failed to load students");
        } finally {
            setLoading(false);
        }
    };

    /* =========================
       LOGOUT
    ========================= */
    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            localStorage.removeItem("adminLoggedIn");
            localStorage.removeItem("adminToken");

            navigate("/admin/login");
        }
    };

    /* =========================
       DELETE STUDENT
    ========================= */
    const handleDelete = async(id) => {
        const confirmDelete = window.confirm(
            "Delete this student?"
        );

        if (!confirmDelete) return;

        try {
            await studentsAPI.delete(id);

            setStudents((prev) =>
                prev.filter((s) => s._id !== id)
            );
        } catch (err) {
            console.error(err);
            alert("Delete failed");
        }
    };

    return ( <
        div className = "min-h-screen bg-gray-100 flex" >

        { /* SIDEBAR */ } <
        AdminSidebar sidebarOpen = { sidebarOpen }
        setSidebarOpen = { setSidebarOpen }
        onLogout = { handleLogout }
        />

        { /* MAIN */ } <
        div className = "flex-1 p-4 md:p-8" >

        { /* MOBILE MENU */ } <
        div className = "md:hidden mb-4" >
        <
        button onClick = {
            () => setSidebarOpen(true) }
        className = "bg-blue-600 text-white px-4 py-2 rounded-lg" >
        ☰Menu <
        /button> <
        /div>

        { /* HEADER */ } <
        div className = "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6" >

        <
        div >
        <
        h1 className = "text-2xl md:text-3xl font-bold" >
        Manage Students <
        /h1>

        <
        p className = "text-gray-600 mt-1" >
        Total Students:
        <
        span className = "font-semibold text-blue-600 ml-1" > { students.length } <
        /span> <
        /p> <
        /div> <
        /div>

        { /* LOADING */ } {
            loading && ( <
                div className = "bg-white p-6 rounded-lg shadow text-center" >
                Loading students... <
                /div>
            )
        }

        { /* ERROR */ } {
            error && ( <
                div className = "bg-red-100 text-red-700 p-4 rounded-lg mb-5" > { error } <
                /div>
            )
        }

        { /* MOBILE CARDS */ } {
            !loading && ( <
                div className = "md:hidden space-y-4" >

                {
                    students.length === 0 ? ( <
                        div className = "bg-white p-6 rounded-lg shadow text-center" >
                        No students found. <
                        /div>
                    ) : (
                        students.map((student) => ( <
                            div key = { student._id }
                            className = "bg-white rounded-xl shadow p-4" >

                            <
                            div className = "flex justify-between mb-3" >

                            <
                            div >
                            <
                            h3 className = "font-bold text-lg" > { student.name } <
                            /h3>

                            <
                            p className = "text-sm text-gray-500" > { student.course } <
                            /p> <
                            /div>

                            <
                            span className = "bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full" > { student.type } <
                            /span> <
                            /div>

                            <
                            div className = "space-y-2 text-sm text-gray-700" >

                            <
                            p >
                            <
                            strong > Email: < /strong> {student.email} <
                            /p>

                            <
                            p >
                            <
                            strong > Mobile: < /strong> {student.mobile} <
                            /p>

                            <
                            p >
                            <
                            strong > College: < /strong> {student.collegeName} <
                            /p>

                            <
                            p >
                            <
                            strong > Branch: < /strong> {student.branch} <
                            /p>

                            <
                            p >
                            <
                            strong > CGPA: < /strong> {student.cgpa} <
                            /p>

                            <
                            p >
                            <
                            strong > City: < /strong>{" "} {
                                student &&
                                    student.address &&
                                    student.address.city ?
                                    student.address.city :
                                    ""
                            } <
                            /p> <
                            /div>

                            <
                            div className = "flex gap-3 mt-4" >
                            <
                            button onClick = {
                                () =>
                                handleDelete(student._id)
                            }
                            className = "flex-1 bg-red-100 text-red-700 py-2 rounded-lg" >
                            Delete <
                            /button> <
                            /div> <
                            /div>
                        ))
                    )
                } <
                /div>
            )
        }

        { /* DESKTOP TABLE */ } {
            !loading && ( <
                div className = "hidden md:block bg-white rounded-xl shadow overflow-x-auto mt-6" >

                <
                table className = "min-w-full" >

                <
                thead className = "bg-gray-100" >
                <
                tr > {
                    [
                        "Name",
                        "Email",
                        "Mobile",
                        "Course",
                        "Branch",
                        "College",
                        "CGPA",
                        "City",
                        "Type",
                        "Actions",
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
                    students.map((student) => ( <
                        tr key = { student._id }
                        className = "border-b hover:bg-gray-50" >
                        <
                        td className = "px-6 py-4 font-medium" > { student.name } <
                        /td>

                        <
                        td className = "px-6 py-4" > { student.email } <
                        /td>

                        <
                        td className = "px-6 py-4" > { student.mobile } <
                        /td>

                        <
                        td className = "px-6 py-4" > { student.course } <
                        /td>

                        <
                        td className = "px-6 py-4" > { student.branch } <
                        /td>

                        <
                        td className = "px-6 py-4" > { student.collegeName } <
                        /td>

                        <
                        td className = "px-6 py-4" > { student.cgpa } <
                        /td>

                        <
                        td className = "px-6 py-4" > {
                            student &&
                            student.address &&
                            student.address.city ?
                            student.address.city :
                                ""
                        } <
                        /td>

                        <
                        td className = "px-6 py-4" >
                        <
                        span className = "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs" > { student.type } <
                        /span> <
                        /td>

                        <
                        td className = "px-6 py-4" >
                        <
                        button onClick = {
                            () =>
                            handleDelete(student._id)
                        }
                        className = "bg-red-100 text-red-700 px-4 py-2 rounded-lg" >
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
            )
        } <
        /div> <
        /div>
    );
};

export default AdminStudents;