<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Refferal =$_REQUEST['Refferal'];
$Counsel_id =$_REQUEST['Counsel_id'];
$Id = $_POST['Id'];
$Name =$_REQUEST['Name'];
@$Gender =$_REQUEST['Gender'];
@$Sexual_orientation =$_REQUEST['Sexual_orientation'];
@$Birth =$_REQUEST['Birth'];
$Pid =$_REQUEST['Pid'];

@$Info_name =$_REQUEST['Info_name'];
@$Info_phone =$_REQUEST['Info_phone'];
@$Address =$_REQUEST['Address'];

@$In_prison_date =$_REQUEST['In_prison_date'];
@$Out_prison_date =$_REQUEST['Out_prison_date'];
@$In_prison_date_2nd =$_REQUEST['In_prison_date_2nd'];
@$Out_prison_date_2nd =$_REQUEST['Out_prison_date_2nd'];
@$In_prison_date_3rd =$_REQUEST['In_prison_date_3rd'];
@$Out_prison_date_3rd =$_REQUEST['Out_prison_date_3rd'];

@$Is_parole =$_REQUEST['Is_parole'];

@$HIV_diagnosis_date =$_REQUEST['HIV_diagnosis_date'];

@$Family_know =$_REQUEST['Family_know'];
@$Cocktail_therapy_status =$_REQUEST['Cocktail_therapy_status'];
@$Cocktail_therapy_name =$_REQUEST['Cocktail_therapy_name'];

$user = $_SESSION['name'];

// 上傳報表路徑
@$file_dir = "../counsel/upload/";

$file_0 = "";

$sqlUpdate = "";

if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷檔案上傳
if (isset($_FILES["counsel_file0"]))
{
    @$file_0 = $file_dir . $_FILES["counsel_file0"]["name"];

    @$file_0_date = date("Y-m-d");

    if ($_FILES["counsel_file0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["counsel_file0"]["tmp_name"],
            $file_0
        );
    }
}


$sqlUpdate ="UPDATE `counsel` SET `Refferal` = '$Refferal', `Name` = '$Name', `Gender` = '$Gender',`Sexual_orientation` = '$Sexual_orientation',
`Birth` = '$Birth', `Pid` = '$Pid', `Info_name` = '$Info_name', `Info_phone` = '$Info_phone', `Address` = '$Address',
`In_prison_date` = '$In_prison_date',`Out_prison_date` = '$Out_prison_date', 
`In_prison_date_2nd` = '$In_prison_date_2nd', `Out_prison_date_2nd` = '$Out_prison_date_2nd',
`In_prison_date_3rd` = '$In_prison_date_3rd', `Out_prison_date_3rd` = '$Out_prison_date_3rd',
`Is_parole` = '$Is_parole', `HIV_diagnosis_date` = '$HIV_diagnosis_date', `Family_know` = '$Family_know', 
`Cocktail_therapy_status` = '$Cocktail_therapy_status', `Cocktail_therapy_name` = '$Cocktail_therapy_name',
`Upload_path` = '$file_0', 
`Update_name` = '$user', `Update_date` = NOW() WHERE `Counsel_id` = '$Counsel_id' AND `Id` = '$Id' ORDER BY `counsel`.`Create_date` ASC LIMIT 1;";

if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}
else
{
    echo false;
}




mysqli_close($conn);
?>
