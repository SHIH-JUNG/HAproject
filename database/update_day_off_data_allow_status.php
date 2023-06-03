<?php
session_start();
include("sql_connect.php");

$Day_off_id = $_POST['Day_off_id']; 
$Allow_status = $_POST['Allow_status'];

// $Day_off_id = '1'; 
// $Allow_status = '核准';

$user = $_SESSION['name'];
$user_acc = $_SESSION['Account'];

// 查詢當前登入者是否為該筆請假紀錄的審核主管，
// 是：允許修改資料庫審核狀態
// 否：返回"noallow"字串
// 其他：返回false，表示更新失敗
$select_supervise = "SELECT `Supervise` FROM `day_off_v2` WHERE `Supervise` = '$user' AND `Id` = '$Day_off_id';";

$find_supervise = mysqli_query($conn, $select_supervise);
$row_nums = mysqli_num_rows($find_supervise);
$supervise = mysqli_fetch_row($find_supervise);

$select_director = "SELECT `Director` FROM `day_off_v2` WHERE `Director` = '$user' AND `Id` = '$Day_off_id';";

$find_director = mysqli_query($conn, $select_director);
$row_nums2 = mysqli_num_rows($find_director);
$director = mysqli_fetch_row($find_director);
// echo $row_nums;
// echo $user;

if($row_nums > 0 || $row_nums2 > 0)
{
    // 修改審核狀態
    $sqlUpdate ="UPDATE `day_off_v2` SET `Allow_status` = '$Allow_status', 
    `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Day_off_id';";

    if($Allow_status == "核准")
    {
        $select_day_off_data = "SELECT `Resume_id`, `Rec_year`, `Hours`, `Remain_comp_hours`, `Remain_annual_hours`, `Used_comp_hours`, `Used_annual_hours` FROM `day_off_v2` WHERE `Id` = '$Day_off_id';";

        $find_day_off_data = mysqli_query($conn, $select_day_off_data);
        $row_nums_2 = mysqli_num_rows($find_day_off_data);
        $day_off_data = mysqli_fetch_row($find_day_off_data);

        $Remark = "使用的補休時數：" . number_format(floatval($day_off_data[5]), 1) . "小時，使用的特休時數：" . number_format(floatval($day_off_data[6]), 1) . "小時。";
        $day_off_data_2f = number_format(floatval($day_off_data[2]), 1);

        $sqlUpdate .= "INSERT INTO `resume_seniority` (`Resume_id`, `Day_off_id`, `Rec_year`
        , `Type`, `Change_num`, `Remark`, `Create_date`, `Create_name`) VALUES 
            ($day_off_data[0], '$Day_off_id', '$day_off_data[1]'
            , 'Leave' , '$day_off_data_2f', '$Remark'
            , NOW(), '$user');";
    }
    else
    {
        $select_resume_seniority_data = "SELECT * FROM `resume_seniority` WHERE `Day_off_id` = '$Day_off_id';";

        $find_resume_seniority_data = mysqli_query($conn, $select_resume_seniority_data);
        $row_nums_3 = mysqli_num_rows($find_resume_seniority_data);
        $resume_seniority_data = mysqli_fetch_row($find_resume_seniority_data);

        if($row_nums_3 > 0)
        {
            $sqlUpdate .= "DELETE FROM `resume_seniority` WHERE `Id` = '$resume_seniority_data[0]' AND `Day_off_id` = '$Day_off_id';";
        }
        else
        {

        }
    }

    if(mysqli_multi_query($conn, $sqlUpdate)){
        echo true;
    }else{
        echo false;
    }
    // echo "allow";
}
else
{
    echo "noallow";
}

// echo "id：".$Day_off_id.",num：".$row_nums;

mysqli_close($conn);

?>