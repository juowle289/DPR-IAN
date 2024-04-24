<?php
// Lấy dữ liệu từ biểu mẫu
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Địa chỉ email nhận
$to = 'letienduoc5@gmail.com';

// Tiêu đề email
$subject = 'New Message from Contact Form';

// Nội dung email
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

// Gửi email
$mailResult = mail($to, $subject, $body);

// Kiểm tra kết quả gửi email
if ($mailResult) {
    echo 'Email sent successfully!';
} else {
    echo 'Failed to send email!';
}

?>
