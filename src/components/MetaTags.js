import { useEffect, useMemo } from "react";
import { useLocation, matchPath } from "react-router-dom";

const SITE_URL = "https://www.yugantartechnologies.com";
const DEFAULT_TITLE = "YugAntar Technologies | IT Training & Software Solutions";
const DEFAULT_DESCRIPTION =
  "YugAntar Technologies Ahmedabad - Leading IT training institute offering web development, mobile app development, software solutions, and digital marketing services with placement support.";
const DEFAULT_IMAGE = "https://www.yugantartechnologies.com/YugAntar_Technologies.png";
const DEFAULT_KEYWORDS = "IT Training Institute Ahmedabad, Best IT Training Institute Ahmedabad, Software Training Institute Ahmedabad, Professional IT Training Institute Ahmedabad, Job Oriented IT Courses Ahmedabad, Skill Development Institute Ahmedabad, Practical IT Training Ahmedabad, IT Courses with Internship Ahmedabad, IT Training with Placement Assistance, UI UX Design Course Ahmedabad, UI UX Design Training Ahmedabad, UI UX Design Certification Course, UI UX Design Institute Ahmedabad, UI UX Design Course Navrangpura, UI UX Design with Internship Ahmedabad, Figma Course Ahmedabad, UX Research Training Ahmedabad, UI Designer Training Ahmedabad, MERN Stack Development Course Ahmedabad, MERN Stack Training Ahmedabad, Full Stack Development Course Ahmedabad, Full Stack Developer Training Ahmedabad, React JS Training Ahmedabad, Node JS Training Ahmedabad, MongoDB Training Ahmedabad, Web Development Course Ahmedabad, Full Stack Course with Internship Ahmedabad, Digital Marketing Course Ahmedabad, Digital Marketing Training Ahmedabad, SEO Training Ahmedabad, Social Media Marketing Course Ahmedabad, Google Ads Training Ahmedabad, Performance Marketing Course Ahmedabad, Digital Marketing Certification Course, Digital Marketing with Internship Ahmedabad, IT Internship in Ahmedabad, Software Development Internship Ahmedabad, UI UX Design Internship Ahmedabad, MERN Stack Internship Ahmedabad, Full Stack Internship Ahmedabad, Digital Marketing Internship Ahmedabad, SEO Internship Ahmedabad, Web Development Internship Ahmedabad, Internship with Certificate Ahmedabad, Internship with Live Projects Ahmedabad, Internship for Students Ahmedabad, Internship for Freshers Ahmedabad, Paid Internship Ahmedabad, Training and Internship Institute Ahmedabad, Professional Internship Program Ahmedabad, Industry Based Internship Ahmedabad, Career Oriented IT Training Ahmedabad, Practical Skill Development Course Ahmedabad, IT Training Institute Navrangpura, Internship Institute Navrangpura Ahmedabad, Software Course in Navrangpura Ahmedabad";

const routeMeta = [
  {
    path: "/",
    title: "YugAntar Technologies Ahmedabad - Best IT Training & Development Company",
    description:
      "YugAntar Technologies Ahmedabad offers expert web development, mobile app development, software solutions, and digital marketing services for businesses and students.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/courses",
    title: "IT Courses Ahmedabad - YugAntar Technologies",
    description:
      "Explore IT courses in Ahmedabad: Full stack, Python, Java, Data Science, UI/UX, Mobile App Development, and Digital Marketing with hands-on projects.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/courses/full-stack-mern",
    title: "Full Stack Development (MERN) Course - YugAntar Technologies",
    description:
      "Master the MERN stack (MongoDB, Express, React, Node.js) with live projects and placement support at YugAntar Technologies.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/courses/python-development",
    title: "Python Development Course - YugAntar Technologies",
    description:
      "Learn Python programming, Django, web scraping, and data analysis with hands-on projects and expert mentorship.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/courses/java-full-stack",
    title: "Java Full Stack Course - YugAntar Technologies",
    description:
      "Comprehensive Java Full Stack training with Spring Boot, Hibernate, and enterprise project experience.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/courses/ui-ux-design",
    title: "UI/UX Design Course - YugAntar Technologies",
    description:
      "Become a UI/UX designer with industry-driven training in Figma, prototyping, user research, and portfolio creation.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/courses/data-science-ai-ml",
    title: "Data Science & AI/ML Course - YugAntar Technologies",
    description:
      "Learn data science, machine learning, and AI with Python, data visualization, and real-world projects.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/courses/mobile-app-development",
    title: "Mobile App Development Course - YugAntar Technologies",
    description:
      "Build Android and iOS apps using React Native and modern mobile development tools.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/courses/digital-marketing",
    title: "Digital Marketing Course - YugAntar Technologies",
    description:
      "Learn SEO, social media marketing, Google Ads, and growth strategies for businesses.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/services",
    title: "IT & Software Services - YugAntar Technologies",
    description:
      "Web development, mobile apps, custom software solutions and digital marketing services from an experienced Ahmedabad IT company.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/blog",
    title: "Tech Blog - YugAntar Technologies",
    description:
      "Tech insights, SEO tips, and career guidance from YugAntar Technologies.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/backlink-guide",
    title: "Backlink Guide - YugAntar Technologies",
    description:
      "Learn how to build high-quality backlinks and improve your website's organic search visibility.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/internship",
    title: "Internship Program - YugAntar Technologies",
    description:
      "Apply for software development internships with real projects, mentorship, and placement support.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/about",
    title: "About YugAntar Technologies - IT Training & Development",
    description:
      "Learn more about YugAntar Technologies, our mission, values, and track record delivering quality IT training and software services.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/contact",
    title: "Contact YugAntar Technologies - Get a Free Consultation",
    description:
      "Get in touch with YugAntar Technologies for training, software development, and digital marketing services.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/attendance",
    title: "Attendance - YugAntar Technologies",
    description:
      "Attendance tracking and management for students at YugAntar Technologies.",
    image: DEFAULT_IMAGE,
    noindex: true,
  },
  {
    path: "/registration",
    title: "Student Registration - YugAntar Technologies",
    description:
      "Register for courses and training programs at YugAntar Technologies.",
    image: DEFAULT_IMAGE,
    noindex: true,
  },
  {
    path: "/admin",
    title: "Admin - YugAntar Technologies",
    description: "Admin area for internal use.",
    image: DEFAULT_IMAGE,
    noindex: true,
  },
];

function getMetaForPath(pathname) {
  // Normalize: remove trailing slash (except root)
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const match = routeMeta.find((r) => matchPath({ path: r.path, end: true }, normalized));
  return match || {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    image: DEFAULT_IMAGE,
  };
}

export default function MetaTags() {
  const location = useLocation();
  const normalizedPath = location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, "");
  const { title, description, image, noindex } = useMemo(
    () => getMetaForPath(normalizedPath),
    [normalizedPath]
  );

  const canonical = `${SITE_URL}${location.pathname}`;

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "YugAntar Technologies",
      url: SITE_URL,
      logo: `${SITE_URL}/YugAntar_Technologies.png`,
      sameAs: [
        "https://www.facebook.com/YugAntartechnologies",
        "https://www.instagram.com/YugAntartechnologies",
        "https://www.linkedin.com/company/YugAntartechnologies"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-6355582605",
        contactType: "customer service",
        areaServed: "IN"
      }
    }),
    []
  );

  useEffect(() => {
    document.title = title;

    const setMetaTag = (attrName, attrValue, content) => {
      let tag = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", DEFAULT_KEYWORDS);
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    let canonicalTag = document.head.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonical);

    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonical);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:site_name", "YugAntar Technologies");

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    const jsonLdId = "meta-tags-jsonld";
    let jsonLdTag = document.head.querySelector(`script#${jsonLdId}`);
    if (!jsonLdTag) {
      jsonLdTag = document.createElement("script");
      jsonLdTag.setAttribute("type", "application/ld+json");
      jsonLdTag.setAttribute("id", jsonLdId);
      document.head.appendChild(jsonLdTag);
    }
    jsonLdTag.textContent = JSON.stringify(structuredData);
  }, [title, description, image, canonical, noindex, structuredData]);

  return null;
}
