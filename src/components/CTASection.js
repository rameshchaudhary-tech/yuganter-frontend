import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import axios from "axios";
import BASE_URL from "../BASEURL";

import {
    UserGroupIcon,
    AcademicCapIcon,
    BriefcaseIcon
} from "@heroicons/react/24/outline";

export default function CTASection({ onQuickEnroll }) {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const [cta, setCta] = useState(null);

    useEffect(() => {
        const fetchCta = async() => {
            try {
                const res = await axios.get(`${BASE_URL}/api/cta`);

                if (res && res.data && res.data.success) {
                    setCta(res.data.data);
                }

            } catch (error) {
                console.log(error.message);
            }
        };

        fetchCta();
    }, []);

    return ( <
        section className = "relative py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 overflow-hidden" >

        <
        div className = "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5" > < /div>

        <
        div ref = { ref }
        className = "relative z-10 max-w-5xl mx-auto px-6 text-center" >

        { /* Heading */ } <
        h2 className = { `text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }` } > {
            (cta && cta.heading) || "Kickstart Your Tech Career Today"
        } { " " } <
        span className = "text-primary-400" > {
            (cta && cta.highlightedText) || "Career"
        } <
        /span> < /
        h2 >

        { /* Subheading */ } <
        p className = { `text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }` } > {
            (cta && cta.subheading) || "Master skills through hands-on projects"
        } { " " } <
        span className = "text-primary-400 font-semibold" > {
            (cta && cta.subHighlightedText) || "mentorship & training"
        } <
        /span> < /
        p >

        { /* Buttons (NO CHANGE) */ } <
        div className = { `flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }` } >
        <
        button onClick = { onQuickEnroll }
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl" >
        Enroll Now <
        /button>

        <
        Link to = "/contact"
        className = "px-5 py-2 border text-white font-semibold text-lg hover:bg-white/10 transition-all" >
        Book Consultation <
        /Link> < /
        div >

        { /* Stats */ } <
        div className = { `mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-white transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }` } > {
            ((cta && cta.stats) || [
                { label: "Students Trained", value: "1200+" },
                { label: "Live Projects", value: "75+" },
                { label: "Job Placements", value: "500+" },
            ]).map((stat, idx) => ( <
                div key = { idx }
                className = "flex flex-col items-center gap-2" >
                <
                span className = "text-3xl font-bold text-primary-400" > { stat.value } <
                /span> <
                span className = "text-sm text-gray-300" > { stat.label } <
                /span> < /
                div >
            ))
        } <
        /div>

        { /* Icons */ } <
        div className = { `mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-white transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }` } >
        <
        div className = "flex items-center gap-3" >
        <
        UserGroupIcon className = "w-8 h-8 text-primary-400 animate-bounce" / >
        <
        span > Job Assistance < /span> < /
        div >

        <
        div className = "flex items-center gap-3" >
        <
        AcademicCapIcon className = "w-8 h-8 text-primary-400 animate-bounce delay-150" / >
        <
        span > Live Projects < /span> < /
        div >

        <
        div className = "flex items-center gap-3" >
        <
        BriefcaseIcon className = "w-8 h-8 text-primary-400 animate-bounce delay-300" / >
        <
        span > Expert Mentors < /span> < /
        div > <
        /div>

        <
        /div> < /
        section >
    );
}