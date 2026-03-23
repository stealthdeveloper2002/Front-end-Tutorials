function validateForm() {
    const enrollmentNo = document.getElementById('enrollment_no').value.trim();
    const studentName = document.getElementById('student_name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const mobileNo = document.getElementById('mobile_no').value.trim();
    const email = document.getElementById('email').value.trim();

    if (enrollmentNo === "") {
        alert("Enrollment No. is required.");
        return false;
    }

    if (studentName === "") {
        alert("Student's Name is required.");
        return false;
    }

    if (dob === "") {
        alert("Date of Birth is required.");
        return false;
    }

    if (mobileNo === "" || !/^\d{10}$/.test(mobileNo)) {
        alert("A valid 10-digit Mobile No. is required.");
        return false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("A valid Email is required.");
        return false;
    }

    return true;
}