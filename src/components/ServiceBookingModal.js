import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BASE_URL from "../BASEURL";

export default function ServiceBookingModal({ service, isOpen, onClose, onSuccess }) {

    const getServiceName = () => {
        return (service && service.title) ? service.title : "";
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    // ✅ IMPORTANT FIX: service auto update when modal opens
    useEffect(() => {
        if (service && service.title) {
            setFormData((prev) => ({
                ...prev,
                service: service.title
            }));
        }
    }, [service]);

    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "phone") {
            value = value.replace(/[^0-9]/g, "").slice(0, 10);
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // ✅ SAFETY CHECK (MOST IMPORTANT FIX)
        const finalData = {
            ...formData,
            service: (service && service.title) ? service.title : formData.service
        };

        if (!finalData.service) {
            alert("Service is required");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/api/service-bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...finalData,
                    submittedAt: new Date().toISOString()
                })
            });

            if (response.ok) {
                await response.json();

                setSubmittedData(finalData);
                setShowSuccess(true);
                setIsSubmitting(false);

                setTimeout(() => {
                    if (onSuccess) onSuccess();
                    handleClose();
                }, 2500);
            } else {
                setIsSubmitting(false);
                alert("Failed to submit service booking");
            }
        } catch (error) {
            setIsSubmitting(false);
            alert("Network error");
        }
    };

    const handleClose = () => {
        setShowSuccess(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: ""
        });
        setSubmittedData(null);
        onClose();
    };

    return ( <
        AnimatePresence > {
            isOpen && ( <
                motion.div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
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
                motion.div className = "relative w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl overflow-hidden"
                onClick = {
                    (e) => e.stopPropagation()
                } >

                <
                motion.button onClick = { handleClose }
                className = "absolute top-6 right-6 text-gray-400 hover:text-gray-700 z-10" > ✕
                <
                /motion.button>

                <
                AnimatePresence mode = "wait" >

                {
                    showSuccess ? ( <
                        motion.div className = "p-12 text-center" >

                        <
                        div className = "text-5xl mb-4" > 🎉 < /div>

                        <
                        h2 className = "text-2xl font-bold" >
                        Booking Confirmed!
                        <
                        /h2>

                        <
                        p className = "mt-3" >
                        Thank you < b > { submittedData && submittedData.name } < /b> < /
                        p >

                        <
                        p >
                        We will contact you on + 91 { submittedData && submittedData.phone } <
                        /p>

                        <
                        p className = "mt-4 font-semibold" >
                        Service: { submittedData && submittedData.service } <
                        /p>

                        <
                        /motion.div>
                    ) : (

                        <
                        motion.div >

                        { /* HEADER */ } <
                        div className = "bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-500 p-8 text-white" >
                        <
                        h2 className = "text-2xl font-bold" > Service Booking < /h2> <
                        p className = "text-primary-100" > Book our premium IT services < /p> < /
                        div >

                        { /* FORM */ } <
                        form onSubmit = { handleSubmit }
                        className = "p-8 space-y-6" >

                        <
                        input name = "name"
                        placeholder = "Name"
                        value = { formData.name }
                        onChange = { handleChange }
                        className = "w-full border p-3 rounded-xl"
                        required /
                        >

                        <
                        input name = "email"
                        type = "email"
                        placeholder = "Email"
                        value = { formData.email }
                        onChange = { handleChange }
                        className = "w-full border p-3 rounded-xl"
                        required /
                        >

                        <
                        input name = "phone"
                        placeholder = "Phone"
                        value = { formData.phone }
                        onChange = { handleChange }
                        className = "w-full border p-3 rounded-xl"
                        required /
                        >

                        <
                        div className = "p-3 bg-gray-100 rounded-xl" >
                        Service: {
                            (service && service.title) ? service.title : "Service"
                        } <
                        /div>

                        <
                        textarea name = "message"
                        placeholder = "Message"
                        value = { formData.message }
                        onChange = { handleChange }
                        className = "w-full border p-3 rounded-xl" /
                        >

                        <
                        button type = "submit"
                        disabled = { isSubmitting }
                        className = "w-full bg-blue-600 text-white p-3 rounded-xl font-semibold" > { isSubmitting ? "Submitting..." : "🚀 Book Service" } <
                        /button>

                        <
                        /form>

                        <
                        /motion.div>
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