<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Phone_id= $_POST['Phone_id'];
@$Way = $_POST['Way'];
@$nCall_datetime = $_POST['nCall_datetime'];
@$Name = $_POST['Name'];
@$Gender = $_POST['Gender'];
@$Object_type = $_POST['nObject_type'];
// @$nAddition = $_POST['nAddition'];
@$m_type = $_POST['m_type'];
@$M_addiction = $_POST['main_radio'];
@$Address = $_POST['address'];
@$Age = $_POST['Age'];
@$nA_detail = $_POST['a_val'];
@$nL_detail = $_POST['l_val'];
@$nInfo_Name = $_POST['nInfo_Name'];
@$nRelationship_detail = $_POST['nRelationship_detail'];
// $nR_detail = $_POST['r_val'];
@$nR_phone = $_POST['nR_phone'];
@$nReferral = $_POST['nReferral'];
@$nReferral_phone = $_POST['nReferral_phone'];
@$nReferral_detail = $_POST['ref_val'];
@$nReferral_name = $_POST['nReferral_name'];
// @$Know_from = $_POST['Know_from'];
// @$nKnow_from_detail = $_POST['k_val'];
@$nEligible = $_POST['e_val'];
@$Assign = $_POST['Assign'];
@$nPhone_note = $_POST['nPhone_note'];
@$nCreate_name = $_POST['nCreate_name'];

@$publisher = $_SESSION['name'];



// if(!empty($nAddition))
// {
//     @$Addiction = implode("、",$nAddition);
// }
// else
// {
//     $Addiction = '';
// }

if(!empty($nReferral_phone))
{
    @$Referral_Phone = implode("、",$nReferral_phone);
}
else
{
    $Referral_Phone = '';
}
// $R_phone = implode("、",$nR_phone);


$count = "SELECT COUNT(`Phone_id`) FROM `consult` WHERE `Phone_id`='$Phone_id'";
$select_count = mysqli_query($conn,$count);
$count_text = mysqli_fetch_row($select_count);
$Count = ($count_text[0]+1);



$sql = "INSERT INTO `consult` (`Phone_id`,`Way`,`Call_datetime`, `Name`, `Gender`,`Object_type`,`M_type`,`M_addiction`,`Address`,`Age`,`A_detail`,`L_detail`,`Info_Name`,`Relationship_detail`,`R_phone`,`Referral`, `Referral_detail`, `Referral_phone`,
 `Referral_name`, `Eligible`, `Assign`, `Phone_note`, `Count`, `Create_name`, `Create_date`) VALUES 
 ('$Phone_id','$Way','$nCall_datetime','$Name','$Gender','$Object_type','$m_type',
 '$M_addiction','$Address','$Age','$nA_detail', '$nL_detail', '$nInfo_Name',
  '$nRelationship_detail', '$nR_phone','$nReferral','$nReferral_detail','$Referral_Phone',
  '$nReferral_name','$nEligible','$Assign','$nPhone_note','$Count',
  '$publisher', Now());";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>