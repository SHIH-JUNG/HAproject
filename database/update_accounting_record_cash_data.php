<?php
include("sql_connect.php");
session_start();

$Id = $_POST['Id'];

$o_year = (int)$_POST['o_year'];
$year = (int)$_POST['year'];
$month = (int)$_POST['month'];

$Form_class = $_POST['Form_class'];
$Invoice_date = $_POST['Invoice_date'];
@$Invoice_seq = $_POST['Invoice_seq'];
@$Invoice_class = $_POST['Invoice_class'];
$Invoice_content = $_POST['Invoice_content'];
$Invoice_type = $_POST['Invoice_type'];
$Amount = $_POST['Amount'];
@$Withdrawal_date = $_POST['Withdrawal_date'];
@$Payee = $_POST['Payee'];
@$Upload_date = $_POST['Upload_date'];
$Record_date = $_POST['Record_date'];
$Remark = $_POST['Remark'];

$user = $_SESSION['name'];


$Income_sum = 0;
$Cost_sum = 0;
$Last_pb = 0;
$this_pb = 0;

if($Form_class=="兒少單據")
{
    $sqlUpdate = "UPDATE `accounting_record_cash` SET `Year` = $year ,
    `Month` = $month ,
    `Form_class` = '$Form_class' ,
    `Invoice_date` = '$Invoice_date' , `Invoice_class` = '$Invoice_class' ,
    `Invoice_content` = '$Invoice_content' , `Invoice_type` = '$Invoice_type' ,
    `Amount` = '$Amount' , `Upload_date` = '$Upload_date' ,
    `Record_date` = '$Record_date' ,
    `Remark` = '$Remark' ,
    `Update_name` = '$user',
    `Update_date` = NOW() WHERE `accounting_record_cash`.`Year` = $o_year AND `accounting_record_cash`.`Id` = '$Id' ORDER BY `accounting_record_cash`.`Create_date` ASC LIMIT 1;";

}
elseif ($Form_class=="轉帳") {
    $sqlUpdate = "UPDATE `accounting_record_cash` SET `Year` = $year ,
    `Month` = $month ,
    `Form_class` = '$Form_class' ,
    `Invoice_date` = '$Invoice_date' , `Invoice_seq` = '$Invoice_seq' ,
    `Invoice_content` = '$Invoice_content' , `Invoice_type` = '$Invoice_type' ,
    `Amount` = '$Amount' , `Withdrawal_date` = '$Withdrawal_date' ,
    `Payee` = '$Payee' , `Record_date` = '$Record_date' ,
    `Remark` = '$Remark' ,
    `Update_name` = '$user',
    `Update_date` = NOW() WHERE `accounting_record_cash`.`Year` = $o_year AND `accounting_record_cash`.`Id` = '$Id' ORDER BY `accounting_record_cash`.`Create_date` ASC LIMIT 1;";

}
elseif ($Form_class=="日記帳") {
    // 1.找到本期的收支金額，排除自己，計算該期總收入和總支出
    // 2.找到上期的收支金額，計算上期結餘金額
    // 3.修改在accounting_record_cash_balance資料庫中的本期數據
    // 4.修改在accounting_record_cash_balance資料庫中的下期數據(因為若是修改過本期資料可能會異動到下期結餘)
    // 5.修改零用金紀錄 (在accounting_record_cash資料庫中的資料)
    // P.S.有關金錢紀錄計算建議使用number_format

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

    $sqlUpdate = "UPDATE `accounting_record_cash` SET `Year` = $year ,
    `Month` = $month ,
    `Form_class` = '$Form_class' ,
    `Invoice_date` = '$Invoice_date' , `Invoice_seq` = '$Invoice_seq' ,
    `Invoice_content` = '$Invoice_content' , `Invoice_type` = '$Invoice_type' ,
    `Amount` = '$Amount' , `Withdrawal_date` = '$Withdrawal_date' ,
    `Payee` = '$Payee' , `Record_date` = '$Record_date' ,
    `Remark` = '$Remark' ,
    `Update_name` = '$user',
    `Update_date` = NOW() WHERE `accounting_record_cash`.`Year` = $o_year AND `accounting_record_cash`.`Id` = '$Id' ORDER BY `accounting_record_cash`.`Create_date` ASC;";


    $sqlUpdate .= "UPDATE `accounting_record_cash_balance` SET `Income_sum`=$Income_sum, `Cost_sum`=$Cost_sum, `Last_pb`=$Last_pb, `Update_date`=NOW(), `Update_name`='$user' WHERE `Year`='$year' AND `Month`='$month' ORDER BY `accounting_record_cash_balance`.`Create_date` ASC;";

    $next_month = ($month+1);
    $this_pb = number_format($Income_sum - $Cost_sum, 2, '.', '');

    $sqlUpdate .= "UPDATE `accounting_record_cash_balance` SET `Last_pb`=$this_pb, `Update_date`=NOW(), `Update_name`='$user' WHERE `Year`='$year' AND `Month`='$next_month' ORDER BY `accounting_record_cash_balance`.`Create_date` ASC;";
}
else
{
    return false;
}


if(mysqli_multi_query($conn, $sqlUpdate)){
    // echo "語法{$sqlUpdate} ";
    echo true;
}else{
    echo "{$sqlUpdate} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
    echo false;
}
mysqli_close($conn);

?>