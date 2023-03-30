<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Year = $_REQUEST['Year'];
$Title_Name = $_REQUEST['Title_name'];
// 民國年 111.01.01
$Received_date = $_REQUEST['Received_date'];
$Subject = $_REQUEST['Subject'];
$Unit = $_REQUEST['Unit'];
$Num_receive = $_REQUEST['Num_receive'];

// 西元年 2022-01-01
$Sign_received_date = $_REQUEST['Sign_received_date'];
$Supervise = $_REQUEST['Supervise'];
$Leader = $_REQUEST['Leader'];
$Director = $_REQUEST['Director'];



$user = $_SESSION['name'];


$select_id_num = "SELECT MAX(Id) FROM `received` ORDER BY `received`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $received_id = (int)$id_num[0] + 1;
}
else
{
    $received_id = 0;
}

$url = 'received_detail.php?re_id='.$received_id.'&year='.$Year;

$start_datetime = date("Y-m-d H:s");
$end_datetime = date("Y-m-d H:s" ,strtotime("+2 day"));

$title = '收文簽核：主旨'.$Subject.",來文單位".$Unit;

$sign_received_date = $Sign_received_date." 00:00";

$signers = $Supervise.'、'.$Leader.'、'.$Director;


// 上傳報表路徑
@$file_dir = "../received/";
@$file_name = "";
@$file = "";

@$cert_dir = "../received/";
@$cert_name = "";
@$cert = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}
if (!is_dir($cert_dir)) {
    mkdir($cert_dir, 0777, true);
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
}

if (isset($_FILES["received_files0"]))
{
    @$cert_name = $_FILES["received_files0"]["name"];
    @$cert = "../received/" . $_FILES["received_files0"]["name"];

    

    if ($_FILES["received_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["received_files0"]["tmp_name"],
            "../received/" . $_FILES["received_files0"]["name"]
        );
    }
}

$sql = "INSERT INTO `received` (`Id`, `Year`,`Title_name`,`Received_date`,`Subject`,`Unit`,
`Num_receive`, `Upload_path`, `Upload_name`, `Upload_cert_path`,`Upload_cert_name`,`Supervise`, `Leader`, `Director`, `Create_date`,`Create_name`) VALUES
 ($received_id, '$Year','$Title_Name','$Received_date','$Subject','$Unit','$Num_receive', '$file', '$file_name', $cert', '$cert_name', '$Supervise', '$Leader', '$Director', Now(),'$user');";

$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ($received_id, '$title', '$url', '$sign_received_date', '$user', '$signers', '未簽核', 'received', Now(), '$user');";

if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);

