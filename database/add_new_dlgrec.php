<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$bf_num = $_POST['bf_num'];
$al_num = $_POST['al_num'];
$em_num = $_POST['em_num'];
$lp_num = $_POST['lp_num'];
$leave_num = $_POST['leave_num'];
$dlgrec_date = $_POST['dlgrec_date'];
$dlgrec_0 = $_POST['dlgrec_0'];
$dlgrec_1 = $_POST['dlgrec_1'];
$dlgrec_2 = $_POST['dlgrec_2'];
$dlgrec_3 = $_POST['dlgrec_3'];
$dlgrec_4 = $_POST['dlgrec_4'];
$dlgrec_5 = $_POST['dlgrec_5'];
$dlgrec_6 = $_POST['dlgrec_6'];
$dlgrec_7 = $_POST['dlgrec_7'];
$dlgrec_8 = $_POST['dlgrec_8'];
$dlgrec_9 = $_POST['dlgrec_9'];
$dlgrec_10 = $_POST['dlgrec_10'];
$dlgrec_11 = $_POST['dlgrec_11'];

$dlg_manager = $_POST['dlg_manager'];
$social_worker = $_POST['social_worker'];
$supervise = $_POST['supervise'];

$user = $_SESSION['name'];


$sql = "INSERT INTO `dlgrec` (`bf_num`,`al_num`,`em_num`,`lp_num`,`leave_num`,`dlgrec_date`,
`dlgrec_0`,`dlgrec_1`,`dlgrec_2`,`dlgrec_3`,`dlgrec_4`,`dlgrec_5`,`dlgrec_6`,`dlgrec_7`,`dlgrec_8`,`dlgrec_9`,`dlgrec_10`,`dlgrec_11`,
`dlg_manager`,`social_worker`,`supervise`,
`Create_date`,`Create_name`) VALUES
 ('$bf_num','$al_num','$em_num','$lp_num','$leave_num','$dlgrec_date',
 '$dlgrec_0','$dlgrec_1','$dlgrec_2','$dlgrec_3','$dlgrec_4','$dlgrec_5','$dlgrec_6','$dlgrec_7','$dlgrec_8','$dlgrec_9','$dlgrec_10','$dlgrec_11',
 '$dlg_manager','$social_worker','$supervise',
 Now(),'$user');";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
