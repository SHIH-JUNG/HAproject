<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
// $Phone_id = $_POST['Phone_id'];
$Call_datetime = $_POST['Call_datetime'];
$Way = $_POST['Way'];
$Way_detail = $_POST['Way_detail'];
$Name = $_POST['Name'];
$Gender = $_POST['Gender'];
$Object_type = $_POST['Object_type'];
// @$Addition = $_POST['Addition'];
@$m_type = $_POST['m_type'];
@$main_radio = $_POST['main_radio'];
@$Age = $_POST['Age'];
@$a_val = $_POST['a_val'];
@$Address = $_POST['Address'];
@$l_val = $_POST['l_val'];
@$Info_Name = $_POST['Info_Name'];
@$Relationship_detail = $_POST['Relationship_detail'];
@$r_val = $_POST['r_val'];
@$R_phone = $_POST['R_phone'];
@$Referral = $_POST['Referral'];
@$ref_val = $_POST['ref_val'];
@$Referral_phone = $_POST['Referral_phone'];
@$Referral_name = $_POST['Referral_name'];
// @$Know_from= $_POST['Know_from'];
// @$k_val = $_POST['k_val'];
@$e_val = $_POST['e_val'];
@$Assign = $_POST['Assign'];
$user = $_SESSION['name'];
@$Phone_note = $_POST['Phone_note'];
$date_y = $_POST['date_y'];
$date_m = $_POST['date_m'];

$Count = 0;
// var_dump($_POST);
// if(!empty($Addition)){
// @$Addiction_A = implode("、",$Addition);
// }else{
//     $Addiction_A = $Addition;
// }

if(!empty($main_radio)){
@$Main_radio = implode("、",$main_radio);
}else{
    $Main_radio = $main_radio;
}

if(!empty($R_phone)){
@$Phone = implode("、",$R_phone);
}else{
    $Phone = $R_phone;
}
if(!empty($Referral_phone)){
    @$Referral_Phone = implode("、",$Referral_phone);
    }else{
        $Referral_Phone = $Referral_phone;
    }

$select_phone_num = "select count(`Phone_id`),Phone_id,Name,Gender,A_detail,L_detail from `consult` WHERE Name='$Name' AND Gender='$Gender';";

$find_phone_num = mysqli_query($conn,$select_phone_num);
$phone_num = mysqli_fetch_row($find_phone_num);

if($phone_num[0]>0)
{
    $Phone_id = $phone_num[1];

    @$Count = "SELECT COUNT(`Phone_id`) FROM `consult` WHERE `Phone_id`='$Phone_id'";

    @$select_count = mysqli_query($conn,$count);
    @$count_text = mysqli_fetch_row($select_count);
    @$Count = ($count_text[0]+1);
}
else
{
    $select_phone_num2 = "select count(DISTINCT `Phone_id`)+1 from `consult`;";

    $find_phone_num2 = mysqli_query($conn,$select_phone_num2);
    $phone_num2 = mysqli_fetch_row($find_phone_num2);

    $Phone_id = $phone_num2[0];
}



$sql = "INSERT INTO `consult` (`Phone_id`,`Call_datetime`,`Way`,`Way_detail`,`Name`,`Gender`,`Object_type`, `M_type`, `M_addiction`,`Age`,`A_detail`,`Address`,`L_detail`,`Info_Name`,`Relationship_detail`,`R_detail`,`R_phone`,`Referral`,`Referral_detail`,`Referral_phone`,`Referral_name`,`Eligible`,`Assign`,`Phone_note`,`Count`,`Is_firstadd`,`Create_date`,`Create_name`) VALUES
 ('$Phone_id','$Call_datetime','$Way','$Way_detail','$Name','$Gender','$Object_type',
 '$m_type','$Main_radio','$Age', '$a_val' ,'$Address','$l_val','$Info_Name',
 '$Relationship_detail','$r_val','$Phone','$Referral','$ref_val','$Referral_Phone',
 '$Referral_name','$e_val',
 '$Assign','$Phone_note',
 '$Count',1,Now(),'$user')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
