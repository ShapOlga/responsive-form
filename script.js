// Get the form elements
var form = document.querySelector(".container form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var country = document.getElementById("country");
var subject = document.getElementById("subject");

// Add an event listener for submitting the form
form.addEventListener("submit", function(event) {
  // Prevent the default action
  event.preventDefault();
  // Validate the input
  if (fname.value == ""  lname.value == ""  subject.value == "") {
    // Show an error message
    alert("Please fill in all the required fields.");
  } else {
    // Send the form data to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "action_page.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("firstname=" + fname.value + "&lastname=" + lname.value + "&country=" + country.value + "&subject=" + subject.value);
    // Show a success message
    alert("Thank you for your message. We will get back to you soon.");
    // Clear the form
    form.reset();
  }
});
