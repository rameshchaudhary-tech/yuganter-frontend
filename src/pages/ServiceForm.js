import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../BASEURL";

const ServiceForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const token = localStorage.getItem("adminToken");

    const [form, setForm] = useState({
        title: "",
        description: "",
        icon: "",
        slug: "",
        popular: false,
        features: []
    });

    const [featureInput, setFeatureInput] = useState("");
    const [loading, setLoading] = useState(false);

    /* ================= LOAD ================= */
    const fetchService = async() => {
        if (!id) return;

        try {
            setLoading(true);

            const res = await axios.get(
                `${BASE_URL}/api/services`, { headers: { Authorization: "Bearer " + token } }
            );

            const service = res.data.data.find((s) => s._id === id);

            if (service) {
                setForm({
                    title: service.title || "",
                    description: service.description || "",
                    icon: service.icon || "",
                    slug: service.slug || "",
                    popular: service.popular || false,
                    features: Array.isArray(service.features) ? service.features : []
                });
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchService();
    }, [id]);

    /* ================= ADD FEATURE ================= */
    const addFeature = () => {
        if (!featureInput.trim()) return;

        setForm((prev) => ({
            ...prev,
            features: [...prev.features, featureInput.trim()]
        }));

        setFeatureInput("");
    };

    /* ================= REMOVE FEATURE ================= */
    const removeFeature = (index) => {
        const updated = [...form.features];
        updated.splice(index, 1);

        setForm({...form, features: updated });
    };

    /* ================= SUBMIT ================= */
    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            ...form
        };

        try {
            if (id) {
                await axios.put(
                    `${BASE_URL}/api/services/${id}`,
                    payload, { headers: { Authorization: "Bearer " + token } }
                );
            } else {
                await axios.post(
                    `${BASE_URL}/api/services`,
                    payload, { headers: { Authorization: "Bearer " + token } }
                );
            }

            alert("Saved Successfully ✅");
            navigate("/admin/services");

        } catch (err) {
            console.log(err);
            alert("Error ❌");
        }
    };

    if (loading) return <div className = "p-6" > Loading... < /div>;

    return ( <
        div className = "p-6 bg-gray-100 min-h-screen" >

        <
        h1 className = "text-2xl font-bold mb-4" > { id ? "Edit Service" : "Add Service" } <
        /h1>

        <
        form onSubmit = { handleSubmit }
        className = "bg-white p-6 rounded shadow space-y-4" >

        { /* TITLE */ } <
        input placeholder = "Title"
        value = { form.title }
        onChange = {
            (e) => setForm({...form, title: e.target.value })
        }
        className = "border p-2 w-full" /
        >

        { /* SLUG */ } <
        input placeholder = "Slug"
        value = { form.slug }
        onChange = {
            (e) => setForm({...form, slug: e.target.value })
        }
        className = "border p-2 w-full" /
        >

        { /* ICON */ } <
        input placeholder = "Icon"
        value = { form.icon }
        onChange = {
            (e) => setForm({...form, icon: e.target.value })
        }
        className = "border p-2 w-full" /
        >

        { /* DESCRIPTION */ } <
        textarea placeholder = "Description"
        value = { form.description }
        onChange = {
            (e) => setForm({...form, description: e.target.value })
        }
        className = "border p-2 w-full" /
        >

        { /* FEATURES UI */ } <
        div className = "border p-3 rounded bg-gray-50" >
        <
        h2 className = "font-semibold mb-2" > Features < /h2>

        <
        div className = "flex gap-2" >
        <
        input value = { featureInput }
        onChange = {
            (e) => setFeatureInput(e.target.value)
        }
        placeholder = "Add feature"
        className = "border p-2 w-full" /
        >

        <
        button type = "button"
        onClick = { addFeature }
        className = "bg-blue-600 text-white px-3 rounded" >
        Add <
        /button> < /
        div >

        { /* LIST */ } <
        div className = "mt-3 space-y-2" > {
            form.features.map((f, i) => ( <
                div key = { i }
                className = "flex justify-between bg-white p-2 border rounded" >
                <
                span > { f } < /span> <
                button type = "button"
                onClick = {
                    () => removeFeature(i)
                }
                className = "text-red-500" > ❌
                <
                /button> < /
                div >
            ))
        } <
        /div> < /
        div >

        { /* POPULAR */ } <
        label className = "flex items-center gap-2" >
        <
        input type = "checkbox"
        checked = { form.popular }
        onChange = {
            (e) =>
            setForm({...form, popular: e.target.checked })
        }
        />
        Popular Service <
        /label>

        { /* BUTTON */ } <
        button className = "bg-green-600 text-white px-4 py-2 rounded" > { id ? "Update" : "Create" } <
        /button>

        <
        /form> < /
        div >
    );
};

export default ServiceForm;