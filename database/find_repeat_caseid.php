<?php 
include("sql_connect.php"); 

@$Open_id = $_POST['Open_id'];
//region 抓資料

  $sql = "SELECT * FROM `current_case` WHERE `Case_id` = '$Open_id';";


 //宣告要回傳的結果
 $result = null;

 //用 mysqli_query 方法取執行請求（也就是sql語法），請求後的結果存在 $query 變數中
 $query = mysqli_query($conn, $sql);

 //如果請求成功
 if ($query)
 {
   //使用 mysqli_num_rows 回傳 $query 請求的結果數量有幾筆，為一筆代表找到會員且密碼正確。
   if(mysqli_num_rows($query) == 1)
   {
     //取得使用者資料
     $user = mysqli_fetch_assoc($query);

     //回傳的 $result 就給 true 代表驗證成功
     $result = true;
   }
 }
 else
 {
  echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
 }

 //回傳結果
 echo $result;
?>