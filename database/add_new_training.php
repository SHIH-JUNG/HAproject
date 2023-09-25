<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Name = $_REQUEST['Name'];
$Training_date = $_REQUEST['Training_date'];
$Training_name = $_REQUEST['Training_name'];
$Hours = $_REQUEST['Hours'];
$Place = $_REQUEST['Place'];
$Remark = $_REQUEST['Remark'];



$user = $_SESSION['name'];

$select_id_num = "SELECT MAX(Training_id) FROM `training` ORDER BY `training`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $training_id = (int)$id_num[0] + 1;
}
else
{
    $training_id = 1;
}

// 上傳報表路徑
@$file_dir = "../training/";
@$file_name = "";
@$file = "";

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
}

$sql = "INSERT INTO `training` (`Training_id`, `Name`,`Training_date`,`Training_name`,`Hours`,`Place`,`Remark`, `First_insert`, 
`Upload_path`, `Upload_name`,`Create_date`,`Create_name`) VALUES
 ('$training_id', '$Name','$Training_date','$Training_name','$Hours','$Place','$Remark','1',
 '$file', '$file_name',Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
