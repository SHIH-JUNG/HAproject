<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Id = $_POST['Id'];
@$auth_href_name_arr = json_encode($_POST['auth_href_name_arr'],JSON_UNESCAPED_UNICODE);

$user = $_SESSION['name'];


$sql = "UPDATE `user_info` SET `Authority_pages` = '$auth_href_name_arr', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Id` = '$Id';";
// echo $sql;
if(mysqli_query($conn,$sql)){
    // $_SESSION['authority_pages'] = $auth_href_name_arr;

    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>
