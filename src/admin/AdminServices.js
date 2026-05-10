import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../BASEURL";

const AdminServices = () => {
    const navigate = useNavigate();

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    /* ================= FETCH SERVICES ================= */
    const fetchServices = useCallback(async() => {
        try {
            setLoading(true);

            const token = localStorage.getItem("adminToken");

            const res = await axios.get(
                `${BASE_URL}/api/services`, {
                    headers: token ? { Authorization: "Bearer " + token } : {},
                }
            );

            if (res.data && res.data.success) {
                setServices(res.data.data || []);
            } else {
                setServices([]);
            }
        } catch (err) {
            console.log("FETCH ERROR:", err);

            if (err.response) {
                if (err.response.status === 401) {
                    alert("Unauthorized ❌ Please login again");
                    navigate("/admin-login");
                } else {
                    alert("Failed to load services ❌");
                }
            } else {
                alert("Network Error ❌ Please check server");
            }

            setServices([]);
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        fetchServices();
    }, [fetchServices]);

    /* ================= DELETE ================= */
    const handleDelete = async(id) => {
        try {
            const confirmDelete = window.confirm("Delete this service?");
            if (!confirmDelete) return;

            const token = localStorage.getItem("adminToken");

            const res = await axios.delete(
                `${BASE_URL}/api/services/` + id, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );

            if (res.data && res.data.success) {
                alert("Deleted Successfully ✅");
                fetchServices();
            } else {
                alert("Delete Failed ❌");
            }
        } catch (err) {
            console.log("DELETE ERROR:", err);
            alert("Error deleting service ❌");
        }
    };

    /* ================= FILTER ================= */
    const filteredServices = services.filter((s) => {
        const title = (s.title || "").toLowerCase();

        const matchSearch =
            title.indexOf(search.toLowerCase()) !== -1;

        const matchStatus =
            statusFilter === "All" ||
            (statusFilter === "Active" && s.popular === true) ||
            (statusFilter === "Draft" && s.popular === false);

        return matchSearch && matchStatus;
    });

    return ( <
        div className = "min-h-screen bg-gray-100 p-6" >

        { /* HEADER */ } <
        div className = "flex justify-between items-center mb-6" >

        <
        button onClick = {
            () => navigate(-1)
        }
        className = "bg-white px-3 py-2 rounded shadow" > ⬅Back <
        /button>

        <
        h1 className = "text-2xl font-bold" > 🛠Services < /h1>

        <
        button onClick = {
            () => navigate("/admin/services/add")
        }
        className = "bg-green-600 text-white px-4 py-2 rounded" >
        +Add Service <
        /button>

        <
        /div>

        { /* FILTER */ } <
        div className = "bg-white p-4 rounded shadow flex gap-3 mb-5" >

        <
        input className = "border p-2 rounded w-64"
        placeholder = "Search..."
        value = { search }
        onChange = {
            (e) => setSearch(e.target.value)
        }
        />

        <
        select className = "border p-2 rounded"
        value = { statusFilter }
        onChange = {
            (e) => setStatusFilter(e.target.value)
        } >
        <
        option value = "All" > All < /option> <
        option value = "Active" > Active < /option> <
        option value = "Draft" > Draft < /option> < /
        select >

        <
        button onClick = {
            () => {
                setSearch("");
                setStatusFilter("All");
            }
        }
        className = "bg-gray-500 text-white px-3 py-2 rounded" >
        Clear <
        /button>

        <
        /div>

        { /* TABLE */ } <
        div className = "bg-white rounded shadow overflow-hidden" >

        {
            loading ? ( <
                div className = "p-6 text-center" > Loading... < /div>
            ) : ( <
                table className = "w-full" >

                <
                thead className = "bg-indigo-600 text-white" >
                <
                tr >
                <
                th className = "p-3 text-left" > Title < /th> <
                th className = "p-3 text-left" > Description < /th> <
                th className = "p-3 text-center" > Popular < /th> <
                th className = "p-3 text-center" > Action < /th> < /
                tr > <
                /thead>

                <
                tbody > {
                    filteredServices.length > 0 ? (
                        filteredServices.map((s) => ( <
                            tr key = { s._id }
                            className = "border-b" >

                            <
                            td className = "p-3 font-medium" > { s.title } <
                            /td>

                            <
                            td className = "p-3 text-gray-600" > { s.description } <
                            /td>

                            <
                            td className = "p-3 text-center" > { s.popular ? "🔥 Yes" : "❄ No" } <
                            /td>

                            <
                            td className = "p-3 text-center flex gap-2 justify-center" >

                            <
                            button onClick = {
                                () =>
                                navigate(
                                    "/admin/services/edit/" +
                                    s._id
                                )
                            }
                            className = "bg-blue-500 text-white px-3 py-1 rounded" >
                            Edit <
                            /button>

                            <
                            button onClick = {
                                () =>
                                handleDelete(s._id)
                            }
                            className = "bg-red-500 text-white px-3 py-1 rounded" >
                            Delete <
                            /button>

                            <
                            /td>

                            <
                            /tr>
                        ))
                    ) : ( <
                        tr >
                        <
                        td className = "p-6 text-center text-gray-500"
                        colSpan = "4" >
                        No Services Found😢 <
                        /td> < /
                        tr >
                    )
                } <
                /tbody>

                <
                /table>
            )
        }

        <
        /div>

        <
        /div>
    );
};

export default AdminServices;