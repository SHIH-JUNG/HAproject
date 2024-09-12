<?php
session_start();
include("sql_connect.php");

header('Content-Type: application/json');

// 檢查是否存在必要的 POST 參數
if (!isset($_POST['Form_sql_id']) || !isset($_POST['program_id']) || !isset($_POST['file_type']) || !isset($_POST['File_arr']) || !isset($_POST['Remove_file'])) {
    echo json_encode(['status' => 'error', 'message' => '缺少必要參數']);
    exit();
}

// 接收 POST 參數
$Form_sql_id = $_POST['Form_sql_id'];
$program_id = $_POST['program_id'];
$file_type = $_POST['file_type'];
$File_arr = $_POST['File_arr']; // 接收的是陣列
$Remove_file = $_POST['Remove_file']; // 檔案完整路徑

// 獲取當前使用者名稱
$user = $_SESSION['name'];
$now_date = date("Y-m-d");

// 檢查檔案是否存在並進行刪除
if (file_exists($Remove_file)) {
    if (unlink($Remove_file)) {
        // 刪除成功，處理 File_arr 並更新資料庫

        // 更新檔案陣列（去除被刪除的檔案）
        $updated_file_arr = array_diff($File_arr, [$Remove_file]);

        // 如果沒有剩下的檔案，從資料庫中刪除該記錄
        if (empty($updated_file_arr)) {
            $sqlUpdate = "DELETE FROM `program_plan_form` WHERE `Id` = '$Form_sql_id';";
        } else {
            // 如果還有剩下的檔案，更新資料庫中的檔案陣列
            $File_arr_json = json_encode($updated_file_arr, JSON_UNESCAPED_UNICODE);
            $sqlUpdate = "UPDATE `program_plan_form` SET `File_path` = '$File_arr_json',
            `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Form_sql_id';";
        }

        // 同時更新主表 program_plan 中的更新時間和人員
        $sqlUpdate .= "UPDATE `program_plan` SET `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$program_id';";

        // 執行 SQL 查詢
        if (mysqli_multi_query($conn, $sqlUpdate)) {
            $response['status'] = 'success';
            $response['message'] = '檔案已成功刪除';
        } else {
            $response['status'] = 'error';
            $response['message'] = '資料庫更新失敗: ' . mysqli_error($conn);
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = '無法刪除檔案';
    }
} else {
    $response['status'] = 'error';
    $response['message'] = '檔案不存在';
}

// 返回 JSON 回應給前端
echo json_encode($response);

// 關閉資料庫連接
mysqli_close($conn);
?>
