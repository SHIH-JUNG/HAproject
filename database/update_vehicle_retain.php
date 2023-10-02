<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Id = $_POST['Id'];

$Back_timestap = $_POST['Back_timestap'];

$Borrow_date = $_POST['Borrow_date'];
$Out_timestap = $_POST['Out_timestap'];
$Reason = $_POST['Reason'];
$Place = $_POST['Place'];
$Vehicle = $_POST['Vehicle'];
$Booker = $_POST['Booker'];

$user = $_SESSION['name'];

$Title = $_POST['Title'];
$Description = $_POST['Description'];
$Start_t = $_POST['Start_t'];
$End_t = $_POST['End_t'];

$sql = "UPDATE `vehicle_retain` SET 
`Back_timestap` = '$Back_timestap',  
`Borrow_date` = '$Borrow_date', `Out_timestap` = '$Out_timestap', 
`Reason` = '$Reason', `Place` = '$Place',
`Vehicle` = '$Vehicle', `Booker` = '$Booker',
`Update_name` = '$user', 
`Update_date` = NOW() WHERE `Id` = '$Id';";

@$sql .= 
"UPDATE `calendar` SET 
`title` = '$Title',  
`description` = '$Description', `start` = '$Start_t', 
`end` = '$End_t'
WHERE `database_name` = 'vehicle_retain' AND `db_id` = '$Id';";

if(mysqli_multi_query($conn,$sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>