<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

@$Phone_id = $_POST['Phone_id'];
@$Way = $_POST['Way'];
@$Way_detail = $_POST['Way_detail'];
$Name = $_POST['Name'];
@$Gender = $_POST['Gender'];
@$Object_type = $_POST['Object_type'];
@$Addiction = $_POST['Addiction'];
@$M_addiction = $_POST['M_addiction'];

@$Age = $_POST['Age'];
@$A_detail = $_POST['a_val'];
@$Address = $_POST['Address'];
@$L_detail = $_POST['l_val'];
@$Info_Name = $_POST['Info_Name'];
@$Relationship_detail = $_POST['Relationship_detail'];
@$R_detail = $_POST['r_val'];
@$R_phone = $_POST['R_phone'];

@$Referral = $_POST['Referral'];
@$Referral_detail = $_POST['ref_val'];
@$Know_from = $_POST['Know_from'];
@$Know_from_detail = $_POST['Know_from_detail'];

@$Eligible = $_POST['Eligible'];
@$Assign = $_POST['Assign'];

@$Location = $_POST['Location'];
@$Location_detail = $_POST['Location_detail'];

@$Add_date = $_POST['Add_date'];
@$End_date = $_POST['End_date'];
@$Start_time = $_POST['Start_time'];
@$End_time = $_POST['End_time'];

@$One_user = $_POST['One_user'];
@$Two_user = $_POST['Two_user'];
$user = $_SESSION['name'];
@$Remark = $_POST['Remark'];
// @$Date_y = $_POST['Date_y'];
// @$Date_m = $_POST['Date_m'];

if(!empty($Addiction))
{
    @$Addiction = implode("、",$Addiction);
}
else
{
    $Addiction = '';
}

if(!empty($R_phone))
{
    @$R_phone = implode("、",$R_phone);
}
else
{
    $R_phone = '';
}

if(!empty($M_addiction))
{
    @$M_addiction = implode("、",$M_addiction);
}
else
{
    $M_addiction = '';
}


    // $select_face_num = "select count(`Face_id`),Face_id,Name,Gender,Age,Address from `face` WHERE Name='$Name' AND Gender='$Gender' AND Age='$Age' AND Address='$Address';";

    // $find_face_num = mysqli_query($conn,$select_face_num);
    // $face_num = mysqli_fetch_row($find_face_num);

    // if($face_num[0]>0)
    // {
    //     $Face_id = $face_num[1];
    // }
    // else
    // {
    //     $select_face_num2 = "select count(DISTINCT `Face_id`)+1 from `face`;";

    //     $find_face_num2 = mysqli_query($conn,$select_face_num2);
    //     $face_num2 = mysqli_fetch_row($find_face_num2);

    //     $Face_id = $face_num2[0];
    // }
    
// $counter = "SELECT COUNT(`Face_id`) FROM `face` WHERE `Face_id`='$Face_id'";
// $select_counter = mysqli_query($conn,$counter);
// $counter_text =mysqli_fetch_row($select_counter);
// $counter = $counter_text[0]+1;

$sql = "INSERT INTO `consult` (`Phone_id`,`Way`,`Way_detail`,`Name`,`Gender`,`Object_type`,`Addiction`,`M_addiction`,`Age`,`A_detail`,`Address`,`L_detail`,`Info_Name`,`Relationship_detail`,`R_detail`,`R_phone`,`Referral`,`Referral_detail`,`Know_from`,`Know_from_detail`,`Eligible`,`Assign`,`Location`,`Location_detail`,`Start_date`,`End_date`,`Start_time`,`End_time`,`One_user_name`,`Two_user_name`,`Remark`,`Create_date`,`Create_name`) VALUES
 ('$Phone_id','$Way','$Way_detail','$Name','$Gender','$Object_type','$Addiction','$M_addiction',
 '$Age','$A_detail','$Address','$L_detail','$Info_Name','$Relationship_detail','$R_detail','$R_phone',
 '$Referral','$Referral_detail','$Know_from','$Know_from_detail',
 '$Eligible','$Assign',
 '$Location','$Location_detail',
 '$Add_date','$End_date','$Start_time','$End_time',
 '$One_user','$Two_user','$Remark',
 Now(),'$user')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
