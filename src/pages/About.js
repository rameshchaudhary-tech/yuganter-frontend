import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export default function About() {

  useEffect(() => {
    document.title = "About YugAntar Technologies Ahmedabad - Best IT Company in Navrangpura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "YugAntar Technologies Ahmedabad - Top IT company near Vijay Cross Road offering software development, web solutions, and tech services for businesses in Gujarat."
      );
    }
  }, []);

  const stats = [
    { number: "5000+", label: "Students Trained", icon: "👥" },
    { number: "4.9★", label: "Google Rating", icon: "⭐" },
    { number: "100%", label: "Placement Support", icon: "🎯" },
    { number: "50+", label: "Expert Mentors", icon: "👨‍🏫" }
  ];

  const values = [
    {
      title: "Industry First Learning",
      desc: "Skills-focused training designed for real-world IT careers, not just certificates.",
      icon: "🚀"
    },
    {
      title: "Integrity & Transparency",
      desc: "Honest guidance, realistic outcomes, and long-term student success.",
      icon: "🤝"
    },
    {
      title: "Innovation Driven",
      desc: "Curriculum aligned with modern tools, frameworks, and global tech trends.",
      icon: "💡"
    },
    {
      title: "Student-Centric Approach",
      desc: "Every student receives mentorship, confidence, and career direction.",
      icon: "🎓"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <Navbar />

      <PageHeader
        title="About YugAntar Technologies"
        subtitle="Building Skills. Creating Careers. Shaping the Next Generation."
      />

      <main className="flex-grow">

        {/* Stats Section */}
        <motion.section
          className="py-16 bg-gray-800"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto px-6">

            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Our Impact in Numbers
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="text-center bg-gray-700 rounded-2xl p-6 hover:bg-gray-600 transition"
                  variants={fadeInUp}
                >
                  <div className="text-4xl mb-2">{s.icon}</div>
                  <h3 className="text-3xl font-bold">{s.number}</h3>
                  <p className="text-gray-300 mt-1">{s.label}</p>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.section>


        {/* Story Section */}
        <motion.section
          className="py-20 bg-gray-900"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >

          <div className="max-w-4xl mx-auto px-6">

            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Our Story — A New Era Begins
            </motion.h2>

            <div className="space-y-8">

              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                  🌟
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    The Beginning
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    YugAntar Technologies was founded with a vision to bridge
                    the gap between academic learning and real-world industry
                    requirements. Many students graduate with theoretical
                    knowledge but lack practical exposure needed in the IT
                    industry.
                  </p>
                </div>
              </motion.div>


              <motion.div
                className="flex items-start space-x-4"
                variants={fadeInUp}
              >

                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                  🔄
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    The Transformation
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    The name <strong>YugAntar</strong> represents a new era
                    of transformation. Our mission is to redefine technical
                    education by providing industry-oriented training,
                    real project experience, and mentorship from experienced
                    professionals.
                  </p>
                </div>

              </motion.div>

            </div>

          </div>
        </motion.section>



        {/* Mission Vision */}
        <motion.section
          className="py-20 bg-gray-900"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >

          <div className="max-w-7xl mx-auto px-6">

            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              Our Mission & Vision
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">


              <motion.div
                className="bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
                variants={fadeInUp}
              >

                <div className="text-6xl mb-4">🎯</div>

                <h3 className="text-2xl font-bold mb-4 text-indigo-400">
                  Our Mission
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  To empower students with practical IT skills, industry
                  confidence, and career clarity through expert mentorship
                  and real-world project experience.
                </p>

              </motion.div>

              <motion.div
  className="bg-gradient-to-r from-secondary-500 to-primary-500 p-8 rounded-3xl text-white shadow-lg hover:shadow-2xl transition"
  variants={fadeInUp}
>
  <div className="text-6xl mb-4">🚀</div>

  <h3 className="text-2xl font-bold mb-4">
    Our Vision
  </h3>

  <p className="leading-relaxed">
    To become India's most trusted IT training institute by
    producing globally competitive professionals equipped
    with practical skills and ethical values.
  </p>
</motion.div>

            </div>
          </div>
        </motion.section>



        {/* Core Values */}
        <motion.section
          className="py-20 bg-gray-900"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >

          <div className="max-w-7xl mx-auto px-6">

            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={fadeInUp}
            >
              What Makes Us Different
            </motion.h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {values.map((v, i) => (

                <motion.div
                  key={i}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition hover:scale-105"
                  variants={fadeInUp}
                >

                  <div className="text-4xl mb-4">{v.icon}</div>

                  <h4 className="font-bold text-lg mb-3">
                    {v.title}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {v.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>
        </motion.section>



        {/* Team Philosophy */}
        <motion.section
          className="py-20 bg-gray-800"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >

          <div className="max-w-4xl mx-auto px-6 text-center">

            <motion.h2
              className="text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              Five Minds. One Mission.
            </motion.h2>

            <motion.p
              className="text-gray-300 leading-relaxed text-lg"
              variants={fadeInUp}
            >

              Our team combines expertise in technology, training,
              and industry practices to create a learning ecosystem
              where students gain confidence, practical knowledge,
              and career-ready skills.

              <br /><br />

              <strong className="text-indigo-400">
                At YugAntar Technologies, our mission is to transform
                passionate learners into skilled IT professionals
                ready for the global industry.
              </strong>

            </motion.p>


            <motion.div
              className="mt-8 flex justify-center space-x-4"
              variants={fadeInUp}
            >

              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                🧠
              </div>

              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                👥
              </div>

              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                🎯
              </div>

            </motion.div>

          </div>

        </motion.section>

      </main>

      <Footer />

    </div>
  );
}