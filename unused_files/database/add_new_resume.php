<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Name = $_REQUEST['name'];
$Upload_date = $_REQUEST['upload_date'];
$Entry_date = $_REQUEST['entry_date'];
$On_or_off = $_REQUEST["on_or_off"];
$File1_check = $_REQUEST["file1_check"];
$File2_check = $_REQUEST["file2_check"];
$File3_check = $_REQUEST["file3_check"];
$File4_check = $_REQUEST["file4_check"];


$user = $_SESSION['name'];

@$file_dir = "../resume/";

@$file1 = "../resume/" . $_FILES["file"]["name"];
@$file2 = "../resume/" . $_FILES["file2"]["name"];
@$file3 = "../resume/" . $_FILES["file3"]["name"];
@$file4 = "../resume/" . $_FILES["file4"]["name"];



if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

if (isset($_FILES["file"])) {

    if ($_FILES["file"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["file"]["tmp_name"],
            "../resume/" . $_FILES["file"]["name"]
        );
    }
}

if (isset($_FILES["file2"])) {

    if ($_FILES["file2"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["file2"]["tmp_name"],
            "../resume/" . $_FILES["file2"]["name"]
        );
    }
}

if (isset($_FILES["file3"])) {

    if ($_FILES["file3"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["file3"]["tmp_name"],
            "../resume/" . $_FILES["file3"]["name"]
        );
    }
}

if (isset($_FILES["file4"])) {

    if ($_FILES["file4"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["file4"]["tmp_name"],
            "../resume/" . $_FILES["file4"]["name"]
        );
    }
}


$sql = "INSERT INTO `resume` (`Name`,`Upload_date`,`Entry_date`,
`On_or_off`,`File1_check`,`File2_check`,`File3_check`,`File4_check`,
`CustomFile1`,`CustomFile2`,`CustomFile3`,`CustomFile4`,`Create_date`,`Create_name`) VALUES
 ('$Name','$Upload_date','$Entry_date',
 '$On_or_off','$File1_check','$File1_check','$File1_check','$File1_check'
 '$file1','$file2','$file3','$file4',Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
