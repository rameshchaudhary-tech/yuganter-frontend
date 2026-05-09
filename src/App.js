import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Internship from './pages/Internship';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BacklinkGuide from './pages/BacklinkGuide';

import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminInternshipList from './admin/AdminInternshipList';
import AdminCourseInquiries from './admin/AdminCourseInquiries';
import AdminGeneralInquiries from './admin/AdminGeneralInquiries';
import AdminServiceInquiries from './admin/AdminServiceInquiries';
import AdminAttendance from './admin/AdminAttendance';
import AdminStudents from './admin/AdminStudents';
import AdminCourses from "./admin/AdminCourses";
import AdminServices from "./admin/AdminServices";
import AdminAnalytics from "./admin/AdminAnalytics";
import CourseForm from "./admin/CourseForm";


import Attendance from './pages/Attendance';
import StudentRegistration from './components/StudentRegistration';
import ScrollToTop from './components/ScrollTop';
import EditCourse from "./pages/EditCourse";
import ServiceForm from "./pages/ServiceForm";

// ✅ ONLY THIS FOR ALL COURSES
import CourseDetail from './pages/CourseDetail';

function App() {
    return ( <
        Router >

        <
        ScrollToTop / >

        <
        div className = "min-h-screen flex flex-col bg-white text-gray-800" >

        <
        Routes >

        { /* PUBLIC */ } <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/courses"
        element = { < Courses / > }
        />

        { /* 🔥 MAIN IMPORTANT ROUTE */ } <
        Route path = "/courses/:slug"
        element = { < CourseDetail / > }
        />

        <
        Route path = "/services"
        element = { < Services / > }
        /> <
        Route path = "/blog"
        element = { < Blog / > }
        /> <
        Route path = "/backlink-guide"
        element = { < BacklinkGuide / > }
        /> <
        Route path = "/internship"
        element = { < Internship / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        />

        { /* ADMIN */ } <
        Route path = "/admin/login"
        element = { < AdminLogin / > }
        /> <
        Route path = "/admin"
        element = { < AdminDashboard / > }
        /> <
        Route path = "/admin/course-inquiries"
        element = { < AdminCourseInquiries / > }
        /> <
        Route path = "/admin/internships"
        element = { < AdminInternshipList / > }
        /> <
        Route path = "/admin/general-inquiries"
        element = { < AdminGeneralInquiries / > }
        /> <
        Route path = "/admin/service-inquiries"
        element = { < AdminServiceInquiries / > }
        /> <
        Route path = "/admin/attendance"
        element = { < AdminAttendance / > }
        /> <
        Route path = "/admin/students"
        element = { < AdminStudents / > }
        />

        { /* EXTRA */ } <
        Route path = "/attendance"
        element = { < Attendance / > }
        /> <
        Route path = "/registration"
        element = { < StudentRegistration / > }
        /> <
        Route path = "/admin/courses"
        element = { < AdminCourses / > }
        /> <
        Route path = "/admin/services"
        element = { < AdminServices / > }
        /> <
        Route path = "/admin/analytics"
        element = { < AdminAnalytics / > }
        /> 

        <
        Route path = "/admin/edit-course/:id"
        element = { < EditCourse / > }
        />  <
        Route path = "/admin/course-form"
        element = { < CourseForm / > }
        />  <
        Route path = "/admin/services/add"
        element = { < ServiceForm / > }
        /> <
        Route path = "/admin/services/edit/:id"
        element = { < ServiceForm / > }
        /> <
        /
        Routes >

        <
        /div>

        <
        /Router>
    );
}

export default App;