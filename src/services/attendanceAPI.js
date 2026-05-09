import BASE_URL from "../BASEURL";

/**
 * Attendance API Service
 */
export const attendanceAPI = {
    // GET ALL ATTENDANCE
    getAll: async() => {
        try {
            const res = await fetch(
                `${BASE_URL}/api/attendances/all`
            );

            const data = await res.json();
            return data;

        } catch (error) {
            console.log("Attendance API Error:", error);
            return { success: false, data: [] };
        }
    },

    // MARK ATTENDANCE (QR SCAN)
    mark: async(payload) => {
        try {
            const res = await fetch(
                `${BASE_URL}/api/attendances/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            return await res.json();

        } catch (error) {
            console.log("Mark Attendance Error:", error);
            return { success: false };
        }
    },
};