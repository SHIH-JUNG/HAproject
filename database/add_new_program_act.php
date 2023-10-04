<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Date = $_REQUEST['Date'];
$Activity_name = $_REQUEST['Activity_name'];
$Activity_category = $_REQUEST['Activity_category'];
$Person = $_REQUEST['Person'];
$Location = $_REQUEST['Location'];
$Service = $_REQUEST['Service'];
$Cost = $_REQUEST['Cost'];
$Number = $_REQUEST['Number'];
$Lecturer = $_REQUEST['Lecturer'];



$user = $_SESSION['name'];

// 上傳報表路徑
@$file_dir = "../program_act/";
@$file_name = "";
@$file = "";


// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["program_act_files0"]))
{
    @$file_name = $_FILES["program_act_files0"]["name"];
    @$file = "../program_act/" . $_FILES["program_act_files0"]["name"];

    

    if ($_FILES["program_act_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_act_files0"]["tmp_name"],
            "../program_act/" . $_FILES["program_act_files0"]["name"]
        );
    }
}


$sql = "INSERT INTO `program_act` (`Date`,`Activity_name`,`Activity_category`,`Person`,`Location`,`Service`,
`Cost`,`Number`,`Lecturer`,`Create_date`,`Create_name`) VALUES
 ('$Date','$Activity_name','$Activity_category','$Person','$Location','$Service','$Cost','$Number','$Lecturer',
 Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
