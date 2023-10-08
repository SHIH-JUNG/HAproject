
const notyf = new Notyf();

//datepicker創建 region
datepicker_create = function (selector_id) {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R年mm月dd日",
      showButtonPanel: true,
    //   minDate: new Date(
    //     new Date().getFullYear() - 2,
    //     new Date().getMonth() - 3,
    //     1
    //   ),
    //   maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
      yearRange: "-80:+5",
      onClose: function (dateText) {
        // console.log($('#'+selector_id).val());
        // console.log(trans_to_EN(dateText));
      },
      beforeShow: function (input, inst) {
        var $this = $(this);
        var cal = inst.dpDiv;
        var outerh = $this.outerHeight();
        if ($this.offset().top > 1200) {
          outerh = outerh * 4;
        } else {
          outerh = outerh * 0.8;
        }
        // console.log($this.offset().top)
        // console.log($this.offset().left)
        // console.log(outerh)

        var top = $this.offset().top - outerh;
        // var left = $this.offset().left - 100;
        if($this.offset().left < 460)
        {
            var left = $this.offset().left - 50;
        }
        else
        {
            var left = $this.offset().left - 250;
        }
        setTimeout(function () {
            cal.css({
                top: top,
                left: left,
            });
        }, 10);
    },
    });
    // $("#" + selector_id).datepicker("setDate", "today");
  };
  //endregion

//將日期轉為民國年格式111年03月07日 region
trans_to_Tw = function (endate) {
    var return_str = "";
    if(endate!="")
    {
        var strAry = endate.split("-");
  
        if (parseInt(strAry[0]) > 1911) {
          strAry[0] = parseInt(strAry[0]) - 1911;
        }
        // console.log(strAry[0], strAry[1], strAry[2])
        return_str = strAry[0]+"年"+strAry[1]+"月"+strAry[2]+"日";
    }
    else
    {
        return_str = "";
    }
    
    return return_str;
};
  //endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN = function (endate) {
    var return_str = "";

    if(endate!="")
    {
        var strAry1 = endate.split("年");
        var strAry2 = strAry1[1].split("月");
        var strAry3 = strAry2[1].split("日");

        return_str = (parseInt(strAry1[0]) + 1911) + "" + strAry2[0] + "" + strAry3[0];
    }
    else
    {
        return_str = "";
    }
    
  
    return return_str;
};
  //endregion

$(document).ready(function () {
    //將input datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
    $("input[datepicker='ch_datepicker']").each(function () {
        var this_id = $(this).attr("id");
        datepicker_create(this_id);
    });
    //endregion

    // 初始化data table
    Init_datatable();
});

// 抓今年度所有負責社工的工作報告 region
$.ajax({
    url: "database/find_data_all_assign_case_report.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var cssString = "";
        var year = "";
        $.each(data,function(index,value){
            cssString += 
            '<tr cr_one_id="'+value.Id+'">' +
                '<td style="text-align:center">' + trans_to_Tw(value.Open_case_date.split(" ")[0]) + '</td>' +
                '<td style="text-align:center">' + value.Case_id + '</td>' +
                '<td style="text-align:center">' + value.Name + '</td>' +
                '<td style="text-align:center">' + value.Case_grade + '</td>' +
                '<td style="text-align:center">' + value.Case_count + '</td>' +
                '<td style="text-align:center">' + value.Interlocution_phone_count + '</td>' +
                '<td style="text-align:center">' + value.Interlocution_home_count + '</td>' +
                '<td style="text-align:center">' + value.Interlocution_face_count + '</td>' +
                '<td style="text-align:center">' + value.Case_closed_count + '</td>' +
                '<td style="text-align:center">' + value.Case_state + '</td>' +
            '</tr>'

            year = trans_to_Tw(value.Create_date.split(" ")[0]).split("年")[0];
        });

        // console.log(year)

        $("#report_date_title").text("日期："+year+"年1月1日 ~ "+year+"年12月31日");
        $("#report_case_assign").text("社工：所有");

        $("#case_report1").html(cssString);
            //點擊table tr 進入詳細頁面
            // $(".table-hover tbody").on("click","tr",function () {
            //     window.location.href = 'case_all_all.php?id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'';
            // });
    },
    error: function (e) {
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
    }
});
//endregion

// 抓資料庫內有紀錄的所有的負責社工名稱 region
$.ajax({
    url: "database/find_data_case_report.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var cssString = "";

        $.each(data,function(index,value){
            $("#case_assign").append('<option value="'+value.Case_assign+'">'+value.Case_assign+'</option>');
        });

        //找出所有查詢表格下拉式選單，將內容排序、加上"所有查詢"、去除重複值
        var filter_select = $("select.r_filter")

        $.each(filter_select,function(){
            var this_id = $(this).attr("id");

            if(this_id!=undefined)
            {
                //option小到大排序
                $('#'+this_id+' option').sort(function(a,b){
                    var aText = $(a).text().toUpperCase();
                    var bText = $(b).text().toUpperCase();
                    // if(aText>bText) return 1;
                    // if(aText<bText) return -1;
                    // return 0;

                    return aText - bText;
                }).appendTo('#'+this_id+'')

                //最前面新增"所有"選像
                $('#'+this_id+'').prepend("<option value='' selected='selected'>所有</option>");

                $("#"+this_id+"").children().each(function() {
                    //text = $(this).text();
                    //if($("select#"+this_id+" option:contains("+text+")").length > 1){
                    //    $("select#"+this_id+" option:contains("+text+"):gt(0)").remove();
                    //}
                    $(this).siblings('[value="' + this.value + '"]').remove();
                    //    console.log(text)
                });
            }
        });
    },
    error: function (e) {
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員' );
    }
});
//endregion

// 抓取個案評估表資料分析報表 region
$.ajax({
    url: "database/find_data_form_case_report.php",
    data:{
        mode:1,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data_all) {
        $.each(data_all,function(index_i,value_i){

            var case_seqid = value_i.Case_seqid;
            // console.log(case_seqid)

            // var case_seqid = '1';
            // 抓取個案評估表資料分析報表 region
            $.ajax({
                url: "database/find_data_form_case_report.php",
                data:{
                    Case_seqid:case_seqid,
                },
                type: "POST",
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    // console.log(data);

                    var report_info_arr = [];

                    report_info_arr.push({
                        Year:""
                        , Age:0
                        , Gender:""
                        , Address:""
                        , Education:""
                        , Drug_record:""
                        , Referral:""
                        , Demand:""
                        , Case_assign:""
                    });

                    $.each(data,function(index,value){
                        
                        var year = parseInt(value.Year) - 1911;
                        var age = get_age(value.Birth);

                        report_info_arr[0].Year = year;

                        if(age>0)
                        {
                            report_info_arr[0].Age = age;
                        }

                        if(value.Gender!="" && report_info_arr[0].Gender=="")
                        {
                            report_info_arr[0].Gender = value.Gender;
                        }

                        if(value.Address!="" && report_info_arr[0].Address=="")
                        {
                            report_info_arr[0].Address = value.Address;
                        }

                        if(value.Education!="" && report_info_arr[0].Education=="")
                        {
                            report_info_arr[0].Education = value.Education;
                        }

                        if(value.Drug_record!="" && report_info_arr[0].Drug_record=="")
                        {
                            report_info_arr[0].Drug_record = value.Drug_record;
                        }

                        if(value.Referral!="" && report_info_arr[0].Referral=="")
                        {
                            report_info_arr[0].Referral = value.Referral;
                        }

                        if(value.Demand!="" && report_info_arr[0].Demand != "")
                        {
                            report_info_arr[0].Demand += ("、" + value.Demand);
                        }
                        else
                        {
                            report_info_arr[0].Demand += value.Demand;
                        }

                        if(value.Case_assign!="" && report_info_arr[0].Case_assign=="")
                        {
                            report_info_arr[0].Case_assign = value.Case_assign;
                        }
                    });
                    
                    var cssString2 = "";

                    cssString2 = 
                    '<tr cr_one_id="'+index_i+'">' +
                        '<td style="text-align:center">' + report_info_arr[0].Year + '</td>' +
                        '<td style="text-align:center">' + report_info_arr[0].Age + '</td>' +
                        '<td style="text-align:center">' + report_info_arr[0].Gender + '</td>' +
                        '<td style="text-align:center">' + report_info_arr[0].Address + '</td>' +
                        '<td style="text-align:center">' + report_info_arr[0].Education + '</td>' +
                        '<td style="text-align:center">' + report_info_arr[0].Drug_record + '</td>' +
                        '<td style="text-align:center">' + report_info_arr[0].Referral + '</td>' +
                        '<td style="text-align:center">' + report_info_arr[0].Demand + '</td>' +
                        '<td style="text-align:center">' + report_info_arr[0].Case_assign + '</td>' +
                    '</tr>';

                    $("#case_report2").append(cssString2);

                    $("#years").append('<option value="'+report_info_arr[0].Year+'">'+report_info_arr[0].Year+'</option>');
                    
                    if(report_info_arr[0].Gender!="")
                    {
                        $("#gender").append('<option value="'+report_info_arr[0].Gender+'">'+report_info_arr[0].Gender+'</option>');
                    }
                    if(report_info_arr[0].Address!="")
                    {
                        $("#address").append('<option value="'+report_info_arr[0].Address+'">'+report_info_arr[0].Address+'</option>');
                    }
                    if(report_info_arr[0].Education!="")
                    {
                        $("#education").append('<option value="'+report_info_arr[0].Education+'">'+report_info_arr[0].Education+'</option>');
                    }
                    if(report_info_arr[0].Drug_record!="")
                    {
                        $("#drug_record").append('<option value="'+report_info_arr[0].Drug_record+'">'+report_info_arr[0].Drug_record+'</option>');
                    }
                    if(report_info_arr[0].Referral!="")
                    {
                        $("#referral").append('<option value="'+report_info_arr[0].Referral+'">'+report_info_arr[0].Referral+'</option>');
                    }
                    if(report_info_arr[0].Case_assign!="")
                    {
                        $("#case_user").append('<option value="'+report_info_arr[0].Case_assign+'">'+report_info_arr[0].Case_assign+'</option>');
                    }
                    // console.log(report_info_arr);
                },
                error: function (e) {
                    notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
                }
            });
            //endregion
        });

        //找出所有查詢表格下拉式選單，將內容排序、加上"所有查詢"、去除重複值
        var filter_select = $("select.filter")
        

        $.each(filter_select,function(){
            var this_id = $(this).attr("id");
            // console.log(this_id);
            if(this_id!=undefined)
            {
                //option小到大排序
                $('#'+this_id+' option').sort(function(a,b){
                    var aText = $(a).text().toUpperCase();
                    var bText = $(b).text().toUpperCase();
                    // if(aText>bText) return 1;
                    // if(aText<bText) return -1;
                    // return 0;

                    return aText - bText;
                }).appendTo('#'+this_id+'')

                //最前面新增"所有"選像
                $('#'+this_id+'').prepend("<option value='' selected='selected'>所有</option>");

                $("#"+this_id+"").children().each(function() {
                    //text = $(this).text();
                    //if($("select#"+this_id+" option:contains("+text+")").length > 1){
                    //    $("select#"+this_id+" option:contains("+text+"):gt(0)").remove();
                    //}
                    $(this).siblings('[value="' + this.value + '"]').remove();
                    //    console.log(text)
                });
            }
        });
    },
    error: function (e) {
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
    }
});
//endregion



// 送出報表查詢，依據報表日期 region
submit_case_report_select = function() {
    var filter_date = $("[name='filter_date']:checked").val();

    $("[name='tab_all_1']").DataTable().destroy();

    switch (filter_date) {
        case "0":
            filter_date_input();
            break;
        case "1":
            filter_date_select();
            break;
    }

    // 初始化 表格才會顯示正確的統計資料 data table功能才能正常
    Init_datatable();
}
//endregion

// 送出報表查詢，依據選項查詢 region
filter_date_select = function() {
    var filter_date_select = $("#filter_date_select").val();
    var assign = $("#case_assign").val();

    $.ajax({
        url: "database/find_data_filter_date_select_case_report.php",
        data:{
            filter_date_select:filter_date_select,
            assign:assign,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            swal({
                title:'送出查詢成功！',
                type:'success',                        
            })

            // console.log(data)
            var cssString = "";
            $.each(data,function(index,value){

                    cssString += 
                    '<tr cr_one_id="'+value.Id+'">' +
                        '<td style="text-align:center">' + trans_to_Tw(value.Open_case_date.split(" ")[0]) + '</td>' +
                        '<td style="text-align:center">' + value.Case_id + '</td>' +
                        '<td style="text-align:center">' + value.Name + '</td>' +
                        '<td style="text-align:center">' + value.Case_grade + '</td>' +
                        '<td style="text-align:center">' + value.Case_count + '</td>' +
                        '<td style="text-align:center">' + value.Interlocution_phone_count + '</td>' +
                        '<td style="text-align:center">' + value.Interlocution_home_count + '</td>' +
                        '<td style="text-align:center">' + value.Interlocution_face_count + '</td>' +
                        '<td style="text-align:center">' + value.Case_closed_count + '</td>' +
                        '<td style="text-align:center">' + value.Case_state + '</td>' +
                    '</tr>';
            });

            if(data.length==0)
            {
                cssString = '<tr>' +
                '<td colspan="10" style="text-align:center"><i style="color:gray;">没有匹配结果</i></td>' +
                '</tr>';
            }

            var case_assign_text = "所有";

            if($("#case_assign").val()!="")
            {
                case_assign_text = $("#case_assign").val();
            }

            // console.log(case_assign_text)

            $("#report_date_title").text("日期："+$("#filter_date_select").val());
            $("#report_case_assign").text("社工："+case_assign_text);

            $("#case_report1").html(cssString);
                //點擊table tr 進入詳細頁面
                // $(".table-hover tbody").on("click","tr",function () {
                //     window.location.href = 'case_all_all.php?id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'';
                // });
        },
        error: function (e) {
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            // console.log(e);
        }
    });

    
}
//endregion

// 依據輸入的報表起始和結束日期查詢 region
filter_date_input = function() {
    var r_min_date = trans_to_EN($("#r_min_date").val());
    var r_max_date = trans_to_EN($("#r_max_date").val());
    var assign = $("#case_assign").val();
    
    // console.log(r_min_date)
    // console.log(r_max_date)

    var date_check = check_case_report_date_filter(r_min_date, r_max_date);

    var is_allow = false;

    if(date_check=="")
    {
        is_allow = true;
    }
    else
    {
        is_allow = false;
    }

    if(is_allow)
    {
        $.ajax({
            url: "database/find_data_filter_date_input_case_report.php",
            data:{
                r_min_date:r_min_date,
                r_max_date:r_max_date,
                assign:assign,
            },
            type: "POST",
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                swal({
                    title:'送出查詢成功！',
                    type:'success',                        
                })
                
                // console.log(data)
                var cssString = "";
                $.each(data,function(index,value){

                    cssString += 
                    '<tr cr_one_id="'+value.Id+'">' +
                        '<td style="text-align:center">' + trans_to_Tw(value.Open_case_date.split(" ")[0]) + '</td>' +
                        '<td style="text-align:center">' + value.Case_id + '</td>' +
                        '<td style="text-align:center">' + value.Name + '</td>' +
                        '<td style="text-align:center">' + value.Case_grade + '</td>' +
                        '<td style="text-align:center">' + value.Case_count + '</td>' +
                        '<td style="text-align:center">' + value.Interlocution_phone_count + '</td>' +
                        '<td style="text-align:center">' + value.Interlocution_home_count + '</td>' +
                        '<td style="text-align:center">' + value.Interlocution_face_count + '</td>' +
                        '<td style="text-align:center">' + value.Case_closed_count + '</td>' +
                        '<td style="text-align:center">' + value.Case_state + '</td>' +
                    '</tr>'

                });

                if(data.length==0)
                {
                    cssString = '<tr>' +
                    '<td colspan="10" style="text-align:center"><i style="color:gray;">没有匹配结果</i></td>' +
                    '</tr>';
                }

                var case_assign_text = "所有";

                if($("#case_assign").val()!="")
                {
                    case_assign_text = $("#case_assign").val();
                }
                


                $("#report_date_title").text("日期："+$("#r_min_date").val()+"~"+$("#r_max_date").val());
                
                $("#report_case_assign").text("社工："+case_assign_text);

                $("#case_report1").html(cssString);
                    //點擊table tr 進入詳細頁面
                    // $(".table-hover tbody").on("click","tr",function () {
                    //     window.location.href = 'case_all_all.php?id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'';
                    // });
                
            },
            error: function (e) {
                notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            }
        });

    }
    else
    {
        swal({
            title: date_check,
            type: "error",
        });
    }
}
//endregion

// 檢查報表開始日期與結束日期是否合法 region
check_case_report_date_filter = function(min_date, max_date) {
    
    var errormsg = "";
    var today = new Date();

    if(min_date > max_date)
    {
        errormsg = "報表結束日期不能小於報表開始日期";
    }
    else if(min_date == "" || max_date == "")
    {
        errormsg = "查詢時請輸入完整的報表起訖日期";
    }

    return errormsg;
}
//endregion

// 依據生日計算年齡 region
function get_age(birth) {
    var age = "0";

    birth = Date.parse(birth.replace('/-/g', "/"));

    if (birth) 
    {
        var year = 1000 * 60 * 60 * 24 * 365;
        var now = new Date();
        var birthday = new Date(birth);
        age = parseInt((now - birthday) / year);
    }

    return age;
}
//endregion



//設定table搜尋框重整後自動填入文字 region

//table設定 region
function Init_datatable() {
$table_1 = $("[name='tab_all_1']").DataTable({
        "ordering": true,
        "info": true,
        "paging": true,
        "lengthChange": false,
        "pageLength": 10,
        "pagingType": "simple_numbers",
        "searching": true,
        "destory": true,
        "retrieve": true,
        "dom":
            "<'col-sm-12'tr>"+
            "<'col-sm-6'<'text-left'i>><'col-sm-6'<'text-right'p>>"+
            "<'col-sm-12'<'text-left'B>>",
        language: {
        
            "sZeroRecords": "没有匹配结果",
            "sInfo": "顯示 _START_ 到 _END_ 筆資料，總共有 _TOTAL_ 筆資料",
            "sInfoEmpty": "目前共有 0 筆紀錄",
            "sInfoFiltered": "(由 _MAX_ 筆資料结果過濾)",
            "fnInfoCallback": function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
                // $("#count_people").text("人次："+iTotal);
                return sPre
            },
            paginate: {
                previous: '‹上一頁',
                next:     '下一頁›'
            },
            aria: {
                paginate: {
                    previous: 'Previous',
                    next:     'Next'
                }
            }
        },
        buttons: [
            {
                extend: 'excelHtml5',
                title: '快樂聯盟-個案服務報表',
                text:'匯出Excel'
            },
        ]
    });

    //匯出EXCEL按鈕CSS設定 region
    $('.buttons-excel').each(function() { 
        $(this).removeClass('dt-button').addClass('btn btn-default') ;
    }) 
    //endregion
}


var $table = $("[name='tab_all_2']").DataTable({
    "ordering": true,
    "info": true,
    "paging": true,
    "lengthChange": false,
    "pageLength": 10,
    "pagingType": "simple_numbers",
    "searching": true,
    "dom":
        "<'col-sm-12'tr>"+
        "<'col-sm-6'<'text-left'i>><'col-sm-6'<'text-right'p>>"+
        "<'col-sm-12'<'text-left'B>>",
    language: {
    
        "sZeroRecords": "没有匹配结果",
        "sInfo": "顯示 _START_ 到 _END_ 筆資料，總共有 _TOTAL_ 筆資料",
        "sInfoEmpty": "目前共有 0 筆紀錄",
        "sInfoFiltered": "(由 _MAX_ 筆資料结果過濾)",
        "fnInfoCallback": function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
            // $("#count_people").text("人次："+iTotal);
            return sPre
        },
        paginate: {
            previous: '‹上一頁',
            next:     '下一頁›'
        },
        aria: {
            paginate: {
                previous: 'Previous',
                next:     'Next'
            }
        }
    },
    buttons: [
        {
            extend: 'excelHtml5',
            title: '快樂聯盟-個案服務分析報表',
            text:'匯出Excel'
        },
    ]
});

//範圍搜尋region
function parseTime( t ) {
    var d = new Date();
    var time = t.match( /(\d+)(?::(\d\d))?\s*(p?)/ );
    d.setHours( parseInt( time[1]) + (time[3] ? 12 : 0) );
    d.setMinutes( parseInt( time[2]) || 0 );
    return d;
 }


var ages_range = (function( settings, data, dataIndex ) {
    var min_age = parseInt($('#min_age').val());
    var max_age = parseInt($('#max_age').val());
    var age = parseInt(data[1]) || 0; // use data for the date column
    // console.log(data[1])
    // console.log(min_age)
    // console.log(max_age)
    if ( ( isNaN( min_age ) && isNaN( max_age ) ) ||
        ( isNaN( min_age ) && age <= max_age ) ||
        ( min_age <= age   && isNaN( max_age ) ) ||
        ( min_age <= age   && age <= max_age ) )
    {
        return true;
    }
    return false;
});

//預設總人數人次region
// $(".count_people").text("人次："+$table.column(0).data().count());
// $(".count_people2").text("，人數："+$table.column(0).data().unique().count());
//endregion

//額外設定select
$('select.filter').on('change', function () {
    var rel = $(this).attr("rel");
    if(this.value!="")
    {
        //格式：.serch(該欄位值, 是否啟用正則表達式匹配, 是否關閉智能查詢, 是否開啟不區分大小寫)
        //須完全匹配option的value值 設定option.value 使用正則符號匹配，ex:"^" + this.value+ "$"
        //前端注意option value內有特殊字元須加入轉義字 ex:H+梅 positive => H\+梅 positive
        $table.columns(rel).search("^" + this.value+ "$", true, false, true).draw();
    }
    else
    {
        $table.columns(rel).search(this.value).draw();
    }
    
});

$('input.filter').on('keyup change', function () {
    //    console.log(this.value);
    var rel = $(this).attr("rel");
    //    console.log(rel);
    
    $table.columns(rel).search(this.value).draw();
});
//endregion



$('#min_age, #max_age').on('keyup change', function() {
    // console.log($('#min_age').val());
    $.fn.dataTable.ext.search.push(ages_range);
    $table.draw();
}); 


$table.on('draw', function () {
    $(".count_people2").text("，人數："+$table.column(0, {page:'current'} ).data().unique().count());
});

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
    $(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion