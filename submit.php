<?php

	$first =$_POST['fname'];
    $last = $_POST['sname'];
    $phone = $_POST['phn'];
    $message = $_POST['message'];
    $email = $_POST['emailID'];

    $mailmessage = "You got a Message from ".$first." " .$last."\r\n\n".$message."\r\n\nContact no ".$phone."\r\nEmail ".$email;

    $mailmessage2="Hello ".$first." ".$last.",\r\n\nGreetings from FIROZ'S MODULAR KITCHEN!\n\nThank you for your interest in Firoz's Modular, one of the latest Modular Kitchen outlets in Jorhat.\r\n\nFiroz's Modular Kitchen specializes in state of the art kitchen equipments and gadgets. Firoz Modular also helps in designing Modular Kitchens keeping in mind your visions for your cookhouse.\r\n\nWe'll contact you within 48hours with more details.";
    
    $to = 'contact@firozmodular.com';
    $subject = 'firozmodular';
    $headers = 'From: '.$email;
    $headers2='From: '.$to;
        
    mail($to,$subject,$mailmessage,$headers);
    mail($email,$subject,$mailmessage2,$headers2);

    header('Location: index.html');
?> 