document.addEventListener("DOMContentLoaded", function () {
    const classForm = document.getElementById("class-form");
    const classList = document.getElementById("class-list-items");

    classForm.addEventListener("submit", function (e) {
        e.preventDefault();

    
        const classTimings = document.getElementById("class-timings").value;
        const schedule = document.getElementById("schedule").value;
        const teacherName = document.getElementById("teacher-name").value;
        const sectionName = document.getElementById("section-name").value;
        const courseName = document.getElementById("course-name").value;
        const batchNumber = document.getElementById("batch-number").value;

       
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Class Timings:</strong> ${classTimings}<br>
            <strong>Schedule of Classes:</strong> ${schedule}<br>
            <strong>Teacher's Name:</strong> ${teacherName}<br>
            <strong>Section Name:</strong> ${sectionName}<br>
            <strong>Course Name:</strong> ${courseName}<br>
            <strong>Batch Number:</strong> ${batchNumber}
        `;

    
        classList.appendChild(listItem);


        classForm.reset();
    });
});
