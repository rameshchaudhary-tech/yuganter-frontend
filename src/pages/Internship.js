import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InternshipModal from "../components/InternshipModal";
import { motion } from "framer-motion";
import axios from "axios";
import BASE_URL from "../BASEURL";
export default function Internship() {

    const [selectedInternship, setSelectedInternship] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [internshipPrograms, setInternshipPrograms] = useState([]);

    useEffect(() => {
        document.title = "Internship Programs - YugAntar Technologies";

        const fetchInternships = async() => {
            try {
                const res = await axios.get(`${BASE_URL}/api/internship/positions`);

                if (res.data && res.data.success) {
                    setInternshipPrograms(res.data.data);
                }

            } catch (error) {
                console.error("Error fetching internships:", error);
            }
        };

        fetchInternships();
    }, []);

    const benefits = [
        { icon: "💼", title: "Live Projects", desc: "Work on real industry projects." },
        { icon: "👨‍🏫", title: "Expert Mentors", desc: "Guidance from experienced developers." },
        { icon: "📜", title: "Certification", desc: "Internship completion certificate." },
        { icon: "🚀", title: "Career Support", desc: "Interview preparation & career guidance." },
    ];

    const openModal = (program) => {
        setSelectedInternship(program);
        setIsModalOpen(true);
    };

    return ( <
        div className = "bg-gray-900 text-white" >

        <
        Navbar / >

        { /* Hero Section */ } <
        section className = "py-24 text-center max-w-7xl mx-auto px-6" >

        <
        h1 className = "text-3xl lg:text-5xl font-bold leading-snug mb-4 text-white" >
        Internship Programs <
        /h1>

        <
        p className = "text-lg text-gray-300 max-w-2xl mx-auto mb-10" >
        Start your career with hands - on industry internships.Gain practical experience, build real projects, and learn from expert mentors. <
        /p>

        <
        a href = "#programs"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20" >
        Explore Programs <
        /a>

        <
        /section>

        { /* Benefits */ } <
        section className = "py-16" >

        <
        div className = "max-w-7xl mx-auto px-6" >

        <
        h2 className = "text-4xl font-bold text-center mb-12" >
        Why Choose Our Internship ?
        <
        /h2>

        <
        div className = "grid md:grid-cols-2 lg:grid-cols-4 gap-8" >

        {
            benefits.map((b, i) => ( <
                motion.div key = { i }
                whileHover = {
                    { y: -8 }
                }
                className = "bg-gray-800 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition" >

                <
                div className = "text-5xl mb-4" > { b.icon } < /div>

                <
                h3 className = "text-xl font-bold mb-2" > { b.title } < /h3>

                <
                p className = "text-gray-400" > { b.desc } < /p>

                <
                /motion.div>
            ))
        }

        <
        /div>

        <
        /div>

        <
        /section>

        { /* Programs */ } <
        section id = "programs"
        className = "py-16" >

        <
        div className = "max-w-7xl mx-auto px-6" >

        <
        h2 className = "text-4xl font-bold text-center mb-14" >
        Explore Internship Programs <
        /h2>

        <
        div className = "grid sm:grid-cols-2 lg:grid-cols-3 gap-8" >

        {
            internshipPrograms.map((p, i) => (

                <
                motion.div key = { i }
                whileHover = {
                    { scale: 1.05 }
                }
                className = "bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition" >

                <
                div className = "text-5xl mb-4" > { p.icon || "🚀" } < /div>

                <
                h3 className = "text-xl font-bold mb-2" > { p.title } <
                /h3>

                <
                span className = "text-xs px-3 py-1 rounded-full bg-indigo-500" > { p.duration } <
                /span>

                <
                p className = "text-gray-400 mt-4 mb-5" > { p.description } <
                /p>

                <
                div className = "flex flex-wrap gap-2 mb-6" >

                {
                    p.skills && p.skills.map((s, idx) => ( <
                        span key = { idx }
                        className = "text-xs px-3 py-1 bg-gray-700 rounded-full" > { s } <
                        /span>
                    ))
                }

                <
                /div>

                <
                button onClick = {
                    () => openModal(p)
                }
                className = "w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20" >
                Apply Now <
                /button>

                <
                /motion.div>

            ))
        }

        <
        /div>

        <
        /div>

        <
        /section>

        { /* CTA */ } <
        section className = "py-20 text-center" >

        <
        h2 className = "text-4xl font-bold mb-4" >
        Ready to Start Your Career ?
        <
        /h2>

        <
        p className = "text-gray-300 mb-8" >
        Apply now and gain real - world experience with YugAntar Technologies. <
        /p>

        <
        a href = "#programs"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20" >
        Apply
        for Internship <
        /a>

        <
        /section>

        <
        InternshipModal internship = { selectedInternship }
        isOpen = { isModalOpen }
        onClose = {
            () => setIsModalOpen(false)
        }
        />

        <
        Footer / >

        <
        /div>
    );
}