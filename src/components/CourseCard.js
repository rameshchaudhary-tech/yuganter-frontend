import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course, onEnroll }) {

    return ( <
        div className = "group bg-gray-800/80 backdrop-blur rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-indigo-500 hover:-translate-y-2 overflow-hidden" >

        { /* Course Image */ } <
        div className = "relative h-48 overflow-hidden" >

        <
        img src = { course.bgImage || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600" }
        alt = { course.title }
        className = "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" /
        >

        <
        div className = "absolute inset-0 bg-black/40" > < /div>

        { /* Duration */ } <
        div className = "absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow" > { course.duration } <
        /div>

        { /* Popular */ } {
            course.isPopular && ( <
                div className = "absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow" > ⭐Popular <
                /div>
            )
        }

        <
        /div>

        { /* Content */ } <
        div className = "p-6" >

        { /* Title */ } <
        h3 className = "text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition" > { course.title } <
        /h3>

        { /* Description */ } <
        p className = "text-sm text-gray-400 mb-4 leading-relaxed" > { course.description } <
        /p>

        { /* Features */ } <
        ul className = "space-y-2 mb-6" > {
            (course.features || []).slice(0, 4).map((feature, idx) => ( <
                li key = { idx }
                className = "flex items-center gap-2 text-sm text-gray-300" >

                <
                svg className = "w-4 h-4 text-indigo-400 flex-shrink-0"
                fill = "currentColor"
                viewBox = "0 0 20 20" >
                <
                path fillRule = "evenodd"
                d = "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule = "evenodd" /
                >
                <
                /svg>

                { feature }

                <
                /li>
            ))
        }

        {
            (course.features || []).length > 4 && ( <
                li className = "text-xs text-gray-500 pl-6" >
                +{
                    (course.features || []).length - 4 }
                more features <
                /li>
            )
        }

        <
        /ul>

        { /* Buttons */ } <
        div className = "pt-4 border-t border-gray-700 space-y-3" >

        { /* ✅ FIXED VIEW DETAILS */ } <
        Link to = { `/courses/${course.slug}` }
        className = "w-full px-4 py-2.5 border border-indigo-500 text-indigo-400 font-semibold text-sm rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2" >
        <
        span > View Details < /span>

        <
        svg className = "w-4 h-4"
        fill = "none"
        stroke = "currentColor"
        viewBox = "0 0 24 24" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = { 2 }
        d = "M15 12a3 3 0 11-6 0 3 3 0 016 0z" / >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = { 2 }
        d = "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" / >
        <
        /svg>

        <
        /Link>

        { /* Enroll */ } <
        button onClick = {
            () => onEnroll && onEnroll(course) }
        className = "w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20" >
        <
        span > Enroll Now < /span>

        <
        svg className = "w-4 h-4"
        fill = "none"
        stroke = "currentColor"
        viewBox = "0 0 24 24" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = { 2 }
        d = "M13 7l5 5m0 0l-5 5m5-5H6" / >
        <
        /svg>

        <
        /button>

        <
        /div>

        <
        /div> <
        /div>
    );
}