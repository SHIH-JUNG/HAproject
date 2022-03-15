//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//年齡計算region
//$("#age").html("");
$("#dateFrom").on('change',function(){
    age();
});
    function age(){
        
        ymd = ($("#dateFrom").val()).split("-");
        bir_y=ymd[0];
        bir_m=ymd[1];
        bir_d=ymd[2];
//        console.log(bir_y)
        date = new Date();
        bir = (date.getFullYear()-1911)-bir_y;
//        console.log(bir)
        if(bir_m == "01" || bir_m == "02" ||bir_m == "03" ||bir_m == "04" ||bir_m == "05" ||bir_m == "06" ||bir_m == "07" ||bir_m == "08" || bir_m == "09"){
            x = bir_m.split("0");
            bir_m = parseInt(x[1]);
        }
        if(bir_d == "01" || bir_d == "02" ||bir_d == "03" ||bir_d == "04" ||bir_d == "05" ||bir_d == "06" ||bir_d == "07" ||bir_d == "08" || bir_d == "09"){
            x = bir_d.split("0");
            bir_d = parseInt(x[1]);
        }
    //    console.log(date.getMonth()+1)

        if(bir_m < date.getMonth()+1){
            $("#age").text(bir);
        }else if(bir_m == date.getMonth()+1){
            if(bir_d <= date.getDay()){
                $("#age").text(bir);
            }else{
                $("#age").text(bir-1);
            }
        }else{
            $("#age").text(bir-1);
        }
    }
//endregion

//填入結案表region
var face_id = getUrlVars()["face_id"];
var open_id = getUrlVars()["open_id"];
var name = decodeURIComponent(getUrlVars()["name"]);
var house = decodeURIComponent(getUrlVars()["house"]);
var addition = decodeURIComponent(getUrlVars()["addition"]);
var leave_date = decodeURIComponent(getUrlVars()["leave_date"]);
var end_id = getUrlVars()["end_id"];
//拆分日期+1911=西元年
var date = leave_date.split("-");
var leave_date = (parseInt(date[0])+1911)+'-'+date[1]+'-'+date[2];
//console.log(date)
$("#face_id").text(face_id);
$("#open_id").text(open_id);
$("#name").text(name);
$("#addition").text(addition);
$("#write_department").text(house);
$("#leave_date").text(leave_date);
$("#leave_house").text(house);

    $.ajax({
        url: "database/find_four.php",
        type: "POST",
        data: {
            face_id: face_id,
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            
            $("#gender").text(data.gender[0]);
            $("#age").text(data.Age[0]);
            $("#enter_date").text(data.stay_datetime[0]);
            date_month(data.stay_datetime[0],leave_date);
            var month = date_month(data.stay_datetime[0],leave_date);
            var day = DateDiff(data.stay_datetime[0],leave_date);
            $("#day").text(day);
            $("#month").text(month);
            $("#enter_times").text(data.times[0]-1); 
            $("#birth_date").text(data.birth_date[0]);
            $("#contact_name").text(data.main_contact[0]);
            $("#contact").text(data.contact_phone[0]);
//            $("#dateFrom").val();
            
        },

        error: function (e) {
            console.log(e)
        }
    });

    $.ajax({
        url: "database/find_close.php",
        type: "POST",
        data: {
            face_id: face_id,
            open_id: open_id,
            end_id:end_id
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
//            $("#dateFrom").val(data.birrth_date[0]);
            $("#contact_name").val(data.contact_name[0]);
            $("#contact").val(data.contact[0]);
//            $("#dateFrom2").val(data.enter_date[0]);
//            $("#dateFrom3").val(data.leave_date[0]);
            $("#month").val(data.month[0]);
            $("#enter_times").val(data.enter_times[0]);
            $("#addition").text(data.addition[0]);
            $("#q1").val(data.q1[0]);
            $("#q2").val(data.q2[0]);
            $("#track_date").text(data.track_date[0]);   
            
//            if(data.write_department[0] != ""){
//                $('input[name=write_department][value=' + data.write_department[0] + ']').attr('checked', true);
//            }

            if(data.how_enter[0] != ""){
                $('input[name=how_enter][value=' + data.how_enter[0] + ']').attr('checked', true);
            }
            if(data.belief[0] != ""){
                $('input[name=belief][value=' + data.belief[0] + ']').attr('checked', true);
            }
            if(data.why_end[0] != ""){
                $('input[name=why_end][value=' + data.why_end[0] + ']').attr('checked', true);
            }
            if(data.allow_or_not[0] != ""){
                $('input[name=allow_or_not][value=' + data.allow_or_not[0] + ']').attr('checked', true);
            }
            if(data.deposit[0] != ""){
                $('input[name=deposit][value=' + data.deposit[0] + ']').attr('checked', true);
            }
            if (data.belief_ok[0] !== "") {
                $('input[name=belief_ok][value=' + data.belief_ok[0] + ']').attr('checked', true);
            }
            

            
            $.each($("input[name='why_end']"), function (index, element) {
                if($(this).val() == data.why_end[0]){
                    $("input[name='why_close[]']").get()[index].value = data.why_leave[0];
                }
            });
            $.each($("input[name='allow_or_not']"), function (index, element) {
                if($(this).val() == data.allow_or_not[0]){
                    $("input[name='leave_with[]']").get()[index].value = data.leave_with[0];
                    $("input[name='leave_contact[]']").get()[index].value = data.leave_contact[0];
                }
            });
            $.each($("input[name='deposit']"), function (index, element) {
                if($(this).val() == data.deposit[0]){
                    $("input[name='deposit_description[]']").get()[index].value = data.deposit_description[0];

                }
            });
        },

        error: function (e) {
            console.log(e)
        }
    });
//endregion

//計算相差月數region
function date_month(date1,date2){
    //拆分年月日
    date1 = date1.split('-');
    //得到月份
    date1 = parseInt(date1[0])*12+parseInt(date1[1]);
    //拆分年月日
    date2 = date2.split('-');
    //得到月份
    date2 = parseInt(date2[0])*12+parseInt(date2[1]);
    var m = Math.abs(date1-date2);
    return m;
}
//endregion

//計算相差天數region
function DateDiff(sDate1, sDate2) { // sDate1 和 sDate2 是 2016-06-18 格式
  var oDate1 = new Date(sDate1);
  var oDate2 = new Date(sDate2);
  var iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  return iDays;
};
//endregion

//隱藏欄位region
//        $(function(){
//            $('.expire_or_not').click(function(){
//                var domName = $(this).attr('name');
//                var $radio = $(this);
//                if ($radio.data('waschecked') == true){
//                    $radio.attr('checked', false);
//                    $("input:radio[name='" + domName + "']").data('waschecked',false);
//                } else {
//                    $radio.attr('checked', true);
//                    $("input:radio[name='" + domName + "']").data('waschecked',false);
//                    $radio.data('waschecked', true);
//                }
////                console.log($("input:radio[name='" + domName + "']").attr("checked"));
////                console.log(domName);
//                if(domName == "not_expire"){
//                    if($("input:radio[name='" + domName + "']:checked").val() == "離園" || $("input:radio[name='" + domName + "']:checked").val() == "重大違規離園"){
////                        console.log($("input:radio[name='" + domName + "']").attr("checked"));
//                        $("#expire_tr").attr('hidden',true);
//                        $("#expire_tr2").attr('hidden',true);
//                    }else{
////                        console.log("123");
//                        $("#expire_tr").attr('hidden',false);
//                        $("#expire_tr2").attr('hidden',false);
//                    }
//                    
//                }else{
//                    if($("input:radio[name='" + domName + "']:checked").val() == "離園" || $("input:radio[name='" + domName + "']:checked").val() == "留園"){
////                        console.log($("input:radio[name='" + domName + "']").attr("checked"));
//                        $("#not_expire_tr").attr('hidden',true);
//                        $("#not_expire_tr2").attr('hidden',true);
//                    }else{
////                        console.log("123");
//                        $("#not_expire_tr").attr('hidden',false);
//                        $("#not_expire_tr2").attr('hidden',false);
//                    }
//                }
//                
//            });
//        });

//endregion

//進入預覽結案表region
$("#preview_word").on('click',function(){
    var face_id = getUrlVars()["face_id"];
    var open_id = getUrlVars()["open_id"];
    var name = decodeURIComponent(getUrlVars()["name"]);
    var addition = decodeURIComponent(getUrlVars()["addition"]);
//    console.log(id);
    location.href = 'close_preview_word.php?face_id='+face_id+'&open_id='+open_id+'&name='+name+'&addition='+addition+'';
});
//endregion

//按下儲存按鈕region

//leave_contact
//leave_with
//allow_or_not
$("#add_close").on('click', function(){
    var close = "";
    var leave_with="";
    var leave_contact="";
    var deposit_description ="";
    var end_id = getUrlVars()["end_id"];
    var why_end = $("input[name='why_end']:checked").val();
    var write_department = $("input[name='write_department']:checked").val();
    var gender = $("input[name='gender']:checked").val();
    var how_enter = $("input[name='how_enter']:checked").val();
    var belief = $("input[name='belief']:checked").val();
    var belief_ok = $("input[name='belief_ok']:checked").val();
    var allow_or_not = $("input[name='allow_or_not']:checked").val();
    var deposit = $("input[name='deposit']:checked").val();
    $.each($("input[name='leave_with[]']"), function (index, element) {
        if($(this).val() != ""){
            leave_with = $(this).val();             
        }
    });
//    console.log(leave_with)
    $.each($("input[name='why_close[]']"), function (index, element) {
        if($(this).val() != ""){
             close = $(this).val(); 
        }
    });
    $.each($("input[name='leave_contact[]']"), function (index, element) {
        if($(this).val() != ""){
            leave_contact = $(this).val(); 
        }
    });
    $.each($("input[name='deposit_description[]']"), function (index, element) {
        if($(this).val() != ""){
            deposit_description = $(this).val(); 
        }
    });
    $.ajax({
        type: 'POST',
        url: 'database/add_close.php',
        //            dataType: "JSON",
        data: {
            face_id: $("#face_id").text(),
            open_id: $("#open_id").text(),
            name: $("#name").text(),
            write_department:$("#write_department").text() ,
            gender: $("#gender").text(),
            birth_date: $("#birth_date").text(),
            age: $("#age").text(),
            contact_name: $("#contact_name").text(),
            contact: $("#contact").text(),
            enter_date: $("#enter_date").text(),
            leave_date: $("#leave_date").text(),
            month: $("#month").text(),
            enter_times: $("#enter_times").text(),
            how_enter: how_enter,
            belief: belief,
            belief_ok: belief_ok,
            addition: $("#addition").text(),
            why_end: why_end,
            why_leave: close,
            allow_or_not: allow_or_not,
            leave_with: leave_with,
            leave_contact: leave_contact,
            q1: $("#q1").val(),
            q2: $("#q2").val(),
            deposit: deposit,
            deposit_description: deposit_description,
            track_date: $("#track_date").text(),
            end_id:end_id
        },
        success: function (data) {
            if (data == 1) {
                swal({
                    title: '儲存成功！',
                    type: 'success',
                }).then(function () {
                    location.reload();
                })
            } else {
                console.log(data)
                swal({
                    title: '上傳失敗！請聯絡負責單位',
                    type: 'error',
                })
            }
        },
    });
});

//endregion

//儲存未滿期離園原因表region
$("#add_why_leave").on('click', function(){
    var end_id = getUrlVars()["end_id"];
    var leave_stage = $("input[name='leave_stage']:checked").val();
    var q1 = $("input[name='q1-1']:checked").val();
    var q2 = $("input[name='q2-1']:checked").val();
    var q22 = $("input[name='q2-2']:checked").val();
    var q23 = $("input[name='q2-3']:checked").val();
    var q24 = $("input[name='q2-4']:checked").val();
    var q25 = $("input[name='q2-5']:checked").val();
    var q26 = $("input[name='q2-6']:checked").val();
    var q27 = $("input[name='q2-7']:checked").val();
    var q28 = $("input[name='q2-8']:checked").val();



    $.ajax({
        type: 'POST',
        url: 'database/add_why_leave.php',
        //            dataType: "JSON",
        data: {
            face_id: $("#face_id").text(),
            open_id: $("#open_id").text(),
            leave_stage:leave_stage,
            leave_remark:$("#leave_remark").val(),
            q1:q1,
            q2:q2,
            q22:q22,
            q23:q23,
            q24:q24,
            q25:q25,
            q26:q26,
            q27:q27,
            q28:q28,
            why1:$("#1-1why").val(),
            why2:$("#2-1why").val(),
            why22:$("#2-2why").val(),
            why23:$("#2-3why").val(),
            why24:$("#2-4why").val(),
            why25:$("#2-5why").val(),
            why26:$("#2-6why").val(),
            why27:$("#2-7why").val(),
            why28:$("#2-8why").val(),
            end_id:end_id
        },
        success: function (data) {
            if (data == 1) {
                swal({
                    title: '儲存成功！',
                    type: 'success',
                }).then(function () {
                    location.reload();
                })
            } else {
                console.log(data)
                swal({
                    title: '上傳失敗！請聯絡負責單位',
                    type: 'error',
                })
            }
        },
    });
});
//endregion

//抓所有原因表region
var face_id = getUrlVars()["face_id"];
var open_id = getUrlVars()["open_id"];
var end_id = getUrlVars()["end_id"];
    $.ajax({
        url: "database/find_why_leave.php",
        type: "POST",
        data: {
            face_id: face_id,
            open_id: open_id,
            end_id:end_id
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {

            if(data.leave_stage[0] != ""){
                $('input[name=leave_stage][value=' + data.leave_stage[0] + ']').attr('checked', true);
            }
            if(data.q1[0] != ""){
                $('input[name=q1-1][value=' + data.q1[0] + ']').attr('checked', true);
            }
            if(data.q2[0] != ""){
                $('input[name=q2-1][value=' + data.q2[0] + ']').attr('checked', true);
            }
            if(data.q22[0] != ""){
                $('input[name=q2-2][value=' + data.q22[0] + ']').attr('checked', true);
            }
            if(data.q23[0] != ""){
                $('input[name=q2-3][value=' + data.q23[0] + ']').attr('checked', true);
            }
            if(data.q24[0] != ""){
                $('input[name=q2-4][value=' + data.q24[0] + ']').attr('checked', true);
            }
            if(data.q25[0] != ""){
                $('input[name=q2-5][value=' + data.q25[0] + ']').attr('checked', true);
            }
            if(data.q26[0] != ""){
                $('input[name=q2-6][value=' + data.q26[0] + ']').attr('checked', true);
            }
            if(data.q27[0] != ""){
                $('input[name=q2-7][value=' + data.q27[0] + ']').attr('checked', true);
            }
            if(data.q28[0] != ""){
                $('input[name=q2-8][value=' + data.q28[0] + ']').attr('checked', true);
            }
            
            $("#leave_remark").val(data.remark[0]);
            
            $("#1-1why").val(data.why1[0]);
            $("#2-1why").val(data.why2[0]);
            $("#2-2why").val(data.why22[0]);
            $("#2-3why").val(data.why23[0]);
            $("#2-4why").val(data.why24[0]);
            $("#2-5why").val(data.why25[0]);
            $("#2-6why").val(data.why26[0]);
            $("#2-7why").val(data.why27[0]);
            $("#2-8why").val(data.why28[0]);
            $("#write_name").text(data.write_name[0]);

            
        },

        error: function (e) {
            console.log(e)
        }
    });
//endregion

//新增後追輔導一覽表region
$("#add_new_track").on('click', function () {
    var four_id = getUrlVars()["four_id"];
    var face_num = getUrlVars()["face_num"];
    var Today=new Date();
    var date = Today.getFullYear()+"-"+('0'+(Today.getMonth()+1)).substr(-2)+"-"+('0'+ Today.getDate()).substr(-2);
//    console.log(date)
            swal({
                title: '確認新增？',
                text: "即將新增至後追輔導一覽表",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                allowOutsideClick: false, //不可點背景關閉
                confirmButtonText: '確認！',
                cancelButtonText: '取消'
            }).then(function (isConfirm) {
                if (isConfirm) {
                    $.ajax({
                        url: "database/add_new_track.php",
                        data: {
                            face_id: $("#face_id").text(),
                            open_id: $("#open_id").text(),
                            track_name: $("#name").text(),
                            track_addition: $("#addition").text(),
                            house: $("#write_department").text(),
                            enter_date: $("#enter_date").text(),
                            leave_date:$("#leave_date").text(),
                            end_date:date,
                            end_status: "已結案",
                            end_id: end_id,
                            four_id:four_id,
                            face_num:face_num
                        },
                        type: "POST",
                        dataType: "JSON",
                        async: false, //啟用同步請求
                        success: function (data) {
                            if (data == 1) {
                                swal({
                                    type: 'success',
                                    title: '新增成功!',
                                    allowOutsideClick: false //不可點背景關閉
                                }).then(function () {
                                    location.reload();
                                })
                            } else {
                                swal({
                                    type: 'error',
                                    title: '新增失敗!請聯絡負責人',
                                    allowOutsideClick: false //不可點背景關閉
                                }).then(function () {
                                    location.reload();
                                })
                            }
                        },
                        error: function (e) {
                            console.log(e)
                        }
                    });
                }
            });
});
//endregion

//跳轉到在園紀錄region
$("#four_page").on('click', function(){
    var face_id = getUrlVars()["face_id"];
    var open_id = getUrlVars()["open_id"];
    var four_id = getUrlVars()["four_id"];
    var face_num = getUrlVars()["face_num"];
    var addition = getUrlVars()["addition"];
    var name = getUrlVars()["name"];
    var house = getUrlVars()["house"];
    
    window.open('four_all.php?name='+name+'&date='+$("#enter_date").text()+'&house='+house+'&id='+face_id+'&open_id='+open_id+'&addition='+addition+'&age='+$("#age").text()+'&gender='+$("#gender").text()+'&four_id='+four_id+'&face_num='+face_num+'');

});
//endregion