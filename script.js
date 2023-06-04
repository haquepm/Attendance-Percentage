function getDetails(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  var usn = document.getElementById("usnInput").value;

  // Perform validation or data retrieval logic here

  // Example: Retrieve percentage and fine amount from a database or API
  var percentage = 85; // Replace with actual retrieval logic
  var fineAmount = 500; // Replace with actual retrieval logic

  // Display the result
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Attendance Percentage: " + percentage + "%<br>"
                     + "Fine Amount: $" + fineAmount;
}