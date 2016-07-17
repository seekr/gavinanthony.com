<?php
 $name = $_POST['name'];
 $email = $_POST['email'];
 $inquiry = $_POST['inquiry'];
 $location = $_POST['location'];
 $message = $_POST['msg'];
 $to = "iam@gavinanthony.com";
 $subject = "$name has submitted an inquiry";
 $body = 
 "Name: $name \nEmail:	$email\nBudget: $inquiry\nTimeline: $location\nMessage: $message
 ";
 $headers = "From: $name\r\n" .  "X-Mailer: php";
 
if($name == "" || $email == "" || $inquiry == "" || $message == "" || $location == "") {
	die("Please fill out all fields.");
}
if(filter_var($email,FILTER_VALIDATE_EMAIL) === false) {
	die("Valid email is required!");
}
if (mail($to, $subject, $body,$headers)) {
	echo("success");
} 
else {
	die("Error sending the email. Try again?");
}
  
 ?>