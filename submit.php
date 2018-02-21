<?php

	$first =$_POST['fname'];
    $last = $_POST['sname'];
    $phone = $_POST['phn'];
    $message = $_POST['message'];
    $email = $_POST['emailID'];

    $mailmessage = 'New Message from '.$first.' '.$last.'<br/>'.$message.'<br>contact no '.$phone.'<br>Email '.$email;
    
    $to = 'contact@firozmodular.com';
    $subject = 'firozmodular';
    $headers = 'From: '.$email;
        
    mail($to,$subject,$mailmessage,$headers);
    header('Location: index.html');
?> 