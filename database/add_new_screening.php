<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Reservation_date = $_POST['Reservation_date'];
$Reservation_time = $_POST['Reservation_time'];
$Name = $_POST['Name'];
@$Age = $_POST['Age'];
@$a_val = $_POST['a_val'];
@$Phone = $_POST['Phone'];
@$Gender = $_POST['Gender'];
@$Sexual_orientation = $_POST['Sexual_orientation'];
@$Screening_type = $_POST['Screening_type'];
@$Screening_results = $_POST['Screening_results'];
@$Interview_content = $_POST['Interview_content'];
@$Remark = $_POST['Remark'];
@$Reagent_seq = $_POST['Reagent_seq'];
@$Amount = $_POST['Amount'];

$user = $_SESSION['name'];

$date_y = $_POST['date_y'];
$date_m = $_POST['date_m'];


$select_screening_num = "select count(`Screening_id`),Screening_id from `screening` WHERE Name='$Name' AND Phone='$Phone' AND Screening_type='$Screening_type';";

$find_screening_num = mysqli_query($conn,$select_screening_num);
$screening_num = mysqli_fetch_row($find_screening_num);

if($screening_num[0]>0)
{
    $Screening_id = $screening_num[1];
}
else
{
    $select_screening_num2 = "select count(DISTINCT `Screening_id`)+1 from `screening`;";

    $find_screening_num2 = mysqli_query($conn,$select_screening_num2);
    $screening_num2 = mysqli_fetch_row($find_screening_num2);

    $Screening_id = $screening_num2[0];
}

$sql = "INSERT INTO `screening` (`Screening_id`,`Reservation_date`,`Reservation_time`,`Name`,`Age`,`A_detail`,`Phone`,`Gender`,`Sexual_orientation`,`Screening_type`,`Screening_results`,`Interview_content`,`Remark`,`Reagent_seq`,`Amount`,`Create_date`,`Create_name`) VALUES
 ('$Screening_id','$Reservation_date','$Reservation_time','$Name','$Age',
 '$a_val','$Phone',
 '$Gender','$Sexual_orientation','$Screening_type','$Screening_results',
 '$Interview_content','$Remark','$Reagent_seq',
 '$Amount',Now(),'$user')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
