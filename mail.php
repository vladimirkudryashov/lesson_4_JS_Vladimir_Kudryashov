<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name      = filter_var($_POST["user-name"], FILTER_SANITIZE_STRING);
	$phone      = filter_var($_POST["user-phone"], FILTER_SANITIZE_STRING);
	$email      = filter_var($_POST["user-email"], FILTER_SANITIZE_STRING);
	$message      = filter_var($_POST["user-message"], FILTER_SANITIZE_STRING);
	$errors;
	

	// В PHP добавить лишь проверку на пустоту
	 if (empty($email)) {
	 		$errors = "Ошибка";
	 }else{
		 $user_email = $email;
	 }

	 if (empty($name)) {
		$errors = "Ошибка";
		}else {
		$user_name = $name;
	}

	if (empty($phone)) {
		$errors = "Ошибка";
		}else {
		$user_phone = $phone;
	}

	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже

	$to = "artcandidate@gmail.com";
	$mailBody = "JS. ДЗ номер 4\n";
	$mailBody .= "Поле имя: " . $name . "\n";
	$mailBody .= "Поле номер телефона: " . $phone . "\n";
	$mailBody .= "Почта пользователя: " . $email . "\n";
	$mailBody .= "Текст пользователя: " . $message . "\n";
	// и так столько, сколько нужно

	// Это отправка. Это не трогаем
	if (mail($to, 'JS. ДЗ номер 4', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>