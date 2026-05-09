import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import {
  CodeBracketIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

export default function FullStackCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title =
      "Full Stack Development Course Ahmedabad - YugAntar Technologies";
  }, []);

  const course = {
    title: "Full Stack Development (MERN)",
    description:
      "Master MongoDB, Express, React, and Node.js to build modern web applications from scratch.",
    icon: <CodeBracketIcon className="w-16 h-16 text-indigo-500" />,
    duration: "3 Months",
    features: [
      "React.js & Redux",
      "Node.js & Express",
      "MongoDB Database",
      "RESTful APIs",
      "Authentication & Authorization",
      "Deployment & DevOps",
    ],
    syllabus: [
      "HTML, CSS, JavaScript Fundamentals",
      "React.js Advanced Concepts",
      "Node.js and Express Framework",
      "MongoDB Database Design",
      "API Development and Integration",
      "Authentication and Security",
      "Deployment with AWS / Vercel",
      "Project Work and Portfolio",
    ],
    prerequisites: "Basic knowledge of programming and HTML/CSS",
    technologies: [
      { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
      { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    ],
    careerOpportunities: [
      {
        title: "Full Stack Developer",
        description:
          "Build complete web applications from frontend to backend.",
        icon: <CodeBracketIcon className="w-8 h-8 text-blue-500" />,
      },
      {
        title: "MERN Stack Developer",
        description:
          "Specialize in MongoDB, Express, React, and Node.js stack.",
        icon: <CpuChipIcon className="w-8 h-8 text-green-500" />,
      },
      {
        title: "Web Application Developer",
        description:
          "Create dynamic and responsive web applications.",
        icon: <ComputerDesktopIcon className="w-8 h-8 text-purple-500" />,
      },
      {
        title: "Backend Developer",
        description:
          "Focus on server-side development and APIs.",
        icon: <DevicePhoneMobileIcon className="w-8 h-8 text-orange-500" />,
      },
    ],
    stats: [
      {
        label: "Duration",
        value: "3 Months",
        icon: <ClockIcon className="w-6 h-6 text-indigo-400" />,
      },
      {
        label: "Mode",
        value: "Online / Offline",
        icon: <ComputerDesktopIcon className="w-6 h-6 text-green-400" />,
      },
      {
        label: "Students Enrolled",
        value: "500+",
        icon: <UserGroupIcon className="w-6 h-6 text-purple-400" />,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">

      <Navbar />

      <PageHeader
  title={course.title}
  subtitle="Master Full Stack Development"
  bgImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop"
/>

      {/* <PageHeader
        title={course.title}
        subtitle="Master Full Stack Development"
      /> */}

      <main className="flex-grow py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">

          {/* Course Overview */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
              <div>{course.icon}</div>

              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {course.title}
                </h2>

                <p className="text-lg text-gray-300 max-w-2xl">
                  {course.description}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {course.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-6 bg-gray-700 rounded-xl"
                >
                  {stat.icon}

                  <div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Key Features
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {course.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg border border-gray-600"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />

                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Technologies You'll Learn
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {course.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm font-semibold text-gray-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8">
              Course Syllabus
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {course.syllabus.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg"
                >
                  <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>

                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Career Opportunities
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {course.careerOpportunities.map((opportunity, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                >
                  <div className="flex items-center gap-4 mb-3">
                    {opportunity.icon}
                    <h4 className="font-bold text-white">
                      {opportunity.title}
                    </h4>
                  </div>

                  <p className="text-gray-300">
                    {opportunity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 mb-16 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Prerequisites
            </h3>

            <p className="text-gray-300 text-lg">
              {course.prerequisites}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-indigo-600 rounded-2xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>

            <p className="text-lg mb-8 text-gray-100">
              Join thousands of students who built their careers with
              YugAntar Technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100"
              >
                Enroll Now
              </button>

              <Link
                to="/courses"
                className="px-8 py-4 border-2 border-white rounded-xl hover:bg-white/10"
              >
                Back to Courses
              </Link>

            </div>
          </div>

        </div>
      </main>

      <EnrollmentModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}