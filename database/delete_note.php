<?php
include("sql_connect.php");

$id = $_POST['id'];
@$db_name = $_POST['db_name'];
@$db_id = $_POST['db_id'];


$Delete_auto_note = "DELETE from `sign_notice` WHERE id='$id';";
mysqli_query($conn,$Delete_auto_note);


if($db_name == '')
{
    $sqlDelete = "DELETE from calendar WHERE id='$id';";
}
else
{
    $sqlDelete = "";
}


mysqli_query($conn, $sqlDelete);

echo mysqli_affected_rows($conn);

mysqli_close($conn);
?>