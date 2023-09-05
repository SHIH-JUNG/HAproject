<?php
session_start();
include("sql_connect.php");

$Day_off_id = $_POST['Day_off_id']; 
$Resume_id = $_POST['Resume_id'];

$user = $_SESSION['name'];
$user_acc = $_SESSION['Account'];


// 查看撤銷申請者是否為原申請人(員工)
$select_resume_name = "SELECT `Name` FROM `resume` WHERE `Name` = '$user' AND `Id` = '$Resume_id';";

$find_resume_name = mysqli_query($conn, $select_resume_name);
$row_nums = mysqli_num_rows($find_resume_name);
$resume_name = mysqli_fetch_row($find_resume_name);


// 查看撤銷申請者是否為主管
$select_supervise = "SELECT `Supervise` FROM `day_off_v2` WHERE `Supervise` = '$user' AND `Id` = '$Day_off_id';";

$find_supervise = mysqli_query($conn, $select_supervise);
$row_nums2 = mysqli_num_rows($find_supervise);
$supervise = mysqli_fetch_row($find_supervise);

$select_director = "SELECT `Director` FROM `day_off_v2` WHERE `Director` = '$user' AND `Id` = '$Day_off_id';";

$find_director = mysqli_query($conn, $select_director);
$row_nums3 = mysqli_num_rows($find_director);
$director = mysqli_fetch_row($find_director);

// 查看審核狀態是否為 "核准"，是的話不可撤銷請假
$select_status = "SELECT `Allow_status` FROM `day_off_v2` WHERE `Id` = '$Day_off_id';";

$find_status = mysqli_query($conn, $select_status);
$row_nums3 = mysqli_num_rows($find_status);
$status = mysqli_fetch_row($find_status);

if($status[0] == "核准")
{
    echo "reject";
}
else
{
    if($row_nums > 0 || $row_nums2 > 0 || $row_nums3 > 0)
    {
        $sqlDelete = "DELETE from day_off_v2 WHERE `Id` = '$Day_off_id';";
    
        if(mysqli_multi_query($conn, $sqlDelete)){
            echo true;
        }else{
            echo false;
        }
    }
    else
    {
        echo "noallow";
    }
}



mysqli_close($conn);

?>