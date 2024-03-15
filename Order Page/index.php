<?php
$to = "c.yordanova08@gmail.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: c.yordanova08@gmail.com" . "\r\n" .
"CC: c.yordanova08@gmail.com";

mail($to,$subject,$txt,$headers);
?>