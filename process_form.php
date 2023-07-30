<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Compose the email message
    $to = "charles.oestreicher@duke.edu"; // Replace this with your email address
    $subjectLine = "Contact Form Submission: $subject";
    $emailBody = "Name: $fname $lname\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Message:\n$message";

    // Send the email
    $headers = "From: $email";
    if (mail($to, $subjectLine, $emailBody, $headers)) {
        // Email sent successfully
        echo "Thank you for contacting us! Your email has been sent.";
    } else {
        // Email failed to send
        echo "There was an error sending your email. Please try again later.";
    }
}
?>
