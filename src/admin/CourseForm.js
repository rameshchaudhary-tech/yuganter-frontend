import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../BASEURL";

const CourseForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        description: "",
        iconName: "",
        duration: "",
        isPopular: false,
        colorGradient: "",
        bgImage: "",
        subtitle: "",
        features: [""],
        technologies: [{ name: "", icon: "" }],
        careerOpportunities: [{ title: "", description: "", iconName: "" }],
        prerequisites: ""
    });

    /* ================= INPUT ================= */
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    /* ================= ARRAY STRING ================= */
    const handleArrayChange = (name, index, value) => {
        const updated = [...formData[name]];
        updated[index] = value;

        setFormData({
            ...formData,
            [name]: updated
        });
    };

    const addArrayItem = (name) => {
        const updated = [...formData[name], ""];
        setFormData({
            ...formData,
            [name]: updated
        });
    };

    /* ================= OBJECT ARRAY ================= */
    const handleObjectChange = (name, index, field, value) => {
        const updated = [...formData[name]];
        updated[index][field] = value;

        setFormData({
            ...formData,
            [name]: updated
        });
    };

    const addObjectItem = (name, template) => {
        setFormData({
            ...formData,
            [name]: [...formData[name], template]
        });
    };

    /* ================= ERROR HANDLER (NO ?.) ================= */
    const getErrorMessage = (err) => {
        if (err && err.response) {
            if (err.response.data) {
                if (err.response.data.message) {
                    return err.response.data.message;
                }
            }
        }
        return "Something went wrong ❌";
    };

    /* ================= SUBMIT ================= */
    const handleSubmit = async() => {
        try {
            const token = localStorage.getItem("adminToken");

            if (!token) {
                alert("Token Missing ❌");
                navigate("/admin-login");
                return;
            }

            const res = await axios.post(
                `${BASE_URL}/api/course-highlights/upsert`,
                formData, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );

            if (res && res.data && res.data.success === true) {
                alert("Course Created Successfully 🚀");
                navigate("/admin/courses");
            } else {
                alert("Failed to create course ❌");
            }

        } catch (err) {
            console.log(err);
            alert(getErrorMessage(err));
        }
    };

    return ( <
        div className = "min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 p-6" >

        { /* HEADER */ } <
        div className = "max-w-6xl mx-auto flex justify-between items-center mb-6" >
        <
        h1 className = "text-3xl font-bold text-gray-800" > ➕Create Course <
        /h1>

        <
        button onClick = {
            () => navigate(-1)
        }
        className = "bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-xl shadow" > ⬅Back <
        /button> < /
        div >

        { /* CARD */ } <
        div className = "max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-8 space-y-6" >

        { /* BASIC FIELDS */ } <
        div className = "grid md:grid-cols-2 gap-4" >
        <
        Input name = "title"
        placeholder = "Title"
        onChange = { handleChange }
        /> <
        Input name = "slug"
        placeholder = "Slug"
        onChange = { handleChange }
        /> <
        Input name = "iconName"
        placeholder = "Icon Name"
        onChange = { handleChange }
        /> <
        Input name = "duration"
        placeholder = "Duration"
        onChange = { handleChange }
        /> <
        Input name = "colorGradient"
        placeholder = "Color Gradient"
        onChange = { handleChange }
        /> <
        Input name = "bgImage"
        placeholder = "Background Image"
        onChange = { handleChange }
        /> < /
        div >

        <
        Textarea name = "description"
        placeholder = "Description"
        onChange = { handleChange }
        /> <
        Textarea name = "subtitle"
        placeholder = "Subtitle"
        onChange = { handleChange }
        />

        { /* CHECKBOX */ } <
        label className = "flex items-center gap-2 font-medium" >
        <
        input type = "checkbox"
        name = "isPopular"
        onChange = { handleChange }
        />
        Is Popular <
        /label>

        { /* FEATURES */ } <
        Section title = "Features" / >

        {
            formData.features.map((item, i) => ( <
                input key = { i }
                value = { item }
                onChange = {
                    (e) => handleArrayChange("features", i, e.target.value)
                }
                className = "input"
                placeholder = "Feature" /
                >
            ))
        }

        <
        Btn text = "Add Feature"
        onClick = {
            () => addArrayItem("features")
        }
        />

        { /* TECHNOLOGIES */ } <
        Section title = "Technologies" / >

        {
            formData.technologies.map((item, i) => ( <
                div key = { i }
                className = "grid md:grid-cols-2 gap-3" >
                <
                input className = "input"
                placeholder = "Name"
                value = { item.name }
                onChange = {
                    (e) =>
                    handleObjectChange("technologies", i, "name", e.target.value)
                }
                />

                <
                input className = "input"
                placeholder = "Icon"
                value = { item.icon }
                onChange = {
                    (e) =>
                    handleObjectChange("technologies", i, "icon", e.target.value)
                }
                /> < /
                div >
            ))
        }

        <
        Btn text = "Add Technology"
        onClick = {
            () => addObjectItem("technologies", { name: "", icon: "" })
        }
        />

        { /* CAREER */ } <
        Section title = "Career Opportunities" / >

        {
            formData.careerOpportunities.map((item, i) => ( <
                div key = { i } >
                <
                input className = "input"
                placeholder = "Title"
                value = { item.title }
                onChange = {
                    (e) =>
                    handleObjectChange("careerOpportunities", i, "title", e.target.value)
                }
                />

                <
                input className = "input"
                placeholder = "Description"
                value = { item.description }
                onChange = {
                    (e) =>
                    handleObjectChange("careerOpportunities", i, "description", e.target.value)
                }
                />

                <
                input className = "input"
                placeholder = "Icon"
                value = { item.iconName }
                onChange = {
                    (e) =>
                    handleObjectChange("careerOpportunities", i, "iconName", e.target.value)
                }
                /> < /
                div >
            ))
        }

        <
        Btn text = "Add Career"
        onClick = {
            () =>
            addObjectItem("careerOpportunities", {
                title: "",
                description: "",
                iconName: ""
            })
        }
        />

        { /* SUBMIT */ } <
        button onClick = { handleSubmit }
        className = "w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition" > 🚀Create Course <
        /button>

        <
        /div> < /
        div >
    );
};

/* ================= UI COMPONENTS ================= */

const Input = ({ name, placeholder, onChange }) => ( <
    input name = { name }
    placeholder = { placeholder }
    onChange = { onChange }
    className = "border border-gray-300 focus:border-indigo-500 outline-none p-3 rounded-xl w-full shadow-sm" /
    >
);

const Textarea = ({ name, placeholder, onChange }) => ( <
    textarea name = { name }
    placeholder = { placeholder }
    onChange = { onChange }
    className = "border border-gray-300 focus:border-indigo-500 outline-none p-3 rounded-xl w-full h-28 shadow-sm" /
    >
);

const Section = ({ title }) => ( <
    h2 className = "text-lg font-bold text-gray-700 border-b pb-1 mt-4" > { title } <
    /h2>
);

const Btn = ({ text, onClick }) => ( <
    button onClick = { onClick }
    className = "bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg mt-2" > { text } <
    /button>
);

export default CourseForm;