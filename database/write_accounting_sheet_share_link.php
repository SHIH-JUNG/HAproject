<?php
session_start();
include("sql_connect.php");

    $content = $_POST['content'];
    $origin_content = $_POST['origin_content'];

    // $file = fopen("../accounting_sheet/HAproject_accounting_google_sheet_share_url.txt", "w");
    $file = "../accounting_sheet/HAproject_accounting_google_sheet_share_url.txt";
    $file_origin = "../accounting_sheet/HAproject_accounting_google_sheet_share_url_origin.txt";

    file_put_contents($file, $content);
    file_put_contents($file_origin, $origin_content);
    // echo file_put_contents($file, $content);
    fclose($file);
?>