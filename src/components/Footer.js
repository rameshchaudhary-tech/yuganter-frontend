import React from 'react';
import { Link } from 'react-router-dom';

const logo = '/Yuganter_Technologies.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return ( <
        footer className = "bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white relative overflow-hidden" >

        <
        div className = "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5" > < /div>

        <
        div className = "relative z-10 max-w-7xl mx-auto px-6 py-16" >

        <
        div className = "grid md:grid-cols-4 gap-12 mb-12" >

        { /* Company */ } <
        div className = "md:col-span-2" >

        <
        div className = "flex items-center mb-6" >
        <
        img src = { logo }
        alt = "YugAntar Technologies"
        className = "w-16 h-16 mr-4 rounded-full object-contain" / >

        <
        h1 className = "text-xl md:text-2xl font-bold bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent" >
        YugAntar Technologies < br / >
        <
        span className = "text-sm md:text-base font-medium" >
        &
        Training Institute <
        /span> <
        /h1> <
        /div>

        <
        p className = "text-gray-300 mb-6 max-w-md" >
        YugAntar Technologies Ahmedabad - Software Development & IT Training. <
        /p>

        { /* Social */ } <
        div className = "flex gap-4" >

        <
        a href = "https://www.facebook.com/share/16Ao4uJg7S/"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" >

        <
        span > F < /span> <
        /a>

        <
        a href = "https://x.com/YugATechnologie"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" >

        <
        span > X < /span> <
        /a>

        <
        a href = "https://www.instagram.com/yugantar_technologies"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center" >

        <
        span > I < /span> <
        /a>

        { /* ❌ FIXED: NO "#" use */ } <
        button className = "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
        onClick = {
            () => alert("LinkedIn coming soon") } >
        L <
        /button>

        <
        /div> <
        /div>

        { /* Quick Links */ } <
        div >
        <
        h3 className = "text-secondary-400 font-bold mb-6" > Quick Links < /h3> <
        ul className = "space-y-3" >

        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/about" > About < /Link></li >
        <
        li > < Link to = "/courses" > Courses < /Link></li >
        <
        li > < Link to = "/blog" > Blog < /Link></li >
        <
        li > < Link to = "/internship" > Internship < /Link></li >
        <
        li > < Link to = "/contact" > Contact < /Link></li >

        <
        /ul> <
        /div>

        { /* Contact */ } <
        div >
        <
        h3 className = "text-secondary-400 font-bold mb-6" > Contact < /h3>

        <
        p className = "text-gray-300" >
        204, Navrangpura, Ahmedabad <
        /p>

        <
        a href = "mailto:info@yugantartechnologies.com" >
        info @yugantartechnologies.com <
        /a>

        <
        div className = "mt-2" >
        <
        a href = "tel:+916355582605" > +91 6355582605 < /a> <
        br / >
        <
        a href = "tel:+917859982605" > +91 7859982605 < /a> <
        /div> <
        /div>

        <
        /div>

        { /* Bottom */ } <
        div className = "border-t border-white/10 pt-6 text-center text-gray-400" > ©{ currentYear }
        YugAntar Technologies <
        /div>

        <
        /div> <
        /footer>
    );
}