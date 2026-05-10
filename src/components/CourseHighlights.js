import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
    CodeBracketIcon,
    PencilIcon,
    ChartBarIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import BASE_URL from "../BASEURL";

export default function CourseHighlights() {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    // 🔥 FETCH TOP COURSES
    const fetchCourses = async() => {
        try {
            const res = await axios.get(
                `${BASE_URL}/api/course-highlights`
            );

            if (res.data && res.data.success) {
                setCourses(res.data.data.slice(0, 3)); // ✅ ONLY TOP 3
            }
        } catch (error) {
            console.log("❌ Fetch Error:", error);
        }
    };

    // ✅ ICON MAP (IMPORTANT)
    const iconMap = {
        CodeBracketIcon: < CodeBracketIcon className = "w-8 h-8" / > ,
        PencilIcon: < PencilIcon className = "w-8 h-8" / > ,
        ChartBarIcon: < ChartBarIcon className = "w-8 h-8" / > ,
    };

    return ( <
        section ref = { ref }
        className = "relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white overflow-hidden" >
        { /* Background */ } <
        div className = "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5" > < /div>

        <
        div className = "relative z-10 max-w-7xl mx-auto px-6" >

        { /* HEADER (SAME DESIGN) */ } <
        div className = { `mb-20 text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }` } >
        <
        p className = "text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3" >
        Popular Programs <
        /p>

        <
        h2 className = "text-4xl md:text-5xl font-bold tracking-tight text-white" >
        Start Your { " " } <
        span className = "text-indigo-400" >
        Professional Journey <
        /span> <
        /h2>

        <
        p className = "mt-5 max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed" >
        Choose from our career - focused programs designed to make you industry - ready <
        /p> <
        /div>

        { /* GRID */ } <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-10 mb-16" >

        {
            courses.map((course, index) => ( <
                div key = { index }
                className = "group relative rounded-2xl p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style = {
                    { transitionDelay: `${index * 100}ms` } } >
                { /* Gradient */ } <
                div className = { `absolute -inset-1 bg-gradient-to-tr ${
                  course.colorGradient
                } opacity-20 rounded-2xl blur-3xl group-hover:opacity-40 transition-all` } >
                < /div>

                { /* Content */ } <
                div className = "relative z-10 flex flex-col h-full" >

                { /* TOP */ } <
                div className = "flex items-center justify-between mb-6" >
                <
                div className = "flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white group-hover:bg-white/20 group-hover:text-black transition-all duration-500" >

                { /* 🔥 ICON FIX WITH FALLBACK */ } {
                    iconMap[course.iconName] || ( <
                        CodeBracketIcon className = "w-8 h-8" / >
                    )
                } <
                /div>

                {
                    course.isPopular && ( <
                        span className = "text-xs font-semibold px-3 py-1 rounded-full bg-indigo-400 text-black" >
                        Popular <
                        /span>
                    )
                } <
                /div>

                { /* TITLE */ } <
                h3 className = "text-xl md:text-2xl font-semibold mb-3 tracking-tight" > { course.title } <
                /h3>

                { /* DESC */ } <
                p className = "text-gray-300 text-sm md:text-base leading-relaxed mb-6" > { course.description } <
                /p>

                { /* DIVIDER */ } <
                div className = "h-[1px] w-full bg-white/10 mb-5" > < /div>

                { /* FOOTER */ } <
                div className = "flex items-center justify-between" >
                <
                span className = "text-sm font-semibold text-gray-400" > { course.duration } <
                /span>

                <
                Link to = { `/courses/${course.slug}` }
                className = "inline-flex items-center gap-2 text-indigo-400 font-semibold hover:gap-3 transition-all" >
                View <
                svg className = "w-4 h-4"
                fill = "none"
                stroke = "currentColor"
                viewBox = "0 0 24 24" >
                <
                path strokeLinecap = "round"
                strokeLinejoin = "round"
                strokeWidth = { 2 }
                d = "M13 7l5 5m0 0l-5 5m5-5H6" /
                >
                <
                /svg> <
                /Link> <
                /div>

                <
                /div> <
                /div>
            ))
        }

        <
        /div>

        { /* BUTTON */ } <
        div className = { `text-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }` } >
        <
        Link to = "/courses"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20" >
        View All Courses <
        /Link> <
        /div>

        <
        /div> <
        /section>
    );
}