<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Refferal = $_POST['Refferal'];
$Counsel_id = $_POST['Counsel_id'];
$Name = $_POST['Name'];
@$Gender = $_POST['Gender'];
@$Sexual_orientation = $_POST['Sexual_orientation'];
@$Birth = $_POST['Birth'];
$Pid = $_POST['Pid'];

@$Info_name = $_POST['Info_name'];
@$Info_phone = $_POST['Info_phone'];
@$Address = $_POST['Address'];

@$In_prison_date = $_POST['In_prison_date'];
@$Out_prison_date = $_POST['Out_prison_date'];
@$In_prison_date_2nd = $_POST['In_prison_date_2nd'];
@$Out_prison_date_2nd = $_POST['Out_prison_date_2nd'];
@$In_prison_date_3rd = $_POST['In_prison_date_3rd'];
@$Out_prison_date_3rd = $_POST['Out_prison_date_3rd'];

@$Is_parole = $_POST['Is_parole'];

@$HIV_diagnosis_date = $_POST['HIV_diagnosis_date'];

@$Family_know = $_POST['Family_know'];
@$Cocktail_therapy_status = $_POST['Cocktail_therapy_status'];

@$Interview_date_1st = $_POST['Interview_date_1st'];


$user = $_SESSION['name'];


$select_counsel_num = "select count(`Counsel_id`),Counsel_id from `counsel` WHERE Name='$Name' AND 	Pid='$Pid';";

$find_counsel_num = mysqli_query($conn,$select_counsel_num);
$counsel_num = mysqli_fetch_row($find_counsel_num);

if($counsel_num[0]>0)
{
    echo "isfind";
}
else
{
    $sql = "INSERT INTO `counsel` (`Refferal`,`Counsel_id`,`Name`,`Gender`,`Sexual_orientation`,`Birth`,`Pid`,`Info_name`,`Info_phone`,`Address`,`In_prison_date`,`Out_prison_date`,`In_prison_date_2nd`,`Out_prison_date_2nd`,`In_prison_date_3rd`,`Out_prison_date_3rd`,`Is_parole`,`HIV_diagnosis_date`,`Family_know`,`Cocktail_therapy_status`,`Interview_date_1st`,`Create_date`,`Create_name`) VALUES
 ('$Refferal','$Counsel_id','$Name','$Gender','$Sexual_orientation','$Birth',
 '$Pid','$Info_name','$Info_phone','$Address',
 '$In_prison_date','$Out_prison_date','$In_prison_date_2nd','$Out_prison_date_2nd',
 '$In_prison_date_3rd','$Out_prison_date_3rd',
 '$Is_parole','$HIV_diagnosis_date','$Family_know','$Cocktail_therapy_status',
 '$Interview_date_1st',Now(),'$user')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }
}



mysqli_close($conn);
?>
