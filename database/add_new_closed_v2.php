<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Open_case_id = $_POST['Open_case_id'];
$Open_case_seqid = $_POST['Open_case_seqid'];

$Name = $_POST['Name'];
$Gender = $_POST['Gender'];
$Birth = $_POST['Birth'];
$Open_date = $_POST['Open_date'];
$Closed_date = $_POST['Closed_date'];

$File_name = $_POST['File_name'];

$Main_issue = $_POST['Main_issue'];
$Minor_issue = $_POST['Minor_issue'];
$Intervention = $_POST['Intervention'];
$Evaluation = $_POST['Evaluation'];

$Closed_reason = $_POST['Closed_reason'];
$Closed_result = $_POST['Closed_result'];

$Remark = $_POST['Remark'];
$Assign = $_POST['Assign'];
$Supervise = $_POST['Supervise'];

$user = $_SESSION['name'];

$select_id_num = "SELECT MAX(Id) FROM `closed` ORDER BY `closed`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $closed_id = (int)$id_num[0] + 1;
}
else
{
    $closed_id = 0;
}


$url = 'closed_detail.php?closed_id='.$closed_id;

$start_datetime = date("Y-m-d H:s");
$end_datetime = date("Y-m-d H:s" ,strtotime("+2 day"));

$title = '結案簽核：案號'.$Open_case_id."姓名".$Name;

$sql ="UPDATE `current_case` SET `Case_state` = '已結案', `Close_case_date` = '$Closed_date',
 `Update_name` = '$user', `Update_date` = NOW() WHERE `Case_id` = '$Open_case_id' AND `Id` = '$Open_case_seqid' ORDER BY `current_case`.`Create_date` ASC LIMIT 1;";

$sql .= "INSERT INTO `closed` (`Id`, `Open_case_seqid`, `Open_case_id`, `Closed_id`, `Open_date`, `Closed_date`,
 `Name`, `Gender`, `Birth`, 
 `File_name`,
`Main_issue`, `Minor_issue`, `Intervention`, `Evaluation`,
`Closed_reason`,`Closed_result`, `Remark`, `Assign`, `Supervise`,
`Create_date`,`Create_name`) VALUES
 ($closed_id, '$Open_case_seqid', '$Open_case_id', '$Open_case_id', '$Open_date', '$Closed_date',
  '$Name', '$Gender', '$Birth',
  '$File_name',
  '$Main_issue', '$Minor_issue', '$Intervention', '$Evaluation',
  '$Closed_reason', '$Closed_result', '$Remark', '$Assign', '$Supervise', Now(), '$user');";

$sign_closed_date = $Closed_date." 00:00";

$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ($closed_id, '$title', '$url', '$sign_closed_date', '$Assign', '$Supervise', '未簽核', 'closed', Now(), '$user');";

	// if(mysqli_query($conn,$sql)){
    if(mysqli_multi_query($conn, $sql)){
        echo true;
        // echo $sql;
    }else{
        echo false;
    }
mysqli_close($conn);
?>