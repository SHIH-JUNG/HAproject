<?php session_start(); ?>
<?php 
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$File_type_n = $_POST['File_type_n'];
$Form_sql_id = $_POST['Form_sql_id'];
$sr_id = $_POST['sr_id'];
@$File_arr = json_encode($_POST['File_arr'],JSON_UNESCAPED_UNICODE);
@$Name_arr = json_encode($_POST['Name_arr'],JSON_UNESCAPED_UNICODE);

$Remove_file = $_POST['Remove_file'];

$user = $_SESSION['name'];

// echo $File_type_n;
// echo "<br/>--------------------------<br/>";
// echo $Form_sql_id;
// echo "<br/>--------------------------<br/>";
// echo $File_arr;
// echo "<br/>--------------------------<br/>";
// echo $Remove_file;
// echo "<br/>--------------------------<br/>";

$File_path = "Upload_path";
$File_name = "Upload_name";

// $sqlUpdate = "UPDATE `training` SET `$File_name` =  '$Name_arr', `$File_path` = '$File_arr', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$sr_id';";
// echo $sqlUpdate;
// echo "<br/>--------------------------<br/>";

if(file_exists($Remove_file)){
    unlink($Remove_file);//將檔案刪除
    if(empty($_POST['File_arr']) or empty($_POST['Name_arr']))
    {
        $sqlUpdate = "UPDATE `training` SET `$File_name` = '', `$File_path` = '',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$sr_id';";
    }
    else
    {
        $sqlUpdate = "UPDATE `training` SET `$File_name` =  '$Name_arr', `$File_path` = '$File_arr',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$sr_id';";
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