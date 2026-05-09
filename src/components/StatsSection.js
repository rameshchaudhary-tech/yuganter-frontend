import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function StatsSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const stats = [
    {
      number: "5000+",
      label: "Students Trained",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 mx-auto text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
      ),
      color: "from-secondary-500 to-secondary-600",
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 mx-auto text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.049 9.39c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.963z" />
        </svg>
      ),
      color: "from-yellow-500 to-yellow-600",
    },
    {
      number: "95%",
      label: "Placement Rate",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 mx-auto text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m1 8H6a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v5"
          />
        </svg>
      ),
      color: "from-secondary-500 to-secondary-600",
    },
    {
      number: "50+",
      label: "Industry Experts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 mx-auto text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.25 12.083 12.083 0 015.84 10.578L12 14z"
          />
        </svg>
      ),
      color: "from-primary-500 to-primary-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by thousands of students and recognized by industry leaders
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                {/* Icon */}
                <div className="mb-3">{stat.icon}</div>

                {/* Number */}
                <div
                  className={`text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-gray-300 font-semibold text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
