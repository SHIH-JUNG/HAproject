<?php session_start(); ?>
<?php
include("sql_connect.php");

$authority = $_SESSION['authority'];
$authority_name = $_SESSION['name'];

//可看到行事曆的條件：
//1. authority欄位 包含當前登入帳號使用者的名字
//2. authority欄位 為all，表示全部人皆可以看到
//3. authority欄位 為數字，表示可看到的最低權限等級。排除等級顯示100，當前登入帳號使用者的權限等級小於等於authority欄位的數字的使用者皆可看到（權限等級假設等於3，則小於3的高權限使用者皆可看到）
//P.S. 權限等級越小表示權限越高
//4. publisher欄位 發佈者為當前登入帳號使用者的名字


$note = "SELECT * FROM `calendar` WHERE `authority` like '%$authority_name%' OR `authority`='$authority_name' OR `authority`='all' OR `publisher` = '$authority_name' OR (`authority_num` <> 100 AND `authority_num` >= $authority) ORDER BY id;";

// echo $note;

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
// var_dump($datas);

//endregion
