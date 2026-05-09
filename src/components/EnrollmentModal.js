import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BASE_URL from "../BASEURL";

export default function EnrollmentModal({ course, isOpen, onClose, onSuccess }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: (course && course.title) ? course.title : ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const courses = [
        "Full Stack Development (MERN)",
        "Python Development",
        "Python With Django",
        "Java Full Stack",
        "UI/UX Design",
        "Data Science & AI/ML",
        "Mobile App Development",
        "Digital Marketing",
        "Cyber Security"
    ];

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "phone") {
            value = value.replace(/[^0-9]/g, "").slice(0, 10);
        }

        setFormData({...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`${BASE_URL}/api/course-inquiries`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString()
                })
            });

            if (response.ok) {
                setSubmittedData(formData);
                setShowSuccess(true);
                setIsSubmitting(false);

                setTimeout(() => {
                    if (onSuccess) onSuccess();
                    handleClose();
                }, 2500);
            } else {
                setIsSubmitting(false);
                alert("Failed to submit enrollment.");
            }
        } catch (error) {
            setIsSubmitting(false);
            alert("Error submitting enrollment.");
        }
    };

    const handleClose = () => {
        setShowSuccess(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            course: (course && course.title) ? course.title : ""
        });
        setSubmittedData(null);
        onClose();
    };

    return ( <
        AnimatePresence > {
            isOpen && ( <
                motion.div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                initial = {
                    { opacity: 0 }
                }
                animate = {
                    { opacity: 1 }
                }
                exit = {
                    { opacity: 0 }
                }
                onClick = { handleClose } >
                <
                motion.div className = "relative w-full max-w-2xl bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
                initial = {
                    { scale: 0.8 }
                }
                animate = {
                    { scale: 1 }
                }
                exit = {
                    { scale: 0.8 }
                }
                onClick = {
                    (e) => e.stopPropagation()
                } >

                { /* Close Button */ } <
                button onClick = { handleClose }
                className = "absolute top-5 right-5 text-gray-400 hover:text-white" > ✕
                <
                /button>

                <
                AnimatePresence mode = "wait" >

                {
                    showSuccess ? ( <
                        motion.div className = "p-10 text-center text-white"
                        initial = {
                            { opacity: 0 }
                        }
                        animate = {
                            { opacity: 1 }
                        }
                        exit = {
                            { opacity: 0 }
                        } >
                        <
                        div className = "mx-auto mb-6 w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-4xl" > ✅
                        <
                        /div>

                        <
                        h2 className = "text-2xl font-bold mb-3" >
                        Enrollment Confirmed!
                        <
                        /h2>

                        <
                        p className = "text-gray-300 mb-2" >
                        Thank you { " " } <
                        span className = "font-semibold text-indigo-400" > { submittedData && submittedData.name } <
                        /span> < /
                        p >

                        <
                        p className = "text-gray-400 mb-6" >
                        We will contact you at + 91 { submittedData && submittedData.phone } <
                        /p>

                        <
                        div className = "bg-gray-700 border border-gray-600 rounded-xl p-5" >
                        <
                        p className = "text-sm text-gray-400" > Selected Course < /p> <
                        p className = "font-bold text-lg text-white" > { submittedData && submittedData.course } <
                        /p> < /
                        div > <
                        /motion.div>
                    ) : (

                        <
                        >
                        { /* Header */ } <
                        div className = "bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-white flex items-center gap-4" >
                        <
                        div className = "text-5xl" > { course && course.icon ? course.icon : "🎓" } <
                        /div>

                        <
                        div >
                        <
                        h2 className = "text-xl font-bold" >
                        Course Enrollment <
                        /h2> <
                        p className = "text-sm opacity-90" >
                        Join our premium learning program <
                        /p> < /
                        div > <
                        /div>

                        { /* Form */ } <
                        form onSubmit = { handleSubmit }
                        className = "p-8 space-y-6" >

                        <
                        div className = "grid md:grid-cols-2 gap-6" >
                        <
                        Input label = "Full Name"
                        name = "name"
                        value = { formData.name }
                        onChange = { handleChange }
                        placeholder = "Enter your full name"
                        icon = "👤"
                        required /
                        >

                        <
                        Input label = "Email Address"
                        name = "email"
                        type = "email"
                        value = { formData.email }
                        onChange = { handleChange }
                        placeholder = "your.email@example.com"
                        icon = "📧"
                        required /
                        >
                        <
                        /div>

                        <
                        div className = "grid md:grid-cols-2 gap-6" >
                        <
                        Input label = "Phone Number"
                        name = "phone"
                        value = { formData.phone }
                        onChange = { handleChange }
                        placeholder = "10 digit number"
                        icon = "📱"
                        required /
                        >

                        <
                        div >
                        <
                        label className = "block text-sm font-semibold text-gray-300 mb-2" >
                        Select Course <
                        /label>

                        <
                        select name = "course"
                        value = { formData.course }
                        onChange = { handleChange }
                        className = "w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
                        required >
                        <
                        option value = "" > Choose your course < /option>

                        {
                            courses.map((c, i) => ( <
                                option key = { i }
                                value = { c } > { c } <
                                /option>
                            ))
                        } <
                        /select> < /
                        div > <
                        /div>

                        <
                        button type = "submit"
                        disabled = { isSubmitting }
                        className = "w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold" > { isSubmitting ? "Submitting..." : "🚀 Enroll Now" } <
                        /button>

                        <
                        p className = "text-center text-gray-500 text-sm" > 🔒Your data is 100 % secure <
                        /p>

                        <
                        /form> < /
                        >
                    )
                }

                <
                /AnimatePresence>

                <
                /motion.div> < /
                motion.div >
            )
        } <
        /AnimatePresence>
    );
}

/* Input Component */
function Input({ label, icon, ...props }) {
    return ( <
        div >
        <
        label className = "block text-sm font-semibold text-gray-300 mb-2" > { label } <
        /label>

        <
        div className = "relative" >
        <
        input {...props }
        className = "w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-indigo-500" /
        >

        <
        div className = "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" > { icon } <
        /div> < /
        div > <
        /div>
    );
}