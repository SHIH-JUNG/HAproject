<?php
session_start();
include("sql_connect.php");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Update the share link to the previous value
$sql = "UPDATE accounting_sheet
        SET previous_share_link = share_link
        WHERE id = 1";

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the previous share link
$sql = "SELECT previous_share_link FROM accounting_sheet WHERE id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(array("previous_share_link" => $row["previous_share_link"]));
} else {
    echo json_encode(array("error" => "No record found"));
}


$conn->close();
?>
