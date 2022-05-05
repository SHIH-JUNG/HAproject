<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Case_id = $_POST['Case_id'];
$Case_create_date = $_POST['Case_create_date'];
$Object_type = $_POST['Object_type'];
$Case_property = $_POST['Case_property'];
$Open_case_date = $_POST['Open_case_date'];
$Name = $_POST['Name'];
@$Phone = $_POST['Phone'];
$Birth = $_POST['Birth'];
$Case_pid = $_POST['Case_pid'];
$Referral = $_POST['Referral'];
@$Unopen_type = $_POST['Unopen_type'];

$user = $_SESSION['name'];

$sql = "INSERT INTO `placement_case` (`Case_id`, `Unopen_type`,
 `Case_Create_date`,`Object_type`, `Case_property`,
`Open_case_date`, `Name`, `Phone`, `Birth`, `Case_pid`, `Referral`, `Case_state`,
`Create_date`,`Create_name`) VALUES
 ('$Case_id', '$Unopen_type',
  '$Case_create_date', '$Object_type', '$Case_property',
  '$Open_case_date', '$Name', '$Phone', '$Birth', '$Case_pid', '$Referral', '未結案',
  Now(), '$user')";
  
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }
mysqli_close($conn);
?>