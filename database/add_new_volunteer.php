<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Year = $_REQUEST['Year'];
$Name = $_REQUEST['Name'];
$Birth = $_REQUEST['Birth'];
$Gender = $_REQUEST['Gender'];

$Home_phone = $_REQUEST['Home_phone'];
$Cellphone = $_REQUEST['Cellphone'];

$Email = $_REQUEST['Email'];
$Training_detail = $_REQUEST['Training_detail'];
$Brochure_num = $_REQUEST['Brochure_num'];

$Serv_time_1 = $_REQUEST['Serv_time_1'];
$Serv_time_2 = $_REQUEST['Serv_time_2'];

$Remark = $_REQUEST['Remark'];

$Serv_award = $_REQUEST['Serv_award'];
$Expertise = $_REQUEST['Expertise'];
$Vgroup = $_REQUEST['Vgroup'];

$Social_worker = $_REQUEST['Social_worker'];
$Director = $_REQUEST['Director'];
$Supervise = $_REQUEST['Supervise'];

$user = $_SESSION['name'];

$title = $_POST['title'];
$signer = $_POST['signer'];
$rec_date_time = $_POST['rec_date_time'];

// $sign_state = $Social_worker . "未簽核" . "、" . $Director . "未簽核" . "、" . $Supervise . "未簽核";
$sign_state = $Director . "未簽核" . "、" . $Supervise . "未簽核";


$select_id_num = "SELECT MAX(Id) FROM `volunteer_v2` ORDER BY `volunteer_v2`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $volunteer_id = (int)$id_num[0] + 1;
}
else
{
    $volunteer_id = 1;
}

$url = 'volunteer_detail.php?vo_id='.$volunteer_id.'';

// 檔案路徑
@$file_dir = "../volunteer/volunteer_user".$volunteer_id."_".$Name."/";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

$file_0 = "";
$file_0_date = NULL;
$file_sql_0 = "";

$file_0_arr = array();

// 判斷志工資料檔案上傳
if (isset($_FILES["volunteer_files0"]))
{

    @$file_0_date = date("Y-m-d");

    for ($a = 0; $a < count($_FILES["volunteer_files0"]["name"]); $a++)
    {
        @$file_0 = $file_dir.$_FILES["volunteer_files0"]["name"][$a];
    
        if ($_FILES["volunteer_files0"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["volunteer_files0"]["tmp_name"][$a],
                $file_0
            );
        }

        array_push($file_0_arr, $file_0);
    }
    $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
}


$sql = "INSERT INTO `volunteer_v2` (`Id`, `Year` ,`Name` ,`Birth` ,`Gender` ,
`Home_phone` ,`Cellphone`, 
`E_mail`, `Training_detail`, `Brochure_num`, 
`V_files`, 
`Serv_time_1`, `Serv_time_2`, 
`Serv_award`, `Remark`, `Expertise`, `Vgroup`, 
`Serv_status`, 
`Time_all`,
`Social_worker`, `Supervise`, `Director`,
`Create_date` ,`Create_name`) VALUES
($volunteer_id, '$Year', '$Name', '$Birth', '$Gender' ,
'$Home_phone', '$Cellphone', 
'$Email', '$Training_detail', '$Brochure_num', 
'$file_0_arr',
'$Serv_time_1', '$Serv_time_2', 
'$Serv_award', '$Remark', '$Expertise', '$Vgroup', 
'持續',
'0',
'$Social_worker', '$Supervise', '$Director', 
Now(), '$user');";

// $sql .= "INSERT INTO `volunteer_hours_record` (`Volunteer_id`, `Year` ,`Name` ,`Add_hours`, `Sign_date`, `Is_firstadd` ,`Create_date` ,`Create_name`) VALUES
// ($volunteer_id, '$Year', '$Name', '$Time_all', '$Sign_date', 1, Now(), '$user');";

$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ('$volunteer_id', '$title','$url','$rec_date_time', '$Social_worker', '$signer', '$sign_state', 'volunteer', Now(), '$user')";

if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
