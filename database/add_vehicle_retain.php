<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Borrow_date = $_POST['Borrow_date'];
$Out_timestap = $_POST['Out_timestap'];
$Reason = $_POST['Reason'];
$Place = $_POST['Place'];
$Vehicle = $_POST['Vehicle'];
$Booker = $_POST['Booker'];

$user = $_SESSION['name'];

$sql = "INSERT INTO `vehicle_retain` (`Borrow_date`,`Out_timestap`
, `Reason`,`Place`
, `Vehicle`,`Booker`
,`Create_date`,`Create_name`) VALUES
('$Borrow_date', '$Out_timestap', 
'$Reason', '$Place',
'$Vehicle', '$Booker',
Now(), '$user')";


if(mysqli_query($conn,$sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>