<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $number = $_POST['number'];
  $message = $_POST['message'];

  $email_from = 'info@lottierobertsflowers.com';

  $email_subject = "New Form Submission";

  $email_body = "Customer Name: $name.\n".
                "Customer Email: $email.\n".
                "Customer Phone Number: $number.\n".
                "Message: $message.\n";

  $to = "info@lottierobertsflowers.com";

  $headers = "From: $email_from \r\n";

  $headers = "Reply-To: $email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: success.html");
?>