<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Open_case_id = $_POST['Open_case_id'];
$Closed_id = $_POST['Closed_id'];
$Name = $_POST['Name'];
$Gender = $_POST['Gender'];
$Open_date = $_POST['Open_date'];
$Closed_date = $_POST['Closed_date'];
$Main_issue = $_POST['Main_issue'];
$Intervention = $_POST['Intervention'];
@$Closed_reason = $_POST['Closed_reason'];
$Remark = $_POST['Remark'];
$Assign = $_POST['Assign'];

$user = $_SESSION['name'];

$sql ="UPDATE `current_case` SET `Case_state` = '已結案', `Close_case_date` = '$Closed_date',
 `Update_name` = '$user', `Update_date` = NOW() WHERE `Case_id` = '$Open_case_id' ORDER BY `current_case`.`Create_date` ASC LIMIT 1;";

$sql .= "INSERT INTO `closed` (`Open_case_id`, `Closed_id`, `Open_date`, `Closed_date`,
 `Name`, `Gender`, `Main_issue`, `Intervention`,
`Closed_reason`, `Remark`, `Assign`,
`Create_date`,`Create_name`) VALUES
 ('$Open_case_id', '$Closed_id', '$Open_date', '$Closed_date',
  '$Name', '$Gender', '$Main_issue', '$Intervention',
  '$Closed_reason', '$Remark', '$Assign', Now(), '$user')";
  
	// if(mysqli_query($conn,$sql)){
    if(mysqli_multi_query($conn, $sql)){
        echo true;
    }else{
        echo false;
    }
mysqli_close($conn);
?>