<?php 
include("sql_connect.php"); 
@$Phone_id = $_POST['Phone_id']; 
// @$Phone_id = '2'; 


//region 抓資料
if($Phone_id != "" ){
    $note = "SELECT * FROM `consult` WHERE `Phone_id` = '$Phone_id' AND `Way`='面訪' AND `Is_firstadd`=0 ORDER BY `consult`.`Start_date` ASC ,`consult`.`Id` ASC";
}else{
    $note = "SELECT * FROM `consult` WHERE `Way`='面訪' AND `Is_firstadd`=0 ORDER BY `consult`.`Start_date` ASC ,`consult`.`Id` ASC";
}

$select_note = mysqli_query($conn,$note);
$data = array();
$data['Id'] = array();
$data['Phone_id'] = array();
$data['Name'] = array();
$data['Gender'] = array();
$data['M_addiction'] = array();
$data['Age'] = array();
$data['Location'] = array();
$data['Location_detail'] = array();
$data['Start_date'] = array();
$data['End_date'] = array();
$data['Start_time'] = array();
$data['End_time'] = array();
$data['One_user_name'] = array();
$data['Two_user_name'] = array();
$data['Remark'] = array();
$data['Create_date'] = array();
$data['Create_name'] = array();
$data['Update_date'] = array();
$data['Update_name'] = array();


for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);

    array_push($data['Id'], $note_text[0]);
    array_push($data['Phone_id'], $note_text[1]); 
    array_push($data['Name'], $note_text[5]);    
    array_push($data['Gender'], $note_text[6]);    
    array_push($data['M_addiction'], $note_text[9]);    
    array_push($data['Age'], $note_text[10]);   
    array_push($data['Location'], $note_text[28]);   
    array_push($data['Location_detail'], $note_text[29]);
    array_push($data['Start_date'], $note_text[30]);
    array_push($data['End_date'], $note_text[31]);    
    array_push($data['Start_time'], $note_text[32]);    
    array_push($data['End_time'], $note_text[33]);    
    array_push($data['One_user_name'], $note_text[34]);    
    array_push($data['Two_user_name'], $note_text[35]);    
    array_push($data['Remark'], $note_text[36]);
    array_push($data['Create_date'], $note_text[37]);  
    array_push($data['Create_name'], $note_text[38]);  
    array_push($data['Update_date'], $note_text[39]);  
    array_push($data['Update_name'], $note_text[40]);  
}
  mysqli_close($conn);
    echo json_encode($data);
//endregion
?>