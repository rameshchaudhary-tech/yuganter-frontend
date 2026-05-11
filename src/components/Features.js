import React, { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
    BookOpenIcon,
    AcademicCapIcon,
    CodeBracketIcon,
    BriefcaseIcon,
    RocketLaunchIcon,
    LightBulbIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import BASE_URL from "../BASEURL";

export default function Features() {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetchFeatures();
    }, []);
    console.log("NEW BUILD");

    // ✅ FETCH FEATURES
    const fetchFeatures = async() => {
        console.log("NEW BUILD");

        try {
            const res = await axios.get(`${BASE_URL}/api/features`);

            if (res.data && res.data.success) {
                setFeatures(res.data.data.featuresList);
            }
        } catch (error) {
            console.log("❌ Fetch Error:", error);
        }
    };

    // ✅ ICON MAP
    const iconMap = {
        BookOpenIcon: < BookOpenIcon className = "w-8 h-8" / > ,
        AcademicCapIcon: < AcademicCapIcon className = "w-8 h-8" / > ,
        CodeBracketIcon: < CodeBracketIcon className = "w-8 h-8" / > ,
        BriefcaseIcon: < BriefcaseIcon className = "w-8 h-8" / > ,
        RocketLaunchIcon: < RocketLaunchIcon className = "w-8 h-8" / > ,
        LightBulbIcon: < LightBulbIcon className = "w-8 h-8" / > ,
    };

    // ✅ BACKEND COLOR MAP
    const colorMap = {
        "from-indigo-500/20 to-purple-500/20": "from-indigo-500 to-purple-500",

        "from-green-500/20 to-emerald-500/20": "from-green-500 to-emerald-500",

        "from-yellow-500/20 to-orange-500/20": "from-yellow-500 to-orange-500",

        "from-red-500/20 to-pink-500/20": "from-red-500 to-pink-500",

        "from-cyan-500/20 to-blue-500/20": "from-cyan-500 to-blue-500",

        "from-purple-500/20 to-indigo-500/20": "from-purple-500 to-indigo-500",
    };

    return ( <
        section ref = { ref }
        id = "features"
        className = "relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white overflow-hidden" > { /* BACKGROUND */ } <
        div className = "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5" > < /div>

        <
        div className = "relative z-10 max-w-7xl mx-auto px-6" >

        { /* HEADER */ } <
        div className = { `mb-20 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }` } >
        <
        p className = "text-indigo-400 font-mono text-sm tracking-widest mb-3 uppercase" >
        Excellence in Education <
        /p>

        <
        h2 className = "text-4xl md:text-5xl font-bold tracking-tight leading-tight" >
        Why Choose { " " } <
        span className = "text-indigo-400" >
        YugAntar Technologies <
        /span> < /
        h2 >

        <
        p className = "mt-5 max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed" >
        We focus on practical learning, industry - ready skills,
        and career growth. <
        /p> < /
        div >

        { /* FEATURE GRID */ } <
        div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" >

        {
            features.map((f, i) => ( <
                div key = { i }
                className = "group relative rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
                style = {
                    {
                        transitionDelay: `${i * 100}ms`,
                    }
                } >

                { /* ✅ BIG PREMIUM GLOW */ } <
                div className = { `absolute -inset-3 bg-gradient-to-tr ${
                  colorMap[f.color] ||
                  "from-indigo-500 to-purple-500"
                } opacity-40 rounded-3xl blur-[90px] group-hover:opacity-70 transition-all duration-500` } >
                <
                /div>

                { /* CARD BACKGROUND */ } <
                div className = "absolute inset-0 bg-[#111827]/75 border border-white/10 rounded-3xl backdrop-blur-xl" > < /div>

                { /* INNER SHINE */ } <
                div className = "absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" > < /div>

                { /* CONTENT */ } <
                div className = "relative z-10 flex flex-col h-full" >

                { /* ICON */ } <
                div className = "mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-lg" > {
                    iconMap[f.icon] || ( <
                        BookOpenIcon className = "w-8 h-8" / >
                    )
                } <
                /div>

                { /* TITLE */ } <
                h3 className = "text-2xl font-bold mb-4 tracking-tight" > { f.title } <
                /h3>

                { /* DESCRIPTION */ } <
                p className = "text-gray-300 text-sm md:text-base leading-relaxed" > { f.desc } <
                /p>

                <
                /div> < /
                div >
            ))
        }

        <
        /div> < /
        div > <
        /section>
    );
}