<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Phone_id = $_POST['Phone_id'];
$Case_id = $_POST['Case_id'];
@$Name = $_POST['Name'];
@$Case_pid = $_POST['Case_pid'];
@$Url = $_POST['Url'];

$Number = $_POST['Number'];
$Form_name = $_POST['Form_name'];

@$Create_date = $_POST['Create_date'];
@$Fillin_date = $_POST['Fillin_date'];

@$Remark = $_POST['Remark'];

$user = $_SESSION['name'];

$sql = "INSERT INTO `form_all_info` (`Phone_id`,`Case_id`, `Case_name`, `Case_pid`,`Url`, `Number`,`Form_name`,`Fillin_date`,`Remark`,`Create_date`,`Create_name`) VALUES
 ('$Phone_id','$Case_id',
  '$Name', '$Case_pid',
  '$Url',
  '$Number','$Form_name',
  '$Fillin_date','$Remark','$Create_date',
  '$user')";
  
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }
mysqli_close($conn);
?>