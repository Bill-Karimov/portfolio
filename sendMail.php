<?php
    $sendTo = "khayridson@gmail.com";
    $siteName = "khayridson.com";

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $msg = trim($_POST['msg']);

    $body = "
        <strong>Name: </strong>" . $name . "</br>
        <strong>E-mail: </strong>" . $email . "</br>
        <strong>Message: </strong>" . $msg . "</br>
    ";
         
    $pageTitle = "New message!";
    mail($sendTo, $pageTitle, $body, "Content-type: text/plain; charset=\"utf-8\"\n From:$sendTo");
?>