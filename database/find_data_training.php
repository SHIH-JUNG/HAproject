<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

//region 抓資料
$acc_id = $_SESSION['acc_id'];

if(isset($_POST['authority_num']))
{
// $note = "SELECT * FROM `training` GROUP BY `training`.`Id`;";
$note = "SELECT * FROM (SELECT * FROM `training` ORDER BY `training`.`Id` DESC) AS tr  GROUP BY tr.Id;";
}
elseif(isset($_POST['url_training_id']) && isset($_POST['url_acc_id']))
{
    $url_acc_id = $_POST['url_acc_id'];
    // $url_training_id = $_POST['url_training_id'];

    $note = "SELECT * FROM `training` WHERE `Account_id`='$url_acc_id' ORDER BY `training`.`Id` DESC;";
}
else
{
    $note = "SELECT * FROM `training` WHERE `Account_id`='$acc_id' ORDER BY `training`.`Id` DESC;";
}

//宣告空的陣列
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
