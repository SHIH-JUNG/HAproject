<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$title = $_POST['ann_title'];
$authority = $_POST['authority'];
$publisher = $_SESSION['name'];


$select_id_num = "SELECT MAX(Id) FROM `announcement` ORDER BY `announcement`.`Id` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $ann_id = (int)$id_num[0] + 1;
}
else
{
    $ann_id = 1;
}

$description = "標題：" . $title . "，權限：" . $authority . "，發佈時間：" . date('Y/m/d H:i:s');

$sql = "INSERT INTO `announcement` (`Id`, `title`,`authority` , `publisher`) VALUES ('$ann_id', '$title', '$authority', '$publisher');";

$sql .= "INSERT INTO `calendar` (`title`, `description`, `start`, 
`end`, `backgroundColor`, `publisher`, `date`, `database_name`, `db_id`, `authority_num`) VALUES 
('$title','$description', NOW(), NOW(), 'red', '$publisher', NOW(), 'announcement', '$ann_id', '$authority');";

if(mysqli_multi_query($conn,$sql))
{
    echo true;
}else
{
    echo false;
}
mysqli_close($conn);
?>