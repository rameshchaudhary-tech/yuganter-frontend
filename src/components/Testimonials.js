import React, { useEffect, useState } from "react";
import axios from "axios";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import BASE_URL from "../BASEURL";

export default function Testimonials() {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async() => {
            try {
                const res = await axios.get(`${BASE_URL}/api/testimonials`);

                if (res && res.data && res.data.success) {
                    setReviews(res.data.data);
                }

            } catch (error) {
                console.log("Error:", error.message);
            }
        };

        fetchTestimonials();
    }, []);

    return ( <
        section ref = { ref }
        id = "testimonials"
        className = "relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white overflow-hidden" > { /* background */ } <
        div className = "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5" > < /div> <
        div className = "absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent" > < /div>

        <
        div className = "relative z-10 max-w-7xl mx-auto px-6" >

        { /* Header */ } <
        div className = "text-center mb-20" >
        <
        p className = "text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3" >
        Testimonials <
        /p>

        <
        h2 className = "text-4xl font-bold mb-4" >
        What Our Students Say <
        /h2>

        <
        p className = "text-gray-300 max-w-2xl mx-auto" >
        Hear from our students who transformed their careers with us. <
        /p> < /
        div >

        { /* Grid */ } <
        div className = "grid gap-10 grid-cols-1 md:grid-cols-3" > {
            reviews.map((r, i) => ( <
                div key = { r._id || i }
                className = "group relative rounded-3xl p-8 overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style = {
                    {
                        background: "linear-gradient(135deg, #1e293b, #111827)",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(20px)",
                        transitionDelay: `${i * 120}ms`,
                    }
                } > { /* Glow */ } <
                span className = "absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-500" > < /span>

                <
                div className = "relative z-10 flex flex-col h-full" >

                { /* Stars */ } <
                div className = "flex gap-1 mb-5" > {
                    [...Array(r.rating || 5)].map((_, idx) => ( <
                        svg key = { idx }
                        className = "w-5 h-5 text-yellow-400 fill-current"
                        viewBox = "0 0 20 20" >
                        <
                        path d = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" / >
                        <
                        /svg>
                    ))
                } <
                /div>

                { /* Review */ } <
                p className = "text-gray-300 text-sm md:text-base mb-6" > “{ r.body }” <
                /p>

                <
                div className = "h-[1px] w-full bg-white/10 mb-5" > < /div>

                { /* User */ } <
                div className = "flex items-center gap-4 mt-auto" >

                <
                div className = "w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white text-lg" > {
                    (r.name || "").charAt(0)
                } <
                /div>

                <
                div >
                <
                h4 className = "font-semibold text-white" > { r.name } < /h4> <
                p className = "text-sm text-gray-400" > { r.role } < /p> < /
                div >

                <
                /div>

                <
                /div> < /
                div >
            ))
        } <
        /div>

        <
        /div> < /
        section >
    );
}