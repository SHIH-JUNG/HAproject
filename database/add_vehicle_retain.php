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

$Title = $_POST['Title'];
$Description = $_POST['Description'];
$Start_t = $_POST['Start_t'];
$End_t = $_POST['End_t'];

$user = $_SESSION['name'];

$select_id_num = "SELECT MAX(Id) FROM `vehicle_retain` ORDER BY `vehicle_retain`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $vr_id = (int)$id_num[0] + 1;
}
else
{
    $vr_id = 1;
}


$sql = "INSERT INTO `vehicle_retain` (`Id`, `Borrow_date`,`Out_timestap`
, `Reason`,`Place`
, `Vehicle`,`Booker`
,`Create_date`,`Create_name`) VALUES
('$vr_id', '$Borrow_date', '$Out_timestap', 
'$Reason', '$Place',
'$Vehicle', '$Booker',
Now(), '$user');";

$sql .= "INSERT INTO `calendar` (`title`, `description`, `start`, 
`end`, `backgroundColor`, `publisher`, `date`, `database_name`, `db_id`, `authority`) VALUES 
('$Title','$Description', '$Start_t', '$End_t', '#D9006C', '$user', NOW(), 'vehicle_retain', '$vr_id', 'all');";

if(mysqli_multi_query($conn,$sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>