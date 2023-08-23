<?php session_start(); ?>
<?php 
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");


$Form_sql_id = $_POST['Form_sql_id'];
$Arc_id = $_POST['Arc_id'];
@$File_arr = json_encode($_POST['File_arr'],JSON_UNESCAPED_UNICODE);


$Remove_file = $_POST['Remove_file'];

$user = $_SESSION['name'];

$now_date = date("Y-m-d");



if(file_exists($Remove_file)){
    unlink($Remove_file);//將檔案刪除

    if(empty($_POST['File_arr']))
    {
        $sqlUpdate = "UPDATE `accounting_record_cash_v2` SET `Files_path` = '',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";
    }
    else
    {
        $sqlUpdate = "UPDATE `accounting_record_cash_v2` SET `Files_path` = '$File_arr',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";
    }
   

    if (mysqli_query($conn, $sqlUpdate)) {
        echo true;
        // echo $sqlUpdate;
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