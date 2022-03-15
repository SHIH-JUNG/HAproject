<?php
include("sql_connect.php");

$id = $_POST['id'];

$Delete_auto_note = "DELETE from `sign_notice` WHERE id='$id'";
mysqli_query($conn,$Delete_auto_note);

$sqlDelete = "DELETE from calendar WHERE id='$id'";
mysqli_query($conn, $sqlDelete);

echo mysqli_affected_rows($conn);

mysqli_close($conn);
?>