import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCourse = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        subtitle: "",
        description: "",
        duration: "",
        prerequisites: "",
        bgImage: "",
        colorGradient: "",
        iconName: "",
        isPopular: false,

        features: [""],

        syllabus: [""],

        technologies: [{
            name: "",
            icon: "",
        }, ],

        careerOpportunities: [{
            title: "",
            description: "",
            iconName: "",
        }, ],
    });

    /* =========================
       FETCH COURSE
    ========================= */

    useEffect(() => {

        if (!id) {
            return;
        }

        const fetchCourse = async() => {

            try {

                setLoading(true);

                const response = await axios.get(
                    "http://localhost:5000/api/course-highlights?all=true"
                );

                if (
                    response.data &&
                    response.data.success
                ) {

                    const allCourses =
                        response.data.data || [];

                    const course =
                        allCourses.find(
                            (item) => item._id === id
                        );

                    if (!course) {

                        alert("Course Not Found ❌");

                        return;
                    }

                    setFormData({
                        title: course.title || "",
                        slug: course.slug || "",
                        subtitle: course.subtitle || "",
                        description: course.description || "",
                        duration: course.duration || "",
                        prerequisites: course.prerequisites || "",
                        bgImage: course.bgImage || "",
                        colorGradient: course.colorGradient || "",
                        iconName: course.iconName || "",
                        isPopular: course.isPopular || false,

                        features: course.features &&
                            course.features.length > 0 ?
                            course.features : [""],

                        syllabus: course.syllabus &&
                            course.syllabus.length > 0 ?
                            course.syllabus : [""],

                        technologies: course.technologies &&
                            course.technologies.length > 0 ?
                            course.technologies : [{
                                name: "",
                                icon: "",
                            }, ],

                        careerOpportunities: course.careerOpportunities &&
                            course.careerOpportunities.length > 0 ?
                            course.careerOpportunities : [{
                                title: "",
                                description: "",
                                iconName: "",
                            }, ],
                    });
                }

            } catch (error) {

                console.log(error);

                alert("Failed To Load Course ❌");

            } finally {

                setLoading(false);
            }
        };

        fetchCourse();

    }, [id]);

    /* =========================
       HANDLE CHANGE
    ========================= */

    const handleChange = (e) => {

        const {
            name,
            value,
            type,
            checked,
        } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ?
                checked : value,
        });
    };

    /* =========================
       SIMPLE ARRAY CHANGE
    ========================= */

    const handleSimpleArrayChange = (
        index,
        value,
        arrayName
    ) => {

        const updated = [
            ...formData[arrayName],
        ];

        updated[index] = value;

        setFormData({
            ...formData,
            [arrayName]: updated,
        });
    };

    /* =========================
       OBJECT ARRAY CHANGE
    ========================= */

    const handleArrayChange = (
        index,
        field,
        value,
        arrayName
    ) => {

        const updated = [
            ...formData[arrayName],
        ];

        updated[index][field] = value;

        setFormData({
            ...formData,
            [arrayName]: updated,
        });
    };

    /* =========================
       ADD FIELD
    ========================= */

    const addFeature = () => {

        setFormData({
            ...formData,
            features: [
                ...formData.features,
                "",
            ],
        });
    };

    const addSyllabus = () => {

        setFormData({
            ...formData,
            syllabus: [
                ...formData.syllabus,
                "",
            ],
        });
    };

    const addTechnology = () => {

        setFormData({
            ...formData,
            technologies: [
                ...formData.technologies,
                {
                    name: "",
                    icon: "",
                },
            ],
        });
    };

    const addCareer = () => {

        setFormData({
            ...formData,
            careerOpportunities: [
                ...formData.careerOpportunities,
                {
                    title: "",
                    description: "",
                    iconName: "",
                },
            ],
        });
    };

    /* =========================
       UPDATE COURSE
    ========================= */

    const handleUpdateCourse = async() => {

        try {

            const token =
                localStorage.getItem("adminToken");

            if (!token) {

                alert("Token Missing ❌");

                return;
            }

            const response = await axios.put(
                `http://localhost:5000/api/course-highlights/update/${id}`,
                formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (
                response.data &&
                response.data.success
            ) {

                alert(
                    "Course Updated Successfully ✅"
                );

                navigate("/admin/courses");
            }

        } catch (error) {

            console.log(error);

            if (
                error &&
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {

                alert(
                    error.response.data.message
                );

            } else {

                alert("Update Failed ❌");
            }
        }
    };

    if (loading) {

        return ( <
            div className = "min-h-screen flex items-center justify-center text-2xl font-bold" >
            Loading... <
            /div>
        );
    }

    return (

        <
        div className = "min-h-screen bg-gray-100 p-6" >

        <
        div className = "max-w-6xl mx-auto bg-white rounded-3xl shadow p-8" >

        <
        div className = "flex justify-between items-center mb-8" >

        <
        h1 className = "text-4xl font-bold" > ✏Edit Course <
        /h1>

        <
        button onClick = {
            () => navigate(-1)
        }
        className = "bg-gray-500 text-white px-5 py-2 rounded-xl" >
        Back <
        /button>

        <
        /div>

        { /* BASIC FIELDS */ }

        <
        div className = "grid md:grid-cols-2 gap-5" >

        <
        input type = "text"
        name = "title"
        placeholder = "Title"
        value = { formData.title }
        onChange = { handleChange }
        className = "border p-3 rounded-xl" /
        >

        <
        input type = "text"
        name = "slug"
        placeholder = "Slug"
        value = { formData.slug }
        onChange = { handleChange }
        className = "border p-3 rounded-xl" /
        >

        <
        input type = "text"
        name = "subtitle"
        placeholder = "Subtitle"
        value = { formData.subtitle }
        onChange = { handleChange }
        className = "border p-3 rounded-xl" /
        >

        <
        input type = "text"
        name = "duration"
        placeholder = "Duration"
        value = { formData.duration }
        onChange = { handleChange }
        className = "border p-3 rounded-xl" /
        >

        <
        input type = "text"
        name = "bgImage"
        placeholder = "Background Image"
        value = { formData.bgImage }
        onChange = { handleChange }
        className = "border p-3 rounded-xl" /
        >

        <
        input type = "text"
        name = "iconName"
        placeholder = "Icon Name"
        value = { formData.iconName }
        onChange = { handleChange }
        className = "border p-3 rounded-xl" /
        >

        <
        /div>

        <
        textarea name = "description"
        placeholder = "Description"
        value = { formData.description }
        onChange = { handleChange }
        className = "border p-3 rounded-xl w-full h-32 mt-5" /
        >

        <
        textarea name = "prerequisites"
        placeholder = "Prerequisites"
        value = { formData.prerequisites }
        onChange = { handleChange }
        className = "border p-3 rounded-xl w-full h-28 mt-5" /
        >

        { /* FEATURES */ }

        <
        div className = "mt-10" >

        <
        div className = "flex justify-between mb-4" >

        <
        h2 className = "text-2xl font-bold" >
        Features <
        /h2>

        <
        button onClick = { addFeature }
        className = "bg-indigo-600 text-white px-4 py-2 rounded-xl" >
        +Add <
        /button>

        <
        /div>

        {
            formData.features.map(
                (item, index) => (

                    <
                    input key = { index }
                    type = "text"
                    value = { item }
                    onChange = {
                        (e) =>
                        handleSimpleArrayChange(
                            index,
                            e.target.value,
                            "features"
                        )
                    }
                    className = "border p-3 rounded-xl w-full mb-3"
                    placeholder = "Feature" /
                    >

                )
            )
        }

        <
        /div>

        { /* UPDATE BUTTON */ }

        <
        button onClick = { handleUpdateCourse }
        className = "bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl mt-10" >
        Update Course <
        /button>

        <
        /div>

        <
        /div>
    );
};

export default EditCourse;