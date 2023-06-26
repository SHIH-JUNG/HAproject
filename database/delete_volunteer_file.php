<?php session_start(); ?>
<?php 
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");


$Form_sql_id = $_POST['Form_sql_id'];
$Volunteer_id = $_POST['Volunteer_id'];
@$File_a_arr = json_encode($_POST['File_a_arr'],JSON_UNESCAPED_UNICODE);


$Remove_file_a = $_POST['Remove_file_a'];

$user = $_SESSION['name'];

$now_date = date("Y-m-d");



if(file_exists($Remove_file_a)){
    unlink($Remove_file_a);//將檔案刪除

    if(empty($_POST['File_a_arr']))
    {
        $sqlUpdate = "UPDATE `volunteer_v2` SET `V_files` = '',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";
    }
    else
    {
        $sqlUpdate = "UPDATE `volunteer_v2` SET `V_files` = '$File_a_arr',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";
    }
   

    if (mysqli_query($conn, $sqlUpdate)) {
        echo true;
    } else {
        echo false;
    }
}
else
{
    echo false;
}


mysqli_close($conn);


?>