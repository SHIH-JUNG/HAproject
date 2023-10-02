const notyf = new Notyf();

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
    // console.log(date)
    return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
  }
  //endregion

let DateDiff = function (date1, date2) { // date1 和 date2 是 2016-06-18 格式
    let strDate, oDate1, oDate2, result
    strDate = date1.split("-");
    oDate1 = new Date(strDate[1] + '-' + strDate[2] + '-' + strDate[0]);
    strDate = date2.split("-");
    oDate2 = new Date(strDate[1] + '-' + strDate[2] + '-' + strDate[0]);
    result = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
    return result;
};

function  getDaysBetween(dateString1,dateString2){
    var  startDate = Date.parse(dateString1);
    var  endDate = Date.parse(dateString2);
    var days=(endDate - startDate)/(1*24*60*60*1000);
    // alert(days);
    return  days;
}

$(document).ready(function () {

    $('.form_date').datetimepicker({
        format: 'yyyy-mm-dd', //日期的顯示格式
        language:  'zh-TW',
        // locale: moment.locale('zh-tw'), //國別
        // daysOfWeekDisabled: [0, 6], //隱藏的天數0為周日6為星期六
        // minDate: moment().add(1,'days'), //顯示最小天數
        // maxDate: moment().add(30,'days'), //顯示最大天數，30為最大的顯示範圍為一個月為限
        minView:2,
        autoclose: 1,
    });

    $('.form_time').datetimepicker({
        language:  'zh-TW',
        format: 'hh:ii',
		autoclose: 1,
		startView: 1,
    });

    // 載入全部user至下拉式選單
    // append_user();
    user_element_arr = ['#vr_booker', '#add_vr_booker', '#u_vr_booker', 
    '#visit_assign1', '#visit_assign2', '#s_visit_assign1', '#s_visit_assign2', '#visit_assign1'];
    
    $.each(user_element_arr, function (index, user_element) {
        add_user_option(user_element);
    });
    
    $("#add_vr_booker").val(assign_name);
});    


//show 訊息公告 region
$.ajax({
    url: "database/announcement.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data);
        var cssString = "";
        for (var index in data.title) {
            cssString += 
                    '<tr>' +
                    '<td style="LINE-HEIGHT:1px">' + data.date[index] + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + data.title[index] + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + data.publisher[index] + '</td>' +
                    '</tr>'
        }

        if(cssString != '') {
            $("#ann").html(cssString);
        }
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion

//show 車輛保留 region
$.ajax({
    url: "database/vehicle_retain_show.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data);

        var cssString = "";
        $.each(data, function (index, value) {

            var timenow = moment().format('YYYY-MM-DD HH:mm');

            let date_diff = DateDiff(timenow.split(" ")[0], value.Borrow_date);

            //只顯示當天的資料
            if(date_diff == 0)
            {
                var tr_color = "";
                var back_timestap = "";

                // 判斷是否結束，結束的話Back_timestap不為null值
                if(value.Back_timestap == '00:00:00')
                {
                    tr_color = "#FF9797";
                    back_timestap = "";
                }
                else
                {
                    tr_color = "#90ee90";
                    back_timestap = value.Back_timestap.split(":")[0] + ":" + value.Back_timestap.split(":")[1];
                }
                
                cssString +=
                            '<tr style="background-color:'+tr_color+';" id="'+value.Id+'">' +
                            '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Borrow_date + '</td>' +
                            '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Out_timestap.split(":")[0] + ":" + value.Out_timestap.split(":")[1] + '</td>' +
                            '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Reason + '</td>' +
                            '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Place + '</td>' +
                            '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Vehicle + '</td>' +
                            '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + back_timestap + '</td>' +
                            '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Booker + '</td>';

                if(value.Back_timestap == '00:00:00')
                {
                    cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="javascript: void(0)" onclick="end_vehicle_retain('+value.Id+')">歸還車輛</a>' + '</td>' +
                    '</tr>';
                }
                else
                {
                    cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px"><span style="color:blue;">已結束</span></td></tr>';
                }
            }
        });
        
        if(cssString != '') {
            $("#vehicle_retain_info").html(cssString);
        }

        //綁定表格欄onclick事件，點擊顯示模態框，車輛保留-詳細資料
        // $("#vehicle_retain_info>tr td").each(function(i,v)
        // {
        //     var currentEle_class = $(this).attr("row_name");

        //     if(currentEle_class != "last_row")
        //     {
        //         var currentEle = $(this);
        //         // console.log($(this))
        //         // currentEle.on("click",function () {
        //         $("#vehicle_retain_info").on("click", currentEle, function() {
        //             console.log($(this).children("tr").attr("id"))
        //             var attr_id = $(this).parent("tr").attr("id");
        //             // var attr_id = $(this).children("tr").attr("id");
                    
        //             $('#show_vehicle_retain_m').modal('show');
                
        //             show_vehicle_retain_modal(attr_id);
        //         });
        //     }
        // });

        $("#vehicle_retain_info").on("click", ".n_row", function() {
            var attr_id = $(this).parent("tr").attr("id");
            // var attr_id = $(this).children("tr").attr("id");
            
            $('#show_vehicle_retain_m').modal('show');
        
            show_vehicle_retain_modal(attr_id);
        });

    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion

//show 社工訪視 region
$.ajax({
    url: "database/visit_show.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data);

        var cssString = "";
        $.each(data, function (index, value) {

            var timenow = moment().format('YYYY-MM-DD HH:mm');

            var tr_color = "";

            // 判斷訪視是否結束，結束的話Visit_end_time不為null值
            if(value.Visit_end_time == null)
            {
                var visit_end_time = "";
                tr_color = "#FF9797";

                cssString +=
                        '<tr style="background-color:'+tr_color+';" id="'+value.Id+'">' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_time + '</td>' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_title + '</td>' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_assign1 + '</td>' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_assign2 + '</td>' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + visit_end_time + '</td>';
                
                if(value.Visit_end_time == null)
                {
                    cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="javascript: void(0)" onclick="end_visit('+value.Id+')">結束訪視</a>' + '</td>' +
                    '</tr>';
                }
                else
                {
                    cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px"><span style="color:blue;">已結束</span></td></tr>';
                }
            }
            else
            {
                let date_diff = DateDiff(timenow.split(" ")[0], value.Visit_end_time.split(" ")[0]);

                // console.log(date_diff)

                var visit_end_time = value.Visit_end_time;
                tr_color = "#90ee90";

                if(date_diff <= 7) // 判斷訪視是否結束，已結束的訪視只留下最近七天的紀錄
                {
                    

                    cssString +=
                        '<tr class="n_row" style="background-color:'+tr_color+';" id="'+value.Id+'">' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_time + '</td>' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_title + '</td>' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_assign1 + '</td>' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_assign2 + '</td>' +
                        '<td class="n_row" row_name="n_row" style="LINE-HEIGHT:1px">' + visit_end_time + '</td>';
                
                    if(value.Visit_end_time == null)
                    {
                        cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="javascript: void(0)" onclick="end_visit('+value.Id+')">結束訪視</a>' + '</td>' +
                        '</tr>';
                    }
                    else
                    {
                        cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px"><span style="color:blue;">已結束</span></td></tr>';
                    }
                }
            }
            
        });
        
        if(cssString != '') {
            $("#visit_info").html(cssString);
        }

        //綁定表格欄onclick事件，點擊顯示模態框，社工訪視-詳細資料
        // $("#visit_info>tr td").each(function(i,v)
        // {
        //     var currentEle_class = $(this).attr("row_name");

        //     if(currentEle_class != "last_row")
        //     {
        //         var currentEle = $(this);
                
        //         currentEle.on("click",function () {
                
        //             var attr_id = $(this).parent("tr").attr("id");

        //             $('#show_visit_m').modal('show');
                
        //             show_visit_modal(attr_id);
        //         });
        //     }
        // });

        $("#visit_info").on("click", ".n_row", function() {
            var attr_id = $(this).parent("tr").attr("id");
            // var attr_id = $(this).children("tr").attr("id");
            
            $('#show_visit_m').modal('show');
        
            show_visit_modal(attr_id);
        });

    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion


//show 請假 region
$.ajax({
    url: "database/day_off_show.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data);

        var cssString = "";
        $.each(data, function (index, value) {

            var timenow = moment().format('YYYY-MM-DD HH:mm');

            // let date_diff = 7;
            let date_diff = DateDiff(timenow.split(" ")[0], value.Update_date.split(" ")[0]);
            
            // console.log(date_diff);
            
            if(date_diff <= 7) // 只留下最近七天有更新過的紀錄
            {
                var tr_color = "";

                if(value.Allow_status != "核准")
                {
                    tr_color = "#FF9797";
                }
                else
                {
                    tr_color = "#90ee90";
                }

                var day_off_date = value.Overtime_date_start.split("_");
                var day_off_date_str = split_date(day_off_date[0]) + " " +day_off_date[1];
                
                var row_url = "day_off_detail.php?day_off_id=" + value.Id + "&resume_id=" + value.Resume_id;
                
                cssString +=
                        '<tr style="background-color:'+tr_color+';" id="'+value.Id+'">' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + day_off_date_str + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Resume_name + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Day_off_type + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Hours + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Job_agent + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Allow_status + '</td>';
                
                cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="'+row_url+'">查看</a>' + '</td>' +
                '</tr>';
            }
        });
        
        if(cssString != '') {
            $("#dayoff_info").html(cssString);
        }
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion


//show 會議記錄提醒 region
$.ajax({
    url: "database/record_warn_show.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data);

        var cssString = "";
        $.each(data, function (index, value) {

            var timenow = moment().format('YYYY-MM-DD HH:mm');

            let date_diff = getDaysBetween(timenow.split(" ")[0], value.Warn_timestap.split(" ")[0]);

            if(date_diff <= 0) // date_diff小於等於0，表示到了提醒日期
            {                    
                var rtype = "";

                if(value.R_or_G == "R")
                {
                    rtype = "會議記錄";
                }
                else if(value.R_or_G == "G")
                {
                    rtype = "會議議程";
                }
                                    
                cssString +=
                        '<tr id="'+value.Id+'">' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Create_date + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Title + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + rtype + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.State + '</td>' +
                        '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Create_name + '</td>';
                
                cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="'+value.Url+'">查看</a>' + '</td>' +
                '</tr>';
            }
        });
        
        if(cssString != '') {
            $("#record_warn_info").html(cssString);
        }
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion


//insert 車輛保留 region
$("#vehicle_retain_add").click(function(){
    $('#add_vehicle_retain_m').modal('show'); 
});

$("#add_new_vehicle_retain").click(function(){

    var stau = false;

    if (check_vehicle_retain_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    // console.log(stau);

    if(!stau)
    {
        swal({
            title:check_vehicle_retain_data(),
            type:'error'
        })
    }
    else
    {
        $.ajax({
            url: "database/add_vehicle_retain.php",
            data:{
                Borrow_date:$("#add_borrow_date").val(),
                Out_timestap:$("#add_out_timestap").val(),
                Reason:$("#add_vr_reason").val(),
                Place:$("#add_vr_place").val(),
                Vehicle:$("#add_vr_vehicle").val(),
                Booker:$("#add_vr_booker").val(),
                Title:"車輛外出登記-"+$("#add_vr_booker").val(),
                Description:"借出車輛："+$("#add_vr_vehicle").val() + "，地點：" + $("#add_vr_place").val() + "，外出時間：" + $("#add_out_timestap").val(),
                Start_t:$("#add_borrow_date").val() + " " + $("#add_out_timestap").val(),
                End_t:$("#add_borrow_date").val() + " 00:00:00",
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    swal({
                        title:'新增成功！',
                        type:'success',                        
                    }).then(function(){
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'新增失敗！',
                        type:'error',
                    })
                } 
            },
            error: function (e) {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                })
                console.log(e)
            }
        });
    }
});
//endregion

//檢查車輛保留欄位是否為空 region
check_vehicle_retain_data = function() {
    var borrow_date = $('#add_borrow_date').val();
    var out_timestap = $('#add_out_timestap').val();
    var vr_place = $('#add_vr_place').val();
    var vr_vehicle = $('#add_vr_vehicle').val();
    
    var errorstr = "";


    if (borrow_date == null) {
        errorstr += "未填寫日期!\r\n";
    }
    if (out_timestap == null) {
        errorstr += "未填寫外出時間!\r\n";
    }
    if (vr_place == null) {
        errorstr += "未填寫地點!\r\n";
    }
    if (vr_vehicle == null) {
        errorstr += "未填寫交通工具!\r\n";
    }
    if (errorstr == "") {
        if (borrow_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫日期!\r\n";
        }
        if (out_timestap.replace(/\s*/g, "") == '') {
            errorstr += "未填寫外出時間!\r\n";
        }
        if (vr_place.replace(/\s*/g, "") == '') {
            errorstr += "未填寫地點!\r\n";
        }
        if (vr_vehicle.replace(/\s*/g, "") == '') {
            errorstr += "未填寫交通工具!\r\n";
        }
    }

    return errorstr;
}
//endregion

//show 車輛保留 detail show modal region
function show_vehicle_retain_modal(modal_id) {
    $.ajax({
        url: "database/vehicle_retain_show.php",
        data:{
            Id:modal_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);
    
            $.each(data, function (index, value) {
                $("#back_timestap").val(value.Back_timestap.split(":")[0] + ":" + value.Back_timestap.split(":")[1]);
                $("#borrow_date").val(value.Borrow_date);
                $("#out_timestap").val(value.Out_timestap.split(":")[0] + ":" + value.Out_timestap.split(":")[1]);
                $("#vr_reason").val(value.Reason);
                $("#vr_place").val(value.Place);
                $("#vr_vehicle").val(value.Vehicle);
                $("#vr_booker").val(value.Booker);
            });
                
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
}
//endregion

//點擊 修改車輛保留狀態 返回的時間 region
end_vehicle_retain = function(attr_id){
    $('#update_vehicle_retain_m').modal('show'); 

    load_update_vehicle_retain_data(attr_id);

    var timenow = moment().format('HH:mm');
    $("#u_back_timestap").val(timenow);

    $("#update_vehicle_retain_btn").attr("btn_id",attr_id);
}
//endregion

// modal顯示要修改的車輛保留資料 region
load_update_vehicle_retain_data = function(vr_id) {
    $.ajax({
        url: "database/vehicle_retain_show.php",
        data:{
            Id:vr_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);

            $.each(data, function (index, value) {
                // $("#u_back_timestap").val();
                $("#u_borrow_date").val(value.Borrow_date);
                $("#u_out_timestap").val(value.Out_timestap.split(":")[0] + ":" + value.Out_timestap.split(":")[1]);
                $("#u_vr_reason").val(value.Reason);
                $("#u_vr_place").val(value.Place);
                $("#u_vr_vehicle").val(value.Vehicle);
                $("#u_vr_booker").val(value.Booker);
                
            });
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
}
//endregion

// modal修改車輛保留及修改返回的時間 region
update_vehicle_retain = function(this_btn) {
    var attr_id = $(this_btn).attr("btn_id");

    $.ajax({                                                                                    
        url: "database/update_vehicle_retain.php",
        data:{
            Id:attr_id,
            Back_timestap:$("#u_back_timestap").val(),
            Borrow_date:$("#u_borrow_date").val(),
            Out_timestap:$("#u_out_timestap").val(),
            Reason:$("#u_vr_reason").val(),
            Place:$("#u_vr_place").val(),
            Vehicle:$("#u_vr_vehicle").val(),
            Booker:$("#u_vr_booker").val(),
            Title:"車輛外出登記-"+$("#u_vr_booker").val(),
            Description:"借出車輛："+$("#u_vr_vehicle").val() + "，地點：" + $("#u_vr_place").val() + "，外出時間：" + $("#u_out_timestap").val(),
            Start_t:$("#u_borrow_date").val() + " " + $("#u_out_timestap").val(),
            End_t:$("#u_borrow_date").val() + " " + $("#u_back_timestap").val(),
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if(data == 1){
                swal({
                    title:'更新成功！',
                    type:'success',                        
                }).then(function(){
                    location.reload();
                }) 
            }else{
                swal({
                    title:'更新失敗！請聯絡負責單位',
                    type:'error',
                })
            }  
        },
        error:function(e){
            console.log(e);
            swal({
                title:'更新失敗！請聯絡負責單位',
                type:'error',
            })
        }
    });
}
//endregion

//show 社工訪視 detail show modal region
function show_visit_modal(modal_id) {
    $.ajax({
        url: "database/visit_show.php",
        data:{
            Id:modal_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);
    
            $.each(data, function (index, value) {
    
                if(value.Visit_end_time == null)
                {
                    var visit_end_time = "";
                }
                else
                {
                    var visit_end_time = value.Visit_end_time;
                }

                $("#s_visit_title").val(value.Visit_title);
                $("#s_visit_time").val(value.Visit_time);
                $("#s_visit_assign1").val(value.Visit_assign1);
                $("#s_visit_assign2").val(value.Visit_assign2);
                $("#s_visit_end_time").val(visit_end_time);
                $("#s_visit_remark").val(value.Remark);
            });
                
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
}
//endregion

//前往簽核提醒頁面 region
go_to_signature_notice = function() {
    window.location.href = "signature_notice.php";
}
//endregion

//insert 社工訪視 region
$("#visit_add").click(function(){
    $('#add_visit_m').modal('show'); 
});


$("#add_new_visit").click(function(){
    var stau = false;

    if (check_visit_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    // console.log(stau);

    if(!stau)
    {
        swal({
            title:check_visit_data(),
            type:'error'
        })
    }
    else
    {
        $.ajax({
            url: "database/add_visit.php",
            data:{
                Visit_title:$("#visit_title").val(),
                Visit_time:$("#visit_time").val(),
                Visit_assign1:$("#visit_assign1").val(),
                Visit_assign2:$("#visit_assign2").val(),
                Title:"社工訪視-"+$("#visit_title").val(),
                Description:"標題："+$("#visit_title").val() + "，時間：" + $("#visit_time").val() + "，主要承辦人員：" + $("#visit_assign1").val(),
                Start_t:$("#visit_time").val(),
                End_t:'0000-00-00 00:00:00',
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    swal({
                        title:'新增成功！',
                        type:'success',                        
                    }).then(function(){
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'新增失敗！',
                        type:'error',
                    })
                } 
            },
            error: function (e) {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                })
                console.log(e)
            }
        });
    }

    
});
//endregion

//檢查社工訪視 欄位是否為空 region
check_visit_data = function() {
    var visit_title = $('#visit_title').val();
    var visit_time = $('#visit_time').val();
    var visit_assign1 = $('#visit_assign1').val();
    
    var errorstr = "";


    if (visit_title == null) {
        errorstr += "未填寫標題!\r\n";
    }
    if (visit_time == null) {
        errorstr += "未填寫訪視時間!\r\n";
    }
    if (visit_assign1 == null) {
        errorstr += "未選擇訪承辦人員1!\r\n";
    }
    if (errorstr == "") {
        if (visit_title.replace(/\s*/g, "") == '') {
            errorstr += "未填寫標題!\r\n";
        }
        if (visit_time.replace(/\s*/g, "") == '') {
            errorstr += "未填寫訪視時間!\r\n";
        }
        if (visit_assign1.replace(/\s*/g, "") == '') {
            errorstr += "未選擇訪承辦人員1!\r\n";
        }
    }

    return errorstr;
}
//endregion

//update end 社工訪視 region
update_visit = function(this_btn){
    var attr_id = $(this_btn).attr("btn_id");

    $.ajax({                                                                                    
        url: "database/end_visit.php",
        data:{
            Id:attr_id,
            Visit_end_time:$("#visit_end_time").val(),
            Visit_remark:$("#remark").val(),
            End_t:$("#visit_end_time").val(),
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if(data == 1){
                swal({
                    title:'更新成功！',
                    type:'success',                        
                }).then(function(){
                    location.reload();
                }) 
            }else{
                swal({
                    title:'更新失敗！請聯絡負責單位',
                    type:'error',
                })
            }  
        },
        error:function(e){
            console.log(e);
            swal({
                title:'更新失敗！請聯絡負責單位',
                type:'error',
            })
        }
    });
}
//endregion

//點擊 結束訪視 region
end_visit = function(attr_id){
    $('#update_visit_m').modal('show'); 

    var timenow = moment().format('YYYY-MM-DD HH:mm');
    $("#visit_end_time").val(timenow);

    $("#update_visit_btn").attr("btn_id",attr_id);
}
//endregion

//insert 訊息公告 region
$("#ann_cancel").click(function(){
    $('#add_ann_m').modal('show'); 
});
$("#ann_add").click(function(){
    $('#add_ann_m').modal('show'); 
});
    
$("#add_new_ann").click(function(){

    if($("#ann_title").val() == '')
    {
        swal({
            title:"未填寫訊息公告標題!",
            type:'error'
        })
    }
    else
    {
        $.ajax({
            url: "database/add_ann.php",
            data:{
                ann_title:$("#ann_title").val(),
                authority:$("#ann_authority").val(),
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    swal({
                        title:'新增成功！',
                        type:'success',                        
                    }).then(function(){
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'新增失敗！',
                        type:'error',
                    })
                } 
            },
            error: function (e) {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                })
                console.log(e)
            }
        });
    }
   
});
//endregion

//新增公告 取消按鈕 取消新增後清除文字框 region
function ann_cancel(){
    $("#ann_title").val("");
    $("#ann_authority").val("1");
}
//endregion

// //呼叫user方法region
// function append_user(){             
//     $.ajax({
//         type:'POST',
//         url:'database/find_check_user.php',
//         dataType: "JSON",
//         async: false,//啟用同步請求
//         success: function (data) {
//             // console.log('test',data)
//             for (var index in data.Id) 
//             {
//                 $("#visit_assign1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
//                 $("#visit_assign2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
//                 $("#s_visit_assign1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
//                 $("#s_visit_assign2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
//                 $("#visit_assign1").val(assign_name);
//                 // $("#visit_assign2").val(assign_name);
//             }
//         },
//     });
// }
// //endregion

// 依據id名稱，載入新增訪談記錄的社工人員選項 region
add_user_option = function(element_id)
{
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $(element_id).append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
//endregion

