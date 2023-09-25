<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Year = $_REQUEST['Year'];
$Title_Name = $_REQUEST['Title_name'];
// 民國年 111.01.01
$published_date = $_REQUEST['Published_date'];
$Subject = $_REQUEST['Subject'];

$Num_publish = $_REQUEST['Num_publish'];

// 西元年 2022-01-01
$Sign_published_date = $_REQUEST['Sign_published_date'];
$Leader = $_REQUEST['Leader'];
$Director = $_REQUEST['Director'];



$user = $_SESSION['name'];


$select_id_num = "SELECT MAX(Id) FROM `published` ORDER BY `published`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $published_id = (int)$id_num[0] + 1;
}
else
{
    $published_id = 1;
}

$url = 'published_detail.php?pu_id='.$published_id.'&year='.$Year;

$start_datetime = date("Y-m-d H:s");
$end_datetime = date("Y-m-d H:s" ,strtotime("+2 day"));

$title = '發文簽核：主旨'.$Subject;

$sign_published_date = $Sign_published_date." 00:00";

$signers = $Leader.'、'.$Director;

$sign_state = $Leader . "未簽核" . "、" . $Director . "未簽核";


// 上傳報表路徑
@$file_dir = "../published/";
@$file_name = "";
@$file = "";


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
}

$sql = "INSERT INTO `published` (`Id`, `Year`,`Title_name`,`Published_date`,`Subject`,
`Num_publish`, `Upload_path`, `Upload_name`, `Leader`, `Director`, `Create_date`,`Create_name`) VALUES
 ($published_id, '$Year','$Title_Name','$published_date','$Subject','$Num_publish', '$file', '$file_name', '$Leader', '$Director', Now(),'$user');";

$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ($published_id, '$title', '$url', '$sign_published_date', '$user', '$signers', '$sign_state', 'published', Now(), '$user');";

if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);

