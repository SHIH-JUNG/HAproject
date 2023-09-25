<?php
session_start();
include("sql_connect.php");

$Overtime_id = $_POST['Overtime_id']; 
$Allow_status = $_POST['Allow_status'];
// $Subsidy_type = $_POST['Subsidy_type'];

// $Overtime_id = '1'; 
// $Allow_status = '核准';

$user = $_SESSION['name'];
$user_acc = $_SESSION['Account'];

// 查詢當前登入者是否為該筆請假紀錄的審核主管，
// 是：允許修改資料庫審核狀態
// 否：返回"noallow"字串
// 其他：返回false，表示更新失敗
$select_supervise = "SELECT `Supervise` FROM `overtime` WHERE `Supervise` = '$user' AND `Id` = '$Overtime_id';";

$find_supervise = mysqli_query($conn, $select_supervise);
$row_nums = mysqli_num_rows($find_supervise);
$supervise = mysqli_fetch_row($find_supervise);

$select_director = "SELECT `Director` FROM `overtime` WHERE `Director` = '$user' AND `Id` = '$Overtime_id';";

$find_director = mysqli_query($conn, $select_director);
$row_nums2 = mysqli_num_rows($find_director);
$director = mysqli_fetch_row($find_director);

// echo $row_nums;
// echo $user;

if($row_nums > 0 || $row_nums2 > 0)
{
    // 修改審核狀態
    $sqlUpdate ="UPDATE `overtime` SET `Allow_status` = '$Allow_status', 
    `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Overtime_id';";

    if($Allow_status == "核准")
    {
        $select_overtime_data = "SELECT `Resume_id`, `Rec_year`, `Overtime_hours`, `Subsidy_type`, `Free_hours`, `Free_date`, `Overtime_date` FROM `overtime` WHERE `Id` = '$Overtime_id';";

        $find_overtime_data = mysqli_query($conn, $select_overtime_data);
        $row_nums_2 = mysqli_num_rows($find_overtime_data);
        $overtime_data = mysqli_fetch_row($find_overtime_data);

        if($overtime_data[3] == "加班津貼")
        {

        }
        else if($overtime_data[3] == "補休時數")
        {
            $Remark = "新增的補休時數：" . number_format(floatval($overtime_data[2]), 1) . "小時，加班日期：" . $overtime_data[6] . "。使用的補休時數：" . number_format(floatval($overtime_data[4]), 1) . "小時，補休日期：" . $overtime_data[5] . "。";
            $overtime_data_2f = number_format(floatval($overtime_data[2]) - floatval($overtime_data[4]), 1);
    
            $sqlUpdate .= "INSERT INTO `resume_seniority` (`Resume_id`, `Overtime_id`, `Rec_year`
            , `Type`, `Change_num`, `Remark`, `Create_date`, `Create_name`) VALUES 
                ($overtime_data[0], '$Overtime_id', '$overtime_data[1]'
                , 'Comp_hours' , '$overtime_data_2f', '$Remark'
                , NOW(), '$user');";
        }
        
    }
    else
    {
        $select_resume_seniority_data = "SELECT * FROM `resume_seniority` WHERE `Overtime_id` = '$Overtime_id';";

        $find_resume_seniority_data = mysqli_query($conn, $select_resume_seniority_data);
        $row_nums_3 = mysqli_num_rows($find_resume_seniority_data);
        $resume_seniority_data = mysqli_fetch_row($find_resume_seniority_data);

        if($row_nums_3 > 0)
        {
            $sqlUpdate .= "DELETE FROM `resume_seniority` WHERE `Id` = '$resume_seniority_data[0]' AND `Overtime_id` = '$Overtime_id';";
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

// echo "id：".$Overtime_id.",num：".$row_nums;

mysqli_close($conn);

?>