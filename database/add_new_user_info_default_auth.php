<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Authority_num = $_POST['Authority_num'];
$Job = $_POST['Job'];
@$auth_href_name_arr = json_encode($_POST['auth_href_name_arr'],JSON_UNESCAPED_UNICODE);

$user = $_SESSION['name'];


$sql = "INSERT INTO `user_info_default_auth` (`Authority_num`, `Job`, `Authority_pages`, `Create_date`, `Create_name`) VALUES
 ('$Authority_num','$Job',
 '$auth_href_name_arr',
 Now(),'$user')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
