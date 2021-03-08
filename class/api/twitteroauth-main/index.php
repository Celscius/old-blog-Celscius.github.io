<!DOCTYPE html>
<html>
<head>
	<style>
		
	</style>
	<title>Sentiment Analysis</title>
	<include>
</head>
<body>
	<?php 
		$CONSUMER_KEY ='9WAy69DDou6HIpfWF6M7RSNXO';
		$CONSUMER_SECRET ='m7hVeZgqfcaVZs8Vkdhs5nMPIWvNhg3uMJLWzMTEVU1EuvRJSW';
		$access_token = '158585527-6go1GKrgSkOiD4HDieBdMnRmdL2neGyBzihXCyn0';
		$access_token_secret ='53F4yWyonM1g4wHjoI2kAOCprkwpnofHisU1tOiTeV1g9';
		require "autoload.php";
		use Abraham\TwitterOAuth\TwitterOAuth;

		$connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $access_token, $access_token_secret);
		$content = $connection->get("account/verify_credentials");
		
		$statuses = $connection->get("statuses/home_timeline",["count" => 25, "exclude_replies" => true]);
		$connection->setTimeouts(10, 15);
		echo ("<pre>");
		print_r($statuses);
		echo ("</pre>");
	?>
</body>
</html>