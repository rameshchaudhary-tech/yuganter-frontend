import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../BASEURL";

const AdminCourses = () => {

    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    /* =========================
       FETCH COURSES
    ========================= */

    const fetchCourses = async() => {

        try {

            setLoading(true);

            const response = await axios.get(
                `${BASE_URL}/api/course-highlights?all=true`
            );

            if (
                response.data &&
                response.data.success
            ) {

                setCourses(response.data.data || []);
            }

        } catch (error) {

            console.log(error);

            alert("Failed To Fetch Courses ❌");

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        fetchCourses();

    }, []);

    /* =========================
       SEARCH FILTER
    ========================= */

    const filteredCourses = courses.filter((course) => {

        if (search === "") {
            return true;
        }

        if (!course.title) {
            return false;
        }

        return course.title
            .toLowerCase()
            .includes(search.toLowerCase());
    });

    /* =========================
       DELETE COURSE
    ========================= */

    const handleDelete = async(id) => {

        const confirmDelete = window.confirm(
            "Delete this course?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            /* ✅ FIXED TOKEN */
            const token =
                localStorage.getItem("adminToken");

            if (!token) {

                alert("Please Login Again ❌");

                navigate("/admin-login");

                return;
            }

            await axios.delete(
                `http://localhost:5000/api/course-highlights/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Course Deleted Successfully ✅");

            fetchCourses();

        } catch (error) {

            console.log(error);

            if (
                error &&
                error.response &&
                error.response.status === 401
            ) {

                alert("Invalid or Expired Token ❌");

                localStorage.removeItem("adminToken");
                localStorage.removeItem("adminLoggedIn");

                navigate("/admin-login");

            } else if (
                error &&
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {

                alert(error.response.data.message);

            } else {

                alert("Delete Failed ❌");
            }
        }
    };

    /* =========================
       OPEN ADD PAGE
    ========================= */

    const openAddPage = () => {

        navigate("/admin/course-form");
    };

    /* =========================
       OPEN EDIT PAGE
    ========================= */

    const openEditPage = (courseId) => {

        navigate(`/admin/edit-course/${courseId}`);
    };

    return (

        <
        div className = "min-h-screen bg-gray-100 p-6" >

        { /* HEADER */ }

        <
        div className = "flex justify-between items-center flex-wrap gap-4 mb-6" >

        <
        div >

        <
        div className = "flex items-center gap-3" >

        <
        button onClick = {
            () => navigate(-1)
        }
        className = "bg-white px-4 py-2 rounded-xl shadow" > ⬅Back <
        /button>

        <
        h1 className = "text-4xl font-bold" > 📚Courses Management <
        /h1>

        <
        /div>

        <
        p className = "text-gray-500 mt-2" >
        Total Courses: { courses.length } <
        /p>

        <
        /div>

        <
        button onClick = { openAddPage }
        className = "bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl" >
        +Add Course <
        /button>

        <
        /div>

        { /* SEARCH */ }

        <
        div className = "bg-white p-4 rounded-2xl shadow mb-6" >

        <
        input type = "text"
        placeholder = "🔍 Search Course..."
        value = { search }
        onChange = {
            (e) =>
            setSearch(e.target.value)
        }
        className = "border p-3 rounded-xl w-[300px]" /
        >

        <
        /div>

        { /* TABLE */ }

        <
        div className = "bg-white rounded-3xl shadow overflow-hidden" >

        <
        div className = "overflow-x-auto" >

        <
        table className = "w-full" >

        <
        thead className = "bg-indigo-600 text-white" >

        <
        tr >

        <
        th className = "p-4 text-left" >
        Title <
        /th>

        <
        th className = "p-4 text-left" >
        Slug <
        /th>

        <
        th className = "p-4 text-left" >
        Duration <
        /th>

        <
        th className = "p-4 text-left" >
        Popular <
        /th>

        <
        th className = "p-4 text-center" >
        Actions <
        /th>

        <
        /tr>

        <
        /thead>

        <
        tbody >

        {
            loading ? (

                <
                tr >

                <
                td colSpan = "5"
                className = "text-center p-10" >
                Loading... <
                /td>

                <
                /tr>

            ) : filteredCourses.length > 0 ? (

                filteredCourses.map((course) => (

                    <
                    tr key = { course._id }
                    className = "border-b hover:bg-gray-50" >

                    <
                    td className = "p-4 font-semibold" > { course.title } <
                    /td>

                    <
                    td className = "p-4" > { course.slug } <
                    /td>

                    <
                    td className = "p-4" > { course.duration } <
                    /td>

                    <
                    td className = "p-4" > {
                        course.isPopular ?
                        "🔥 Yes" : "No"
                    } <
                    /td>

                    <
                    td className = "p-4" >

                    <
                    div className = "flex justify-center gap-3 flex-wrap" >

                    { /* EDIT */ }

                    <
                    button onClick = {
                        () =>
                        openEditPage(course._id)
                    }
                    className = "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl" >
                    Edit <
                    /button>

                    { /* DELETE */ }

                    <
                    button onClick = {
                        () =>
                        handleDelete(course._id)
                    }
                    className = "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl" >
                    Delete <
                    /button>

                    { /* VIEW */ }

                    <
                    Link to = { `/courses/${course.slug}` }
                    className = "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl" >
                    View <
                    /Link>

                    <
                    /div>

                    <
                    /td>

                    <
                    /tr>

                ))

            ) : (

                <
                tr >

                <
                td colSpan = "5"
                className = "text-center p-10" >
                No Courses Found <
                /td>

                <
                /tr>

            )
        }

        <
        /tbody>

        <
        /table>

        <
        /div>

        <
        /div>

        <
        /div>
    );
};

export default AdminCourses;