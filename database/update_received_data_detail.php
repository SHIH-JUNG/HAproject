<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];
$Re_id = $_REQUEST['re_id'];
$Year = $_REQUEST['Year'];
// $Title_name = $_REQUEST['Title_name'];
$Received_date = $_REQUEST['Received_date'];
$Subject = $_REQUEST['Subject'];
$Unit = $_REQUEST['Unit'];
$Num_receive = $_REQUEST['Num_receive'];

// 上傳報表路徑
@$file_dir = "../received/";

@$file = "";

@$sql_file_upload = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["received_files0"]))
{
    @$file_name = $_FILES["received_files0"]["name"];
    @$file = "../received/" . $_FILES["received_files0"]["name"];

    

    if ($_FILES["received_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["received_files0"]["tmp_name"],
            "../received/" . $_FILES["received_files0"]["name"]
        );
    }

    $sql_file_upload = ",`Upload_path`= '$file', `Upload_name` = '$file_name'";
}

$sqlUpdate = "UPDATE `received` SET `Received_date` = '$Received_date'
".$sql_file_upload."
,`Subject` = '$Subject',`Unit` = '$Unit',`Num_receive` = '$Num_receive', 
`Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Re_id' ORDER BY `received`.`Received_date` ASC LIMIT 1;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
    // echo $sqlUpdate;
} else {
    echo false;
    // echo $sqlUpdate;
}
mysqli_close($conn);
