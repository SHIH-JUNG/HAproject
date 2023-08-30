<?php session_start(); ?>
<?php 
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$File_type_n = $_POST['File_type_n'];
$Form_sql_id = $_POST['Form_sql_id'];
$bs_id = $_POST['bs_id'];
@$File_arr = json_encode($_POST['File_arr'],JSON_UNESCAPED_UNICODE);


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

$File_type = "";

switch ($File_type_n) {
    case "customFile1":
        $File_type = "Agenda_file_path";
        break;
    case "customFile2":
        $File_type = "Rec_file_path";
        break;
    default:
            return false;
        break;
}

if(file_exists($Remove_file)){
    unlink($Remove_file);//將檔案刪除

    if(empty($_POST['File_arr']))
    {
        $sqlUpdate = "UPDATE `board_supervisor_v2` SET `$File_type` = '',
        `Update_name` = '$user', `Update_date` = NOW() WHERE `Id`= '$Form_sql_id';";
    }
    else
    {
        $sqlUpdate = "UPDATE `board_supervisor_v2` SET `$File_type` = '$File_arr',
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