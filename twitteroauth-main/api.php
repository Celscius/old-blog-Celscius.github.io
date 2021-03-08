<?php 
		$keyword = "covid";
        $api = "TwitterOAuth php by Abraham";
        $ver = "Twitter API v1.1";
        $bahasa = "id";
        $reference = "search/tweets";
        $date = date('Y-m-d', strtotime('-3 days'));
        $link = "https://developer.twitter.com/en/docs/api-reference-index";
		require "key/user.php";
		require "autoload.php";
		use Abraham\TwitterOAuth\TwitterOAuth;

		$connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $access_token, $access_token_secret);
		$content = $connection->get("account/verify_credentials");
		
		$statuses = $connection->get($reference,["q" => $keyword, "count" => 100,"lang"=>"id", "until"=>$date]);
	
	while($row = $statuses)
 {
  $data[] = array(
   'id' =>
  );
 }
	

		$connection->setTimeouts(10, 15);
		if ($connection){ 
			echo $api; echo "<br>";
			echo "<a href='".$link."'>api reference : </a>",$reference; echo "<br>";
			echo "Kata Kunci : ",$keyword; echo "<br>";
			if($bahasa="id")
			{
				echo "Bahasa : Indonesia"; echo "<br>";
			}
			else
			{
				echo "Bahasa :",$bahasa; echo "<br>";
			}
			echo "data dari " . date("Y-m-d") . " sampai ",$date; echo "<br>";
			echo "<br>";echo "<br>";
			
    		echo ("<pre>");
    		 $data[] = array(
   				'id'  => $statuses->statuses[$x]->text,
   				'keyword'  => $statuses->statuses[$x]->text,
   				'text'  => $statuses->statuses[$x]->text
  				);
				print_r($statuses);
			echo ("</pre>");
			} 
		else {
    			echo '<script language="javascript">';
				echo 'alert("message successfully sent")';
				echo '</script>';
			}
		
	?>
	for ($x = 0; $x <= 500; $x+=1) {
    			echo ("<pre>");
    			echo $x; echo "<br>";
  					print_r($statuses->statuses[$x]->text);
  					echo ("</pre>");
				}
			
			} 