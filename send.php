<?php
 // get the posted data
 $name = $_POST['user_name'];
 $email = $_POST['user_email'];
  
 
 // write the email content
 $email_content = "User name: $name\n",
 .= "Email: $email\n";
 // send to email
 mail ("vereschaka84@gmail.com", "ITEA Form Test", $email_content);

?>