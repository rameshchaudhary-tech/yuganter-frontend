import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Code, PenTool, BarChart3 } from "lucide-react";
import axios from "axios";
import BASE_URL from "../BASEURL";

export default function HeroSection() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/hero`);

      if (res.data && res.data.success) {
        setHero(res.data.data);
      }
    } catch (error) {
      console.log("❌ Hero Fetch Error:", error);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero?.backgroundImage || "https://images.unsplash.com/photo-1519389950473-47ba0277781c"})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl text-white">

          <p className="text-secondary-400 font-semibold tracking-widest uppercase mb-3">
            {hero?.welcomeText || "WELCOME TO"}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            {hero?.mainHeading || "Build Your Tech Career With"}{" "}
            <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
              {hero?.highlightedText || "YugAntar Technologies"}
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {hero?.subHeading ||
              "YugAntar Technologies is a modern IT training institute focused on building real-world skills."}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="bg-gradient-to-r from-secondary-500 to-primary-500 px-7 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Explore Courses
            </Link>

            <Link
              to="/about"
              className="border border-white/40 px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {(hero?.cards || [
            { title: "MERN Stack Development", subtitle: "Become a Developer in", icon: "code" },
            { title: "UI / UX Designing", subtitle: "Learn Professional", icon: "design" },
            { title: "Digital Marketing", subtitle: "Start Your Career In", icon: "marketing" },
          ]).map((card, index) => {

            const icons = {
              code: <Code className="text-indigo-400" size={30} />,
              design: <PenTool className="text-pink-400" size={30} />,
              marketing: <BarChart3 className="text-green-400" size={30} />,
            };

            return (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex items-center gap-4 hover:scale-105 transition">

                <div className="bg-white/10 p-3 rounded-lg">
                  {icons[card.icon] || <Code />}
                </div>

                <div>
                  <h3 className="text-gray-200 text-sm">
                    {card.subtitle}
                  </h3>
                  <p className="text-white font-semibold text-lg">
                    {card.title}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}