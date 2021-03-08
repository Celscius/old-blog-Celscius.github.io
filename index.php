<?php 
    $keyword = "covid";
        $api = "TwitterOAuth php by Abraham";
        $ver = "Twitter API v1.1";
        $bahasa = "id";
        $reference = "search/tweets";
        $date = date('Y-m-d', strtotime('-1 days'));
        $link = "https://developer.twitter.com/en/docs/api-reference-index";
        $library = "https://github.com/abraham/twitteroauth";
    require "class/api/twitteroauth-main/key/user.php";
    require "class/api/twitteroauth-main/autoload.php";
    use Abraham\TwitterOAuth\TwitterOAuth;

    $connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $access_token, $access_token_secret);
    $content = $connection->get("account/verify_credentials");
    
    $statuses = $connection->get($reference,["q" => $keyword, "count" => 100,"lang"=>"id", "until"=>$date]);
  
  
    for ($x = 0; $x <= 99; $x+=1) {
          $data[] = array(
          'id'  => $statuses->statuses[$x]->id,
          'keyword'  => $statuses->statuses[$x]->created_at,
          'text'  => $statuses->statuses[$x]->text
          );
        }
        
  ?>