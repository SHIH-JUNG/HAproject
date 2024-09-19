<?php
session_start();
include("sql_connect.php");

header('Content-Type: application/json; charset=UTF-8');
mysqli_set_charset($conn, "utf8mb4");

$response = array('status' => 'error', 'message' => '未知錯誤');

if (isset($_POST['Id']) && isset($_POST['Program_id']) && isset($_POST['File_type']) && isset($_POST['file_index']) && isset($_POST['file_name'])) {
    $id = mysqli_real_escape_string($conn, $_POST['Id']);
    $program_id = mysqli_real_escape_string($conn, $_POST['Program_id']);
    $file_type = mysqli_real_escape_string($conn, $_POST['File_type']);
    $file_index = intval($_POST['file_index']);
    $file_name = mysqli_real_escape_string($conn, $_POST['file_name']);
    $update_name = mysqli_real_escape_string($conn, $_SESSION['name']);

    // 獲取當前文件路徑
    $query = "SELECT File_path FROM program_plan_form WHERE Id = '$id' AND Program_id = '$program_id' AND File_type = '$file_type'";
    $result = mysqli_query($conn, $query);

    if ($row = mysqli_fetch_assoc($result)) {
        $file_paths = json_decode($row['File_path'], true);

        if (isset($file_paths[$file_index])) {
            $file_to_remove = $file_paths[$file_index];

            if (file_exists($file_to_remove) && basename($file_to_remove) === $file_name) {
                if (unlink($file_to_remove)) {
                    unset($file_paths[$file_index]);
                    $file_paths = array_values($file_paths);

                    $json_paths = mysqli_real_escape_string($conn, json_encode($file_paths, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
                    $current_date = date("Y-m-d H:i:s");

                    $update_query = "UPDATE program_plan_form SET
                                     File_path = '$json_paths',
                                     Update_date = '$current_date',
                                     Update_name = '$update_name'
                                     WHERE Id = '$id' AND Program_id = '$program_id' AND File_type = '$file_type'";

                    if (mysqli_query($conn, $update_query)) {
                        $response['status'] = 'success';
                        $response['message'] = '文件已成功刪除並更新數據庫';
                    } else {
                        $response['message'] = '文件已刪除，但更新數據庫失敗: ' . mysqli_error($conn);
                    }
                } else {
                    $response['message'] = '無法刪除文件: ' . error_get_last()['message'];
                }
            } else {
                $response['message'] = '文件不存在或名稱不匹配';
            }
        } else {
            $response['message'] = '無效的文件索引';
        }
    } else {
        $response['message'] = '找不到指定的記錄';
    }
} else {
    $response['message'] = '缺少必要參數';
}

echo json_encode($response);
mysqli_close($conn);
?>