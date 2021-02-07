<?php
  $name = $_POST['name'];
  $email = $_POST['email'];

  $email_from = 'info@lottierobertsflowers.com';

  $email_subject = "New subscriber";

  $email_body = "Customer Name: $name.\n".
                "Customer Email: $email.\n".
              

  $to = "info@lottierobertsflowers.com";

  $headers = "From: $email_from \r\n";

  $headers = "Reply-To: $email \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: newslettersuccess.html");
?>