<?php session_start(); ?>
<?php 
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");


$Form_sql_id = $_POST['Form_sql_id'];
$Resume_id = $_POST['Resume_id'];
$File_a_arr = json_encode($_POST['File_a_arr'],JSON_UNESCAPED_UNICODE);

$user = $_SESSION['name'];

$now_date = date("Y-m-d");

$sqlUpdate = "UPDATE `resume_forms` SET `File_path` = '$File_a_arr',
 `update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";

$sqlUpdate .= "UPDATE `resume` SET `Resume_datas_date` = '$now_date',
 `update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Resume_id';";

if (mysqli_multi_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);


?>