<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Phone_id = $_POST['Phone_id'];
$Case_id = $_POST['Case_id'];
$Case_create_date = $_POST['Case_create_date'];
$Object_type = $_POST['Object_type'];
$Case_grade = $_POST['Case_grade'];
$Case_property = $_POST['Case_property'];
$Case_stage = $_POST['Case_stage'];
$Open_case_date = $_POST['Open_case_date'];
$Name = $_POST['Name'];
@$Phone = $_POST['Phone'];
$Gender = $_POST['Gender'];
@$Sexual_orientation = $_POST['Sexual_orientation'];
$Birth = $_POST['Birth'];
$Case_pid = $_POST['Case_pid'];
$Referral = $_POST['Referral'];
@$Unopen_type = $_POST['Unopen_type'];
$Case_user = $_POST['Case_user'];
$user = $_SESSION['name'];

$sql = "INSERT INTO `current_case` (`Case_id`,`Phone_id`, `Unopen_type`,
 `Case_Create_date`,`Object_type`, `Case_grade`, `Case_property`, `Case_stage`,
`Open_case_date`, `Name`, `Gender`, `Sexual_orientation`, `Phone`, `Birth`, `Case_pid`, `Referral`, `Case_state`, `Case_assign`,
`Create_date`,`Create_name`) VALUES
 ('$Case_id', '$Phone_id', '$Unopen_type',
  '$Case_create_date', '$Object_type', '$Case_grade', '$Case_property', '$Case_stage',
  '$Open_case_date', '$Name', '$Gender', '$Sexual_orientation', '$Phone', '$Birth', '$Case_pid', '$Referral', '未結案', '$Case_user',
  Now(), '$user')";
  
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }
mysqli_close($conn);
?>