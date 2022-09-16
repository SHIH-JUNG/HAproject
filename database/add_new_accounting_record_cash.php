<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

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

$select_id_num = "SELECT MAX(Id) FROM `accounting_record_cash` ORDER BY `accounting_record_cash`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $arc_id = (int)$id_num[0] + 1;
}
else
{
    $arc_id = 0;
}

    if($Form_class=="兒少單據")
    {
        $sql = "INSERT INTO `accounting_record_cash` (`Id`, `Year`, `Month`,`Form_class`,`Invoice_date`, `Invoice_class`, `Invoice_content`, `Invoice_type`, `Amount`, `Upload_date`, `Record_date`, `Remark`, `Create_date`, `Create_name`) VALUES
        ($arc_id, $year, $month, '$Form_class', '$Invoice_date', '$Invoice_class', '$Invoice_content',
        '$Invoice_type', '$Amount', '$Upload_date', '$Record_date', '$Remark', NOW(), '$user');";
    }
    elseif ($Form_class=="轉帳") {
        $sql = "INSERT INTO `accounting_record_cash` (`Id`, `Year`, `Month`,`Form_class`,`Invoice_date`, `Invoice_seq`, `Invoice_content`, `Invoice_type`, `Amount`, `Withdrawal_date`, `Payee`, `Record_date`, `Remark`, `Create_date`, `Create_name`) VALUES
        ($arc_id, $year, $month, '$Form_class', '$Invoice_date', '$Invoice_seq', '$Invoice_content',
        '$Invoice_type', '$Amount', '$Withdrawal_date', '$Payee', '$Record_date', '$Remark', NOW(), '$user');";
    }
    elseif ($Form_class=="日記帳") {
        // 1.找到本期的收支金額，計算該期總收入和總支出
        // 2.找到上期的收支金額，計算上期結餘金額
        // 3.尋找本期資料是否已登入accounting_record_cash_balance資料庫中，有的話UPDATE修改數據，若無INSERT新增數據
        // 4.最後將該筆零用金紀錄新增至accounting_record_cash資料庫中
        // P.S.有關金錢紀錄計算建議使用number_format

        $select_amount = "SELECT `Invoice_type`,`Amount` FROM `accounting_record_cash` WHERE `Form_class`='日記帳' AND `Year`='$year' AND `Month`='$month';";

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

        // 找出有無紀錄
        $select_rec = "SELECT `Year`, `Month` FROM `accounting_record_cash_balance` WHERE `Year`='$year' AND `Month`='$month'  GROUP BY `accounting_record_cash_balance`.`Year`, `accounting_record_cash_balance`.`Month`;";

        $find_rec = mysqli_query($conn,$select_rec);
        $rec = mysqli_fetch_row($find_rec);

        if($Invoice_type=="支出")
        {
            $Cost_sum += number_format($Amount, 2, '.', '');
        }
        elseif($Invoice_type=="收入")
        {
            $Income_sum += number_format($Amount, 2, '.', '');
        }

        if(!empty($rec))
        {
            $other_implement = "UPDATE `accounting_record_cash_balance` SET `Income_sum`=$Income_sum, `Cost_sum`=$Cost_sum, `Last_pb`=$Last_pb, `Update_date`=NOW(), `Update_name`='$user' WHERE `Year`='$year' AND `Month`='$month' ORDER BY `accounting_record_cash_balance`.`Create_date` ASC;";
        }
        else
        {
            $other_implement = "INSERT INTO `accounting_record_cash_balance` (`Year`, `Month`, `Income_sum`, `Cost_sum`, `Last_pb`, `Create_date`, `Create_name`) VALUES
            ($year, $month, $Income_sum, $Cost_sum, $Last_pb, NOW(), '$user');";
        }

        $sql = "INSERT INTO `accounting_record_cash` (`Id`, `Year`, `Month`,`Form_class`,`Invoice_date`, `Invoice_seq`, `Invoice_content`, `Invoice_type`, `Amount`, `Withdrawal_date`, `Payee`, `Record_date`, `Remark`, `Create_date`, `Create_name`) VALUES
        ($arc_id, $year, $month, '$Form_class', '$Invoice_date', '$Invoice_seq', '$Invoice_content',
        '$Invoice_type', '$Amount', '$Withdrawal_date', '$Payee', '$Record_date', '$Remark', NOW(), '$user');";

        $sql .= $other_implement;
    }
    else
    {
        return false;
    }


	if(mysqli_multi_query($conn,$sql)){
        echo true;
    }else{
        echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
    }

mysqli_close($conn);
?>