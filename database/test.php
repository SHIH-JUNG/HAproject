<?php 
@session_start();
 //家庭關係量表、滿意度量表、BSRS-5
function get_form($case_pid,$case_id,$form_id,$form_type)
{
  //宣告空的陣列
  $datas = array();

  //將查詢語法當成字串，記錄在$sql變數中
  $sql = "SELECT `file_path` FROM `forms` WHERE `Form_type` = '{$form_type}' AND `Case_id` = '{$case_id}' AND `Form_id` = '{$form_id}' AND `Case_pid` = '{$case_pid}';";

  //用 mysqli_query 方法取執行請求（也就是sql語法），請求後的結果存在 $query 變數中
  $query = mysqli_query($_SESSION['link'], $sql);

  //如果請求成功
  if ($query)
  {
    //使用 mysqli_num_rows 方法，判別執行的語法，其取得的資料量，是否大於0
    if (mysqli_num_rows($query) > 0)
    {
      //取得的量大於0代表有資料
      //while迴圈會根據查詢筆數，決定跑的次數
      //mysqli_fetch_assoc 方法取得 一筆值
      while ($row = mysqli_fetch_assoc($query))
      {
        $datas[] = $row;
      }
    }

    //釋放資料庫查詢到的記憶體
    mysqli_free_result($query);
  }
  else
  {
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($_SESSION['link']);
  }

  //回傳結果
  return $datas;
}

?>