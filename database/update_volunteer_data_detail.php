<?php
session_start();
include("sql_connect.php");
$vo_id = $_POST['vo_id']; 

$user = $_SESSION['name'];

$Year = $_POST['Year'];
$Name = $_POST['Name'];

$Serv_type = $_POST['Serv_type'];
$Serv_time = $_POST['Serv_time'];
$Rece_hours = $_POST['Rece_hours'];
$Serv_award = $_POST['Serv_award'];
$Honor_card = $_POST['Honor_card'];

$Time_all = $_POST['Time_all'];


$Is_update_hours_sql = "";

$diff = 0;



$select_time_hours = "SELECT `Time_all` FROM `volunteer` WHERE `Id` = '$vo_id' ORDER BY `volunteer`.`Create_date` ASC LIMIT 1;";

$find_time_hours = mysqli_query($conn,$select_time_hours);
$time_hours = mysqli_fetch_row($find_time_hours);


if($Time_all!=$time_hours[0])
{
    $Time_all = $Time_all;

    $diff = bcsub($Time_all, $time_hours[0], 1);
    
    $diff_remark_str = "目前服務時數由".$time_hours[0]."更改為".$Time_all."(".$diff.")。資料異動者：".$user."，異動時間：".date("Y-m-d H:i:s")."。";

    $Is_update_hours_sql = "INSERT INTO `volunteer_hours_record` (`Volunteer_id`, `Year` ,`Name` ,`Add_hours`, `Remark`, `Is_firstadd` ,`Create_date` ,`Create_name`) VALUES
    ($vo_id, '$Year', '$Name', '$diff', '$diff_remark_str', 0, Now(), '$user');";
}
else
{
    $Time_all = $time_hours[0];
    $Is_update_hours_sql = "";
}


$sqlUpdate ="UPDATE `volunteer` SET `Year` = '$Year', `Name` = '$Name', `Serv_type` = '$Serv_type',
 `Serv_time` = '$Serv_time', `Time_all` = '$Time_all', `Rece_hours` = '$Rece_hours',
  `Serv_award` = '$Serv_award',`Honor_card` = '$Honor_card',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$vo_id' ORDER BY `volunteer`.`Create_date` ASC LIMIT 1;";
$sqlUpdate .= $Is_update_hours_sql;


if(mysqli_multi_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>