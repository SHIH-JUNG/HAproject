//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion


//獲取諮詢個案既有的資料顯示在新增個案表格中region
$(document).ready(function(){

    //獲取本網址從諮詢個案詳細資料網頁(phone_detail_v2.php)傳過來的屬性值region
    var phone_id = getUrlVars()["phone_id"];
    var case_id = getUrlVars()["case_id"];
    var case_property = decodeURI(getUrlVars()["case_property"]);
    // console.log(phone_id, case_id, case_property)
    //endregion

    //region 顯示諮詢個案編號、開案編號、個案屬性
    $("#phone_id").html(phone_id);
    $("#case_id").val(case_id);
    $("#case_property").val(case_property);
    //endregion

    $.ajax({
        url: "database/find_phone_data_detail.php",
        data:{
            Phone_id:phone_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            console.log(data);

            //分割曾經癮別region
            // var Arr=[];
            // var addition_arr = data.Addiction[0];
            // Arr = addition_arr.split("、"); // 根据“-”分割
            // check_addition(Arr);
            //分割主要癮別region
            // var Arr2=[];
            // var m_addition_arr = data.M_addiction[0];
            // Arr2 = m_addition_arr.split("、"); // 根据“-”分割
            // check_m_addition_arr(Arr2);
            // check_mainaddition();
            check_radio(data.A_detail[0]);

            // check_radio(data.R_detail[0],data.L_detail[0],data.A_detail[0],data.Know_from_detail[0],data.Referral_detail[0],data.Eligible[0]);
            //endregion
            // var p_arr=[];
            // var phone_arr = data.R_phone[0];
            // p_arr = phone_arr.split("、"); // 根据“-”分割

            // var refp_arr=[];
            // var refphone_arr = data.Referral_phone[0];
            // refp_arr = refphone_arr.split("、"); // 根据“-”分割

//            console.log(p_arr)
            // var cssString = "";
            // var cssString1 = "";
            // var cssString2 = "";
            // var cssString3 = "";
            // var cssString4 = "";
            // var cssString5 = "";
            // var cssString6 = "";
            // var cssString7 = "";

            // cssString  += data.Update_date[0];
            // cssString1 += data.Update_name[0];
            // cssString2 += data.Phone_id[0];
            // cssString3 += data.Create_name[0];
            // cssString4 += data.Create_date[0];
            // for(index in p_arr){
            //     var num = parseInt(index)+1;
            //     if(num ==1 ){
            //         cssString6 += '聯絡人電話'+num+'：<input name="phone[]" type="number" value="'+p_arr[index]+'" max="10" disabled>(此筆電話將顯示在詢戒電話總表)<br><br>'
            //     }else{
            //         cssString6 += '聯絡人電話'+num+'：<input name="phone[]" type="number" value="'+p_arr[index]+'" max="10")" disabled><br><br>'
            //     }
                
            // }
            // for(index in refp_arr){
            //     var num = parseInt(index)+1;
            //     if(num ==1 ){
            //         cssString7 += '轉介人電話'+num+'：<input name="refphone[]" type="number" value="'+refp_arr[index]+'" max="10" disabled><br><br>'
            //     }else{
            //         cssString7 += '轉介人電話'+num+'：<input name="refphone[]" type="number" value="'+refp_arr[index]+'" max="10")" disabled><br><br>'
            //     }
            // }
            // $("#t_sn").html(cssString2);
            // $("#call_datetime").val(data.Call_datetime[0]);
            // $("#way").val(data.Way[0]);
            // $("#way_detail").val(data.Way_detail[0]);
            // $("#name").val(data.Name[0]);
            // $("#gender").val(data.Gender[0]);
            // $("#object_type").val(data.Object_type[0]);
            // $("#age").val(data.Age[0]);
            // $("#address").val(data.Address[0]);
            // $("#info_name").val(data.Info_Name[0]);
            // $("#relationship").val(data.Relationship_detail[0]);
            // $("#phone").html(cssString6);
            // $("#referral").val(data.Referral[0]);
            // $("#refphone").html(cssString7);
            // $("#referral_name").val(data.Referral_name[0]);
            // $("#k_place").val(data.Know_from[0]);
            // append_user();
            // $("#user").val(data.Assign[0]);
            // $("#note").val(data.Phone_note[0]);
            // $("#adate").html(cssString4);
            // $("#applicant").html(cssString3);
            // $("#up_applicant").html(cssString1);
            // $("#udate").html(cssString);

            // $("#open_case_date").val();
            $("#name").val(data.Name[0]);
            // $("#case_grade").val();
            $("#age").val(data.Age[0]);
            $("#object_type").val(data.Object_type[0]);
            $("#referral").val(data.Referral[0]);      
        },
        error:function(e){
            console.log(e);
        }
    });
});

//endregion  

//判斷radio是否有值，就選取region
// function check_radio(r_detail,l_detail,a_detail,k_detail,Referral_detail,e_detail){
// //    console.log(r_detail,l_detail,a_detail,k_detail,Referral_detail,e_detail)
//     //取radio所有值
//     var r_radio =document.getElementsByName('r_type[]');
//     var l_radio =document.getElementsByName('l_type[]');
//     var a_radio =document.getElementsByName('a_type[]');
//     var k_radio =document.getElementsByName('k_type[]');
//     // var w_radio =document.getElementsByName('w_type[]');
//     var ref_radio =document.getElementsByName('ref_type[]');
//     var e_radio =document.getElementsByName('e_type[]');
   
// //    var main_radio =document.getElementsByName('main[]');
//     //長度
//     var r_len = r_radio.length;
//     var l_len = l_radio.length;
//     var a_len = a_radio.length;
//     var k_len = k_radio.length;
//     var ref_len = ref_radio.length;
//     var e_len = e_radio.length;

//     for (i = 0; i < r_len; i++)
//     {
//         if (r_radio[i].value == r_detail)
//         {
//            r_radio[i].checked = true;
// //            console.log(r_radio[i].value)
//         }    
//     }
//     for (i = 0; i < l_len; i++)
//     {
//         if (l_radio[i].value == l_detail)
//         {
//            l_radio[i].checked = true;
//     //        console.log(w_val)
//         }    
//     }
//     for (i = 0; i < a_len; i++)
//     {
//         if (a_radio[i].value == a_detail)
//         {
//            a_radio[i].checked = true;
//     //        console.log(w_val)
//         }    
//     }
//     for (i = 0; i < ref_len; i++)
//     {
//         if (ref_radio[i].value == Referral_detail)
//         {
//            ref_radio[i].checked = true;
//     //        console.log(w_val)
//         }    
//     }
//     for (i = 0; i < e_len; i++)
//     {
//         if (e_radio[i].value == e_detail)
//         {
//            e_radio[i].checked = true;
//         }    
//     }
//     for (i = 0; i < k_len; i++)
//     {
//         if (k_radio[i].value == k_detail)
//         {
//            k_radio[i].checked = true;
//         }    
//     }
 
// }

function check_radio(a_detail){
    //取radio所有值
    var a_radio =document.getElementsByName('a_type[]');
    //長度
    var a_len = a_radio.length;
  
    for (i = 0; i < a_len; i++)
    {
        if (a_radio[i].value == a_detail)
        {
            a_radio[i].checked = true;
    //        console.log(w_val)
        }    
    }
    
}
//endregion

//endregion

//新增至開案個案region
$("#trans_case").on('click',function(){
    var stau = false;

    if (check_update_trans_opencase_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }

    if(!stau)
    {
        swal({
            title: check_update_trans_opencase_data()+"上述資料尚未填寫完畢是否送出？",
            text: "提示：未填寫完畢將會新增至首頁行事曆提醒",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "送出",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true
        }).then(function(result) {
            if (result) {
                //新增至開案個案
                trans_to_opendata_database();
            }
        }, function(dismiss){
            if(dismiss == 'cancel'){
                swal({
                    title:'已取消送出',
                    type:'success',                        
                })
            }
        }).catch(swal.noop)
    }
    else
    { 
        
    }
});
//endregion

//檢查新增個案表格有無未填寫欄位，若有未填寫欄位將會在點擊新增按鈕時提示region
function check_update_trans_opencase_data()
{
    var case_id = $("#case_id").val();
    var case_property = $("#case_property").val();
    var open_case_date = $("#open_case_date").val();
    var name = $("#name").val();
    var case_grade = $("#case_grade").val();
    var age = $("#age").val();
    var age_radio =  $("input[type=radio][name='a_type[]']:checked").length;
    var object_type = $("#object_type").val();
    var referral = $("#referral").val();

    var warningstr = "";

    if (warningstr == "") {
        if(age !=null || age!="")
        {
            if (age_radio <=0) {
                warningstr += "年齡分類\r\n";
            }
        }
        if (age_radio > 0) {
            if(age ==null || age=="")
            {
                warningstr += "年齡\r\n";
            }
        }
        if (case_id == null || case_id.replace(/\s*/g, "") == '') {
            warningstr += "開案編號\r\n";
        }
        if (case_property == null || case_property.replace(/\s*/g, "") == '') {
            warningstr += "個案屬性\r\n";
        }
        if (open_case_date == null || open_case_date.replace(/\s*/g, "") == '') {
            warningstr += "開案日期\r\n";
        }
        if (name == null || name.replace(/\s*/g, "") == '') {
            warningstr += "姓名\r\n";
        }
        if (case_grade == null || case_grade.replace(/\s*/g, "") == '') {
            warningstr += "個案分級\r\n";
        }
        if (object_type == null || object_type.replace(/\s*/g, "") == '') {
            warningstr += "服務對象類別\r\n";
        }
        if (referral == null || referral.replace(/\s*/g, "") == '') {
            warningstr += "轉介來源\r\n";
        }
    }

    return warningstr;
}
//endregion

function trans_to_opendata_database()
{
    pass
}

//更新電話詢戒表基本資料region
$("#phone_update").on('click',function(){
//判斷是否勾選傳入陣列或radio勾選 region
check_radio_value();
check_checkbox();
check_main_checkbox();
//endregion
var stau = false;

    if (check_update_personal_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

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
                // Way:$("#way").val(),
                // Way_detail:$("#way_detail").val(),
                Name:$("#name").val(),
                Gender:$("#gender").val(),
                Object_type:$("#object_type").val(),
                Addition:addition,
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
                Know_from:$("#k_place").val(),
                k_val:k_val,
                e_val:e_val,
                Assign:$("#user").val(),
                Phone_note:$("#note").val(),
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    swal({
                        title:'修改成功！',
                        type:'success',                        
                    }).then(function(){
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'修改失敗！請聯絡負責單位',
                        type:'error',
                    })
                }  
            },
            error:function(e){
                console.log(e);
            }
        });
    }
});

//電話詢戒表(update)的必填欄位 region
function check_update_personal_data()
{
    var call_datetime = $("#call_datetime").val();
    var name = $("#name").val();
    var age = $("#age").val();
    var address = $("#address").val();
    var addition_checkbox =  $("input[type=checkbox][name='addition[]']:checked").length;
    var main_checkbox =  $("input[type=checkbox][name='main[]']:checked").length;

    var errorstr = "";

    if (call_datetime == null) {
        errorstr += "未填寫來電日期!\r\n";
    }
    if (name == null) {
        errorstr += "未填寫個案姓名!\r\n";
    }
    if (age == null) {
        errorstr += "未填寫年齡!\r\n";
    }
    if (address == null) {
        errorstr += "未填寫居住地!\r\n";
    }

    if (addition_checkbox <=0) {
        errorstr += "未勾選曾經使用物質!\r\n";
    }

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
        if (age.replace(/\s*/g, "") == '') {
            errorstr += "未填寫年齡!\r\n";
        }
        if (address.replace(/\s*/g, "") == '') {
            errorstr += "未填寫居住地!\r\n";
        }
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
    var addition_radio =document.getElementsByName('addition[]');
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
    var addition_len = addition_radio.length;
    
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

    for (i = 0; i < addition_len; i++)
    {
        if (addition_radio[i].checked == true)
        {
            addition_val = addition_radio[i].value;
           if(addition_val == "其他"){
            addition_val = $("#other").val();
           }
            break;
        }else{
            addition_val = "";
        }    
    }

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

    console.log(phone_val);
    console.log(refphone_val);
    console.log(main_val);
    console.log(addition_val);
    console.log(r_val);
    console.log(l_val);
    console.log(a_val);
    console.log(ref_val);
    console.log(k_val);
    console.log(e_val);
}
//endregion

//endregion

//呼叫user方法region
function append_user(){             
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            console.log('test',data)
            for (var index in data.Id) {
                $("#nuser").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
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
                $('#addition'+j+'').attr("hidden",false);
            }else{
                if(Arr[i] =="鴉片"|| Arr[i] =="嗎啡"|| Arr[i] =="海洛因"|| Arr[i] =="古柯鹼"|| Arr[i] =="安非他命"|| Arr[i] =="大麻"|| Arr[i] =="搖頭丸"|| Arr[i] =="FM2藥丸"|| Arr[i] =="K他命"|| Arr[i] =="酒精"){
//                    console.log(checkbox[j].value);
                    $("#other_main").val("");
                }else{
                    checkbox[14].checked = true;
                    $("#other_main").val(Arr[i]);
                    $('#addition14').attr("hidden",false);
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
        console.log(addition);
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

//    console.log(main_val)
}
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



//選擇曾使用物質被選擇主要戒治物質同步顯示region
$("input[name='addition[]']").on('click', function(){
    check_mainaddition();
});

function check_mainaddition(){
    $("input[name='addition[]']").each(function(index,element) {
        if($(this).is(":checked") == true){
            $('#addition'+index+'').attr("hidden",false);
        }else{
            $('#addition'+index+'').attr("hidden",true);
            $('input[name="main[]"][value=' +$(this).val()+ ']').attr('checked', false);
//            console.log($(this).val())
        }
    });
}
//endregion


