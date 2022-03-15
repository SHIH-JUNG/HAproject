<?php 
include("sql_connect.php"); 
$id = $_POST['id']; 
//region 抓資料
$note = "SELECT * FROM `phone_history` WHERE `Id` = $Id ORDER BY `phone_history`.`Call_datetime` DESC";
$select_note = mysqli_query($conn,$note);
$data = array();
$data['date'] = array();

for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['date'], $note_text[3]);
    
}
  mysqli_close($conn);
    echo json_encode($data);
//endregion
?>