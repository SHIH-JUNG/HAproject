<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Year = $_POST['Year'];
$Name = $_POST['Name'];
$Serv_type = $_POST['Serv_type'];
$Serv_time = $_POST['Serv_time'];
$Time_all = $_POST['Time_all'];
$Rece_hours = $_POST['Rece_hours'];
$Serv_award = $_POST['Serv_award'];
$Honor_card = $_POST['Honor_card'];
$Sign_date = $_POST['Sign_date'];

$user = $_SESSION['name'];

// $sql = "INSERT INTO `volunteer` (`Year`,`Name`,`Serv_type`,`Serv_time`,`Time_all`,`Rece_hours`,
// `Serv_award`,`Honor_card`,`Create_date`,`Create_name`) VALUES
//  ('$Year','$Name','$Serv_type','$Serv_time','$Time_all','$Rece_hours','$Serv_award','$Honor_card',Now(),'$user');";

$select_id_num = "SELECT MAX(Id) FROM `volunteer` ORDER BY `volunteer`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $volunteer_id = (int)$id_num[0] + 1;
}
else
{
    $volunteer_id = 1;
}

$sql = "INSERT INTO `volunteer` (`Id`, `Year` ,`Name` ,`Serv_type` ,`Serv_time` ,`Time_all` ,`Rece_hours`,
`Serv_award` ,`Honor_card`, `Sign_date` ,`Create_date` ,`Create_name`) VALUES
($volunteer_id, '$Year', '$Name', '$Serv_type', '$Serv_time' ,'$Time_all', '$Rece_hours', '$Serv_award', '$Honor_card', '$Sign_date', Now(), '$user');";

$sql .= "INSERT INTO `volunteer_hours_record` (`Volunteer_id`, `Year` ,`Name` ,`Add_hours`, `Sign_date`, `Is_firstadd` ,`Create_date` ,`Create_name`) VALUES
($volunteer_id, '$Year', '$Name', '$Time_all', '$Sign_date', 1, Now(), '$user');";

if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
