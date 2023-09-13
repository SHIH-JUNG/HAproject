<?php session_start(); ?>
<?php 
include("sql_connect.php"); 
//$authority =$_SESSION['authority'];
$authority_name =$_SESSION['name'];
//region 抓資料
$note = "SELECT * FROM `sign_check` WHERE `check_name` LIKE '%$authority_name%' AND `OKorNO` = 'NO' ORDER BY `datetime` DESC";

$select_note = mysqli_query($conn,$note);

$data = array();
$data['id'] = array();
$data['file_name'] = array();
$data['url'] = array();
$data['date'] = array();
$data['authority_name'] = array();
$data['face_id'] = array();

for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['id'], $note_text[0]);
    array_push($data['file_name'], $note_text[1]);
    array_push($data['url'], $note_text[2]);
    array_push($data['authority_name'], $note_text[3]);
    array_push($data['date'], $note_text[6]);
    array_push($data['face_id'], $note_text[7]);
}
mysqli_close($conn);
echo json_encode($data);
//endregion
?>