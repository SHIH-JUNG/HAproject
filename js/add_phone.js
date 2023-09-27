//新增詢戒電話表region
$("#phone_add_new").on('click',function(){

//分割年月region
var Arr=[];
var date = $("#call_datetime").val();
Arr = date.split("-"); // 根据“-”分割

y = Arr[0];
m = Arr[1];
console.log("Arr[0]"+y);
console.log("Arr[1]"+m);
//endregion
check_checkbox();//判斷是否勾選傳入陣列
check_radio();
check_main_checkbox();//判斷主要戒治物質值   
check_main_type_radio(); //判斷 毒品施用方式
//console.log(r_val, a_val, l_val ,w_val ,k_val , main_val );
//var county = $("#twzipcode").twzipcode('get','county');
if($("#call_datetime").val() != "" && $("#name").val() != ""){

//    console.log(phone_val);
        $.ajax({
            url: "database/add_new_phone.php",
            type: "POST",
            data:{
                Call_datetime:$("#call_datetime").val(),
                Way:$("#way").val(),
                Way_detail:$("#way_detail").val(),
                Name:$("#name").val(),
                Gender:$("#gender").val(),
                Object_type: $("#object_type").val(),
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
                date_y:y,
                date_m:m,
            },
//            dataType: "JSON",
            success: function (data) {
                console.log(data);
                if(data == 1){
                    swal({
                        type: 'success',
                        title: '新增成功!',
                        allowOutsideClick: false //不可點背景關閉
                        }).then(function () {
                            window.location.replace("phone.php"); 
                        })
                }else{
                    swal({
                        type: 'error',
                        title: '新增失敗!請聯絡負責人',
                        allowOutsideClick: false //不可點背景關閉
                        })
                        // .then(function () {
                        //     window.location.replace("phone.php"); 
                        // })
                }  
            },
                error: function () {
                    swal({
                        type: "error",
                        title: "新增失敗!請聯絡負責人",
                        allowOutsideClick: false, //不可點背景關閉
                    });
                }
        });
    }else{
        swal({
          title:'請至少填寫來電日期和姓名!',
          type:'error'
        })
    }
//    console.log($("#checkbox1").val());
});
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
                main_val.push("其他::" + $("#other_main").val());
            }else{
                main_val.push(checkbox2[i].value);
            }
            
        }    
    }

//    console.log(main_val)
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
                m_type_val = "其他::" + $("#m_type_other").val();
            }else{
                m_type_val = m_type_radio[i].value;
            }
            
        }    
    }

    //    console.log(m_type_val)
}

// $('[name="m_type[]"]').on('change', function () {
//     check_main_type_radio();
// });

//判斷radio多值region
function check_radio(){
    //取radio所有值
    var phone_radio =document.getElementsByName('phone[]');
    var refphone_radio =document.getElementsByName('refphone[]');
    var r_radio =document.getElementsByName('r_type[]');
    var l_radio =document.getElementsByName('l_type[]');
    var a_radio =document.getElementsByName('a_type[]');
    // var k_radio =document.getElementsByName('k_type[]');
    var ref_radio =document.getElementsByName('ref_type[]');
    var e_radio =document.getElementsByName('e_type[]');
    //長度
    var phone_len = phone_radio.length;
    var refphone_len = refphone_radio.length;
    var r_len = r_radio.length;
    var l_len = l_radio.length;
    var a_len = a_radio.length;
    // var k_len = k_radio.length;
    var ref_len = ref_radio.length;
    var e_len = e_radio.length;

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
    // for (i = 0; i < k_len; i++)
    // {
    //     if (k_radio[i].checked == true)
    //     {
    //        k_val = k_radio[i].value;
    //         break;
    // //        console.log(w_val)
    //     }else{
    //         k_val = "";
    //     }    
    // }

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
    // console.log(phone_val,refphone_val,r_val,l_val,a_val,ref_val,k_val,e_val);
}
//endregion

//新增電話按鈕region
$("#add_phone").on('click',function(){
   $("#new_phone").append('<br><br><input name="phone[]" type="number" placeholder="次要" max="10">'); 
});
//endregion


    //呼叫user方法region           
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
                error:function(e){
                    console.log(e);
                }
            });
    
    //endregion

//endregion

//選擇曾使用物質被選擇主要戒治物質同步顯示region
$("input[name='addition[]']").on('click', function(){
    $("input[name='addition[]']").each(function(index,element) {
        if($(this).is(":checked") == true){
            $('#addition'+index+'').attr("hidden",false);
        }else{
            $('#addition'+index+'').attr("hidden",true);
        }
    });

});
//endregion