<?php session_start(); ?>
<?php 
include("sql_connect.php"); 
//$authority =$_SESSION['authority'];
$authority_name =$_SESSION['name'];
//region 抓資料
$note = "SELECT * FROM `sign_notice` WHERE `authority_name`  LIKE '%$authority_name%' AND datetime >= NOW() ORDER BY `sign_notice`.`datetime` ASC";
$select_note = mysqli_query($conn,$note);

$data = array();
$data['file_name'] = array();
$data['date'] = array();
$data['name'] = array();

for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['file_name'], $note_text[1]);
    array_push($data['date'], $note_text[5]);
    array_push($data['name'], $note_text[6]);
}
mysqli_close($conn);
echo json_encode($data);
//endregion
?>