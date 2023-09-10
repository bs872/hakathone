document.addEventListener("DOMContentLoaded", function () {
    const classSelect = document.getElementById("class-select");
    const showIdCardButton = document.getElementById("show-id-card");
    const idCardPopup = document.getElementById("id-card-popup");
    const rollNumberInput = document.getElementById("roll-number-input");
    const idCardDetails = document.getElementById("id-card-details");
    const closePopupButton = document.getElementById("close-popup");

    
    showIdCardButton.addEventListener("click", function () {
        idCardPopup.style.display = "block";
    });


    closePopupButton.addEventListener("click", function () {
        idCardPopup.style.display = "none";
        rollNumberInput.value = "";
        idCardDetails.innerHTML = "";
    });

    
    rollNumberInput.addEventListener("input", function () {
      
        const rollNumber = this.value.trim();
        let student = null;
        switch (rollNumber) {
            case "1":
                student = {
                    name: " umar",
                    fatherName: "ahmad",
                 
                };
                break;
            case "2":
                student = {
                    name: "saad",
                    fatherName: "mustafa",
                   
                };
                break;
           
            default:
                break;
        }

       
        if (student) {
            idCardDetails.innerHTML = `
                <h3>${student.name}</h3>
                <p><strong>Father's Name:</strong> ${student.fatherName}</p>
                <!-- Add other student details here -->
            `;
        } else {
            idCardDetails.innerHTML = "<p>Student not found.</p>";
        }
    });
});
