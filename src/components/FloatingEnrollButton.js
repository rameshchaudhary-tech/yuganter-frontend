import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import EnrollmentModal from "./EnrollmentModal";

export default function FloatingEnrollButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Don't show on contact page
  if (location.pathname === "/contact") return null;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const defaultCourse = {
    title: "Full Stack Development (MERN)",
    icon: "💻",
    duration: "6 Months"
  };

  return (
    <>
      <button
  onClick={handleClick}
  aria-label="Quick Enroll"
  className="fixed bottom-5 right-5 z-40 
             bg-gradient-to-r from-secondary-500 to-primary-500
             hover:from-secondary-600 hover:to-primary-600
             text-white rounded-full shadow-2xl
             transition-all duration-300
             flex items-center justify-center
             w-14 h-14 sm:w-auto sm:h-auto
             sm:px-5 sm:py-3
             hover:scale-110"
>
  {/* 📱 Mobile Icon */}
  <svg
    className="w-7 h-7 sm:hidden"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 15a4 4 0 01-4 4H7a4 4 0 01-4-4V9a4 4 0 014-4h10a4 4 0 014 4v6z"
    />
  </svg>

  {/* 🖥 Desktop Icon + Text */}
  <div className="hidden sm:flex items-center gap-2 font-semibold">
    <svg
      className="w-6 h-6 group-hover:rotate-12 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
    <span>Enroll Now</span>
  </div>

  {/* 🔴 Notification Ping */}
  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
</button>


      <EnrollmentModal
        course={defaultCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => console.log("Quick enrollment successful")}
      />
    </>
  );
}
