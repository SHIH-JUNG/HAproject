<?php
session_start();
include("sql_connect.php");
$user = $_SESSION['name'];
$Pu_id = $_REQUEST['pu_id'];
$Year = $_REQUEST['Year'];
$Title_name = $_REQUEST['Title_name'];
$Published_date = $_REQUEST['Published_date'];
$Subject = $_REQUEST['Subject'];
$Num_publish = $_REQUEST['Num_publish'];


// 上傳報表路徑
@$file_dir = "../published/";

@$file = "";

@$sql_file_upload = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["published_files0"]))
{
    @$file_name = $_FILES["published_files0"]["name"];
    @$file = "../published/" . $_FILES["published_files0"]["name"];

    

    if ($_FILES["published_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["published_files0"]["tmp_name"],
            "../published/" . $_FILES["published_files0"]["name"]
        );
    }

    $sql_file_upload = ",`Upload_path`= '$file', `Upload_name` = '$file_name'";
}

$sqlUpdate = "UPDATE `published` SET `Published_date` = '$Published_date', `Title_name` = '$Title_name'
".$sql_file_upload."
,`Subject` = '$Subject',`Num_publish` = '$Num_publish', 
`Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Pu_id' ORDER BY `published`.`Published_date` ASC LIMIT 1;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
    // echo $sqlUpdate;
} else {
    echo false;
    // echo $sqlUpdate;
}
mysqli_close($conn);