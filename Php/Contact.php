<<<<<<< HEAD <?php
                $name = $_POST['firstname' + 'lastname'];
                $subject = $_POST['subject'];
                $visitor_email = $_POST['email'];
                $message = $_POST['subject'];

                $email_form = $name;
                $email_subject =  $subject;
                $email_body = "user message: $message. \n";

                $to = "moukhtar.youssef06@gmail.com";
                $headers = "From: $name \r\n";
                $headers = "Reply-To: $vistor_email";
                mail($to, $email_subject, $email_body, $headers);
                header("location: contact us.html");
