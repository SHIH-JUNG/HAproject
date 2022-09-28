<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

$name = 'exists_cookie';
unset($_COOKIE[$name]);
  // Set empty value
$blank = setcookie($name, '', time() - 3600);
?>