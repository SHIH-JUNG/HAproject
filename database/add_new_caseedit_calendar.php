<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
@$title = $_POST['Title'];
@$description = $_POST['Description'];
@$url = $_POST['Url'];
@$one_user = $_POST['One_user'];
@$two_user = $_POST['Two_user'];
@$other_user = $_POST['Other_user'];
@$start_datetime = $_POST['Start_date'];
@$end_datetime = $_POST['End_date'];
@$publisher = $_SESSION['name'];

@$Other_user = implode("、",$other_user);

$see_note =$one_user."、".$two_user."、".$Other_user;

$add_auto_note = "INSERT INTO `sign_notice` (`file_name`,`datetime`,`authority`,`person`,`authority_name`) VALUES ('$title', '$start_datetime', '1' ,'$publisher','$see_note')";
mysqli_query($conn,$add_auto_note);
if($url != ""){
    $sql = "INSERT INTO `calendar` (`title`,`description`,`start`, `end`, `publisher`) VALUES ('$title','$url','$start_datetime', '$end_datetime', '$publisher')";
}else{
    $sql = "INSERT INTO `calendar` (`title`,`description`, `start`, `end`, `publisher`) VALUES ('$title','$description','$start_datetime', '$end_datetime', '$publisher')";
}

	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }
mysqli_close($conn);
?>