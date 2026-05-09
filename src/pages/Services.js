import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBookingModal from "../components/ServiceBookingModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import axios from "axios";

export default function Services() {

    const [bookingModal, setBookingModal] = useState({
        isOpen: false,
        service: null,
    });

    const [ref, isVisible] = useScrollAnimation({
        threshold: 0.12,
    });

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.title =
            "IT Services Ahmedabad - YugAntar Technologies";

        fetchServices();
    }, []);

    // ✅ FETCH SERVICES
    const fetchServices = async() => {
        try {

            const res = await axios.get(
                "http://localhost:5000/api/services"
            );

            if (res.data && res.data.success) {
                setServices(res.data.data);
            } else {
                setServices([]);
            }

        } catch (error) {

            if (error.response) {
                console.log(
                    "❌ Service Fetch Error:",
                    error.response.data
                );
            } else {
                console.log(
                    "❌ Service Fetch Error:",
                    error.message
                );
            }

            setServices([]);

        } finally {
            setLoading(false);
        }
    };

    // ✅ BOOK SERVICE
    const handleBookService = (service) => {
        setBookingModal({
            isOpen: true,
            service,
        });
    };

    // ✅ CLOSE MODAL
    const handleCloseBookingModal = () => {
        setBookingModal({
            isOpen: false,
            service: null,
        });
    };

    return ( <
        div className = "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen overflow-hidden" >

        <
        Navbar / >

        { /* HERO SECTION */ } <
        section className = "relative pt-28 pb-20 overflow-hidden" >

        { /* BACKGROUND GLOW */ } <
        div className = "absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" > < /div>

        <
        div className = "absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/20 blur-[120px] rounded-full" > < /div>

        { /* TEXTURE */ } <
        div className = "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5" > < /div>

        <
        div className = "relative z-10 max-w-7xl mx-auto px-6" >

        <
        div className = "flex flex-col lg:flex-row items-center gap-14" >

        { /* LEFT CONTENT */ } <
        div className = "lg:w-1/2 text-center lg:text-left" >

        <
        p className = "text-indigo-400 font-mono text-sm tracking-[4px] uppercase mb-4" >
        IT Services <
        /p>

        <
        h1 className = "text-4xl md:text-6xl font-black leading-tight mb-6" >

        Our { " " }

        <
        span className = "bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" >
        IT Services <
        /span>

        <
        /h1>

        <
        p className = "text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0" >
        Transform your business with cutting - edge IT solutions crafted
        for your success.We provide modern web development, mobile applications,
        and scalable software solutions. <
        /p>

        { /* BUTTONS */ } <
        div className = "flex flex-col sm:flex-row gap-5 justify-center lg:justify-start" >

        <
        Link to = "/contact"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all duration-300" >
        Book Free Consultation <
        /Link>

        <
        a href = "tel:+916355582605"
        className = "px-7 py-4 border border-indigo-500/40 bg-white/5 backdrop-blur-md rounded-2xl font-semibold text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all duration-300 text-center" >
        Call: +91 6355582605 <
        /a>

        <
        /div>

        <
        /div>

        { /* RIGHT IMAGE */ } <
        div className = "lg:w-1/2 flex justify-center" >

        <
        div className = "relative group max-w-xl w-full" >

        { /* GLOW */ } <
        div className = "absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-[40px] blur-3xl opacity-40 group-hover:opacity-70 transition duration-500" > < /div>

        <
        div className = "relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl" >

        <
        img src = "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt = "IT Services"
        className = "w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105" /
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

        { /* SERVICES SECTION */ } <
        section className = "relative py-24 overflow-hidden" >

        { /* BG GLOW */ } <
        div className = "absolute left-0 top-20 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" > < /div>

        <
        div className = "absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-500/10 blur-[120px] rounded-full" > < /div>

        <
        div className = "relative z-10 max-w-7xl mx-auto px-6" >

        { /* HEADING */ } <
        div className = "text-center mb-20" >

        <
        p className = "text-indigo-400 font-mono text-sm tracking-[4px] uppercase mb-4" >
        Explore Services <
        /p>

        <
        h2 className = "text-4xl md:text-5xl font-black mb-6 leading-tight" >

        Explore Our { " " }

        <
        span className = "bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" >
        Services <
        /span>

        <
        /h2>

        <
        p className = "text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed" >
        Choose from our industry - focused IT services designed to help your business grow faster with scalable digital solutions. <
        /p>

        <
        /div>

        { /* LOADING */ } {
            loading ? (

                <
                div className = "text-center py-20" >

                <
                div className = "w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-5" > < /div>

                <
                p className = "text-gray-400 text-lg" >
                Loading Services... <
                /p>

                <
                /div>

            ) : (

                <
                div ref = { ref }
                className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" >

                {
                    services.map((service, index) => (

                        <
                        div key = { index }
                        className = "group relative rounded-[30px] overflow-hidden p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hover:-translate-y-3 transition-all duration-500"
                        style = {
                            {
                                transitionDelay: `${index * 100}ms`,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ?
                                    "translateY(0)" :
                                    "translateY(40px)",
                            }
                        } >

                        { /* CARD GLOW */ } <
                        div className = "absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl opacity-20 group-hover:opacity-60 transition duration-500" > < /div>

                        { /* POPULAR */ } {
                            service.popular && ( <
                                span className = "absolute top-5 right-5 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-black z-20" >
                                Popular <
                                /span>
                            )
                        }

                        { /* CONTENT */ } <
                        div className = "relative z-10 flex flex-col h-full" >

                        { /* ICON */ } <
                        div className = "w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-5xl mb-6 border border-white/10 shadow-lg" > { service.icon } <
                        /div>

                        { /* TITLE */ } <
                        h3 className = "text-2xl font-bold mb-4 leading-snug" > { service.title } <
                        /h3>

                        { /* DESCRIPTION */ } <
                        p className = "text-gray-300 leading-relaxed mb-6" > { service.description } <
                        /p>

                        { /* FEATURES */ } <
                        ul className = "space-y-3 mb-8" >

                        {
                            service.features &&
                            service.features.map((f, i) => (

                                <
                                li key = { i }
                                className = "flex items-start gap-3 text-gray-400" >

                                <
                                span className = "text-indigo-400 mt-1" > ✔
                                <
                                /span>

                                <
                                span > { f } < /span>

                                <
                                /li>

                            ))
                        }

                        <
                        /ul>

                        { /* BUTTON */ } <
                        button onClick = {
                            () =>
                            handleBookService(service)
                        }
                        className = "mt-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 rounded-2xl font-bold text-white shadow-xl shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-300" >
                        Book Service <
                        /button>

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
        /div>

        <
        /section>

        { /* CTA SECTION */ } <
        section className = "pb-24 px-6" >

        <
        div className = "max-w-7xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl shadow-2xl" >

        { /* GLOW */ } <
        div className = "absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl" > < /div>

        <
        div className = "relative z-10 py-16 px-8 md:px-16 text-center" >

        <
        h3 className = "text-3xl md:text-5xl font-black mb-6 leading-tight" >

        Ready to Transform Your { " " }

        <
        span className = "bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent" >
        Business ?
        <
        /span>

        <
        /h3>

        <
        p className = "text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed" >
        Partner with YugAntar Technologies
        for end - to - end IT solutions. <
        /p>

        <
        div className = "flex flex-col sm:flex-row gap-5 justify-center" >

        <
        Link to = "/contact"
        className = "inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-4 rounded-2xl font-bold text-white shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all duration-300" >
        Book Free Consultation <
        /Link>

        <
        a href = "tel:+916355582605"
        className = "px-7 py-4 border border-indigo-500/40 bg-white/5 backdrop-blur-md rounded-2xl font-semibold text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all duration-300" >
        Call : +91 6355582605 <
        /a>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /section>

        { /* MODAL */ } <
        ServiceBookingModal service = { bookingModal.service }
        isOpen = { bookingModal.isOpen }
        onClose = { handleCloseBookingModal }
        />

        <
        Footer / >

        <
        /div>
    );
}