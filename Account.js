function toggleInput(inputId) {
    var inputField = document.getElementById(inputId);
    inputField.style.display = inputField.style.display === 'none' ? 'block' : 'none';
  }

  function updateTable() {
    // Get input values
    var newName = document.getElementById("nameInput").value;
    var newAge = document.getElementById("ageInput").value;
    var newEmail = document.getElementById("emailInput").value;
    var newPhone = document.getElementById("phoneInput").value;

    // Update table cells with new values if input is not empty and meets validation criteria
    if (newName !== "") {
      document.getElementById("nameCell").textContent = newName;
    }
    if (newAge !== "" && parseInt(newAge) >= 1) {
      document.getElementById("ageCell").textContent = newAge;
    }
    if (newEmail !== "") {
      document.getElementById("emailCell").textContent = newEmail;
    }
    if (newPhone !== "") {
      document.getElementById("phoneCell").textContent = newPhone;
    }

    // Hide input fields and show buttons
    document.getElementById("nameInput").style.display = "none";
    document.getElementById("ageInput").style.display = "none";
    document.getElementById("emailInput").style.display = "none";
    document.getElementById("phoneInput").style.display = "none";

    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("phoneInput").value = "";
  }