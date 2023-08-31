<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];

$Name = $_REQUEST['Name'];
$Training_id = $_REQUEST['training_id'];
$Training_date = $_REQUEST['Training_date'];
$Training_name = $_REQUEST['Training_name'];
$Place = $_REQUEST['Place'];
$Hours = $_REQUEST['Hours'];
$Remark = $_REQUEST['Remark'];

// 上傳報表路徑
@$file_dir = "../training/";

@$file = "";

@$sql_file_upload = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["training_files0"]))
{
    @$file_name = $_FILES["training_files0"]["name"];
    @$file = "../training/" . $_FILES["training_files0"]["name"];

    

    if ($_FILES["training_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["training_files0"]["tmp_name"],
            "../training/" . $_FILES["training_files0"]["name"]
        );
    }

    $sql_file_upload = ",`Upload_path`= '$file', `Upload_name` = '$file_name'";
}


$sqlUpdate = "UPDATE `training` SET `Training_date` = '$Training_date',`Training_name` = '$Training_name', `Place` = '$Place'
".$sql_file_upload."
,`Remark` = '$Remark', `Name` = '$Name',
 `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Training_id' ORDER BY `training`.`Training_date` ASC LIMIT 1;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
