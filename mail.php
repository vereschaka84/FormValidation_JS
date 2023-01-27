<?php
    $to      = 'vereschaka84@gmail.com';
    $subject = 'test';
    $message = 'hello $user_name';
    $headers = 'From: vereschaka84@gmail.com'       . "\r\n" .
                 'Reply-To: vereschaka84@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>
