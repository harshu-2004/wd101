function validateForm() {
  // Your existing date validation code
  // ...

  // Validate email
  var emailInput = document.getElementById("email");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return false; // Prevent form submission
  }

  // Other validations if needed...

  // If all validations pass, continue with form submission
  updateTable();
  return true;
}

function updateTable() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var acceptTerms = document.getElementById("acceptTerms").checked;

  var tableBody = document.getElementById("entriesTableBody");
  var newRow = tableBody.insertRow(tableBody.rows.length);
  newRow.insertCell(0).textContent = name;
  newRow.insertCell(1).textContent = email;
  newRow.insertCell(2).textContent = password;
  newRow.insertCell(3).textContent = dob;
  newRow.insertCell(4).textContent = acceptTerms ? "Yes" : "No";
}
