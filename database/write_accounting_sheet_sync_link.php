<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $content = $_POST['content'];
    $file = '../accounting_sheet/HAproject_accounting_google_sheet_api_new.txt'; // 根據需要調整路徑

    if (file_put_contents($file, $content) !== false) {
        echo "Success";
    } else {
        http_response_code(500);
        echo "Error";
    }
} else {
    http_response_code(405); // 方法不允許
    echo "Invalid request method";
}
?>
