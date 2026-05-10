import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import BASE_URL from "../BASEURL";

export default function Blog() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "IT Blog & Insights - YugAntar Technologies";

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Latest insights on web development, mobile apps, AI, and IT trends from YugAntar Technologies."
            );
        }

        window.scrollTo(0, 0);

        fetchBlogs();

    }, []);

    // ✅ FETCH BLOGS
    const fetchBlogs = async() => {

        try {

            const res = await axios.get(
                `${BASE_URL}/api/blogs`
            );

            if (res.data && res.data.success) {
                setArticles(res.data.data);
            }

        } catch (error) {

            console.log("❌ Blog Fetch Error:", error);

        } finally {

            setLoading(false);

        }
    };

    // ✅ GRADIENT COLORS
    const gradientColors = [
        "from-blue-500 to-cyan-400",
        "from-purple-500 to-pink-500",
        "from-orange-500 to-yellow-500",
        "from-green-500 to-emerald-400",
        "from-indigo-500 to-blue-500",
        "from-red-500 to-rose-400",
    ];

    return (

        <
        div className = "bg-[#0a0f1a] text-white min-h-screen font-sans overflow-hidden" >

        <
        Navbar / >

        { /* HERO SECTION */ } <
        section className = "relative pt-32 pb-20 overflow-hidden" >

        { /* Glow Effects */ } <
        div className = "absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-secondary-500/20 blur-[120px] rounded-full" > < /div>

        <
        div className = "absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-primary-500/20 blur-[120px] rounded-full" > < /div>

        <
        div className = "max-w-7xl mx-auto px-6 relative z-10" >

        <
        div className = "flex flex-col lg:flex-row items-center gap-14" >

        { /* LEFT CONTENT */ } <
        div className = "lg:w-3/5 text-center lg:text-left" >

        <
        span className = "inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-secondary-400 uppercase bg-secondary-400/10 border border-secondary-400/20 rounded-full" >
        Knowledge Hub <
        /span>

        <
        h1 className = "text-4xl md:text-6xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent" >
        Tech Insights & < br / >

        <
        span className = "text-secondary-400" >
        Future Trends. <
        /span> < /
        h1 >

        <
        p className = "text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed" >
        Stay ahead of the curve with expert perspectives on AI, Cloud, Software Engineering and modern IT solutions. <
        /p>

        <
        div className = "flex flex-wrap justify-center lg:justify-start gap-4" >

        <
        Link to = "/contact"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-6 py-3 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20 hover:scale-105 transition-all duration-300" >
        Get IT Consultation <
        /Link>

        <
        /div>

        <
        /div>

        { /* RIGHT IMAGE */ } <
        div className = "lg:w-2/5 flex justify-center" >

        <
        div className = "relative group w-full max-w-md" >

        { /* Glow */ } <
        div className = "absolute -inset-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" > < /div>

        <
        div className = "relative bg-gray-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl" >

        <
        img src = "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
        alt = "Tech Blog"
        className = "w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105" /
        >

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /section>

        { /* BLOG SECTION */ } <
        section className = "max-w-7xl mx-auto px-6 py-24" >

        <
        div className = "flex flex-col md:flex-row justify-between items-end mb-16 gap-6" >

        <
        div >

        <
        h2 className = "text-3xl md:text-5xl font-bold mb-4" >
        Latest Articles <
        /h2>

        <
        div className = "h-1.5 w-24 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full" > < /div>

        <
        /div>

        <
        p className = "text-gray-400 max-w-md" >
        Explore trending technologies, software development insights,
        AI innovations, and digital transformation strategies. <
        /p>

        <
        /div>

        {
            loading ? (

                <
                div className = "text-center py-20" >

                <
                div className = "w-14 h-14 border-4 border-secondary-500 border-t-transparent rounded-full animate-spin mx-auto" > < /div>

                <
                p className = "text-gray-400 mt-6" >
                Loading Blogs... <
                /p>

                <
                /div>

            ) : (

                <
                div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >

                {
                    articles.map((article, index) => (

                        <
                        div key = { index }
                        className = "group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-secondary-500/30 transition-all duration-500 hover:-translate-y-3" >

                        { /* Glow */ } <
                        div className = { `absolute -inset-1 bg-gradient-to-r ${
                                                gradientColors[index % gradientColors.length]
                                            } opacity-10 blur-3xl group-hover:opacity-30 transition-all duration-500` } >
                        <
                        /div>

                        { /* Content */ } <
                        div className = "relative z-10 p-8 flex flex-col h-full" >

                        { /* Category */ } <
                        div className = "flex items-center gap-3 mb-5" >

                        <
                        span className = "text-[10px] font-bold tracking-widest uppercase text-secondary-400 bg-secondary-400/10 px-3 py-1 rounded-md" > { article.category } <
                        /span>

                        <
                        span className = "text-xs text-gray-500 italic" > { article.readTime } <
                        /span>

                        <
                        /div>

                        { /* Title */ } <
                        h3 className = "text-2xl font-bold mb-4 group-hover:text-secondary-400 transition-colors duration-300 leading-tight" > { article.title } <
                        /h3>

                        { /* Description */ } <
                        p className = "text-gray-400 text-sm leading-relaxed mb-8 flex-grow" > { article.description } <
                        /p>

                        { /* Button */ } <
                        div className = "mt-auto" >

                        <
                        Link to = "/contact"
                        className = "inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-secondary-400 transition-all" >
                        READ MORE

                        <
                        span className = "group-hover:translate-x-2 transition-transform duration-300" > →
                        <
                        /span>

                        <
                        /Link>

                        <
                        /div>

                        <
                        /div>

                        <
                        /div>

                    ))
                }

                <
                /div>

            )
        }

        <
        /section>

        { /* CTA SECTION */ } <
        section className = "max-w-7xl mx-auto px-6 pb-24" >

        <
        div className = "relative rounded-[40px] p-12 md:p-20 overflow-hidden text-center border border-white/10 bg-gradient-to-b from-white/5 to-transparent" >

        { /* Glow */ } <
        div className = "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary-500/20 blur-[80px] rounded-full" > < /div>

        <
        div className = "absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-secondary-500/20 blur-[80px] rounded-full" > < /div>

        <
        h3 className = "text-3xl md:text-5xl font-black mb-6 relative z-10" >
        Ready to transform your < br className = "hidden md:block" / >
        digital presence ?
        <
        /h3>

        <
        p className = "text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10" >
        Join businesses that scale faster with modern IT solutions from YugAntar Technologies. <
        /p>

        <
        div className = "flex flex-col sm:flex-row gap-4 justify-center relative z-10" >

        <
        Link to = "/contact"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-6 py-3 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20 hover:scale-105 transition-all duration-300" >
        Start Your Project Now <
        /Link>

        <
        a href = "tel:+916355582605"
        className = "px-6 py-3 border-2 border-secondary-500 text-secondary-400 font-semibold rounded-xl hover:bg-secondary-500 hover:text-white transition-all duration-300" >
        Call : +91 6355582605 <
        /a>

        <
        /div>

        <
        /div>

        <
        /section>

        <
        Footer / >

        <
        /div>
    );
}