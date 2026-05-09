import React, { useState } from "react";
import "../styles/StudentRegistration.css";
import BASE_URL from "../BASEURL.js";
import Navbar from "./Navbar.js";

const InternshipRegistrationForm = () => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            mobile: "",
            dateOfBirth: "",
            gender: "",
            type: "",
            address: {
                city: "",
                state: ""
            },
            collegeName: "",
            course: "",
            branch: "",
            currentSemester: "",
            passingYear: "",
            cgpa: "",
            internshipType: "",
            internshipDuration: "",
            preferredStartDate: "",
            mode: "",
        });

        const [errors, setErrors] = useState({});
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);

        const handleChange = (e) => {
            const { name, value } = e.target;

            if (name === "city" || name === "state") {
                setFormData({
                    ...formData,
                    address: {
                        ...formData.address,
                        [name]: value
                    }
                });
                // Clear error for this field
                if (errors[name]) {
                    const newErrors = {...errors };
                    delete newErrors[name];
                    setErrors(newErrors);
                }
            } else {
                setFormData({...formData, [name]: value });
                // Clear error for this field
                if (errors[name]) {
                    const newErrors = {...errors };
                    delete newErrors[name];
                    setErrors(newErrors);
                }
            }
        };

        const validateForm = () => {
            const newErrors = {};

            if (!formData.name.trim()) newErrors.name = "Full name is required";
            if (!formData.email.trim()) newErrors.email = "Email is required";
            if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
            if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
            if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ""))) newErrors.mobile = "Please enter a valid 10-digit mobile number";
            if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
            if (!formData.gender) newErrors.gender = "Please select your gender";
            if (!formData.type) newErrors.type = "Please select type";
            if (!formData.address.city.trim()) newErrors.city = "City is required";
            if (!formData.address.state.trim()) newErrors.state = "State is required";
            if (!formData.collegeName.trim()) newErrors.collegeName = "College name is required";
            if (!formData.course) newErrors.course = "Please select your course";
            if (!formData.branch) newErrors.branch = "Please select your branch";
            if (!formData.currentSemester) newErrors.currentSemester = "Please select your semester";
            if (!formData.passingYear) newErrors.passingYear = "Passing year is required";
            if (!formData.cgpa) newErrors.cgpa = "CGPA is required";
            if (formData.cgpa && (parseFloat(formData.cgpa) < 0 || parseFloat(formData.cgpa) > 10)) {
                newErrors.cgpa = "CGPA must be between 0 and 10";
            }
            if (!formData.internshipType) newErrors.internshipType = "Please select internship type";
            if (!formData.internshipDuration) newErrors.internshipDuration = "Please select duration";
            if (!formData.preferredStartDate) newErrors.preferredStartDate = "Please select start date";
            if (!formData.mode) newErrors.mode = "Please select work mode";

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };

        const handleSubmit = async(e) => {
            e.preventDefault();

            if (!validateForm()) {
                return;
            }

            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/api/students`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log("Form submitted:", formData);
                    setSuccess(true);

                    // Reset form
                    setFormData({
                        name: "",
                        email: "",
                        mobile: "",
                        dateOfBirth: "",
                        gender: "",
                        type: "",
                        address: {
                            city: "",
                            state: ""
                        },
                        collegeName: "",
                        course: "",
                        branch: "",
                        currentSemester: "",
                        passingYear: "",
                        cgpa: "",
                        internshipType: "",
                        internshipDuration: "",
                        preferredStartDate: "",
                        mode: "",
                    });

                    // Hide success message after 3 seconds
                    setTimeout(() => setSuccess(false), 3000);
                } else {
                    console.error("Error submitting form:", response.statusText);
                    // Optionally, set an error state here
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                // Optionally, set an error state here
            } finally {
                setLoading(false);
            }
        };

        const handleReset = () => {
            setFormData({
                name: "",
                email: "",
                mobile: "",
                dateOfBirth: "",
                gender: "",
                type: "",
                address: {
                    city: "",
                    state: ""
                },
                collegeName: "",
                course: "",
                branch: "",
                currentSemester: "",
                passingYear: "",
                cgpa: "",
                internshipType: "",
                internshipDuration: "",
                preferredStartDate: "",
                mode: "",
            });
            setErrors({});
        };

        return ( <
                >
                <
                Navbar / >
                <
                div className = "registration-container" >
                <
                div className = "registration-wrapper" >
                <
                div className = "form-header" >
                <
                h1 > Internship Registration Form < /h1> <
                p > Fill in all the required information to apply
                for internship opportunities < /p> < /
                div >

                {
                    success && ( <
                        div className = "success-alert" >
                        <
                        span className = "success-icon" > ✓ < /span> <
                        div >
                        <
                        strong > Registration Successful! < /strong> <
                        p > We will contact you shortly with more details. < /p> < /
                        div > <
                        /div>
                    )
                }

                <
                form > { /* Section 1: Personal Information */ } <
                div className = "form-section" >
                <
                h3 className = "section-title" > Personal Information < /h3>

                <
                div className = "form-grid-2" >
                <
                div className = "form-group" >
                <
                label htmlFor = "name" > Full Name * < /label> <
                input type = "text"
                id = "name"
                name = "name"
                value = { formData.name }
                onChange = { handleChange }
                placeholder = "Enter your full name"
                className = { `form-input ${errors.name ? "error" : ""}` }
                /> {
                errors.name && < span className = "error-text" > { errors.name } < /span>} < /
                div >

                <
                div className = "form-group" >
                <
                label htmlFor = "email" > Email Address * < /label> <
                input type = "email"
                id = "email"
                name = "email"
                value = { formData.email }
                onChange = { handleChange }
                placeholder = "your.email@example.com"
                className = { `form-input ${errors.email ? "error" : ""}` }
                /> {
                errors.email && < span className = "error-text" > { errors.email } < /span>} < /
                div >

                <
                div className = "form-group" >
                <
                label htmlFor = "mobile" > Mobile Number * < /label> <
                input type = "tel"
                id = "mobile"
                name = "mobile"
                value = { formData.mobile }
                onChange = { handleChange }
                placeholder = "10-digit mobile number"
                maxLength = "10"
                className = { `form-input ${errors.mobile ? "error" : ""}` }
                /> {
                errors.mobile && < span className = "error-text" > { errors.mobile } < /span>} < /
                div >

                <
                div className = "form-group" >
                <
                label htmlFor = "dateOfBirth" > Date of Birth * < /label> <
                input type = "date"
                id = "dateOfBirth"
                name = "dateOfBirth"
                value = { formData.dateOfBirth }
                onChange = { handleChange }
                className = { `form-input ${errors.dateOfBirth ? "error" : ""}` }
                /> {
                errors.dateOfBirth && < span className = "error-text" > { errors.dateOfBirth } < /span>} < /
                div >

                <
                div className = "form-group" >
                <
                label htmlFor = "gender" > Gender * < /label> <
                select id = "gender"
                name = "gender"
                value = { formData.gender }
                onChange = { handleChange }
                className = { `form-input ${errors.gender ? "error" : ""}` } >
                <
                option value = "" > Select Gender < /option> <
                option value = "Male" > Male < /option> <
                option value = "Female" > Female < /option> <
                option value = "Other" > Other < /option> < /
                select > {
                    errors.gender && < span className = "error-text" > { errors.gender } < /span>} < /
                    div >

                    <
                    div className = "form-group" >
                    <
                    label htmlFor = "type" > Internship Type * < /label> <
                    select
                    id = "type"
                    name = "type"
                    value = { formData.type }
                    onChange = { handleChange }
                    className = { `form-input ${errors.type ? "error" : ""}` } >
                    <
                    option value = "" > Select Type < /option> <
                    option value = "Part Time - 1 Hours" > Part Time - 1 Hours < /option> <
                    option value = "Regular - 2/3 Hours" > Regular - 2 / 3 Hours < /option> < /
                    select > {
                        errors.type && < span className = "error-text" > { errors.type } < /span>} < /
                        div > <
                        /div> < /
                        div >

                        { /* Section 2: Address */ } <
                        div className = "form-section" >
                        <
                        h3 className = "section-title" > Address < /h3>

                        <
                        div className = "form-grid-2" >
                        <
                        div className = "form-group" >
                        <
                        label htmlFor = "city" > City * < /label> <
                        input
                        type = "text"
                        id = "city"
                        name = "city"
                        value = { formData.address.city }
                        onChange = { handleChange }
                        placeholder = "Enter your city"
                        className = { `form-input ${errors.city ? "error" : ""}` }
                        /> {
                        errors.city && < span className = "error-text" > { errors.city } < /span>} < /
                        div >

                        <
                        div className = "form-group" >
                        <
                        label htmlFor = "state" > State * < /label> <
                        input
                        type = "text"
                        id = "state"
                        name = "state"
                        value = { formData.address.state }
                        onChange = { handleChange }
                        placeholder = "Enter your state"
                        className = { `form-input ${errors.state ? "error" : ""}` }
                        /> {
                        errors.state && < span className = "error-text" > { errors.state } < /span>} < /
                        div > <
                        /div> < /
                        div >

                        { /* Section 3: College Information */ } <
                        div className = "form-section" >
                        <
                        h3 className = "section-title" > College Information < /h3>

                        <
                        div className = "form-grid-2" >
                        <
                        div className = "form-group" >
                        <
                        label htmlFor = "collegeName" > College Name * < /label> <
                        input
                        type = "text"
                        id = "collegeName"
                        name = "collegeName"
                        value = { formData.collegeName }
                        onChange = { handleChange }
                        placeholder = "Enter your college name"
                        className = { `form-input ${errors.collegeName ? "error" : ""}` }
                        /> {
                        errors.collegeName && < span className = "error-text" > { errors.collegeName } < /span>} < /
                        div >

                        <
                        div className = "form-group" >
                        <
                        label htmlFor = "course" > Course * < /label> <
                        select
                        id = "course"
                        name = "course"
                        value = { formData.course }
                        onChange = { handleChange }
                        className = { `form-input ${errors.course ? "error" : ""}` } >
                        <
                        option value = "" > Select Course < /option> <
                        option value = "btech" > B.Tech < /option> <
                        option value = "mtech" > M.Tech < /option> <
                        option value = "bca" > BCA < /option> <
                        option value = "mca" > MCA < /option> <
                        option value = "bsc" > B.Sc < /option> <
                        option value = "msc" > M.Sc < /option> <
                        option value = "diploma" > DIPLOMA < /option> < /
                        select > {
                            errors.course && < span className = "error-text" > { errors.course } < /span>} < /
                            div >

                            <
                            div className = "form-group" >
                            <
                            label htmlFor = "branch" > Branch * < /label> <
                            select
                            id = "branch"
                            name = "branch"
                            value = { formData.branch }
                            onChange = { handleChange }
                            className = { `form-input ${errors.branch ? "error" : ""}` } >
                            <
                            option value = "" > Select Branch < /option> <
                            option value = "cse" > Computer Science Engineering < /option> <
                            option value = "ece" > Electronics & Communication < /option> <
                            option value = "me" > Mechanical Engineering < /option> <
                            option value = "ce" > Civil Engineering < /option> <
                            option value = "ee" > Electrical Engineering < /option> <
                            option value = "it" > Information Technology < /option> < /
                            select > {
                                errors.branch && < span className = "error-text" > { errors.branch } < /span>} < /
                                div >

                                <
                                div className = "form-group" >
                                <
                                label htmlFor = "currentSemester" > Current Semester * < /label> <
                                select
                                id = "currentSemester"
                                name = "currentSemester"
                                value = { formData.currentSemester }
                                onChange = { handleChange }
                                className = { `form-input ${errors.currentSemester ? "error" : ""}` } >
                                <
                                option value = "" > Select Semester < /option> { [1, 2, 3, 4, 5, 6, 7, 8].map(sem => ( <
                                option key = { sem }
                                value = { sem } > Semester { sem } < /option>
                            ))
                    } <
                    /select> {
                    errors.currentSemester && < span className = "error-text" > { errors.currentSemester } < /span>} < /
                    div >

                    <
                    div className = "form-group" >
                    <
                    label htmlFor = "passingYear" > Passing Year * < /label> <
                    input
                    type = "number"
                    id = "passingYear"
                    name = "passingYear"
                    value = { formData.passingYear }
                    onChange = { handleChange }
                    placeholder = "e.g., 2024"
                    className = { `form-input ${errors.passingYear ? "error" : ""}` }
                    /> {
                    errors.passingYear && < span className = "error-text" > { errors.passingYear } < /span>} < /
                    div >

                    <
                    div className = "form-group" >
                    <
                    label htmlFor = "cgpa" > CGPA * < /label> <
                    input
                    type = "number"
                    id = "cgpa"
                    name = "cgpa"
                    value = { formData.cgpa }
                    onChange = { handleChange }
                    placeholder = "0.00 - 10.00"
                    step = "0.01"
                    min = "0"
                    max = "10"
                    className = { `form-input ${errors.cgpa ? "error" : ""}` }
                    /> {
                    errors.cgpa && < span className = "error-text" > { errors.cgpa } < /span>} < /
                    div > <
                    /div> < /
                    div >

                    { /* Section 4: Internship Details */ } <
                    div className = "form-section" >
                    <
                    h3 className = "section-title" > Internship Details < /h3>

                    <
                    div className = "form-grid-2" >
                    <
                    div className = "form-group" >
                    <
                    label htmlFor = "internshipType" > Internship Type * < /label> <
                    select
                    id = "internshipType"
                    name = "internshipType"
                    value = { formData.internshipType }
                    onChange = { handleChange }
                    className = { `form-input ${errors.internshipType ? "error" : ""}` } >
                    <
                    option value = "" > Internship Course < /option> <
                    option value = "mern-stack" > Mern Stack < /option> <
                    option value = "python" > Python < /option> <
                    option value = "python-django" > Python With Django < /option> <
                    option value = "digital-marketing" > Digital Marketing < /option> <
                    option value = "java" > Java < /option> <
                    option value = "uiux-design" > UiUx Design < /option> <
                    option value = "data-science" > Data Science < /option> <
                    option value = "mobile-development" > Mobile Development < /option> < /
                    select > {
                        errors.internshipType && < span className = "error-text" > { errors.internshipType } < /span>} < /
                        div >

                        <
                        div className = "form-group" >
                        <
                        label htmlFor = "internshipDuration" > Duration * < /label> <
                        select
                        id = "internshipDuration"
                        name = "internshipDuration"
                        value = { formData.internshipDuration }
                        onChange = { handleChange }
                        className = { `form-input ${errors.internshipDuration ? "error" : ""}` } >
                        <
                        option value = "" > Select Duration < /option> <
                        option value = "1 month" > 1 Month < /option> <
                        option value = "3 months" > 3 Months < /option> <
                        option value = "6 months" > 6 Months < /option> < /
                        select > {
                            errors.internshipDuration && < span className = "error-text" > { errors.internshipDuration } < /span>} < /
                            div >

                            <
                            div className = "form-group" >
                            <
                            label htmlFor = "preferredStartDate" > Preferred Start Date * < /label> <
                            input
                            type = "date"
                            id = "preferredStartDate"
                            name = "preferredStartDate"
                            value = { formData.preferredStartDate }
                            onChange = { handleChange }
                            className = { `form-input ${errors.preferredStartDate ? "error" : ""}` }
                            /> {
                            errors.preferredStartDate && < span className = "error-text" > { errors.preferredStartDate } < /span>} < /
                            div >

                            <
                            div className = "form-group" >
                            <
                            label htmlFor = "mode" > Work Mode * < /label> <
                            select
                            id = "mode"
                            name = "mode"
                            value = { formData.mode }
                            onChange = { handleChange }
                            className = { `form-input ${errors.mode ? "error" : ""}` } >
                            <
                            option value = "" > Select Mode < /option> <
                            option value = "Online" > Online < /option> <
                            option value = "Offline" > Offline < /option> <
                            option value = "Hybrid" > Hybrid < /option> < /
                            select > {
                                errors.mode && < span className = "error-text" > { errors.mode } < /span>} < /
                                div >


                                <
                                /div> < /
                                div >

                                { /* Form Actions */ } <
                                div className = "form-actions" >
                                <
                                button
                                type = "button"
                                onClick = { handleSubmit }
                                className = "btn-submit"
                                disabled = { loading } > { loading ? "Submitting..." : "Student Registeration" } <
                                /button> <
                                button
                                type = "button"
                                onClick = { handleReset }
                                className = "btn-reset" >
                                Clear Form <
                                /button> < /
                                div > <
                                /form> < /
                                div > <
                                /div> < / >
                            );
                        };

                        export default InternshipRegistrationForm;