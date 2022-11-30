<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Year = $_REQUEST['Year'];
$Title_Name = $_REQUEST['Title_name'];
// 民國年 111.01.01
$Publishd_date = $_REQUEST['Publishd_date'];
$Subject = $_REQUEST['Subject'];

$Num_publish = $_REQUEST['Num_publish'];

// 西元年 2022-01-01
$Sign_publishd_date = $_REQUEST['Sign_publishd_date'];
$Supervise = $_REQUEST['Supervise'];
$Leader = $_REQUEST['Leader'];
$Director = $_REQUEST['Director'];



$user = $_SESSION['name'];


$select_id_num = "SELECT MAX(Id) FROM `publishd` ORDER BY `publishd`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $publishd_id = (int)$id_num[0] + 1;
}
else
{
    $publishd_id = 0;
}

$url = 'publishd_detail.php?pu_id='.$publishd_id.'&year='.$Year;

$start_datetime = date("Y-m-d H:s");
$end_datetime = date("Y-m-d H:s" ,strtotime("+2 day"));

$title = '發文簽核：主旨'.$Subject;

$sign_publishd_date = $Sign_publishd_date." 00:00";

$signers = $Supervise.'、'.$Leader.'、'.$Director;


// 上傳報表路徑
@$file_dir = "../publishd/";


@$file_name = "";
@$file = "";


// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["publishd_files0"]))
{
    @$file_name = $_FILES["publishd_files0"]["name"];
    @$file = "../publishd/" . $_FILES["publishd_files0"]["name"];

    

    if ($_FILES["publishd_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["publishd_files0"]["tmp_name"],
            "../publishd/" . $_FILES["publishd_files0"]["name"]
        );
    }
}

$sql = "INSERT INTO `publishd` (`Id`, `Year`,`Title_name`,`Publishd_date`,`Subject`,
`Num_publish`, `Upload_path`, `Upload_name`,`Supervise`, `Leader`, `Director`, `Create_date`,`Create_name`) VALUES
 ($publishd_id, '$Year','$Title_Name','$Publishd_date','$Subject','$Num_publish', '$file', '$file_name', '$Supervise', '$Leader', '$Director', Now(),'$user');";

$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ($publishd_id, '$title', '$url', '$sign_publishd_date', '$user', '$signers', '未簽核', 'publishd', Now(), '$user');";

if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);

