<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Visit_title = $_POST['Visit_title'];
$Visit_time = $_POST['Visit_time'];
$Visit_assign1 = $_POST['Visit_assign1'];
$Visit_assign2 = $_POST['Visit_assign2'];

$Title = $_POST['Title'];
$Description = $_POST['Description'];
$Start_t = $_POST['Start_t'];
$End_t = $_POST['End_t'];

$user = $_SESSION['name'];

$select_id_num = "SELECT MAX(Id) FROM `visit_index` ORDER BY `visit_index`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $visit_id = (int)$id_num[0] + 1;
}
else
{
    $visit_id = 1;
}


$sql = "INSERT INTO `visit_index` (`Id`, `Visit_title`,`Visit_time`
, `Visit_assign1`,`Visit_assign2`
,`Create_date`,`Create_name`) VALUES
('$visit_id', '$Visit_title', '$Visit_time', 
'$Visit_assign1',
'$Visit_assign2',
Now(), '$user');";

$sql .= "INSERT INTO `calendar` (`title`, `description`, `start`, 
`end`, `backgroundColor`, `publisher`, `date`, `database_name`, `db_id`, `authority`) VALUES 
('$Title','$Description', '$Start_t', '$End_t', '#02C874', '$user', NOW(), 'visit_index', '$visit_id', 'all');";


if(mysqli_multi_query($conn,$sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>