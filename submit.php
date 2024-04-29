<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Địa chỉ email của bạn
    $to = "letienduoc5@gmail.com";

    // Tiêu đề email
    $subject = "New Form Submission";

    // Nội dung email
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Gửi email
    if (mail($to, $subject, $body)) {
        echo "<p>Email sent successfully!</p>";
    } else {
        echo "<p>Sorry, there was an error sending your email.</p>";
    }
}
?>
