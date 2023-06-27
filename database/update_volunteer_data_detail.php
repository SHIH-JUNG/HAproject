<?php
session_start();
include("sql_connect.php");
$Vo_id = $_REQUEST['Vo_id']; 

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

$Serv_status = $_REQUEST['Serv_status'];
$Time_all = $_REQUEST['Time_all'];

$Social_worker = $_REQUEST['Social_worker'];
$Director = $_REQUEST['Director'];
$Supervise = $_REQUEST['Supervise'];

$user = $_SESSION['name'];


$Is_update_hours_sql = "";

$diff = 0;


// 檔案路徑
@$file_dir = "../volunteer/volunteer_user".$Vo_id."_".$Name."/";

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
    @$file_0_year = date("Y") - 1911;


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

    // 查詢 原本的`File_path`
    $select_v_file_num = "SELECT `V_files` FROM `volunteer_v2` WHERE `Id` = '$Vo_id' AND `Year` = '$Year' ORDER BY `volunteer_v2`.`Create_date` ASC;";

    $find_v_file_num = mysqli_query($conn,$select_v_file_num);
    $row_nums = mysqli_num_rows($find_v_file_num);
    $v_file_num = mysqli_fetch_row($find_v_file_num);

    // var_dump($v_file_num);

    if($row_nums > 0 && $v_file_num[0]!="")
    {
        $file_0_arr = json_encode(array_merge(json_decode($v_file_num[0], true),$file_0_arr),JSON_UNESCAPED_UNICODE);
        
        $file_0_arr = json_decode($file_0_arr, true);

        $file_0_arr = array_values(array_unique($file_0_arr,SORT_REGULAR));

        $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    }
    else
    {
        $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    }

    // var_dump($file_0_arr);
}



$select_time_hours = "SELECT `Time_all` FROM `volunteer_v2` WHERE `Id` = '$Vo_id' AND `Year` = '$Year' ORDER BY `volunteer_v2`.`Create_date` ASC LIMIT 1;";

$find_time_hours = mysqli_query($conn,$select_time_hours);
$time_hours = mysqli_fetch_row($find_time_hours);


if($Time_all!=$time_hours[0])
{
    $Time_all = $Time_all;

    $diff = bcsub($Time_all, $time_hours[0], 1);
    
    $diff_remark_str = "目前服務時數由".$time_hours[0]."更改為".$Time_all."(".$diff.")。資料異動者：".$user."，異動時間：".date("Y-m-d H:i:s")."。";

    $Is_update_hours_sql = "INSERT INTO `volunteer_hours_record` (`Volunteer_id`, `Year` ,`Name` ,`Add_hours`, `Record_date`, `Remark`, `Is_firstadd` ,`Create_date` ,`Create_name`) VALUES
    ($Vo_id, '$Year', '$Name', '$diff', DATE(NOW()), '$diff_remark_str', 0, Now(), '$user');";
}
else
{
    $Time_all = $time_hours[0];
    $Is_update_hours_sql = "";
}


$sqlUpdate ="UPDATE `volunteer_v2` SET `Year` = '$Year', `Name` = '$Name', `Birth` = '$Birth', `Gender` = '$Gender',
 `Home_phone` = '$Home_phone', `Cellphone` = '$Cellphone',
 `E_mail` = '$Email', `Training_detail` = '$Training_detail', `Brochure_num` = '$Brochure_num', 
 `Serv_time_1` = '$Serv_time_1', `Serv_time_2` = '$Serv_time_2',
 `Serv_award` = '$Serv_award', `Remark` = '$Remark', `Expertise` = '$Expertise', `Vgroup` = '$Vgroup', 
 `Serv_status` = '$Serv_status', 
 `Time_all` = '$Time_all',
 `Social_worker` = '$Social_worker',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Vo_id' AND `Year` = '$Year' ORDER BY `volunteer_v2`.`Create_date` ASC LIMIT 1;";

if(!empty($file_0_arr))
{
    $sqlUpdate .="UPDATE `volunteer_v2` SET `V_files` = '$file_0_arr'  WHERE `Id` = '$Vo_id' AND `Year` = '$Year' ORDER BY `volunteer_v2`.`Create_date` ASC LIMIT 1;";
}

$sqlUpdate .= $Is_update_hours_sql;



if(mysqli_multi_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>