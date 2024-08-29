<?php
session_start();
include("sql_connect.php");
$dlgrec_id = $_REQUEST['dlgrec_id']; 

$social_worker = $_REQUEST['social_worker'];
$supervise1 = $_REQUEST['supervise1'];
$supervise2 = $_REQUEST['supervise2'];
$bf_num = $_REQUEST['bf_num'];
$al_num = $_REQUEST['al_num'];
$em_num = $_REQUEST['em_num'];
$lp_num = $_REQUEST['lp_num'];
$leave_num = $_REQUEST['leave_num'];
$dlgrec_date = $_REQUEST['dlgrec_date'];
$dlgrec_0 = $_REQUEST['dlgrec_0'];
$dlgrec_1 = $_REQUEST['dlgrec_1'];
$dlgrec_2 = $_REQUEST['dlgrec_2'];
$dlgrec_3 = $_REQUEST['dlgrec_3'];
$dlgrec_4 = $_REQUEST['dlgrec_4'];
$dlgrec_5 = $_REQUEST['dlgrec_5'];
$dlgrec_6 = $_REQUEST['dlgrec_6'];
$dlgrec_7 = $_REQUEST['dlgrec_7'];
$dlgrec_8 = $_REQUEST['dlgrec_8'];
$dlgrec_9 = $_REQUEST['dlgrec_9'];
$dlgrec_10 = $_REQUEST['dlgrec_10'];
$dlgrec_11 = $_REQUEST['dlgrec_11'];

$dlg_manager = $_REQUEST['dlg_manager'];
// $social_worker = $_REQUEST['social_worker'];
// $supervise1 = $_REQUEST['supervise1'];
// $supervise2 = $_REQUEST['supervise2'];

$user = $_SESSION['name'];

// 上傳報表路徑
@$file_dir = "../dlgrec/";

@$file = "";

@$sql_file_upload = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["dlgrec_files0"]))
{
    @$file_name = $_FILES["dlgrec_files0"]["name"];
    @$file = "../dlgrec/" . $_FILES["dlgrec_files0"]["name"];

    

    if ($_FILES["dlgrec_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["dlgrec_files0"]["tmp_name"],
            "../dlgrec/" . $_FILES["dlgrec_files0"]["name"]
        );
    }

    $sql_file_upload = " `Upload_path`= '$file', `Upload_name` = '$file_name', ";
}


$sqlUpdate ="UPDATE `dlgrec` SET `bf_num` = '$bf_num', `al_num` = '$al_num', `em_num` = '$em_num', `lp_num` = '$lp_num', `leave_num` = '$leave_num', `dlgrec_date` = '$dlgrec_date',
 `dlgrec_0` = '$dlgrec_0', `dlgrec_1` = '$dlgrec_2', `dlgrec_3` = '$dlgrec_3', `dlgrec_4` = '$dlgrec_4', `dlgrec_5` = '$dlgrec_5', `dlgrec_6` = '$dlgrec_6',
 `dlgrec_7` = '$dlgrec_7', `dlgrec_8` = '$dlgrec_8', `dlgrec_9` = '$dlgrec_9', `dlgrec_10` = '$dlgrec_10', `dlgrec_11` = '$dlgrec_11',
  `social_worker` = '$social_worker', `supervise1` = '$supervise1', `supervise2` = '$supervise2',
  `dlg_manager` = '$dlg_manager',".$sql_file_upload."
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$dlgrec_id' ORDER BY `dlgrec`.`Create_date` ASC LIMIT 1;";

// `social_worker` = '$social_worker', `supervise1` = '$supervise1', `supervise2` = '$supervise2',

// @$sqlUpdate .= "UPDATE `signature_notice` SET `Timestamp` = '$sign_closed_date', `Assign` = '$Assign', `Signer`='$Supervise', `Update_name` = '$user', `Update_date` = NOW() WHERE `Sign_id` = '$Closed_id' AND `Type` = 'closed' ORDER BY `signature_notice`.`Create_date` ASC LIMIT 1;";

// if(mysqli_multi_query($conn, $sqlUpdate)){
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>