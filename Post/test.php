<?php

$conn =mysqli_connect("localhost","root","","upn");

$info=array();
$info["data"] = array();
$sth = mysqli_query($conn, "SELECT  id, name,last_used,time, sum(unit) as unit, active from alat_1 WHERE name='Alat_1'");

while($r = mysqli_fetch_assoc($sth)) {
    $rows= $r;
    array_push($info["data"] ,$rows);
}

echo json_encode($info);
?>

