<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "premsingh";
$dbname = "sports_manage";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the form
$email = $_POST['email'];
$selectedQuery = $_POST['selectedQuery'];
$feedbackText = $_POST['feedbackText'];

// Use prepared statement to insert data into the database
$stmt = $conn->prepare("INSERT INTO user_feed(email, selectedQuery, feedbackText) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $email, $selectedQuery, $feedbackText);

if ($stmt->execute()) {
    echo "Feedback submitted successfully.";
} else {
    echo "Error: " . $stmt->error;
}

// Close the prepared statement and the database connection
$stmt->close();
$conn->close();
?>
