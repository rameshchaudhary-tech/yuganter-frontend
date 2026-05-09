import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import EnrollmentModal from "../components/EnrollmentModal";
import axios from "axios";

export default function Courses() {

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "IT Courses Ahmedabad - YugAntar Technologies";
        fetchAllCourses();
    }, []);

    // ✅ FETCH COURSES
    const fetchAllCourses = async() => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/course-highlights?all=true"
            );

            if (res.data.success) {
                setCourses(res.data.data);
            }
        } catch (error) {
            console.log("❌ Fetch Error:", error);
        }
    };

    // ✅ ENROLL
    const handleEnroll = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    return ( <
        div className = "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen overflow-hidden" >

        <
        Navbar / >

        { /* HERO SECTION */ } <
        section className = "relative pt-28 pb-20 overflow-hidden" >

        { /* Background Glow */ } <
        div className = "absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" > < /div>

        <
        div className = "absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" > < /div>

        { /* Texture */ } <
        div className = "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5" > < /div>

        <
        div className = "relative z-10 max-w-7xl mx-auto px-6" >

        <
        div className = "flex flex-col lg:flex-row items-center gap-14" >

        { /* LEFT */ } <
        div className = "lg:w-1/2" >

        <
        p className = "text-indigo-400 font-mono text-sm tracking-[4px] uppercase mb-4" >
        IT Courses <
        /p>

        <
        h1 className = "text-4xl md:text-6xl font-black leading-tight mb-6" >
        Our { " " } <
        span className = "bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" >
        IT Courses <
        /span> <
        /h1>

        <
        p className = "text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl" >
        Learn industry - ready technologies and start your career in IT with expert training and live projects. <
        /p>

        { /* BUTTONS */ } <
        div className = "flex flex-col sm:flex-row gap-5" >

        <
        Link to = "/contact"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all duration-300" >
        Book Free Demo Class <
        /Link>

        <
        a href = "tel:+916355582605"
        className = "px-7 py-4 border border-indigo-500/40 bg-white/5 backdrop-blur-md rounded-2xl font-semibold text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all duration-300 text-center" >
        Call: +91 6355582605 <
        /a>

        <
        /div>

        <
        /div>

        { /* RIGHT IMAGE */ } <
        div className = "lg:w-1/2 relative" >

        { /* Glow */ } <
        div className = "absolute -inset-5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl rounded-[40px]" > < /div>

        <
        img src = "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
        alt = "IT Courses"
        className = "relative z-10 rounded-[32px] shadow-2xl border border-white/10 w-full max-w-xl mx-auto hover:scale-[1.02] transition duration-500" /
        >

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /section>

        { /* COURSES SECTION */ } <
        section className = "relative py-24" >

        { /* Background Glow */ } <
        div className = "absolute left-0 top-40 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" > < /div>

        <
        div className = "absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full" > < /div>

        <
        div className = "relative z-10 max-w-7xl mx-auto px-6" >

        { /* HEADING */ } <
        div className = "text-center mb-20" >

        <
        p className = "text-indigo-400 font-mono text-sm tracking-[4px] uppercase mb-4" >
        Explore Courses <
        /p>

        <
        h2 className = "text-4xl md:text-5xl font-black mb-6 leading-tight" >

        Explore Our { " " } <
        span className = "bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" >
        Courses <
        /span>

        <
        /h2>

        <
        p className = "text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed" >
        Choose from our industry - focused IT courses designed to help you build real - world skills and start a successful tech career. <
        /p>

        <
        /div>

        { /* COURSE GRID */ } <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >

        {
            courses.map((course, index) => ( <
                div key = { course._id }
                className = "transform hover:scale-[1.03] transition duration-500"
                style = {
                    {
                        animationDelay: `${index * 100}ms`,
                    }
                } >
                <
                CourseCard course = { course }
                onEnroll = { handleEnroll }
                /> <
                /div>
            ))
        }

        <
        /div>

        <
        /div>

        <
        /section>

        { /* CTA SECTION */ } <
        section className = "pb-24 px-6" >

        <
        div className = "max-w-7xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl shadow-2xl" >

        { /* Glow */ } <
        div className = "absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl" > < /div>

        <
        div className = "relative z-10 py-16 px-8 md:px-16 text-center" >

        <
        h3 className = "text-3xl md:text-5xl font-black mb-6 leading-tight" >
        Ready to Start Your { " " } <
        span className = "bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" >
        IT Career ?
        <
        /span> <
        /h3>

        <
        p className = "text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed" >
        Join thousands of students who have built successful careers with YugAntar Technologies. <
        /p>

        <
        div className = "flex flex-col sm:flex-row gap-5 justify-center" >

        <
        Link to = "/contact"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all duration-300" >
        Book Free Demo Class <
        /Link>

        <
        a href = "tel:+916355582605"
        className = "px-7 py-4 border border-indigo-500/40 bg-white/5 backdrop-blur-md rounded-2xl font-semibold text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all duration-300" >
        Call : +91 6355582605 <
        /a>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /section>

        { /* MODAL */ } <
        EnrollmentModal course = { selectedCourse }
        isOpen = { isModalOpen }
        onClose = {
            () => setIsModalOpen(false) }
        />

        <
        Footer / >

        <
        /div>
    );
}