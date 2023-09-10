document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const studentList = document.getElementById("student-list");

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Create a new student object
        const student = {
            name: document.getElementById("name").value,
            fatherName: document.getElementById("father-name").value,
            rollNumber: document.getElementById("roll-number").value,
            contactNumber: document.getElementById("contact-number").value,
            cnicNumber: document.getElementById("cnic-number").value,
            picture: document.getElementById("picture").value,
            courseName: document.getElementById("course-name").value,
            assignedClass: document.getElementById("assigned-class").value,
        };

        
        const studentInfo = document.createElement("div");
        studentInfo.classList.add("student-info");
        studentInfo.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Father's Name:</strong> ${student.fatherName}</p>
            <p><strong>Roll Number:</strong> ${student.rollNumber}</p>
            <p><strong>Contact Number:</strong> ${student.contactNumber}</p>
            <p><strong>CNIC Number:</strong> ${student.cnicNumber}</p>
            <p><strong>Course Name:</strong> ${student.courseName}</p>
            <p><strong>Assigned Class:</strong> ${student.assignedClass}</p>
            <img src="${student.picture}" alt="Student Picture">
        `;

        studentList.appendChild(studentInfo);

        
        studentForm.reset();
    });
});
