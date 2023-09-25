<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$bf_num = $_REQUEST['bf_num'];
$al_num = $_REQUEST['al_num'];
$em_num = $_REQUEST['em_num'];
$lp_num = $_REQUEST['lp_num'];
$leave_num = $_REQUEST['leave_num'];
$peers_dlgrec_date = $_REQUEST['peers_dlgrec_date'];
$peers_dlgrec_0 = $_REQUEST['peers_dlgrec_0'];
$peers_dlgrec_1 = $_REQUEST['peers_dlgrec_1'];
$peers_dlgrec_2 = $_REQUEST['peers_dlgrec_2'];
$peers_dlgrec_3 = $_REQUEST['peers_dlgrec_3'];
$peers_dlgrec_4 = $_REQUEST['peers_dlgrec_4'];
$peers_dlgrec_5 = $_REQUEST['peers_dlgrec_5'];
$peers_dlgrec_6 = $_REQUEST['peers_dlgrec_6'];
$peers_dlgrec_7 = $_REQUEST['peers_dlgrec_7'];
$peers_dlgrec_8 = $_REQUEST['peers_dlgrec_8'];
$peers_dlgrec_9 = $_REQUEST['peers_dlgrec_9'];
$peers_dlgrec_10 = $_REQUEST['peers_dlgrec_10'];
$peers_dlgrec_11 = $_REQUEST['peers_dlgrec_11'];

$dlg_manager = $_REQUEST['dlg_manager'];
$social_worker = $_REQUEST['social_worker'];
$supervise1 = $_REQUEST['supervise1'];
$supervise2 = $_REQUEST['supervise2'];

$user = $_SESSION['name'];

$select_id_num = "SELECT MAX(Id) FROM `peers_dlgrec` ORDER BY `peers_dlgrec`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $peers_dlgrec_id = (int)$id_num[0] + 1;
}
else
{
    $peers_dlgrec_id = 0;
}

$url = 'peers_dlgrec_detail.php?peers_dlgrec_id='.$peers_dlgrec_id;

$title = '生輔紀錄簽核：日期'.$peers_dlgrec_date."生活輔導員".$dlg_manager;

// 上傳報表路徑
@$file_dir = "../peers_dlgrec/";
@$file_name = "";
@$file = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["peers_dlgrec_files0"]))
{
    @$file_name = $_FILES["peers_dlgrec_files0"]["name"];
    @$file = "../peers_dlgrec/" . $_FILES["peers_dlgrec_files0"]["name"];

    

    if ($_FILES["peers_dlgrec_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["peers_dlgrec_files0"]["tmp_name"],
            "../peers_dlgrec/" . $_FILES["peers_dlgrec_files0"]["name"]
        );
    }
}


$sql = "INSERT INTO `peers_dlgrec` (`Id`, `bf_num`,`al_num`,`em_num`,`lp_num`,`leave_num`,`peers_dlgrec_date`,
`peers_dlgrec_0`,`peers_dlgrec_1`,`peers_dlgrec_2`,`peers_dlgrec_3`,`peers_dlgrec_4`,`peers_dlgrec_5`,`peers_dlgrec_6`,`peers_dlgrec_7`,`peers_dlgrec_8`,`peers_dlgrec_9`,`peers_dlgrec_10`,`peers_dlgrec_11`,
`dlg_manager`,
`social_worker`,`supervise1`,`supervise2`,
`Upload_path`, `Upload_name`,
`Create_date`,`Create_name`) VALUES
 ('$peers_dlgrec_id','$bf_num','$al_num','$em_num','$lp_num','$leave_num','$peers_dlgrec_date',
 '$peers_dlgrec_0','$peers_dlgrec_1','$peers_dlgrec_2','$peers_dlgrec_3','$peers_dlgrec_4','$peers_dlgrec_5','$peers_dlgrec_6','$peers_dlgrec_7','$peers_dlgrec_8','$peers_dlgrec_9','$peers_dlgrec_10','$peers_dlgrec_11',
 '$dlg_manager',
 '$social_worker','$supervise1','$supervise2',
 '$file', '$file_name',
 Now(),'$user');";

$sign_date = date("Y-m-d H:s");

$signers = $social_worker . "、" . $supervise1 . "、" . $supervise2;

$sign_state = $social_worker . "未簽核" . "、" . $supervise1 . "未簽核" . "、" . $supervise2  . "未簽核";

$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ('$peers_dlgrec_id', '$title', '$url', '$sign_date', '$social_worker', '$signers', '$sign_state', 'peers_dlgrec', Now(), '$user');";

	if(mysqli_multi_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
