<?php session_start(); ?>
<?php 
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");


$Form_sql_id = $_POST['Form_sql_id'];
$Vom_id = $_POST['Vom_id'];
@$File_2_arr = json_encode($_POST['File_2_arr'],JSON_UNESCAPED_UNICODE);


$Remove_file_2 = $_POST['Remove_file_2'];

$user = $_SESSION['name'];

$now_date = date("Y-m-d");



if(file_exists($Remove_file_2)){
    unlink($Remove_file_2);//將檔案刪除

    if(empty($_POST['File_2_arr']))
    {
        $sqlUpdate = "UPDATE `volunteer_meeting` SET `Meeting_file_path` = '',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";
    }
    else
    {
        $sqlUpdate = "UPDATE `volunteer_meeting` SET `Meeting_file_path` = '$File_2_arr',
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