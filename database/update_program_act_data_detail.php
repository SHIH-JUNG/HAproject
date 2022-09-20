<?php
session_start();
include("sql_connect.php");
$program_id = $_POST['program_id'];

$user = $_SESSION['name'];

$Year = $_POST['Year'];
$Date = $_POST['Date'];

$Activity_name = $_POST['Activity_name'];
$Person = $_POST['Person'];
$Loaction = $_POST['Loaction'];
$Service = $_POST['Service'];
$Cost = $_POST['Cost'];

$Number = $_POST['Number'];
$Lecturer = $_POST['Lecturer'];


$Is_update_hours_sql = "";

$diff = 0;



// $select_time_hours = "SELECT `Time_all` FROM `volunteer` WHERE `Id` = '$program_id' ORDER BY `volunteer`.`Create_date` ASC LIMIT 1;";

// $find_time_hours = mysqli_query($conn, $select_time_hours);
// $time_hours = mysqli_fetch_row($find_time_hours);


// if ($Time_all != $time_hours[0]) {
//     $Time_all = $Time_all;

//     $diff = (int)$Time_all - (int)$time_hours[0];

//     $diff_remark_str = "目前服務時數由" . $time_hours[0] . "更改為" . $Time_all . "(" . $diff . ")。資料異動者：" . $user . "，異動時間：" . date("Y-m-d H:i:s") . "。";

//     $Is_update_hours_sql = "INSERT INTO `volunteer_hours_record` (`Volunteer_id`, `Year` ,`Name` ,`Add_hours`, `Remark`, `Is_firstadd` ,`Create_date` ,`Create_name`) VALUES
//     ($program_id, '$Year', '$Name', '$diff', '$diff_remark_str', 0, Now(), '$user');";
// } else {
//     $Time_all = $time_hours[0];
//     $Is_update_hours_sql = "";
// }


$sqlUpdate = "UPDATE `program_act` SET `Year` = '$Year', `Date` = '$Date', `Activity_name` = '$Activity_name',
 `Person` = '$Person', `Loaction` = '$Loaction', `Service` = '$Service',
  `Cost` = '$Cost',`Number` = '$Number',`Lecturer` = '$Lecturer',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$program_id' ORDER BY `program_act`.`Create_date` ASC LIMIT 1;";
$sqlUpdate .= $Is_update_hours_sql;


if (mysqli_multi_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
