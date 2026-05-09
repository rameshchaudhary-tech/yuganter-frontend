import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import QRCode from "qrcode";
import * as XLSX from "xlsx";
import { studentsAPI } from "../services/studentsAPI";
import { attendanceAPI } from "../services/attendanceAPI";

const AdminAttendance = () => {
    const navigate = useNavigate();

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [students, setStudents] = useState([]);

    const [selectedStudent, setSelectedStudent] = useState("");
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    const [selectedDate, setSelectedDate] = useState("");
    const [filterStudentId, setFilterStudentId] = useState("");

    const qrRef = useRef("");

    /* AUTH */
    useEffect(() => {
        if (!localStorage.getItem("adminLoggedIn")) {
            navigate("/admin/login");
        }
    }, [navigate]);

    /* SAFE DATA (NO ?. USED) */
    const getData = (res) => {
        if (!res) return [];

        if (Array.isArray(res)) return res;

        if (res.data) {
            if (Array.isArray(res.data)) return res.data;

            if (res.data.data && Array.isArray(res.data.data)) {
                return res.data.data;
            }
        }

        return [];
    };

    /* LOAD DATA */
    const loadData = useCallback(async() => {
        try {
            const attRes = await attendanceAPI.getAll();
            const stuRes = await studentsAPI.getAll();

            console.log("ATT RAW:", attRes);
            console.log("STU RAW:", stuRes);

            const attendanceData = getData(attRes);
            const studentData = getData(stuRes);

            setAttendanceRecords(attendanceData);
            setStudents(studentData);

        } catch (err) {
            console.log("LOAD ERROR:", err);
            setAttendanceRecords([]);
            setStudents([]);
        }
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    /* QR GENERATE */
    const generateQRCode = async() => {
        if (!selectedStudent) return;

        const student = students.find(s => s._id === selectedStudent);
        if (!student) return;

        const data =
            "ATTENDANCE:" +
            student.name +
            ":" +
            (student.email || student.mobile || student._id);

        qrRef.current = data;

        const url = await QRCode.toDataURL(data);
        setQrCodeUrl(url);
    };

    /* FILTER FIX */
    const filteredRecords = attendanceRecords.filter((r) => {

        let ok = true;

        // DATE FILTER
        if (selectedDate) {
            const recordDate = new Date(r.date || r.qrTimestamp)
                .toISOString()
                .slice(0, 10);

            ok = ok && recordDate === selectedDate;
        }

        // STUDENT FILTER
        if (filterStudentId) {
            const st = students.find(s => s._id === filterStudentId);

            if (st) {
                ok =
                    ok &&
                    (
                        r.studentId === st.email ||
                        r.studentId === st.mobile ||
                        r.studentId === st._id
                    );
            }
        }

        return ok;
    });

    /* EXCEL */
    const downloadExcel = () => {
        const data = filteredRecords.map((r) => ({
            Name: r.studentName || "",
            ID: r.studentId || "",
            Time: r.date || r.qrTimestamp || ""
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(wb, ws, "Attendance");
        XLSX.writeFile(wb, "attendance.xlsx");
    };

    return ( <
            div className = "min-h-screen flex bg-gray-100" >

            <
            AdminSidebar sidebarOpen = { sidebarOpen }
            setSidebarOpen = { setSidebarOpen }
            />

            <
            div className = "flex-1 p-6" >

            <
            h1 className = "text-3xl font-bold mb-6" > 📊Attendance Dashboard <
            /h1>

            { /* QR SECTION */ } <
            div className = "bg-white p-4 rounded shadow mb-5 flex gap-3 items-center" >

            <
            select className = "border p-2"
            value = { selectedStudent }
            onChange = {
                (e) => setSelectedStudent(e.target.value)
            } >
            <
            option value = "" > Select Student < /option>

            {
                students.map((s) => ( <
                    option key = { s._id }
                    value = { s._id } > { s.name } <
                    /option>
                ))
            } <
            /select>

            <
            button onClick = { generateQRCode }
            className = "bg-blue-600 text-white px-4 py-2" >
            Generate QR <
            /button>

            {
                qrCodeUrl && ( <
                    img src = { qrCodeUrl }
                    alt = "QR"
                    className = "w-28 h-28 border" /
                    >
                )
            } <
            /div>

            { /* FILTER */ } <
            div className = "bg-white p-4 mb-5 flex gap-3" >

            <
            input type = "date"
            className = "border p-2"
            value = { selectedDate }
            onChange = {
                (e) => setSelectedDate(e.target.value)
            }
            />

            <
            select className = "border p-2"
            value = { filterStudentId }
            onChange = {
                (e) => setFilterStudentId(e.target.value)
            } >
            <
            option value = "" > All Students < /option> {
            students.map((s) => ( <
                option key = { s._id }
                value = { s._id } > { s.name } <
                /option>
            ))
        } <
        /select>

    <
    button onClick = {
        () => {
            setSelectedDate("");
            setFilterStudentId("");
        }
    }
    className = "bg-gray-500 text-white px-3" >
        Clear <
        /button>

    <
    button onClick = { downloadExcel }
    className = "bg-green-600 text-white px-4 ml-auto" >
        Download Excel <
        /button> < /
        div >

        { /* TABLE */ } <
        div className = "bg-white shadow rounded overflow-x-auto" >

        <
        table className = "w-full text-sm" >

        <
        thead className = "bg-blue-600 text-white" >
        <
        tr >
        <
        th className = "p-3 text-left" > Name < /th> <
    th className = "p-3 text-left" > ID < /th> <
    th className = "p-3 text-left" > Time < /th> < /
        tr > <
        /thead>

    <
    tbody >

        {
            filteredRecords.length > 0 ? (
                filteredRecords.map((r, i) => ( <
                    tr key = { i }
                    className = "border-b hover:bg-gray-100" >

                    <
                    td className = "p-3" > { r.studentName } < /td> <
                    td className = "p-3" > { r.studentId } < /td> <
                    td className = "p-3" > { new Date(r.date || r.qrTimestamp).toLocaleString() } <
                    /td>

                    <
                    /tr>
                ))
            ) : ( <
                tr >
                <
                td colSpan = "3"
                className = "p-5 text-center text-gray-500" >
                No Attendance Records Found <
                /td> < /
                tr >
            )
        }

    <
    /tbody>

    <
    /table>

    <
    /div>

    <
    /div> < /
    div >
);
};

export default AdminAttendance;