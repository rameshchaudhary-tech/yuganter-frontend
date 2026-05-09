import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BASE_URL from "../BASEURL";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    useEffect(() => {
        document.title = "Contact | YugAntar Technologies";
        window.scrollTo(0, 0);
    }, []);

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
        setSuccessMsg("");

        try {
            const response = await fetch(`${BASE_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    createdAt: new Date().toISOString()
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMsg("✅ Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                alert(data.message || "Something went wrong");
            }
        } catch (error) {
            console.log(error);
            alert("❌ Server not reachable");
        } finally {
            setIsSubmitting(false);
        }
    };

    return ( <
        div className = "bg-[#050810] text-white min-h-screen overflow-hidden" >
        <
        Navbar / >

        { /* HERO */ } <
        div className = "relative pt-32 pb-20 overflow-hidden" >
        <
        div className = "absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-500/10 blur-[140px] rounded-full animate-pulse" > < /div> <
        div className = "absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary-500/10 blur-[140px] rounded-full animate-pulse delay-700" > < /div>

        <
        PageHeader title = "Start a Conversation"
        subtitle = "Whether you have a question or a project in mind, our team is ready to help." /
        >
        <
        /div>

        <
        main className = "max-w-7xl mx-auto px-6 pb-28" >

        { /* INFO CARDS */ } <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" > {
            [{
                    title: "Drop by Office",
                    content: "2nd floor, Yash Aqua, 204, Vijay Cross Rd, University Area, Ahmedabad, Gujarat 380009",
                    icon: "📍",
                    border: "border-cyan-500/20"
                },
                {
                    title: "Call Directly",
                    content: "+91 6355582605",
                    icon: "📞",
                    border: "border-purple-500/20"
                },
                {
                    title: "Work with Us",
                    content: "info@yugantartechnologies.com",
                    icon: "✉️",
                    border: "border-pink-500/20"
                }
            ].map((item, index) => ( <
                div key = { index }
                className = { `group relative p-8 rounded-[2rem] border ${item.border} bg-white/5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition-all duration-500` } >
                <
                div className = "text-5xl mb-5" > { item.icon } < /div> <
                h3 className = "text-2xl font-bold mb-3" > { item.title } < /h3> <
                p className = "text-gray-400 text-sm" > { item.content } < /p> <
                /div>
            ))
        } <
        /div>

        { /* MAIN SECTION */ } <
        div className = "grid lg:grid-cols-2 gap-12" >

        { /* FORM */ } <
        div className = "bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl" >

        <
        h2 className = "text-3xl md:text-4xl font-bold mb-10" >
        Send us a { " " } <
        span className = "bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent" >
        Digital Brief <
        /span> <
        /h2>

        {
            successMsg && ( <
                div className = "mb-6 text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-xl" > { successMsg } <
                /div>
            )
        }

        <
        form onSubmit = { handleSubmit }
        className = "space-y-8" >

        <
        div className = "grid md:grid-cols-2 gap-8" >
        <
        input type = "text"
        name = "name"
        value = { formData.name }
        onChange = { handleChange }
        placeholder = "Your Name"
        required className = "w-full bg-transparent border-b-2 border-white/10 py-4 outline-none" /
        >

        <
        input type = "tel"
        name = "phone"
        value = { formData.phone }
        onChange = { handleChange }
        placeholder = "Phone Number"
        required className = "w-full bg-transparent border-b-2 border-white/10 py-4 outline-none" /
        >
        <
        /div>

        <
        input type = "email"
        name = "email"
        value = { formData.email }
        onChange = { handleChange }
        placeholder = "Email Address"
        required className = "w-full bg-transparent border-b-2 border-white/10 py-4 outline-none" /
        >

        <
        textarea name = "message"
        rows = "5"
        value = { formData.message }
        onChange = { handleChange }
        placeholder = "Project details..."
        required className = "w-full bg-transparent border-b-2 border-white/10 py-4 outline-none resize-none" /
        >

        <
        button type = "submit"
        disabled = { isSubmitting }
        className = "bg-gradient-to-r from-secondary-500 to-primary-500 px-8 py-4 rounded-2xl font-bold w-full" >
        { isSubmitting ? "SENDING..." : "SEND MESSAGE" } <
        /button>

        <
        /form> <
        /div>

        { /* RIGHT SIDE */ } <
        div className = "space-y-8" >

        { /* MAP FIXED */ } <
        div className = "rounded-[3rem] overflow-hidden border border-white/10 h-[320px]" >
        <
        iframe title = "Office Location"
        src = "https://www.google.com/maps?q=Yash+Aqua+Ahmedabad&output=embed"
        width = "100%"
        height = "100%"
        style = {
            { border: 0 } }
        loading = "lazy" >
        < /iframe> <
        /div>

        { /* HOURS */ } <
        div className = "bg-gradient-to-br from-secondary-500/10 to-primary-500/10 p-10 rounded-[3rem] border border-white/5" >

        <
        h3 className = "text-2xl font-bold mb-6" > Support Hours < /h3>

        <
        div className = "space-y-4" > {
            [
                { d: "Weekdays", t: "09:00 - 19:00" },
                { d: "Saturday", t: "09:00 - 17:00" },
                { d: "Sunday", t: "Emergency Only" }
            ].map((row, i) => ( <
                div key = { i }
                className = "flex justify-between border-b border-white/5 pb-2" >
                <
                span className = "text-gray-400" > { row.d } < /span> <
                span className = "font-bold" > { row.t } < /span> <
                /div>
            ))
        } <
        /div>

        <
        a href = "tel:+916355582605"
        className = "mt-6 block text-center py-4 rounded-2xl bg-white/5 hover:bg-white/10 font-bold" >
        Direct Emergency Call <
        /a>

        <
        /div>

        <
        /div> <
        /div>

        <
        /main>

        <
        Footer / >
        <
        /div>
    );
}