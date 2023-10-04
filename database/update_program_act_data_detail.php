<?php
session_start();
include("sql_connect.php");
$program_id = $_REQUEST['program_id'];

$user = $_SESSION['name'];

// $Year = $_REQUEST['Year'];
$Date = $_REQUEST['Date'];

$Activity_name = $_REQUEST['Activity_name'];
$Activity_category = $_REQUEST['Activity_category'];
$Person = $_REQUEST['Person'];
$Location = $_REQUEST['Location'];
$Service = $_REQUEST['Service'];
$Cost = $_REQUEST['Cost'];

$Number = $_REQUEST['Number'];
$Lecturer = $_REQUEST['Lecturer'];


$Is_update_hours_sql = "";

$diff = 0;

// 上傳報表路徑
@$file_dir = "../program_act/";

@$file = "";

@$sql_file_upload = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["program_act_files0"]))
{
    @$file_name = $_FILES["program_act_files0"]["name"];
    @$file = "../program_act/" . $_FILES["program_act_files0"]["name"];

    

    if ($_FILES["program_act_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_act_files0"]["tmp_name"],
            "../program_act/" . $_FILES["program_act_files0"]["name"]
        );
    }

    $sql_file_upload = ",`Upload_path`= '$file', `Upload_name` = '$file_name'";
}


$sqlUpdate = "UPDATE `program_act` SET `Date` = '$Date', `Activity_name` = '$Activity_name',`Activity_category` = '$Activity_category',
 `Person` = '$Person', `Location` = '$Location', `Service` = '$Service',
  `Cost` = '$Cost',`Number` = '$Number',`Lecturer` = '$Lecturer',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$program_id' ORDER BY `program_act`.`Create_date` ASC LIMIT 1;";
$sqlUpdate .= $Is_update_hours_sql;


if (mysqli_multi_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
