import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Users, BookOpen, Layers, FileText, CheckCircle, ArrowLeft, BarChart3 } from "lucide-react";
import BASE_URL from "../BASEURL";

const AdminAnalytics = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        students: 0,
        courses: 0,
        services: 0,
        blogs: 0,
        attendance: 0,
    });

    const fetchAnalytics = async() => {
        try {
            const token = localStorage.getItem("adminToken");
            const res = await axios.get(`${BASE_URL}/api/analytics/stats`, {
                headers: { Authorization: "Bearer " + token },
            });

            if (res.data && res.data.success) {
                setStats({
                    students: res.data.data.students || 0,
                    courses: res.data.data.courses || 0,
                    services: res.data.data.services || 0,
                    blogs: res.data.data.blogs || 0,
                    attendance: res.data.data.attendance || 0,
                });
            }
        } catch (err) {
            console.error("Error fetching stats:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const Card = ({ title, value, icon: Icon, colorClass, shadowColor }) => ( <
        div className = { `relative overflow-hidden bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-2xl border border-gray-100 group` } > { /* Background Decorative Circle */ } <
        div className = { `absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 ${colorClass} transition-transform group-hover:scale-150` }
        />

        <
        div className = "flex items-center justify-between relative z-10" >
        <
        div className = { `p-3 rounded-2xl ${colorClass} bg-opacity-10` } >
        <
        Icon className = { `w-6 h-6 ${colorClass.replace('bg-', 'text-')}` }
        /> < /
        div > <
        span className = "text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg" > +Live < /span> < /
        div >

        <
        div className = "mt-5 relative z-10" >
        <
        h3 className = "text-gray-500 font-medium text-sm tracking-wide uppercase" > { title } < /h3> <
        div className = "flex items-baseline gap-2" >
        <
        h1 className = "text-4xl font-extrabold text-gray-900 tracking-tight" > { value } < /h1> < /
        div > <
        p className = "text-gray-400 text-xs mt-2 flex items-center gap-1" >
        <
        CheckCircle className = "w-3 h-3 text-blue-400" / >
        Updated just now <
        /p> < /
        div > <
        /div>
    );

    if (loading) {
        return ( <
            div className = "min-h-screen flex flex-col items-center justify-center bg-gray-50" >
            <
            div className = "w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" > < /div> <
            p className = "mt-4 text-gray-600 font-medium animate-pulse" > Gathering insights... < /p> < /
            div >
        );
    }

    return ( <
        div className = "min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans" >
        <
        div className = "max-w-7xl mx-auto" >

        { /* HEADER */ } <
        div className = "flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4" >
        <
        div >
        <
        div className = "flex items-center gap-3" >
        <
        div className = "bg-indigo-600 p-2 rounded-lg text-white" >
        <
        BarChart3 size = { 28 }
        /> < /
        div > <
        h1 className = "text-3xl md:text-4xl font-black text-gray-900 tracking-tight" >
        Dashboard < span className = "text-indigo-600" > Analytics < /span> < /
        h1 > <
        /div> <
        p className = "text-gray-500 mt-2 font-medium" >
        Welcome back, Admin.Here 's what'
        s happening today. <
        /p> < /
        div >

        <
        button onClick = {
            () => navigate("/admin")
        }
        className = "group flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm font-semibold" >
        <
        ArrowLeft size = { 18 }
        className = "group-hover:-translate-x-1 transition-transform" / >
        Back to Portal <
        /button> < /
        div >

        { /* STATS GRID */ } <
        div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" >
        <
        Card title = "Students"
        value = { stats.students }
        icon = { Users }
        colorClass = "bg-blue-600" / >
        <
        Card title = "Courses"
        value = { stats.courses }
        icon = { BookOpen }
        colorClass = "bg-emerald-600" / >
        <
        Card title = "Services"
        value = { stats.services }
        icon = { Layers }
        colorClass = "bg-amber-500" / >
        <
        Card title = "Blogs"
        value = { stats.blogs }
        icon = { FileText }
        colorClass = "bg-violet-600" / >
        <
        Card title = "Attendance"
        value = { stats.attendance }
        icon = { CheckCircle }
        colorClass = "bg-rose-600" / >
        <
        /div>

        { /* DECORATIVE SECTION (Placeholder for Charts) */ } <
        div className = "mt-10 p-8 rounded-[2.5rem] bg-indigo-900 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative" >
        <
        div className = "relative z-10" >
        <
        h2 className = "text-2xl font-bold" > System Health is Excellent! < /h2> <
        p className = "text-indigo-200 mt-1" > All modules are running smoothly without any reported errors. < /p> <
        button className = "mt-4 bg-white text-indigo-900 px-6 py-2 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors" >
        View Server Logs <
        /button> < /
        div > <
        div className = "absolute right-0 top-0 opacity-10 pointer-events-none" >
        <
        BarChart3 size = { 300 }
        /> < /
        div > <
        /div>

        <
        /div> < /
        div >
    );
};

export default AdminAnalytics;