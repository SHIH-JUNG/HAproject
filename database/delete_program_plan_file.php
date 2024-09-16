<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");


$Form_sql_id = $_POST['Form_sql_id'];
$Program_id = $_POST['Program_id'];
@$File_a_arr = json_encode($_POST['File_a_arr'],JSON_UNESCAPED_UNICODE);


$Remove_file_a = $_POST['Remove_file_a'];

$user = $_SESSION['name'];

$now_date = date("Y-m-d");



// 查詢 id、名字
$select_user_data_num = "SELECT `Id` FROM `program_plan` WHERE `Id` = '$Program_id';";

$find_user_data_num = mysqli_query($conn,$select_user_data_num);
$user_data_num = mysqli_fetch_row($find_user_data_num);



// echo empty($_POST['File_a_arr']);
// echo $_POST['Remove_file_a'];

if(file_exists($Remove_file_a)){
    unlink($Remove_file_a);//將檔案刪除

    if(empty($_POST['File_a_arr']))
    {
        $sqlUpdate = "DELETE from `program_plan_form` WHERE `Id`= '$Form_sql_id';";
    }
    else
    {
        $sqlUpdate = "UPDATE `program_plan_form` SET `File_path` = '$File_a_arr',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";
    }

    $sqlUpdate .= "UPDATE `resume` SET `Resume_datas_date` = '$now_date',
    `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Program_id';";


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