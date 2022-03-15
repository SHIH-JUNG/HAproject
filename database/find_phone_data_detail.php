<?php 
include("sql_connect.php"); 
$Phone_id = $_POST['Phone_id']; 
 
//region 抓資料
$note = "SELECT * FROM `consult` WHERE `Phone_id` = '$Phone_id' ORDER BY `Call_datetime` ASC LIMIT 1";
$select_note = mysqli_query($conn,$note);
$data = array();
$data['Phone_id'] = array();
$data['Call_datetime'] =array();
$data['Way'] = array();
$data['Way_detail'] = array();
$data['Name'] = array();
$data['Gender'] = array();
$data['Object_type'] = array();
$data['Addiction'] = array();
$data['M_addiction'] = array();
$data['Age'] = array();
$data['A_detail'] = array();
$data['Address'] =array();
$data['L_detail'] =array();
$data['Info_Name'] =array();
$data['Relationship_detail'] =array();
$data['R_detail'] =array();
$data['R_phone'] =array();
$data['Referral'] =array();
$data['Referral_detail'] =array();
$data['Referral_phone'] =array();
$data['Referral_name'] =array();
$data['Know_from'] =array();
$data['Know_from_detail'] =array();
$data['Eligible'] =array();
$data['Assign'] =array();
$data['Phone_note'] =array();
$data['Create_date'] =array();
$data['Create_name'] =array();
$data['Update_date'] =array();
$data['Update_name'] =array();


for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['Phone_id'], $note_text[1]);
    array_push($data['Call_datetime'], $note_text[2]);
    array_push($data['Way'], $note_text[3]);
    array_push($data['Way_detail'], $note_text[4]);
    array_push($data['Name'], $note_text[5]);
    array_push($data['Gender'], $note_text[6]);
    array_push($data['Object_type'], $note_text[7]);
    array_push($data['Addiction'], $note_text[8]);
    array_push($data['M_addiction'], $note_text[9]);
    array_push($data['Age'], $note_text[10]);
    array_push($data['A_detail'], $note_text[11]);
    array_push($data['Address'], $note_text[12]);
    array_push($data['L_detail'], $note_text[13]);
    array_push($data['Info_Name'], $note_text[14]);
    array_push($data['Relationship_detail'], $note_text[15]);
    array_push($data['R_detail'], $note_text[16]);
    array_push($data['R_phone'], $note_text[17]);
    array_push($data['Referral'], $note_text[18]);
    array_push($data['Referral_detail'], $note_text[19]);
    array_push($data['Referral_phone'], $note_text[20]);
    array_push($data['Referral_name'], $note_text[21]);
    array_push($data['Know_from'], $note_text[22]);
    array_push($data['Know_from_detail'], $note_text[23]);
    array_push($data['Eligible'], $note_text[24]);
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