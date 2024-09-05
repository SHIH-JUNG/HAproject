<?php session_start(); ?>
<?php 
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");


$Form_sql_id = $_POST['Form_sql_id'];
$program_id = $_POST['program_id'];
@$File_a_arr = json_encode($_POST['File_a_arr'],JSON_UNESCAPED_UNICODE);


$Remove_file_a = $_POST['Remove_file_a'];

$user = $_SESSION['name'];

$now_date = date("Y-m-d");



// 查詢 id、名字
$select_user_data_num = "SELECT `Account` FROM `resume` WHERE `Id` = '$Resume_id';";

$find_user_data_num = mysqli_query($conn,$select_user_data_num);
$user_data_num = mysqli_fetch_row($find_user_data_num);

// @$file_dir = "../resume/resume_user".$Resume_id."_".$user_data_num[0]."/resume_datas/";


// echo empty($_POST['File_a_arr']);
// echo $_POST['Remove_file_a'];

if(file_exists($Remove_file_a)){
    unlink($Remove_file_a);//將檔案刪除

    if(empty($_POST['File_a_arr']))
    {
        $sqlUpdate = "DELETE from `resume_forms` WHERE `Id`= '$Form_sql_id';";
    }
    else
    {
        $sqlUpdate = "UPDATE `resume_forms` SET `File_path` = '$File_a_arr',
        `update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";
    }

    $sqlUpdate .= "UPDATE `resume` SET `Resume_datas_date` = '$now_date',
    `update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Resume_id';";
   

    if (mysqli_multi_query($conn, $sqlUpdate)) {
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