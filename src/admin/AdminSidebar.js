import { NavLink } from "react-router-dom";

export default function AdminSidebar({
    sidebarOpen,
    setSidebarOpen,
    onLogout
}) {

    /* =========================
       SAFE LOGOUT (NO CRASH)
    ========================= */
    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        } else {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminLoggedIn");
            window.location.href = "/admin-login";
        }
    };

    /* =========================
       ACTIVE LINK STYLE
    ========================= */
    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium text-sm
     ${
       isActive
         ? "bg-orange-500 text-white shadow-md"
         : "text-gray-200 hover:bg-blue-600 hover:text-white"
     }`;

    return ( <
        >
        { /* Overlay (Mobile) */ } {
            sidebarOpen && ( <
                div onClick = {
                    () => setSidebarOpen(false)
                }
                className = "fixed inset-0 bg-black/50 z-30 md:hidden" /
                >
            )
        }

        { /* Sidebar */ } <
        aside className = { `
          fixed top-0 left-0 z-40 h-screen w-64
          bg-gradient-to-b from-blue-800 to-blue-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:sticky md:top-0
          shadow-xl
        ` } > { /* Header */ } <
        div className = "p-6 border-b border-blue-700/50 bg-blue-900" >
        <
        h2 className = "text-2xl font-bold text-center" > Admin Panel < /h2> <
        p className = "text-xs text-blue-300 text-center mt-1" >
        YugAntar Technologies <
        /p> < /
        div >

        { /* Navigation */ } <
        nav className = "p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]"
        onClick = {
            () => setSidebarOpen(false)
        } >
        <
        NavLink to = "/admin"
        end className = { linkClass } >
        Dashboard <
        /NavLink>

        <
        NavLink to = "/admin/course-inquiries"
        className = { linkClass } >
        Course Inquiries <
        /NavLink>

        <
        NavLink to = "/admin/general-inquiries"
        className = { linkClass } >
        General Inquiries <
        /NavLink>

        <
        NavLink to = "/admin/service-inquiries"
        className = { linkClass } >
        Service Inquiries <
        /NavLink>

        <
        NavLink to = "/admin/internships"
        className = { linkClass } >
        Internships <
        /NavLink>

        <
        NavLink to = "/admin/students"
        className = { linkClass } >
        Students <
        /NavLink>

        <
        NavLink to = "/admin/attendance"
        className = { linkClass } >
        Attendance <
        /NavLink> < /
        nav >

        { /* Logout */ } <
        div className = "absolute bottom-0 left-0 right-0 p-4 border-t border-blue-700/50 bg-blue-900" >
        <
        button onClick = {
            () => {
                if (window.confirm("Are you sure you want to logout?")) {
                    handleLogout();
                }
            }
        }
        className = "flex items-center justify-center gap-2 px-4 py-3 w-full rounded-lg
        bg - red - 600 hover: bg - red - 700 text - white transition font - medium text - sm " > <
        i className = "fa-solid fa-right-from-bracket" > < /i>
        Logout <
        /button> < /
        div > <
        /aside> < /
        >
    );
}