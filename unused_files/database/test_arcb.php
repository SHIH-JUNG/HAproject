<?php
include("sql_connect.php");
session_start();

$Id = 16;

$year = 111;
$month = 1;



$Income_sum = 0;
$Cost_sum = 0;
$Last_pb = 0;
$this_pb = 0;


$select_amount = "SELECT `Invoice_type`,`Amount` FROM `accounting_record_cash` WHERE `Form_class`='日記帳' AND `Id`!='$Id' AND `Year`='$year' AND `Month`='$month';";

$datas = array();

$find_rec = mysqli_query($conn,$select_amount);

if (mysqli_num_rows($find_rec) > 0)
{
    while ($row = mysqli_fetch_assoc($find_rec))
    {
    $datas[] = $row;
    }
}
mysqli_free_result($find_rec);

foreach($datas as $item) {
    if($item['Invoice_type']=="支出")
    {
        $Cost_sum+=number_format($item['Amount'], 2, '.', '');
    }
    elseif($item['Invoice_type']=="收入")
    {
        $Income_sum+=number_format($item['Amount'], 2, '.', '');
    }
}

$last_month = ($month-1);

$select_amount = "SELECT `Invoice_type`,`Amount` FROM `accounting_record_cash` WHERE `Form_class`='日記帳' AND `Year`='$year' AND `Month`='$last_month';";

$datas2 = array();

$find_rec = mysqli_query($conn,$select_amount);

if (mysqli_num_rows($find_rec) > 0)
{
    while ($row = mysqli_fetch_assoc($find_rec))
    {
    $datas2[] = $row;
    }
}
mysqli_free_result($find_rec);


foreach($datas2 as $item) {
    if($item['Invoice_type']=="支出")
    {
        $Last_pb-=number_format($item['Amount'], 2, '.', '');
    }
    elseif($item['Invoice_type']=="收入")
    {
        $Last_pb+=number_format($item['Amount'], 2, '.', '');
    }
}



if($Invoice_type=="支出")
{
    $Cost_sum += number_format($Amount, 2, '.', '');
}
elseif($Invoice_type=="收入")
{
    $Income_sum += number_format($Amount, 2, '.', '');
}

// $sqlUpdate .= "UPDATE `accounting_record_cash_balance` SET `Income_sum`=$Income_sum, `Cost_sum`=$Cost_sum, `Last_pb`=$Last_pb, `Update_date`=NOW(), `Update_name`='$user' WHERE `Year`='$year' AND `Month`='$month' ORDER BY `accounting_record_cash_balance`.`Create_date` ASC LIMIT 1";

@$next_month = ($month+1);
@$this_pb = number_format($Income_sum - $Cost_sum, 2, '.', '');

echo $Cost_sum;
echo '<pre>';
echo $Income_sum;
echo '<pre>';
echo $Last_pb;
echo '<pre>';
echo $next_month;
echo '<pre>';
echo $this_pb;
echo '<pre>';


// @$sqlUpdate .= "UPDATE `accounting_record_cash_balance` SET `Last_pb`=$this_pb, `Update_date`=NOW(), `Update_name`='$user' WHERE `Year`='$year' AND `Month`='$next_month' ORDER BY `accounting_record_cash_balance`.`Create_date` ASC LIMIT 1";



// if(mysqli_multi_query($conn, $sqlUpdate)){
//     echo true;
// }else{
//     echo "{$sqlUpdate} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
//     echo false;
// }
// mysqli_close($conn);

?>