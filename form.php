<?php

$name = $_POST['name'];
$email = $_POST['email'];
$budget = $_POST['budget'];
$timeline = $_POST['timeline'];
$message = $_POST['msg'];
$to = "iam@gavinanthony.com";
$subject = "$name has submitted an inquiry";
$body = 
"Name: $name \nEmail:	$email\nBudget: $budget\nTimeline: $timeline\nMessage: $message
";
$headers = "From: $name\r\n" .  "X-Mailer: php";

//echo $name . $email . $budget . $timeline . $message;

if($name == "" || $email == "" || $budget == "" || $timeline == "" || $message == "") {
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