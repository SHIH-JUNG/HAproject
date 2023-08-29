const notyf = new Notyf();

$( document ).ready(function() {
    //手動新增按鈕點擊跳出模態框
    $('#myModal').on('shown.bs.modal', function () {
        $('#trans_to_opencase').trigger('focus');
    });
});

//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//抓個別特定電話詢戒表region
$(document).ready(function(){
    //只顯示 個案詢戒電話紀錄詳細總表
    $('#all_data').show();
    $('#create_new_content').hide();
    $("#add_new_reservation").hide();
    $('#add_new_content').hide();
    $('#add_new_choise').hide();
    $("input[type=radio][name=newrec_type]").on('change',function(){
        select_rec(this.value);
    });
    select_rec(phone);

    var phone_id = getUrlVars()["phone_id"];
    // console.log(phone_id);
//    console.log(id+1);
    $.ajax({
        url: "database/find_personal_data.php",
        data:{
            Phone_id:phone_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
            if(data.Update_date[0] == null){
                data.Update_date[0] = "";
            }
//            console.log(data.phone[0])
            
            //分割曾經癮別region
            // var Arr=[];
            // var addition_arr = data.Addiction[0];
            // Arr = addition_arr.split("、"); // 根据“-”分割
            // check_addition(Arr);
            //分割主要癮別region
            var Arr2=[];
            var m_addition_arr = data.M_addiction[0];
            Arr2 = m_addition_arr.split("、"); // 根据“-”分割
            // console.log(Arr2)
            check_m_addition_arr(Arr2);
            // check_mainaddition();
            
            check_radio(data.R_detail[0],data.L_detail[0],data.A_detail[0],data.Referral_detail[0],data.Eligible[0]);
            //endregion
            var p_arr=[];
            var phone_arr = data.R_phone[0];
            p_arr = phone_arr.split("、"); // 根据“-”分割

            var refp_arr=[];
            var refphone_arr = data.Referral_phone[0];
            refp_arr = refphone_arr.split("、"); // 根据“-”分割

//            console.log(p_arr)
            var cssString = "";
            var cssString1 = "";
            var cssString2 = "";
            var cssString3 = "";
            var cssString4 = "";
            var cssString5 = "";
            var cssString6 = "";
            var cssString7 = "";

            cssString  += data.Update_date[0];
            cssString1 += data.Update_name[0];
            cssString2 += data.Phone_id[0];
            cssString3 += data.Create_name[0];
            cssString4 += data.Create_date[0];
            for(index in p_arr){
                var num = parseInt(index)+1;
                if(num ==1 ){
                    cssString6 += '聯絡人電話'+num+'：<input name="phone[]" type="number" value="'+p_arr[index]+'" max="10" disabled>(此筆電話將顯示在詢戒電話總表)<br><br>'
                }else{
                    cssString6 += '聯絡人電話'+num+'：<input name="phone[]" type="number" value="'+p_arr[index]+'" max="10")" disabled><br><br>'
                }
                
            }
            for(index in refp_arr){
                var num = parseInt(index)+1;
                if(num ==1 ){
                    cssString7 += '轉介人電話'+num+'：<input name="refphone[]" type="number" value="'+refp_arr[index]+'" max="10" disabled><br><br>'
                }else{
                    cssString7 += '轉介人電話'+num+'：<input name="refphone[]" type="number" value="'+refp_arr[index]+'" max="10")" disabled><br><br>'
                }
                
            }
            $("#t_sn").html(cssString2);
            $("#call_datetime").val(data.Call_datetime[0]);
            //諮詢方式
            $("#way").val(data.Way[0]);
            $("#way_detail").val(data.Way_detail[0]);
            $("#name").val(data.Name[0]);
            $("#gender").val(data.Gender[0]);
            //服務對象類別
            $("#object_type").val(data.Object_type[0]);

            var m_type_v = data.M_type[0];

            if(m_type_v.includes("其他："))
            {
                $("input[name='m_type[]'][value='其他']").attr('checked',true);
                $("#m_type_other").val(m_type_v.replace("其他：", ""));
            }
            else
            {
                $("input[name='m_type[]'][value='"+m_type_v+"']").attr('checked',true);
            }

            $("#age").val(data.Age[0]);
            $("#address").val(data.Address[0]);
            $("#info_name").val(data.Info_Name[0]);
            $("#relationship").val(data.Relationship_detail[0]);
            $("#phone").html(cssString6);
            //轉介來源
            $("#referral").val(data.Referral[0]);
            //轉介人電話
            $("#refphone").html(cssString7);
            //轉介人 職稱/姓名
            $("#referral_name").val(data.Referral_name[0]);
            // $("#k_place").val(data.Know_from[0]);
            // $("#department").val(data.Department[0]);
            append_user();
            $("#user").val(data.Assign[0]);
            $("#note").val(data.Phone_note[0]);
            $("#adate").html(cssString4);
            $("#applicant").html(cssString3);
            $("#up_applicant").html(cssString1);
            $("#udate").html(cssString);
        
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
        }
    });
    $(".phone_question").attr("disabled",true);


    //有選取的 radio or checkbox 字會變紅 region
    $("input[type='radio']").each(function(i,n){

        if($(this).is(":checked"))
        {   
            $(".radio_label").eq(i).css("color", "red");
        }
    });

    $("input[type='checkbox']").each(function(i,n){

        if($(this).is(":checked"))
        {
            $(".ckecked_label").eq(i).css("color", "red");
        }
    });
    //endregion 
});

//endregion  

//判斷radio是否有值，就選取region
function check_radio(r_detail,l_detail,a_detail,Referral_detail,e_detail){
//    console.log(r_detail,l_detail,a_detail,k_detail,Referral_detail,e_detail)
    //取radio所有值
    var r_radio =document.getElementsByName('r_type[]');
    var l_radio =document.getElementsByName('l_type[]');
    var a_radio =document.getElementsByName('a_type[]');
    // var k_radio =document.getElementsByName('k_type[]');
    // var w_radio =document.getElementsByName('w_type[]');
    var ref_radio =document.getElementsByName('ref_type[]');
    var e_radio =document.getElementsByName('e_type[]');
   
//    var main_radio =document.getElementsByName('main[]');
    //長度
    var r_len = r_radio.length;
    var l_len = l_radio.length;
    var a_len = a_radio.length;
    // var k_len = k_radio.length;
    var ref_len = ref_radio.length;
    var e_len = e_radio.length;

    for (i = 0; i < r_len; i++)
    {
        if (r_radio[i].value == r_detail)
        {
           r_radio[i].checked = true;
//            console.log(r_radio[i].value)
        }    
    }
    for (i = 0; i < l_len; i++)
    {
        if (l_radio[i].value == l_detail)
        {
           l_radio[i].checked = true;
    //        console.log(w_val)
        }    
    }
    for (i = 0; i < a_len; i++)
    {
        if (a_radio[i].value == a_detail)
        {
           a_radio[i].checked = true;
    //        console.log(w_val)
        }    
    }
    for (i = 0; i < ref_len; i++)
    {
        if (ref_radio[i].value == Referral_detail)
        {
           ref_radio[i].checked = true;
    //        console.log(w_val)
        }    
    }
    for (i = 0; i < e_len; i++)
    {
        if (e_radio[i].value == e_detail)
        {
           e_radio[i].checked = true;
        }    
    }
    // for (i = 0; i < k_len; i++)
    // {
    //     if (k_radio[i].value == k_detail)
    //     {
    //        k_radio[i].checked = true;
    //     }    
    // }
 
}
//endregion

//endregion


//更新電話詢戒表基本資料region
$("#phone_update").on('click',function(){
//    console.log("OK");
var phone_id = getUrlVars()["phone_id"];
//var county = $("#twzipcode").twzipcode('get','county');
//county[0] = Address
    
////分割年月(未啟用)region
//var Arr=[];
//var date = $("#call_datetime").val();
//Arr = date.split("-"); // 根据“-”分割
//
//y = Arr[0];
//m = Arr[1];
////endregion

//判斷是否勾選傳入陣列或radio勾選 region
check_radio_value();
check_checkbox();
check_main_checkbox();
check_main_type_radio(); //判斷 毒品施用方式

//endregion
var stau = false;

    if (check_update_personal_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    // console.log(stau);

    if(!stau)
    {
        // alert(check_update_personal_data());
        swal({
            title:check_update_personal_data(),
            type:'error'
          })
    }
    else
    { 
        $.ajax({                                                                                    
            url: "database/update_personal_data.php",
            data:{
                Phone_id:phone_id,
                Way:$("#way").val(),
                Way_detail:$("#way_detail").val(),
                Name:$("#name").val(),
                Gender:$("#gender").val(),
                Object_type:$("#object_type").val(),
                // Addition:addition,
                m_type:m_type_val,
                main_radio:main_val,
                Age:$("#age").val(),
                a_val:a_val,
                Address:$("#address").val(),
                l_val:l_val,
                Info_Name:$("#info_name").val(),
                Relationship_detail:$("#relationship").val(),
                r_val:r_val,
                R_phone:phone_val,
                Referral:$("#referral").val(),
                ref_val:ref_val,
                Referral_phone:refphone_val,
                Referral_name:$("#referral_name").val(),
                // Know_from:$("#k_place").val(),
                // k_val:k_val,
                e_val:e_val,
                Assign:$("#user").val(),
                Phone_note:$("#note").val(),
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
                swal({
                    title:'更新失敗！請聯絡負責單位',
                    type:'error',
                })
                console.log(e)
            }
        });
    }

    // console.log(phone_id,$("#name").val(),$("#gender").val(),$("#object_type").val(),addition,main_val,$("#age").val(),a_val,$("#address").val(),l_val,$("#info_name").val(),$("#relationship").val());
    // console.log(r_val,phone_val,$("#referral").val(),ref_val,refphone_val,$("#referral_name").val(),$("#k_place").val(),k_val,e_val,$("#user").val(),$("#note").val())
});

//電話詢戒表(update)的必填欄位 region
function check_update_personal_data()
{
    var call_datetime = $("#call_datetime").val();
    var name = $("#name").val();
    var age = $("#age").val();
    var address = $("#address").val();
    // var addition_checkbox =  $("input[type=checkbox][name='addition[]']:checked").length;
    var main_checkbox =  $("input[type=checkbox][name='main[]']:checked").length;

    var errorstr = "";

    if (call_datetime == null) {
        errorstr += "未填寫來電日期!\r\n";
    }
    if (name == null) {
        errorstr += "未填寫個案姓名!\r\n";
    }
    // if (age == null) {
    //     errorstr += "未填寫年齡!\r\n";
    // }
    // if (address == null) {
    //     errorstr += "未填寫居住地!\r\n";
    // }

    // if (addition_checkbox <=0) {
    //     errorstr += "未勾選曾經使用物質!\r\n";
    // }

    if (main_checkbox <=0) {
        errorstr += "未勾選目前使用物質!\r\n";
    }

    if (errorstr == "") {
        if (call_datetime.replace(/\s*/g, "") == '') {
            errorstr += "未填寫來電日期!\r\n";
        }
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫個案姓名!\r\n";
        }
        // if (age.replace(/\s*/g, "") == '') {
        //     errorstr += "未填寫年齡!\r\n";
        // }
        // if (address.replace(/\s*/g, "") == '') {
        //     errorstr += "未填寫居住地!\r\n";
        // }
    }

    return errorstr;
}
//endregion

//判斷電話radio值region
function check_radio_value(){
    //取radio所有值
    var phone_radio =document.getElementsByName('phone[]');
    var refphone_radio =document.getElementsByName('refphone[]');
    var r_radio =document.getElementsByName('r_type[]');
    var l_radio =document.getElementsByName('l_type[]');
    var a_radio =document.getElementsByName('a_type[]');
    var k_radio =document.getElementsByName('k_type[]');
    var ref_radio =document.getElementsByName('ref_type[]');
    var e_radio =document.getElementsByName('e_type[]');
    var main_radio =document.getElementsByName('main[]');
    // var addition_radio =document.getElementsByName('addition[]');
    //長度
    var phone_len = phone_radio.length;
    var refphone_len = refphone_radio.length;
    var r_len = r_radio.length;
    var l_len = l_radio.length;
    var a_len = a_radio.length;
    var k_len = k_radio.length;
    var ref_len = ref_radio.length;
    var e_len = e_radio.length;
    var main_len = main_radio.length;
    // var addition_len = addition_radio.length;
    
    phone_val= new Array();
    
    for (i = 0; i < phone_len; i++)
    {
        if (phone_radio[i].value != "")
        {
           phone_val.push(phone_radio[i].value);
        }    
    }
    refphone_val= new Array();
    
    for (i = 0; i < refphone_len; i++)
    {
        if (refphone_radio[i].value != "")
        {
           refphone_val.push(refphone_radio[i].value);
        }    
    }
    for (i = 0; i < main_len; i++)
    {
        if (main_radio[i].checked == true)
        {
           main_val = main_radio[i].value;
           if(main_val == "其他"){
               main_val = $("#other_main").val();
           }
            break;
        }else{
            main_val = "";
        }    
    }

    // for (i = 0; i < addition_len; i++)
    // {
    //     if (addition_radio[i].checked == true)
    //     {
    //         addition_val = addition_radio[i].value;
    //        if(addition_val == "其他"){
    //         addition_val = $("#other").val();
    //        }
    //         break;
    //     }else{
    //         addition_val = "";
    //     }    
    // }

    for (i = 0; i < r_len; i++)
    {
        if (r_radio[i].checked == true)
        {
           r_val = r_radio[i].value;
            break;
    //        console.log(w_val)
        }else{
            r_val= "";
        }    
    }
    for (i = 0; i < l_len; i++)
    {
        if (l_radio[i].checked == true)
        {
           l_val = l_radio[i].value;
            break;
    //        console.log(w_val)
        }else{
            l_val= "";
        }    
    }
    for (i = 0; i < a_len; i++)
    {
        if (a_radio[i].checked == true)
        {
           a_val = a_radio[i].value;
            break;
    //        console.log(w_val)
        }else{
            a_val= "";
        }    
    }
    for (i = 0; i < ref_len; i++)
    {
        if (ref_radio[i].checked == true)
        {
           ref_val = ref_radio[i].value;
            break;
    //        console.log(w_val)
        }else{
            ref_val= "";
        } 
    }
    for (i = 0; i < k_len; i++)
    {
        if (k_radio[i].checked == true)
        {
           k_val = k_radio[i].value;
            break;
    //        console.log(w_val)
        }else{
            k_val = "";
        }    
    }

    for (i = 0; i < e_len; i++)
    {
        if (e_radio[i].checked == true)
        {
           e_val = e_radio[i].value;
            break;
    //        console.log(w_val)
        }else{
            e_val = "";
        }    
    }

    // console.log(phone_val);
    // console.log(refphone_val);
    // console.log(main_val);
    // console.log(addition_val);
    // console.log(r_val);
    // console.log(l_val);
    // console.log(a_val);
    // console.log(ref_val);
    // console.log(k_val);
    // console.log(e_val);

}
//endregion



//endregion


//點擊電話詢戒表旁邊的"+"功能 新增第n次來電 region

function addNewTag() {
    var cssString = "";
    var herfindex = 1;
    cssString += '<li class="nav-item new_phone_rec" role="presentation">' +
        '<a class="nav-link" id="profile-tab' + herfindex + '" data-toggle="pill" href="#tabx0' + herfindex + '" role="tab"  aria-selected="true">' +
        '<b>' + '新增電訪/面訪紀錄' + '</b>' +
        '</a>' +
        '</li>'
    if ($('.new_phone_rec').length < 1) {
        $("#open_rec").before(cssString);
    }
    $("#add_new_content").show();
    $('#add_new_choise').show();
    $('#all_data').hide();
    $('#create_new_content').hide();
    $('#add_new_reservation').hide();
    $('.new_phone_rec').addClass("active").siblings('.nav-item').removeClass("active");
}
//endregion


//根據radio值新增電訪/面訪紀錄的表單
function select_rec(option)
{
    // console.log(option);
    switch(option)
    {
        case 'phone':
            $("#add_new_content").empty();
            phone_rec_new();
            break;
        case 'reservation':
            $("#add_new_content").empty();
            reservation_rec_new();
            break;
        default:
            $("#add_new_content").empty();
            phone_rec_new();
    }
}

//切換頁籤判斷 li href->table id region
    //切換至新增來電紀錄標籤
$("body").on('click', ".new_phone_rec", function () {
    console.log("a");
    $("#add_new_content").show();
    $('#add_new_choise').show();
    $('#all_data').hide();
    $('#create_new_content').hide();
    $('#add_new_reservation').hide();
    $('.new_phone_rec').addClass("active").siblings('.nav-item').removeClass("active");
});
    //切換至總表標籤(電話詢戒表)
$('#phone_rec_all').on('click', function () {
    // console.log("b");
    $('#all_data').show();
    $('#create_new_content').hide();
    $('#add_new_reservation').hide();
    $('#add_new_content').hide();
    $('#add_new_choise').hide();
});
     //切換至第n次來電紀錄標籤
$("body").on('click', ".phone_rec_tag", function () {
    console.log($('.' + ($(this).find('a').attr('href').replace('#', ''))));
    $('#all_data').hide();
    $("#add_new_content").hide();
    $('#add_new_choise').hide();
    $('#create_new_content').show();
    $('#add_new_reservation').hide();
    $('#create_new_content').children("table").hide();
    $('.' + ($(this).find('a').attr('href').replace('#', ''))).show();
    $(this).addClass('active').siblings('.nav-item').removeClass('active');
});
    //切換至第n次面訪紀錄標籤
$("body").on('click', ".reservation_rec_tag", function () {
    console.log($('.' + ($(this).find('a').attr('href').replace('#', ''))));
    $('#all_data').hide();
    $("#add_new_content").hide();
    $('#add_new_choise').hide();
    $('#create_new_content').hide();
    $('#add_new_reservation').show();
    $('#add_new_reservation').children("table").hide();
    $('.' + ($(this).find('a').attr('href').replace('#', ''))).show();
    $(this).addClass('active').siblings('.nav-item').removeClass('active');
});
//endregion


//新增詢戒電話紀錄表格(新建後)region
function phone_rec_new()
{
    // $("#open_phone_note").on('click',function(){
        var cssString = "";
        var cssString2 = "";
        cssString +=
            // '<br>'+
            '<table style="width:auto;" class="table table-bordered" data-toggle="table">'+
                '<tr>' +
                    '<td colspan="2">個案詢戒電話紀錄</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>來電日期</td>' +
                    '<td style=""><input id="ncall_datetime" type="date"></td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>聯絡人姓名</td>' +
                    '<td style=""><input id="ninfo_name" type="text"></td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>聯絡人與案主關係</td>' +
                    '<td style=""><input id="nrelationship" type="text"></td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>連絡人電話</td>' +
                    '<td style=""><input id="nphone" type="text"></td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>接案工作人員</td>' +
                    '<td style="">'+                                           
                            '<select class="user2" id="nuser" >'+
                                '<option value="" disabled selected hidden>請選擇工作人員</option>'+
                            '</select>'+
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>通話內容</td>' +
                    '<td style="">'+
                        '<textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="note" id="nnote" placeholder="請輸入通話內容" ></textarea>'+
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><label>建立日期</label></td>' +
                    '<td style=""><span id="nadate"></span></td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><label>建立者</label></td>' +
                    '<td style=""><span id="napplicant"></span></td>' +
        
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><label>修改日期</label></td>' +
                    '<td style=""><span id="nudate"></span></td>' +
                '</tr>'+
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><label>修改者</label></td>' +
                    '<td><span id="nup_applicant"></span></td>' +
                '</tr>'+
                '<tr>' +
                    '<td colspan="2" rowspan="2"><div><button style="font-size:20px" id="nadd_new" class="btn btn-default" onClick="add_new()">新增</button> <button id="ncancel" style="font-size:20px" class="btn btn-default" onClick="cancel()">取消</button></div></td>' +
                '</tr>'+
            '</table>'
                    
        $("#add_new_content").html(cssString);  
            $.ajax({
                type:'POST',
                url:'database/find_check_user.php',
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    // console.log('test',data)
                    for (var index in data.Id) {
                        $("#nuser").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                    }
                },
            });
}

//預約面訪(所有)region
function reservation_rec_new(){
    // $("#reservation").on("click",function(){
        //按一下按鈕新增表格region   
        var cssString3 = "";
        cssString3 +=
            '<br>'+
            '<table style="width:auto;" class="table table-bordered">'+
                '<tr>' +
                    '<td colspan="2">個人預約面訪紀錄</td>' +
                '</tr>' +
                '<tr  style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">預約面訪時間</td>' +
                    '<td style="">'+
                        '<input id="start_date" type="date">'+
                        ' '+
                        '<select id="start_time_h">'+
                            '<option>00</option>'+
                            '<option>01</option>'+
                            '<option>02</option>'+
                            '<option>03</option>'+
                            '<option>04</option>'+
                            '<option>05</option>'+
                            '<option>06</option>'+
                            '<option>07</option>'+
                            '<option>08</option>'+
                            '<option>09</option>'+
                            '<option>10</option>'+
                            '<option>11</option>'+
                            '<option>12</option>'+
                            '<option>13</option>'+
                            '<option>14</option>'+
                            '<option>15</option>'+
                            '<option>16</option>'+
                            '<option>17</option>'+
                            '<option>18</option>'+
                            '<option>19</option>'+
                            '<option>20</option>'+
                            '<option>21</option>'+
                            '<option>22</option>'+
                            '<option>23</option>'+
                        '</select>'+
                        '<label>：</label>'+
                        '<select id="start_time_m">'+
                            '<option>00</option>'+
                            '<option>30</option>'+                                         
                        '</select>'+
                        ' '+
                        '<label>至</label>'+
                        ' '+
                        '<select id="end_time_h">'+
                            '<option>00</option>'+
                            '<option>01</option>'+
                            '<option>02</option>'+
                            '<option>03</option>'+
                            '<option>04</option>'+
                            '<option>05</option>'+
                            '<option>06</option>'+
                            '<option>07</option>'+
                            '<option>08</option>'+
                            '<option>09</option>'+
                            '<option>10</option>'+
                            '<option>11</option>'+
                            '<option>12</option>'+
                            '<option>13</option>'+
                            '<option>14</option>'+
                            '<option>15</option>'+
                            '<option>16</option>'+
                            '<option>17</option>'+
                            '<option>18</option>'+
                            '<option>19</option>'+
                            '<option>20</option>'+
                            '<option>21</option>'+
                            '<option>22</option>'+
                            '<option>23</option>'+
                        '</select>'+
                        '<label>：</label>'+
                        '<select id="end_time_m">'+
                            '<option>00</option>'+
                            '<option>30</option>'+                                         
                        '</select>'+
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">指派工作人員</td>' +
                    '<td style="">'+
                        '主：'+                                             
                            '<select class="user5" id="one_user" >'+
                                '<option value="" disabled selected hidden>請選擇工作人員</option>'+
                            '</select>'+
                        '<br>'+
                        '<br>'+
                        '副：'+
                            '<select class="user5" id="two_user">'+
                                '<option value="" disabled selected hidden>請選擇工作人員</option>'+
                            '</select>'+
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">方式</td>' +
                    '<td style="">'+
                        '<input id="location_detail" type="text">'+
                        '<br>'+
                        '<input style="zoom:1.5" name="location[]" type="radio" value="社區">社區'+
                        '<input style="zoom:1.5" name="location[]" type="radio" value="家訪">家訪'+
                        '<input style="zoom:1.5" name="location[]" type="radio" value="監所">監所'+
                        '<input style="zoom:1.5" name="location[]" type="radio" value="其他">其他：<input id="other_location" type="text" value="">'+
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">備註</td>' +
                    '<td >'+
                        '<textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="remark" id="remark" placeholder="請輸入備註內容" ></textarea>'+
                    '</td>' +
                '</tr>' +
                '<tr>' +
                    '<td colspan="2"><div><button id="face_add" style="font-size:20px" class="btn btn-default" >新增</button> <button id="ncancel" style="font-size:20px" class="btn btn-default" onClick="cancel()">取消</button></div></td>' +
                '</tr>' +
            '</table>'
                    
        $("#add_new_content").html(cssString3); 
            $.ajax({
                type:'POST',
                url:'database/find_check_user.php',
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    for (var index in data.Id) {
                        $("#one_user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                        $("#two_user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                    }
                },
            });    
        //endregion
            
        //預設值region
        $("#end_time_h").val("13");
        $("#start_time_h").val("12");
        //endregion
            
        //預約面訪懸浮視窗預設值region
        $("#start_time_h").on('change',function(){
        //    console.log(parseInt($("#start_time_h").val())+1);
            var start_time = parseInt($("#start_time_h").val())+1;
            if(start_time == 1 || start_time == 2 || start_time == 3 || start_time == 4 || start_time == 5 || start_time == 6 || start_time == 7 || start_time == 8 || start_time == 9 ){
                start_time = parseInt($("#start_time_h").val())+1;
               start_time = "0"+start_time;
            }
            if(start_time == 24){
                start_time = "00"
            }
            $("#end_time_h").val(start_time);
        });
        
        $("#start_time_m").on('change',function(){
            $("#end_time_m").val($("#start_time_m").val());
        });
        
        $("#phone_cancel").on('click',function(){
            $("#end_date").val("");
            $("#start_date").val("")
            $("#end_time_h").val("13");
            $("#start_time_h").val("12");
        });
        //endregion
        //    console.log($("#relationship").val())
        //按下face_add新增預約按鈕後 region
        $("#face_add").on('click',function(){
            var stau = false;

            if (check_open_reservation_note_value_str() != "") 
            {
                    
                stau = false;
            }
            else {
                stau = true;
            }
            console.log(stau);

            if(!stau)
            {
                // alert(check_open_reservation_note_value_str());
                swal({
                    title:check_open_reservation_note_value_str(),
                    type:'error'
                  })
            }
            else
            { 
                //抓取網址傳入行事曆
                get_url = location.href;
                //check radio
                check_creat_radio_value();
                check_radio_value();
                check_main_checkbox();
                check_main_type_radio(); //判斷 毒品施用方式

                var title = $("#name").val()+'('+main_val+')面訪';
                var start_time = $("#start_time_h").val()+":"+$("#start_time_m").val();
                var end_time = $("#end_time_h").val()+":"+$("#end_time_m").val();
                //    console.log(title)
                //    var name =document.getElementsByName('join[]');
                //分割年月region
                var Arr=[];
                var date = $("#start_date").val();
                Arr = date.split("-"); // 根据“-”分割

                y = Arr[0];
                m = Arr[1];
                //endregion

                //將年月日時間組合region
                var start_date = $("#start_date").val()+" "+$("#start_time_h").val()+":"+$("#start_time_m").val();
                var end_date = $("#start_date").val()+" "+$("#end_time_h").val()+":"+$("#end_time_m").val();
                //endregion

                //傳送至行事曆和通知region
                    
                    
                    $.ajax({
                            url: "database/add_new_note.php",
                            data:{
                                Title:title,
                                Url:get_url,
                                Start_date:start_date,
                                End_date:end_date,
                                One_user:$("#one_user").val(),
                                Two_user:$("#two_user").val(),
                                Other_user:join_val,

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
                        error:function(e){
                            swal({
                                title:'新增失敗！',
                                type:'error',
                                })
                        }
                        });
                //    //endregion

                //判斷是否勾選傳入陣列region
                // var checkbox =document.getElementsByName('addition[]');
                // var len = checkbox.length;
                // var addition = new Array();
                // for (i = 0; i < len; i++)
                // {
                //     if (checkbox[i].checked == true)
                //     {
                //         addition.push(checkbox[i].value);
                //     }    
                // }
                // if($("#other").val() != ""){
                //     addition.push($("#other").val());
                // }
                //endregion

                //新增至面訪總表region
                    var phone_id = getUrlVars()["phone_id"];
                    $.ajax({
                            url: "database/add_new_face.php",
                            data:{
                                Phone_id:phone_id,
                                Way: '面訪',
                                Way_detail:location_val,
                                Name:$("#name").val(),
                                Gender:$("#gender").val(),
                                Object_type:$("#object_type").val(),
                                // Addiction:addition,
                                m_type:m_type_val,
                                M_addiction:main_val,

                                Age:$("#age").val(),
                                a_val:a_val,
                                Address:$("#address").val(),
                                l_val:l_val,
                                Info_Name:$("#info_name").val(),
                                Relationship_detail:$("#relationship").val(),
                                r_val:r_val,
                                R_phone:phone_val,

                                Referral:$("#referral").val(),
                                ref_val:ref_val,
                                // Know_from:$("#k_place").val(),
                                // Know_from_detail:k_val,

                                Eligible:e_val,
                                Assign:$("#user").val(),

                                Location:$("#location_detail").val(),
                                Location_detail:location_val,

                                Add_date:$("#start_date").val(),
                                End_date:$("#start_date").val(),
                                Start_time:start_time,
                                End_time:end_time,
                                One_user:$("#one_user").val(),
                                Two_user:$("#two_user").val(),
                                Remark:$("#remark").val(),
                                Date_y:y,
                                Date_m:m,
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
                        error:function(e){
                            swal({
                                title:'新增失敗！',
                                type:'error',
                            })
                        }
                        });
                //endregion

            }
        });
        //endregion
    // });
    //endregion
}
//endregion


//呼叫user方法region
function append_user(){             
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $("#nuser").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
//endregion

//檢查個案詢借電話紀錄的必填欄位region
function check_open_phone_note_value_str()
{
    var ncall_datetime = $("#ncall_datetime").val();
    var ninfo_name = $("#ninfo_name").val();
    var nrelationship = $("#nrelationship").val();
    var nphone = $("#nphone").val();
    var nuser = $("#nuser").val();
    var nnote = $("#nnote").val();
    var errorstr = "";

    if (ncall_datetime == null) {
        errorstr += "未填寫來電日期!\r\n";
    }
    if (ninfo_name == null) {
        errorstr += "未填寫個案姓名!\r\n";
    }
    if (nrelationship == null) {
        errorstr += "未填寫聯絡人與案主關係!\r\n";
    }
    if (nphone == null) {
        errorstr += "未填寫連絡人電話!\r\n";
    }
    if (nuser == null) {
        errorstr += "未選擇接案工作人員!\r\n";
    }
    if (nnote == null) {
        errorstr += "未填寫通話內容!\r\n";
    }
    if (errorstr == "") {
        if (ncall_datetime.replace(/\s*/g, "") == '') {
            errorstr += "未填寫來電日期!\r\n";
        }
        if (ninfo_name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫個案姓名!\r\n";
        }
        if (nrelationship.replace(/\s*/g, "") == '') {
            errorstr += "未填寫聯絡人與案主關係!\r\n";
        }
        if (nphone.replace(/\s*/g, "") == '') {
            errorstr += "未填寫連絡人電話!\r\n";
        }
        if (nuser.replace(/\s*/g, "") == '') {
            errorstr += "未選擇接案工作人員!\r\n";
        }
        if (nnote.replace(/\s*/g, "") == '') {
            errorstr += "未填寫通話內容!\r\n";
        }
    }

    return errorstr;
}
//endregion

//檢查個案面訪紀錄的必填欄位region
function check_open_reservation_note_value_str()
{
    var start_date = $("#start_date").val();
    var one_user = $("#one_user").val();
    // var two_user = $("#two_user").val();
    var location_detail = $("#location_detail").val();
    var location_other = $('#other_location').val();
    var location_radio =  $("input[type=radio][name='location[]']:checked").length;
    var errorstr = "";

    if (start_date == null) {
        errorstr += "未填寫預約面談日期!\r\n";
    }
    if (one_user == null) {
        errorstr += "未選擇主要接案工作人員!\r\n";
    }
    // if (two_user == null) {
    //     errorstr += "未選擇副工作人員!\r\n";
    // }
    if (location_detail == null && location_other == null) {
        errorstr += "未填寫面訪方式!\r\n";
    }
    if (location_radio <=0) {
        errorstr += "未選擇面訪方式分類!\r\n";
    }
    if (errorstr == "") {
        if (start_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫預約面談日期!\r\n";
        }
        if (one_user.replace(/\s*/g, "") == '') {
            errorstr += "未選擇主要接案工作人員!\r\n";
        }
        // if (two_user.replace(/\s*/g, "") == '') {
        //     errorstr += "未選擇副工作人員!\r\n";
        // }
        if (location_detail.replace(/\s*/g, "") == '' && location_other.replace(/\s*/g, "") == '') {
            errorstr += "未填寫面訪方式!\r\n";
        }
    }

    return errorstr;
}
//endregion


//新增詢戒電話紀錄region
function add_new(){
    
    var stau = false;

    if (check_open_phone_note_value_str() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_open_phone_note_value_str());
        swal({
            title:check_open_phone_note_value_str(),
            type:'error'
          })
    }
    else
    {  
        check_radio_value();
        check_checkbox();
        check_main_type_radio(); //判斷 毒品施用方式

            $.ajax({
                    url: "database/add_phone_note.php",
                    data:{
                        Phone_id:$("#t_sn").text(),
                        nCall_datetime:$("#ncall_datetime").val(),
                        Way: '電訪',
                        Name:$("#name").val(),
                        Gender:$("#gender").val(),
                        nObject_type:$("#object_type").val(),
                        // nAddition:addition,
                        m_type:m_type_val,
                        main_radio:main_val,
                        address:$("#address").val(),
                        nInfo_Name:$("#ninfo_name").val(),
                        nRelationship_detail:$("#nrelationship").val(),
                        nR_phone:$("#nphone").val(),
                        nReferral: $("#referral").val(),
                        nReferral_phone:refphone_val,
                        nReferral_name:$("#referral_name").val(),
                        Assign:$("#nuser").val(),
                        nPhone_note:$("#nnote").val(),
                        nCreate_name:$("#user").val(),
                        Age:$("#age").val(),
                        a_val:a_val,
                        l_val:l_val,
                        ref_val:ref_val,
                        // Know_from:$("#k_place").val(),
                        // k_val:k_val,
                        e_val:e_val,
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
                error:function(e){
                    swal({
                        title:'新增失敗！',
                        type:'error',
                    })
                }
                });
    }

}
//endregion


//印出預約紀錄表格region
var phone_id = getUrlVars()["phone_id"];
//console.log(id);
    $.ajax({
        url: "database/find_face.php",
        data:{
            Phone_id:phone_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {      
            var cssString5 = "";
            var hometabcssString5 = "";
            for (var index in data.Name) {
//                console.log(data.other_people[index])
                cssString5 +=
                    '<br>'+
                    '<table style="width:auto;" class="table table-bordered resrectabx0'+data.Id[index]+'">'+
                        '<tr>' +
                            '<td colspan="2">個人預約面訪紀錄</td>' +
                        '</tr>' +
                        '<tr  style="text-align:left">' +
                            '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">預約面訪時間</td>' +
                            '<td style="">'+
                                '<input class="question'+data.Id[index]+'" id="start_date'+data.Id[index]+'" type="date" value='+data.Start_date[index]+' >'+
                                ' '+
                                '<select class="question'+data.Id[index]+'" id="start_time_h'+data.Id[index]+'" >'+
                                    '<option>00</option>'+
                                    '<option>01</option>'+
                                    '<option>02</option>'+
                                    '<option>03</option>'+
                                    '<option>04</option>'+
                                    '<option>05</option>'+
                                    '<option>06</option>'+
                                    '<option>07</option>'+
                                    '<option>08</option>'+
                                    '<option>09</option>'+
                                    '<option>10</option>'+
                                    '<option>11</option>'+
                                    '<option>12</option>'+
                                    '<option>13</option>'+
                                    '<option>14</option>'+
                                    '<option>15</option>'+
                                    '<option>16</option>'+
                                    '<option>17</option>'+
                                    '<option>18</option>'+
                                    '<option>19</option>'+
                                    '<option>20</option>'+
                                    '<option>21</option>'+
                                    '<option>22</option>'+
                                    '<option>23</option>'+
                                '</select>'+
                                '<label>：</label>'+
                                '<select class="question'+data.Id[index]+'" id="start_time_m'+data.Id[index]+'" >'+
                                    '<option>00</option>'+
                                    '<option>30</option>'+                                         
                                '</select>'+
                                ' '+
                                '<label>至</label>'+
                                ' '+
                                '<select class="question'+data.Id[index]+'" id="end_time_h'+data.Id[index]+'" >'+
                                    '<option>00</option>'+
                                    '<option>01</option>'+
                                    '<option>02</option>'+
                                    '<option>03</option>'+
                                    '<option>04</option>'+
                                    '<option>05</option>'+
                                    '<option>06</option>'+
                                    '<option>07</option>'+
                                    '<option>08</option>'+
                                    '<option>09</option>'+
                                    '<option>10</option>'+
                                    '<option>11</option>'+
                                    '<option>12</option>'+
                                    '<option>13</option>'+
                                    '<option>14</option>'+
                                    '<option>15</option>'+
                                    '<option>16</option>'+
                                    '<option>17</option>'+
                                    '<option>18</option>'+
                                    '<option>19</option>'+
                                    '<option>20</option>'+
                                    '<option>21</option>'+
                                    '<option>22</option>'+
                                    '<option>23</option>'+
                                '</select>'+
                                '<label>：</label>'+
                                '<select class="question'+data.Id[index]+'" id="end_time_m'+data.Id[index]+'" >'+
                                    '<option>00</option>'+
                                    '<option>30</option>'+                                         
                                '</select>'+
                            '</td>' +
                        '</tr>' +
                        '<tr style="text-align:left">' +
                            '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">指派工作人員</td>' +
                            '<td style="">'+
                                '主：'+                                             
                                    '<select class="user2 question'+data.Id[index]+'" id="department1'+data.Id[index]+'one_user" >'+
                                        '<option value=""  selected hidden>請選擇工作人員</option>'+
                                    '</select>'+
                                '<br>'+
                                '<br>'+
                                '副：'+
                                    '<select class="user2 question'+data.Id[index]+'" id="department2'+data.Id[index]+'two_user" >'+
                                        '<option value=""  selected hidden>請選擇工作人員</option>'+
                                    '</select>'+
                            '</td>' +
                        '</tr>' +
                        '<tr style="text-align:left">' +
                            '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">方式</td>' +
                            '<td style="">'+
                                '<input class="question'+data.Id[index]+'" id="location_detail'+data.Id[index]+'" type="text" value='+data.Location[index]+' >'+
                                '<br>'+
                                '<input class="question'+data.Id[index]+'" style="zoom:1.5" name="location'+data.Id[index]+'[]" type="radio" value="社區" >社區'+
                                '<input class="question'+data.Id[index]+'" style="zoom:1.5" name="location'+data.Id[index]+'[]" type="radio" value="家訪" >家訪'+
                                '<input class="question'+data.Id[index]+'" style="zoom:1.5" name="location'+data.Id[index]+'[]" type="radio" value="監所" >監所'+
                                '<input class="question'+data.Id[index]+'" style="zoom:1.5" name="location'+data.Id[index]+'[]" type="radio" value="其他" >其他：<input class="question'+data.Id[index]+'" id="other_location'+data.Id[index]+'" type="text" value="" >'+
                            '</td>' +
                        '</tr>' +
                        '<tr style="text-align:left">' +
                            '<td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">備註</td>' +
                            '<td >'+
                                '<textarea class="question'+data.Id[index]+'" style="height:150px;width:700px;resize: none;font-size: 20px;" name="remark" id="remark'+data.Id[index]+'" placeholder="請輸入備註內容" >'+data.Remark[index]+'</textarea>'+
                            '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td colspan="2">'+
                            '<div id="edit_div'+data.Id[index]+'"><button style="font-size:20px" class="btn btn-default" onClick="edit('+data.Id[index]+')">編輯</button></div>'+
                            '<div id="after_edit'+data.Id[index]+'" hidden><button id="save" style="font-size:20px" class="btn btn-default" onClick="update_add_face('+data.Id[index]+')" hidden>修改</button>'+
                            ' <button id="cancel_face" style="font-size:20px" class="btn btn-default" onClick="cancel_face('+data.Id[index]+')" hidden>取消</button></div>'+
                            '</td>'+
                        '</tr>' +
                    '</table>' 

                    hometabcssString5 += '<li class="nav-item reservation_rec_tag" role="presentation">' +
                            '<a class="nav-link" id="profile-tab' + data.Id[index] + '" data-toggle="pill" href="#resrectabx0' + data.Id[index] + '" role="tab"  aria-selected="true">' +
                            '<b>' + '面訪紀錄'+ (parseInt(index)+1)  + '</b>' +
                            '</a>' +
                            '</li>'
//                console.log(data.id[index])
            }
            $("#add_new_reservation").html(cssString5);

            $("#phone_rec_all").after(hometabcssString5);

            
            //測試封鎖選項
            for (var index in data.Name) {
                $('.question'+data.Id[index]+'').attr('disabled', true);
            }
            
            //用迴圈自動填入相應的值region
            for (var index in data.Name) {
                // $('#department1'+data.Id[index]+'').val(data.Department1[index]);
                // $('#department2'+data.Id[index]+'').val(data.Department2[index]); 
                append_user2($('#department1'+data.Id[index]+'one_user'),$('#department2'+data.Id[index]+'two_user')); 
                $('#department1'+data.Id[index]+'one_user').val(data.One_user_name[index]);
                $('#department2'+data.Id[index]+'two_user').val(data.Two_user_name[index]);
                append_user3($('#'+data.Id[index]+'one_user'));
                append_user3($('#'+data.Id[index]+'two_user'));
            }
            //endregion

                function append_user2(one_user,two_user){             
                    $.ajax({
                        type:'POST',
                        url:'database/find_check_user.php',
                        dataType: "JSON",
                        async: false,//啟用同步請求
                        success: function (data) {
                            for (var index in data.Id) {
                                $(one_user).append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');    
                                $(two_user).append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');                               
                            }
                        },
                    });
                }

                function append_user3(user){             
                    $.ajax({
                        type:'POST',
                        url:'database/find_check_user.php',
                        dataType: "JSON",
                        async: false,//啟用同步請求
                        success: function (data) {
                            for (var index in data.Id) {
                                user.append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');                                   
                            }
                        },
                    });
                }

            //填入預約下拉開始結束時間region
            for (var index in data.Name) {
                var s_ArrArr=[];
                var e_ArrArr=[];
                var s_date = data.Start_time[index];
                var e_date = data.End_time[index];
                s_Arr = s_date.split(":"); // 根据“-”分割
                s_h = s_Arr[0];
                s_m = s_Arr[1];
//                console.log(data.id[index]);
                e_Arr = e_date.split(":"); // 根据“-”分割
                e_h = e_Arr[0];
                e_m = e_Arr[1];
                $('#start_time_h'+data.Id[index]+'').val(s_h);
                $('#start_time_m'+data.Id[index]+'').val(s_m);
                $('#end_time_h'+data.Id[index]+'').val(e_h);
                $('#end_time_m'+data.Id[index]+'').val(e_m);
            }
            //endregion
            
            check_radio_value_same(data.Name,data.Location_detail,data.Id);
            
            
        },
        error:function(e){
            console.log("error"+e);
        }
    });
//endregion

//查詢所有個人詢戒電話紀錄(新建後)並印出表格region
    var phone_id = getUrlVars()["phone_id"];
//console.log(id);
    $.ajax({
        url: "database/find_personal_history.php",
        data:{
            Phone_id:phone_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
//            console.log(data.call_datetime[0]);
            var cssString2 = "";
            var hometabcssString = "";
            for (var index in data.Call_datetime) {
                // if(index != 0){
                        if(data.Update_date[index] == null){
                            data.Update_date[index] = "";
                        }
        //                console.log("OK");
                        cssString2 +=
                            // '<br>'+
                            '<table style="width:auto;" class="table table-bordered phrectabx0'+data.Id[index]+'">'+
                                '<tr>' +
                                    '<td colspan="2">個人電話詢戒紀錄</td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>來電日期</td>' +
                                    '<td style=""><input id="ncall_datetime'+data.Id[index]+'" type="date" value='+data.Call_datetime[index]+' class="phone_question2'+data.Id[index]+'" required></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>聯絡人</td>' +
                                    '<td style=""><input id="ninfo_name'+data.Id[index]+'" type="text" value='+data.Info_Name[index]+' class="phone_question2'+data.Id[index]+'" required></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>聯絡人與案主關係</td>' +
                                    '<td style=""><input id="nrelationship'+data.Id[index]+'" value='+data.Relationship_detail[index]+' type="text" class="phone_question2'+data.Id[index]+'" required></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>連絡人電話</td>' +
                                    '<td style=""><input id="nphone'+data.Id[index]+'" value='+data.R_phone[index]+' type="text" class="phone_question2'+data.Id[index]+'" required></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>接案工作人員</td>' +
                                    '<td style="">'+
                                        '<select class="user3 phone_question2'+data.Id[index]+'" id="ndepartment'+data.Id[index]+'nuser" required>'+
                                            '<option value="" disabled selected hidden>請選擇工作人員</option>'+
                                        '</select>'+
                                    '</td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>通話內容</td>' +
                                    '<td style="">'+
                                        '<textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="note" id="nnote'+data.Id[index]+'" placeholder="請輸入通話內容" class="phone_question2'+data.Id[index]+'" required>'+data.Phone_note[index]+'</textarea>'+
                                    '</td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><label>建立日期</label></td>' +
                                    '<td style=""><span id="nadate">'+data.Create_date[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><label>建立者</label></td>' +
                                    '<td style=""><span id="napplicant">'+data.Create_name[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><label>修改日期</label></td>' +
                                    '<td style=""><span id="nudate">'+data.Update_date[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><label>修改者</label></td>' +
                                    '<td><span id="nup_applicant">'+data.Update_name[index]+'</span></td>' +
                                '</tr>'+
                                '<tr">' +
                                    '<td colspan="2"><div id="edit_div2'+data.Id[index]+'"><button style="font-size:20px" class="btn btn-default" onClick="phone_edit2('+data.Id[index]+')">編輯</button></div><div id="save_div2'+data.Id[index]+'" hidden><button style="font-size:20px" class="btn btn-default" onClick="update_phone_note('+data.Id[index]+')">修改</button> <button style="font-size:20px" class="btn btn-default" onClick="phone_cancel2('+data.Id[index]+')">取消</button></div></td>' +
                                '</tr>'+
                            '</table>'

                            hometabcssString += '<li class="nav-item phone_rec_tag" role="presentation">' +
                            '<a class="nav-link" id="profile-tab' + data.Id[index] + '" data-toggle="pill" href="#phrectabx0' + data.Id[index] + '" role="tab"  aria-selected="true">' +
                            '<b>' + '來電紀錄'+ (parseInt(index)+1)  + '</b>' +
                            '</a>' +
                            '</li>'
                    // }
                    $("#create_new_content").html(cssString2);
                }
                $("#phone_rec_all").after(hometabcssString);

            //測試封鎖選項
            for (var index in data.Call_datetime) {
                $('.phone_question2'+data.Id[index]+'').attr('disabled', true);
            }
            
            
            //用迴圈自動填入相應的值region
            for (var index in data.Call_datetime) {
                append_user3($('#ndepartment'+data.Id[index]+'nuser')); 
                $('#ndepartment'+data.Id[index]+'nuser').val(data.Assign[index]);
            }
            //endregion
            
             function append_user3(user){             
                        $.ajax({
                            type:'POST',
                            url:'database/find_check_user.php',
                            // data:{
                            //     Department:department,
                            // },
                            dataType: "JSON",
                            async: false,//啟用同步請求
                            success: function (data) {
                                for (var index in data.Id) {
                                    user.append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');                                   
                                }
                            },
                        });
                }
            //endregion
           
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
        }
    });
//endregion

//判斷additon是否有值，就勾選region
function check_addition(Arr){
    var checkbox =document.getElementsByName('addition[]');
    var len = checkbox.length;
    var adi_len = Arr.length;
//    console.log(adi_len,len);
    for (i = 0; i < adi_len; i++)
    {
        for(j = 0;j < len; j++){
            if (Arr[i] == checkbox[j].value)
            {
                checkbox[j].checked = true;
            }else{
                if(Arr[i] =="鴉片"|| Arr[i] =="嗎啡"|| Arr[i] =="海洛因"|| Arr[i] =="古柯鹼"|| Arr[i] =="安非他命"|| Arr[i] =="大麻"|| Arr[i] =="搖頭丸"|| Arr[i] =="FM2藥丸"|| Arr[i] =="K他命"|| Arr[i] =="酒精"){
//                    console.log(checkbox[j].value);
                    $("#other").val("");
                }else{
                    checkbox[14].checked = true;
                    $("#other").val(Arr[i]);
                }
            }   
        }

    }
}
//endregion

//判斷主要戒治物質是否有值，有就勾選region
function check_m_addition_arr(Arr){
    var checkbox =document.getElementsByName('main[]');
    var len = checkbox.length;
    var adi_len = Arr.length;
//    console.log(adi_len,len);
    for (i = 0; i < adi_len; i++)
    {
        for(j = 0;j < len; j++){
            if (Arr[i] == checkbox[j].value)
            {   
                checkbox[j].checked = true;
                // $('#addition'+j+'').attr("hidden",false);
            }else{
                if(Arr[i] =="鴉片"|| Arr[i] =="嗎啡"|| Arr[i] =="海洛因"|| Arr[i] =="古柯鹼"|| Arr[i] =="安非他命"|| Arr[i] =="大麻"|| Arr[i] =="搖頭丸"|| Arr[i] =="FM2藥丸"|| Arr[i] =="K他命"|| Arr[i] =="酒精"|| Arr[i] =="強力膠"|| Arr[i] =="檳榔"|| Arr[i] =="菸"|| Arr[i] =="精神藥物")
                {
                    $("#other_main").val("");
                }else{
                    checkbox[14].checked = true;
                    $("#other_main").val(Arr[i]);
                    // $('#addition14').attr("hidden",false);
                }
            }   
        }

    }
}
//endregion

//判斷曾戒治物質傳入陣列region
function check_checkbox(){
    var checkbox =document.getElementsByName('addition[]');
    var len = checkbox.length;
    addition = new Array();
    for (i = 0; i < len; i++)
    {
        if (checkbox[i].checked == true)
        {
            if(checkbox[i].value == "其他"){
                addition.push($("#other").val());
            }else{
                addition.push(checkbox[i].value);
            }
        }
    }
        // console.log(addition);
}
//endregion

//判斷主要戒治物質多選region
function check_main_checkbox(){
    var checkbox2 =document.getElementsByName('main[]');
    var len = checkbox2.length;
    main_val = new Array();
    for (i = 0; i < len; i++)
    {
        if (checkbox2[i].checked == true)
        {
            if(checkbox2[i].value == "其他"){
                main_val.push($("#other_main").val());
            }else{
                main_val.push(checkbox2[i].value);
            }
            
        }    
    }

//    console.log(main_val);
}
//endregion

function check_main_type_radio() {
    var m_type_radio =document.getElementsByName('m_type[]');
    var len = m_type_radio.length;
    m_type_val = "";
    for (i = 0; i < len; i++)
    {
        if (m_type_radio[i].checked == true)
        {
            if(m_type_radio[i].value == "其他"){
                m_type_val = "其他：" + $("#m_type_other").val();
            }else{
                m_type_val = m_type_radio[i].value;
            }
            
        }    
    }

    //    console.log(m_type_val)
}

//檢查欄位 個人電話詢戒紀錄(Update) region
function check_open_phone_note_value_str2(id)
{
  var ncall_datetime =  $('#ncall_datetime'+id+'').val();
  var ninfo_name = $('#ninfo_name'+id+'').val();
  var nrelationship = $('#nrelationship'+id+'').val();
  var nphone = $('#nphone'+id+'').val();
//   var ndepartment = $('#ndepartment'+id+'').val();
  var nuser = $('#ndepartment'+id+'nuser').val();
  var nnote =$('#nnote'+id+'').val();
  var errorstr = "";

    if (ncall_datetime == null) {
        errorstr += "未填寫來電日期!\r\n";
    }
    if (ninfo_name == null) {
        errorstr += "未填寫個案姓名!\r\n";
    }
    if (nrelationship == null) {
        errorstr += "未填寫聯絡人與案主關係!\r\n";
    }
    if (nphone == null) {
        errorstr += "未填寫連絡人電話!\r\n";
    }
    if (nuser == null) {
        errorstr += "未選擇接案工作人員!\r\n";
    }
    if (nnote == null) {
        errorstr += "未填寫通話內容!\r\n";
    }
    if (errorstr == "") {
        if (ncall_datetime.replace(/\s*/g, "") == '') {
            errorstr += "未填寫來電日期!\r\n";
        }
        if (ninfo_name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫個案姓名!\r\n";
        }
        if (nrelationship.replace(/\s*/g, "") == '') {
            errorstr += "未填寫聯絡人與案主關係!\r\n";
        }
        if (nphone.replace(/\s*/g, "") == '') {
            errorstr += "未填寫連絡人電話!\r\n";
        }
        if (nuser.replace(/\s*/g, "") == '') {
            errorstr += "未選擇接案工作人員!\r\n";
        }
        if (nnote.replace(/\s*/g, "") == '') {
            errorstr += "未填寫通話內容!\r\n";
        }
    }

    return errorstr;
}
//endregion

//檢查欄位 個人面訪紀錄(Update) region
function check_open_reservation_note_value_str2(id)
{
    var start_date = $('#start_date'+id+'').val();
    var one_user = $('#department1'+id+'one_user').val();
    // var two_user = $('#department2'+id+'two_user').val();
    var location_detail = $('#location_detail'+id+'').val();
    var location_other = $('#other_location'+id+'').val();
    var location_radio =  $('input[type=radio][name="location'+id+'[]"]:checked').length;
    var errorstr = "";

    if (start_date == null) {
        errorstr += "未填寫預約面談日期!\r\n";
    }
    if (one_user == null) {
        errorstr += "未選擇主要接案工作人員!\r\n";
    }
    // if (two_user == null) {
    //     errorstr += "未選擇副工作人員工作人員!\r\n";
    // }
    if (location_detail == null && location_other == null) {
        errorstr += "未填寫面訪方式!\r\n";
    }
    if (location_radio <=0) {
        errorstr += "未選擇面訪方式分類!\r\n";
    }
    if (errorstr == "") {
        if (start_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫預約面談日期!\r\n";
        }
        if (one_user.replace(/\s*/g, "") == '') {
            errorstr += "未選擇主要接案工作人員!\r\n";
        }
        // if (two_user.replace(/\s*/g, "") == '') {
        //     errorstr += "未選擇副工作人員!\r\n";
        // }
        if (location_detail.replace(/\s*/g, "") == '' && location_other.replace(/\s*/g, "") == '') {
            errorstr += "未填寫面訪方式!\r\n";
        }
    }

    return errorstr;
}
//endregion

//更新phone_note region
function update_phone_note(id){
    var stau = false;

    if (check_open_phone_note_value_str2(id) != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_open_phone_note_value_str2(id));
        swal({
            title:check_open_phone_note_value_str2(id),
            type:'error'
          })
    }
    else
    {
        var phone_id = getUrlVars()["phone_id"];
        //    console.log($('#ncall_datetime'+id+'').val());
        $.ajax({
            url: "database/update_personal_history.php",
            data:{
                Id:id,
                Phone_id:phone_id,
                nCall_datetime:$('#ncall_datetime'+id+'').val(),
                nInfo_Name:$('#ninfo_name'+id+'').val(),
                nRelationship_detail:$('#nrelationship'+id+'').val(),
                nR_phone:$('#nphone'+id+'').val(),
                nuser:$('#ndepartment'+id+'nuser').val(),
                nPhone_note:$('#nnote'+id+'').val(),
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
    //            console.log(data);
                if(data == 1){
                    swal({
                        title:'更新成功！',
                        type:'success',                        
                    }).then(function(){
                            location.reload();
                    }) 
                }else{
                    swal({
                        title:'更新失敗！',
                        type:'error',
                        })
                } 
            },
            error:function(e){
                swal({
                    title:'更新失敗！',
                    type:'error',
                    })
            }
        });
    }

}
//endregion

//新增至開案個案按鈕 region
$("#trans_to_opencase_submit").on('click',function(){
    var phone_id = getUrlVars()["phone_id"];

    var tran_case_name = '';
    var tran_case_pid = '';
    var tran_case_phone = '';
    var tran_case_birth = '';
    var tran_case_referral = '';

    var stau = false;

    if (check_trans_to_opencase_value() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_trans_to_opencase_value());
        swal({
            title:check_trans_to_opencase_value(),
            type:'error'
          })
    }
    else
    {
        $.ajax({
            url: "database/find_personal_data.php",
            data:{
                Phone_id:phone_id,
            },
            type: "POST",
            dataType: "JSON",
            async :false,
            success: function (data) {

                tran_case_name = data.Name[0];
                tran_case_gender = data.Gender[0];
                // tran_case_pid = data.Pid[0];
                tran_case_phone = data.R_detail[0];
                // tran_case_birth = data.Birth[0];
                tran_case_referral = data.Referral_detail[0];
            },
            error:function(e){
                notyf.alert('伺服器錯誤,無法載入開案所需資料!');
            }
        });

        // console.log(tran_case_gender)

        window.location.href = 'phone_trans_to_opencase.php?unopen_type=phone&id='+phone_id.replace(/^\s+|\s+$/gm,'')+'&case_id='+$('#open_case_t_sn').val().replace(/^\s+|\s+$/gm,'')+'&case_property='+$('#open_case_type').val()+'&object_type='+$('#open_object_type').val()+'&tran_case_name='+tran_case_name+'&tran_case_gender='+tran_case_gender+'&tran_case_phone='+tran_case_phone+'&tran_case_pid=&tran_case_birth=&tran_case_referral='+tran_case_referral+'&tran_case_sex_o=';
    }
});
//endregion



// 根據服務對象類型 自動填入 開案編號 region
$('#open_object_type').on('change', function() {

    $("#open_case_t_sn").val('');
    var object_type_val = this.value;
    
    // 自動查詢沒使用過的編號
    $.ajax({
        url: "database/find_trans_automatic_id.php",
        data:{
            keyword:object_type_val,
        },
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
        //    console.log(data)
        var case_id = 0;

        // console.log(data[0]?.Case_id)
        if(typeof(data[0]?.Case_id) != 'undefined')
        {
            case_id = data[0]?.Case_id;
        }
        else
        {
            case_id = 0;
        }

        
        var str_id = (parseInt(case_id)+1).toString();

           
           switch (object_type_val) {
            case '一般藥癮者':
            case '藥癮家庭':   
                    $("#open_case_t_sn").val("RE"+str_id);
                break;
            case '愛滋感染者':
            case '親職兒少':
                    $("#open_case_t_sn").val(str_id);
                break;
            default:
                    $("#open_case_t_sn").val("");
                break;
           }
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入開案所需資料!');
        }
    });
    
});
//endregion

//檢查欄位 轉案欄位 region
function check_trans_to_opencase_value()
{
    var open_case_t_sn = $('#open_case_t_sn').val();
    var open_case_type = $('#open_case_type').val();
    var open_object_type = $('#open_object_type').val();
    var caseid_repeat = check_case_isrepeat();
    var errorstr = "";


    var case_id_c_2 = "none";
    if (open_case_t_sn.replace(/\s*/g, "") != '') {

        if(open_case_t_sn.includes("RE"))
        {
            case_id_c_2 = open_case_t_sn.replace("RE", "")
        }
    }

    if (open_case_t_sn == null) {
        errorstr += "未填寫開案編號!\r\n";
    }
    if (open_case_type == null) {
        errorstr += "未選擇類別屬性!\r\n";
    }
    if (open_object_type == null) {
        errorstr += "未選擇個案類別!\r\n";
    }
    if (errorstr == "") {
        // console.log(caseid_repeat)
        if(caseid_repeat)
        {
            errorstr += "開案編號重複!!!\r\n";
        }
        if (open_case_t_sn.replace(/\s*/g, "") == '' || case_id_c_2.replace(/\s*/g, "") == '') {
            errorstr += "未填寫開案編號!\r\n";
        }
        if (open_case_type.replace(/\s*/g, "") == '') {
            errorstr += "未選擇類別屬性!\r\n";
        }
        if (open_object_type.replace(/\s*/g, "") == '') {
            errorstr += "未選擇個案類別!\r\n";
        }
    }

    return errorstr;
}
//endregion

//檢查開案編號是否重複 region
function check_case_isrepeat() {
    
    var isrepeat = false;

    var r_case_id = $("#open_case_t_sn").val().replace(/^\s*|\s*$/g,"");

    // console.log(r_case_id)

    $.ajax({
        url: "database/find_repeat_caseid.php",
        data: {
            Open_id:r_case_id
        },
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
            // console.log(data)
            if(data == 1)
            {
                isrepeat = true;
            }
            else
            {
                isrepeat = false;
            }
        },
        error: function (e) {
            // notyf.alert('伺服器錯誤,無法載入開案所需資料!');
        }
    });
    

    return isrepeat;
}
//endregion


//取消重整region
function cancel(){
    location.reload();
}
//endregion

//新增參與人and新增電話region
function add_join(){
    $("#new").append('<input name="join[]" type="text" >');
}
$("#add_phone").on('click',function(){
    num = document.getElementsByName('phone[]').length + 1;
    $("#new_phone").append('聯絡人電話'+num+'：<input name="phone[]" type="number" max="9" ><br><br>');
});
//endregion

//判斷自動生成地點、主要戒治物質radio值region
function check_creat_radio_value(){
    //取radio所有值
    var join_radio =document.getElementsByName('join[]');
    var location_radio =document.getElementsByName('location[]');

    //長度
    var join_len = join_radio.length;
    var location_len = location_radio.length;
    //宣告陣列供外部使用
    join_val= new Array();
    
    for (i = 0; i < join_len; i++)
    {
        if (join_radio[i].value != "")
        {
           join_val.push(join_radio[i].value);
        }    
    }
    for (i = 0; i < location_len; i++)
    {
        if (location_radio[i].checked == true)
        {
           location_val = location_radio[i].value;
           if(location_val == "其他"){
               location_val = $("#other_location").val();
           }
        }    
    }
}
//endregion

//判斷預約自動生成地點radio值是否相同就選取region
function check_radio_value_same(data_len,location,id){
//    console.log(data_len,location,id)
    //取radio所有值    
    for(var x in data_len){  
//        console.log(main[x],location[x])
        var location_radio =document.getElementsByName('location'+id[x]+'[]');
    //    console.log(location_radio);
        //長度
        var location_len = location_radio.length;
        // console.log(location);
        for (i = 0; i < location_len; i++)
        {
            if (location_radio[i].value == location[x])
            {
               location_radio[i].checked = true;
            }else{
                if(location[x] =="社區" || location[x] =="家訪"|| location[x] =="監所"){
                    $('#other_location'+id[x]+'').val("");
                }else{
                    location_radio[3].checked = true;
                    $('#other_location'+id[x]+'').val(location[x]);
                }
            }
        }
    }
}
//endregion



//預約表格鎖定控制region
function edit(id){
    $('.question'+id+'').attr('disabled', false);
    $('#edit_div'+id+'').attr('hidden', true);
    $('#after_edit'+id+'').attr('hidden', false);

};
function cancel_face(id){
    $('.question'+id+'').attr('disabled', true);
    $('#edit_div'+id+'').attr('hidden', false);
    $('#after_edit'+id+'').attr('hidden', true);
};
//endregion

//電話總表格鎖定控制region
function phone_edit(){
    $('.phone_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
function phone_cancel(){
    $('.phone_question').attr('disabled', true);
    $('#edit_div').attr('hidden', false);
    $('#save_div').attr('hidden', true);
};

//endregion

//電話總表格鎖定控制2region
function phone_edit2(id){
    $('.phone_question2'+id+'').attr('disabled', false);
    $('#edit_div2'+id+'').attr('hidden', true);
    $('#save_div2'+id+'').attr('hidden', false);
};
function phone_cancel2(id){
    $('.phone_question2'+id+'').attr('disabled', true);
    $('#edit_div2'+id+'').attr('hidden', false);
    $('#save_div2'+id+'').attr('hidden', true);
};

//endregion

//修改面訪紀錄region
function update_add_face(id){
    var stau = false;

    if (check_open_reservation_note_value_str2(id) != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_open_reservation_note_value_str2(id));
        swal({
            title:check_open_reservation_note_value_str2(id),
            type:'error'
          })
    }
    else
    {
        start_time = $('#start_time_h'+id+'').val()+":"+$('#start_time_m'+id+'').val();
        end_time = $('#end_time_h'+id+'').val()+":"+$('#end_time_m'+id+'').val();
        
        //判斷面訪修改的radio值region
            //取radio所有值
            var main_radio =document.getElementsByName('main[]');
            var location_radio =document.getElementsByName('location'+id+'[]');
    
            //長度
            var main_len = main_radio.length;
            var location_len = location_radio.length;
            //宣告陣列供外部使用
            for (i = 0; i < main_len; i++)
            {
                if (main_radio[i].checked == true)
                {
                   main_val = main_radio[i].value;
                   if(main_val == "其他"){
                       main_val = $('#other_main'+id+'').val();
                   }
    
            //        console.log(w_val)
                }    
            }
            for (i = 0; i < location_len; i++)
            {
                if (location_radio[i].checked == true)
                {
                   location_val = location_radio[i].value;
                   if(location_val == "其他"){
                       location_val = $('#other_location'+id+'').val();
                   }
                }    
            }
    //endregion
        
    //    console.log(start_time,end_time);
        $.ajax({
            url: "database/update_face.php",
            data:{
                    Id:id,
                    Way_detail:location_val,
                    Add_date:$('#start_date'+id+'').val(),
                    End_date:$('#start_date'+id+'').val(),
                    Start_time:start_time,
                    End_time:end_time,
                    One_user:$('#department1'+id+'one_user').val(),
                    Two_user:$('#department2'+id+'two_user').val(),
                    Location:$('#location_detail'+id+'').val(),
                    Location_detail:location_val,
                    Remark:$('#remark'+id+'').val(),
                    Addition:main_val,
    //                    date_y:y,
    //                    date_m:m,
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
                        title:'更新失敗！',
                        type:'error',
                     })
                } 
            },
            error:function(e){
                swal({
                    title:'更新失敗！',
                    type:'error',
                 })
            }
        });
    }

}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on('click',function(){
    var phone_id = getUrlVars()["phone_id"];
//    console.log(id);
    location.href = 'preview_word.php?phone_id='+phone_id+'';
});

$("#preview_word2").on('click',function(){
    var phone_id = getUrlVars()["phone_id"];
//    console.log(id);
    location.href = 'preview_word2.php?phone_id='+phone_id+'';
})
//endregion

    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            for (var index in data.Id) {
                $(".user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });

//選擇曾使用物質被選擇主要戒治物質同步顯示region
// $("input[name='addition[]']").on('click', function(){
//     check_mainaddition();
// });

// function check_mainaddition(){
//     $("input[name='addition[]']").each(function(index,element) {
//         if($(this).is(":checked") == true){
//             $('#addition'+index+'').attr("hidden",false);
//         }else{
//             $('#addition'+index+'').attr("hidden",true);
//             $('input[name="main[]"][value=' +$(this).val()+ ']').attr('checked', false);
// //            console.log($(this).val())
//         }
//     });
// }
//endregion

//新增生活問卷總表region
$("#add_daily").on('click',function(){  
    var addition={};//创建一个空对象
    $('input[name^="addition[]"]:checked').each(function(index,element){	//index下标 element 当前选中的元素
      addition[index] = $(this).val();//压入对象数组
    });
//    console.log(addition)
    var phoen_id = getUrlVars()["phoen_id"];
        $.ajax({
                url: "database/add_daily_life.php",
                data:{
                    Phoen_id:phoen_id,
                    Phone_id:$("#t_sn").text(),
                    Name:$("#name").val(),
                    Gender:$("#gender").val(),
                    Age:$("#age").val(),
                    Address:$("#address").val(),
                    Use_addition:addition,
                    Addition:$("input[name='main[]']:checked").val(),
//                    assign:$("#nphone").val(),
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
            error:function(e){
                swal({
                    title:'新增失敗！',
                    type:'error',
                  })
            }
            });

});
//endregion

