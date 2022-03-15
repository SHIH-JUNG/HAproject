<?php 
include("sql_connect.php"); 
$Phone_id = $_POST['Phone_id']; 

//region 抓資料
$note = "SELECT * FROM `consult` WHERE `Phone_id` = '$Phone_id' AND `Way` = '電訪' AND `Is_firstadd`=0 ORDER BY `Call_datetime` ASC, `Id` ASC";
$select_note = mysqli_query($conn,$note);
$data = array();
$data['Id'] = array();
$data['Info_Name'] = array();
$data['Relationship_detail'] = array();
$data['R_phone'] = array();
$data['Phone_note'] = array();
$data['Create_date'] = array();
$data['Update_date'] = array();
$data['Create_name'] = array();
$data['Call_datetime'] = array();
$data['Update_name'] = array();
$data['Assign'] = array();


for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['Id'], $note_text[0]);
    array_push($data['Call_datetime'], $note_text[2]);
    array_push($data['Info_Name'], $note_text[14]);
    array_push($data['Relationship_detail'], $note_text[15]);
    array_push($data['R_phone'], $note_text[17]);
    array_push($data['Assign'], $note_text[25]);
    array_push($data['Phone_note'], $note_text[26]);
    array_push($data['Create_date'], $note_text[38]);
    array_push($data['Create_name'], $note_text[39]);
    array_push($data['Update_date'], $note_text[40]);
    array_push($data['Update_name'], $note_text[41]);

}
mysqli_close($conn);
echo json_encode($data);
//endregion
?>