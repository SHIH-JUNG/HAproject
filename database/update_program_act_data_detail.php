<?php
session_start();
include("sql_connect.php");
$program_id = $_POST['program_id'];

$user = $_SESSION['name'];

// $Year = $_POST['Year'];
$Date = $_POST['Date'];

$Activity_name = $_POST['Activity_name'];
$Activity_category = $_POST['Activity_category'];
$Person = $_POST['Person'];
$Location = $_POST['Location'];
$Service = $_POST['Service'];
$Cost = $_POST['Cost'];

$Number = $_POST['Number'];
$Lecturer = $_POST['Lecturer'];


$Is_update_hours_sql = "";

$diff = 0;


$sqlUpdate = "UPDATE `program_act` SET `Date` = '$Date', `Activity_name` = '$Activity_name',`Activity_category` = '$Activity_category',
 `Person` = '$Person', `Location` = '$Location', `Service` = '$Service',
  `Cost` = '$Cost',`Number` = '$Number',`Lecturer` = '$Lecturer',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$program_id' ORDER BY `program_act`.`Create_date` ASC LIMIT 1;";
$sqlUpdate .= $Is_update_hours_sql;


if (mysqli_multi_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
