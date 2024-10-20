<?php
session_start();
include("sql_connect.php");

//region 抓資料
$user = $_SESSION['name'];

$select_resume_id = "SELECT `Resume_id` FROM `user_info` WHERE `Name` = '$user';";

$find_resume_id = mysqli_query($conn, $select_resume_id);
$resume_id = mysqli_fetch_row($find_resume_id);

$note = "SELECT SUM(Hours) AS t_hours, SUM(Used_comp_hours) AS t_used_comp_hours, SUM(Used_annual_hours) AS t_Used_annual_hours 
FROM `day_off_v2` WHERE `Resume_id` = '$resume_id[0]' ORDER BY `day_off_v2`.`Fillin_date` ASC;";

//宣告空的陣列
// AND `Allow_status` = '核准'
$datas = array();

$select_all = mysqli_query($conn, $note);

//如果請求成功
if ($select_all) {
    //使用 mysqli_num_rows 方法，判別執行的語法，其取得的資料量，是否大於0
    if (mysqli_num_rows($select_all) > 0) {
        //取得的量大於0代表有資料
        //while迴圈會根據查詢筆數，決定跑的次數
        //mysqli_fetch_assoc 方法取得 一筆值
        while ($row = mysqli_fetch_assoc($select_all)) {
            $datas[] = $row;
        }
    }

    //釋放資料庫查詢到的記憶體
    mysqli_free_result($select_all);
} else {
    echo "{$note} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}

mysqli_close($conn);
echo json_encode($datas);
//endregion
