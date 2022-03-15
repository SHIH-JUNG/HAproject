<?php 
include("sql_connect.php"); 
// $Department = $_POST['Department'];
// $Department = '行政中心';
//region 抓資料
// $note = "SELECT * FROM `user_info` WHERE `Department` = '$Department'";
$note = "SELECT * FROM `user_info`";

$select_note = mysqli_query($conn,$note);
$data = array();
$data['Id'] = array();
$data['Name'] = array();



for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['Id'], $note_text[0]);
    array_push($data['Name'], $note_text[3]);
}
  mysqli_close($conn);
  echo json_encode($data);
//endregion
?>