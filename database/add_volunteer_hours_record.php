<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$vo_id = $_POST['vo_id'];
$Year = $_POST['Year'];
$Name = $_POST['Name'];
$Add_hours = $_POST['Add_hours'];
$Remark = $_POST['Remark'];


$user = $_SESSION['name'];


$select_time_hours = "SELECT `Time_all` FROM `volunteer` WHERE `Id` = '$vo_id' ORDER BY `volunteer`.`Create_date` ASC LIMIT 1;";

$find_time_hours = mysqli_query($conn,$select_time_hours);
$time_hours = mysqli_fetch_row($find_time_hours);


if($time_hours[0]>=0)
{
    $time_all = (float)$Add_hours + (float)$time_hours[0];
    
    
}
else
{
    echo false;
}



$sql = "INSERT INTO `volunteer_hours_record` (`Volunteer_id`, `Year` ,`Name` ,`Add_hours`, `Remark`, `Is_firstadd` ,`Create_date` ,`Create_name`) VALUES
($vo_id, '$Year', '$Name', '$Add_hours', '$Remark', 0, Now(), '$user');";


$sql .= "UPDATE `volunteer` SET `Time_all` = '$time_all', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$vo_id' ORDER BY `volunteer`.`Create_date` ASC LIMIT 1;";

if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
