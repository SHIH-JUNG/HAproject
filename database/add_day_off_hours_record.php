<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$day_id = $_POST['day_id'];
// $Year = $_POST['Year'];
$Name = $_POST['Name'];
$Add_hours = $_POST['Add_hours'];
$Remark = $_POST['Remark'];


$user = $_SESSION['name'];


$select_time_hours = "SELECT `Hours` FROM `day_off` WHERE `Id` = '$day_id' ORDER BY `day_off`.`Create_date` ASC LIMIT 1;";

$find_time_hours = mysqli_query($conn,$select_time_hours);
$time_hours = mysqli_fetch_row($find_time_hours);


if($time_hours[0]>=0)
{
    $hours = (float)$Add_hours + (float)$time_hours[0];
    
}
else
{
    echo false;
}



$sql = "INSERT INTO `day_off_hours_record` (`Day_id`, `Name` ,`Add_hours`, `Remark`, `Is_firstadd` ,`Create_date` ,`Create_name`) VALUES
($day_id, '$Name', '$Add_hours', '$Remark', 0, Now(), '$user');";


$sql .= "UPDATE `day_off` SET `Hours` = '$hours', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$day_id' ORDER BY `day_off`.`Create_date` ASC LIMIT 1;";

if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
