<?php session_start(); ?>
<?php 
include("sql_connect.php"); 
$authority =$_SESSION['authority'];
//region 抓資料
$note = "SELECT * FROM `announcement` WHERE `authority` >= $authority ORDER BY `datetime` DESC";
$select_note = mysqli_query($conn,$note);
$data = array();
$data['title'] = array();
$data['date'] = array();
$data['publisher'] = array();


for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['title'], $note_text[1]);
    array_push($data['publisher'], $note_text[3]);
    array_push($data['date'], $note_text[4]);
}
  mysqli_close($conn);
    echo json_encode($data);
//endregion
?>