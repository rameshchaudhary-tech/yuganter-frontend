import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import BASE_URL from "../BASEURL";

import {
    CodeBracketIcon,
    CpuChipIcon,
    ComputerDesktopIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    ClockIcon,
    UserGroupIcon
} from "@heroicons/react/24/solid";

export default function CourseDetail() {
    const { slug } = useParams();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ICON MAP
    const iconMap = {
        CodeBracketIcon: < CodeBracketIcon className = "w-8 h-8 text-blue-500" / > ,
        CpuChipIcon: < CpuChipIcon className = "w-8 h-8 text-green-500" / > ,
        ComputerDesktopIcon: < ComputerDesktopIcon className = "w-8 h-8 text-purple-500" / > ,
        BuildingOfficeIcon: < BuildingOfficeIcon className = "w-8 h-8 text-orange-500" / > ,
    };

    useEffect(() => {
        const fetchCourse = async() => {
            try {
                const res = await axios.get(
                    `${BASE_URL}/api/course-highlights/detail/${slug}`
                );

                if (res.data.success) {
                    setCourse(res.data.data);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [slug]);

    if (loading) {
        return ( <
            div className = "min-h-screen flex items-center justify-center bg-gray-900 text-white" >
            Loading... <
            /div>
        );
    }

    if (!course) return null;

    return ( <
        div className = "min-h-screen flex flex-col bg-gray-900 text-white" >

        <
        Navbar / >

        { /* HEADER */ } <
        PageHeader title = { course.title }
        subtitle = { course.subtitle || "Master Professional Skills" }
        bgImage = { course.bgImage }
        />

        <
        main className = "flex-grow py-24 bg-gray-900" >
        <
        div className = "max-w-7xl mx-auto px-6" >

        { /* OVERVIEW */ } <
        div className = "bg-gray-800 rounded-2xl p-12 mb-16 border border-gray-700" >

        <
        div className = "flex flex-col lg:flex-row items-center gap-8 mb-12" >

        <
        div className = "flex-shrink-0" > {
            iconMap[course.iconName] || ( <
                CodeBracketIcon className = "w-16 h-16 text-indigo-500" / >
            )
        } <
        /div>

        <
        div className = "text-center lg:text-left" >
        <
        h2 className = "text-4xl font-bold mb-4" > { course.title } <
        /h2>

        <
        p className = "text-lg text-gray-300 max-w-2xl" > { course.description } <
        /p> < /
        div >

        <
        /div>

        { /* STATS */ } <
        div className = "grid md:grid-cols-3 gap-8 mb-12" >

        <
        div className = "flex items-center gap-4 p-6 bg-gray-700 rounded-xl" >
        <
        ClockIcon className = "w-6 h-6 text-indigo-400" / >
        <
        div >
        <
        p className = "text-sm text-gray-400" > Duration < /p> <
        p className = "text-xl font-bold" > { course.duration } < /p> < /
        div > <
        /div>

        <
        div className = "flex items-center gap-4 p-6 bg-gray-700 rounded-xl" >
        <
        ComputerDesktopIcon className = "w-6 h-6 text-green-400" / >
        <
        div >
        <
        p className = "text-sm text-gray-400" > Mode < /p> <
        p className = "text-xl font-bold" > Online / Offline < /p> < /
        div > <
        /div>

        <
        div className = "flex items-center gap-4 p-6 bg-gray-700 rounded-xl" >
        <
        UserGroupIcon className = "w-6 h-6 text-purple-400" / >
        <
        div >
        <
        p className = "text-sm text-gray-400" > Students < /p> <
        p className = "text-xl font-bold" > 500 + < /p> < /
        div > <
        /div>

        <
        /div>

        { /* FEATURES */ } {
            Array.isArray(course.features) && course.features.length > 0 && ( <
                div className = "mb-12" >
                <
                h3 className = "text-2xl font-bold mb-6" > Key Features < /h3>

                <
                div className = "grid md:grid-cols-2 gap-4" > {
                    course.features.map((f, i) => ( <
                        div key = { i }
                        className = "flex items-center gap-3 p-4 bg-gray-700 rounded-lg" >
                        <
                        CheckCircleIcon className = "w-6 h-6 text-green-400" / >
                        <
                        span > { f } < /span> < /
                        div >
                    ))
                } <
                /div> < /
                div >
            )
        }

        <
        /div>

        { /* TECHNOLOGIES */ } {
            Array.isArray(course.technologies) && course.technologies.length > 0 && ( <
                div className = "bg-gray-800 rounded-2xl p-12 mb-16 border border-gray-700" >
                <
                h3 className = "text-2xl font-bold mb-8 text-center" >
                Technologies You 'll Learn < /
                h3 >

                <
                div className = "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" > {
                    course.technologies.map((tech, i) => ( <
                        div key = { i }
                        className = "flex flex-col items-center p-6 bg-gray-700 rounded-xl" >
                        <
                        img src = { tech.icon }
                        alt = ""
                        className = "w-12 h-12 mb-2" / >
                        <
                        span > { tech.name } < /span> < /
                        div >
                    ))
                } <
                /div> < /
                div >
            )
        }

        { /* SYLLABUS */ } {
            Array.isArray(course.syllabus) && course.syllabus.length > 0 && ( <
                div className = "bg-gray-800 rounded-2xl p-12 mb-16 border border-gray-700" >
                <
                h3 className = "text-2xl font-bold mb-8" > Course Syllabus < /h3>

                <
                div className = "grid md:grid-cols-2 gap-6" > {
                    course.syllabus.map((s, i) => ( <
                        div key = { i }
                        className = "flex gap-4 p-4 bg-gray-700 rounded-lg" >
                        <
                        span className = "w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center" > { i + 1 } <
                        /span> <
                        span > { s } < /span> < /
                        div >
                    ))
                } <
                /div> < /
                div >
            )
        }

        { /* CAREER */ } {
            Array.isArray(course.careerOpportunities) && course.careerOpportunities.length > 0 && ( <
                div className = "bg-gray-800 rounded-2xl p-12 mb-16 border border-gray-700" >
                <
                h3 className = "text-2xl font-bold mb-8 text-center" >
                Career Opportunities <
                /h3>

                <
                div className = "grid md:grid-cols-2 gap-8" > {
                    course.careerOpportunities.map((item, i) => ( <
                        div key = { i }
                        className = "p-6 bg-gray-700 rounded-xl" >
                        <
                        div className = "flex items-center gap-4 mb-3" > {
                            iconMap[item.iconName] || ( <
                                CodeBracketIcon className = "w-8 h-8 text-indigo-400" / >
                            )
                        } <
                        h4 className = "font-bold" > { item.title } < /h4> < /
                        div > <
                        p className = "text-gray-300" > { item.description } < /p> < /
                        div >
                    ))
                } <
                /div> < /
                div >
            )
        }

        { /* 🔥 PREREQUISITES */ } {
            course.prerequisites && ( <
                div className = "bg-gray-800 rounded-2xl p-12 mb-16 border border-gray-700" >
                <
                h3 className = "text-2xl font-bold mb-6" > Prerequisites < /h3> <
                p className = "text-gray-300 text-lg" > { course.prerequisites } <
                /p> < /
                div >
            )
        }

        { /* CTA */ } <
        div className = "bg-indigo-600 rounded-2xl p-12 text-center" >
        <
        h3 className = "text-3xl font-bold mb-4" >
        Ready to Start Your Journey ?
        <
        /h3>

        <
        div className = "flex gap-4 justify-center" >
        <
        button onClick = {
            () => setIsModalOpen(true)
        }
        className = "px-8 py-4 bg-white text-indigo-600 rounded-xl" >
        Enroll Now <
        /button>

        <
        Link to = "/courses"
        className = "px-8 py-4 border border-white rounded-xl" >
        Back <
        /Link> < /
        div > <
        /div>

        <
        /div> < /
        main >

        <
        EnrollmentModal course = { course }
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