<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$lat = $_POST["lat"];
$lng = $_POST["lng"];

$user = $_SESSION['name'];
$account = $_SESSION['Account'];
$authority = $_SESSION['authority'];

$coordinate = $lat . "," . $lng;

//判斷是否在當日有效時間內07:00~23:55之間登入帳號，並且判斷是否在當日有效時間內第一次登入(打卡登入)
date_default_timezone_set('Asia/Taipei');

$Day = date('Y-m-d ',time());
$timeBegin = strtotime($Day."07:00".":00");
$timeEnd = strtotime($Day."23:55".":55");
$curr_time = time();
if($curr_time >= $timeBegin && $curr_time <= $timeEnd){
    $select_id_num = "SELECT * FROM `login_record` WHERE TO_DAYS(Login_timestamp) = TO_DAYS(NOW()) AND `Login_account`= '$account' AND `Is_day_first` = 1;";

    $find_id_num = mysqli_query($conn,$select_id_num);
    $id_num = mysqli_fetch_row($find_id_num);

    if(!empty($id_num))
    {
        $Is_day_first = 0;
    }
    else
    {
        $Is_day_first = 1;
        echo "ok";
    }
}
else
{
    $Is_day_first = 0;
}



$sql = "INSERT INTO `login_record` (`Login_timestamp`, `Login_account` ,`Login_authority` ,`Login_name` ,`Login_coordinate`, `Is_day_first`) VALUES
(NOW(), '$account', '$authority', '$user', '$coordinate', $Is_day_first);";


if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
