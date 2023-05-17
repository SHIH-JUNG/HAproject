<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Date = $_POST['Date'];
$Activity_name = $_POST['Activity_name'];
$Activity_category = $_POST['Activity_category'];
$Person = $_POST['Person'];
$Location = $_POST['Location'];
$Service = $_POST['Service'];
$Cost = $_POST['Cost'];
$Number = $_POST['Number'];
$Lecturer = $_POST['Lecturer'];



$user = $_SESSION['name'];


$sql = "INSERT INTO `program_act` (`Date`,`Activity_name`,`Activity_category`,`Person`,`Location`,`Service`,
`Cost`,`Number`,`Lecturer`,`Create_date`,`Create_name`) VALUES
 ('$Date','$Activity_name','$Activity_category','$Person','$Location','$Service','$Cost','$Number','$Lecturer',
 Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
