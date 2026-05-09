// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// const logo = "/Yuganter_Technologies.png";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => { 
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Courses", path: "/courses" },
//     { name: "Services", path: "/services" },
//     { name: "Blog", path: "/blog" },
//     { name: "Internship", path: "/internship" },
//     { name: "Attendance", path: "/attendance" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? "py-3 bg-dark-900/80 backdrop-blur-xl border-b border-white/10 shadow-xl"
//           : "py-5 bg-transparent"
//       }`}
//     >
//       <div className="max-w-auto mx-auto px-6 md:px-10 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3 group">
//           <div className="relative flex items-center justify-center">
//             <img
//               src={logo}
//               alt="YugAntar"
//               className="w-12 h-12 md:w-14 md:h-14 rounded-full object-contain transition-transform duration-300 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary-400/20 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>

//           <div className="flex flex-col leading-tight">
//             <span className="text-lg md:text-xl font-black text-white">
//               YUG<span className="text-secondary-400">ANTAR</span> Technologies
//             </span>
//             <span className="text-[10px] md:text-xs text-gray-400 tracking-widest uppercase">
//               & Training Institute
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 px-2 py-1 rounded-full backdrop-blur-md">
//           {navItems.map((item) => {
//             const active = location.pathname === item.path;

//             return (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
//                   active
//                     ? "text-white bg-gradient-to-r from-secondary-500/20 to-primary-500/20"
//                     : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 {item.name}

//                 {active && (
//                   <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full"></span>
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden lg:block">
//           <Link
//             to="/contact"
//             className="px-6 py-2.5 rounded-full font-semibold text-white bg-secondary-500 hover:bg-secondary-600 transition-all duration-300 shadow-lg shadow-secondary-500/30"
//           >
//             Join Now
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden fixed inset-0 top-[70px] bg-dark-900/95 backdrop-blur-2xl transition-all duration-500 ${
//           isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <nav className="flex flex-col items-center justify-center h-full gap-8">
//           {navItems.map((item) => {
//             const active = location.pathname === item.path;

//             return (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`text-2xl font-bold transition-all ${
//                   active ? "text-secondary-400 scale-110" : "text-white"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}

//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className="mt-4 px-10 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl text-lg font-bold text-white"
//           >
//             Get Started
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const logo = "/Yuganter_Technologies.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close mobile menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Internship", path: "/internship" },
    { name: "Attendance", path: "/attendance" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-dark-900/80 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex items-center justify-center">
            <img
              src={logo}
              alt="YugAntar"
              className="w-10 h-10 md:w-14 md:h-14 rounded-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary-400/20 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="flex flex-col leading-tight">
             <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-secondary-300 group-hover:to-primary-300">
  YugAntar Technologies <br />
  <span className="text-sm md:text-base font-medium">
    & Training Institute
  </span>
</h1>
          </div>
        </Link>

        {/* Desktop Menu - Hidden on small screens */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  active
                    ? "text-white bg-gradient-to-r from-secondary-500/20 to-primary-500/20"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-500 to-primary-500 px-5 py-2 rounded-xl font-bold text-white shadow-xl shadow-secondary-500/20 transition-all"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 top-[70px] bg-dark-900/95 backdrop-blur-2xl transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center pt-10 gap-6 h-full overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className={`text-xl font-bold transition-all ${
                  active ? "text-secondary-400 scale-110" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="mt-4 px-10 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl text-lg font-bold text-white shadow-lg shadow-secondary-500/20"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}