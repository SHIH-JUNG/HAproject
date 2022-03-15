<?php 
include("sql_connect.php"); 
@$Phone_id = $_POST['Phone_id']; 



//region 抓資料

$count = "SELECT COUNT(`Phone_id`) FROM `consult` WHERE `Phone_id`='$Phone_id' AND `Way` = '面訪'";

@$select_count = mysqli_query($conn,$count);
@$count_text = mysqli_fetch_row($select_count);
@$Count = ($count_text[0]);
$arr = array();
$arr['Face_counter'][0] = $Count;


  mysqli_close($conn);
  echo json_encode($arr);

//endregion
?>