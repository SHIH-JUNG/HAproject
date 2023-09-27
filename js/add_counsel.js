//datepicker創建 region
datepicker_create = function(selector_id) {

    if(selector_id=="birth")
    {
        $('#'+selector_id).datepicker({
            changeYear: true,
            changeMonth: true,
            currentText: "今天",
            dateFormat:"R.mm.dd",
            showButtonPanel: true,
            yearRange: "-109:+0",
            onClose: function(dateText) {
                // console.log($('#'+selector_id).val());
                // console.log(trans_to_EN(dateText));
            }
            ,beforeShow: function(input, inst) {
                var $this = $(this);
                var cal = inst.dpDiv;
                var outerh = $this.outerHeight();
                if($this.offset().top>1200)
                {
                    outerh = outerh*4;
                }
                else
                {
                    outerh = outerh*3;
                }
                // console.log($this.offset().top)
                // console.log(outerh)
    
    
                var top = $this.offset().top - outerh;
                var left = $this.offset().left - 10;
                setTimeout(function() {
                    cal.css({
                        'top': top,
                        'left': left
                    });
                }, 10);
            }
        });
    }
    else
    {
        $('#'+selector_id).datepicker({
            changeYear: true,
            changeMonth: true,
            currentText: "今天",
            dateFormat:"R.mm.dd",
            showButtonPanel: true,
            // minDate:new Date(new Date().getFullYear() - 12, 0, 1),
            // maxDate:new Date(new Date().getFullYear() + 3, 11, 31),
            yearRange: "-80:+5",
            onClose: function(dateText) {
                // console.log($('#'+selector_id).val());
                // console.log(trans_to_EN(dateText));
            }
            ,beforeShow: function(input, inst) {
                var $this = $(this);
                var cal = inst.dpDiv;
                var outerh = $this.outerHeight();
                if($this.offset().top>1200)
                {
                    outerh = outerh*4;
                }
                else
                {
                    outerh = outerh*3;
                }
                // console.log($this.offset().top)
                // console.log(outerh)
    
    
                var top = $this.offset().top - outerh;
                var left = $this.offset().left - 10;
                setTimeout(function() {
                    cal.css({
                        'top': top,
                        'left': left
                    });
                }, 10);
            }
        });
    }
}
//endregion

//將日期轉為民國年格式111.03.07 region
trans_to_Tw =  function(endate) {
    var strAry = endate.split('.');

    if(parseInt(strAry[0]) > 1911){
        strAry[0] = parseInt(strAry[0]) - 1911;
    }

    return strAry.join(".");
}
//endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN =  function(endate) {
    var strAry = endate.split('.');

    if(parseInt(strAry[0]) < 1911){
        strAry[0] = parseInt(strAry[0]) + 1911;
    }

    return strAry.join("-");
}
//endregion


$(document).ready(function () {

    //將input name名稱為ch_datepicker創建datepicker初始化 region
    $("input[name='ch_datepicker']").each(function(){

        var this_id = $(this).attr("id");
        datepicker_create(this_id);
    });
    //endregion



}); 


//新增篩檢資料region
$("#counsel_add_new").on('click',function(){

//endregion
    var stau = false;

    if (check_add_counsel_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    // console.log(stau);

    if(!stau)
    {
        // alert(check_add_counsel_data());
        swal({
            title:check_add_counsel_data(),
            type:'error'
          })
    }
    else
    { 
        submit_data();
    }
});
//endregion

submit_data = function() {

    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
        if ($(this).attr("type") != "file") {
            $(this).val(jQuery.trim($(this).val()));
        }
    });
    
    var form_data = new FormData();

    $("input[type='file']").each(function(index, element) {
        var counsel_file = $(this).prop("files");
        if (counsel_file != undefined) {
            if (counsel_file.length != 0) {
                for (var i = 0; i < counsel_file.length; i++) {
                form_data.append("counsel_file"+index, counsel_file[i]);
                // console.log(counsel_file[i])
                }
            } 
        }
    });

    form_data.append("Refferal", $("#refferal").val());
    form_data.append("Counsel_id", $("#t_sn").val());
    form_data.append("Name", $("#name").val());
    form_data.append("Gender", $("#gender").val());
    form_data.append("Sexual_orientation", $("#sexual_orientation").val());
    form_data.append("Birth", trans_to_EN($("#birth").val()));
    form_data.append("Pid", $("#pid").val());
    form_data.append("Info_name", $("#info_name").val());
    form_data.append("Info_phone", $("#info_phone").val());
    form_data.append("Address", $("#address").val());
    form_data.append("In_prison_date", trans_to_EN($("#in_prison_date").val()));
    form_data.append("Out_prison_date", trans_to_EN($("#out_prison_date").val()));
    form_data.append("In_prison_date_2nd", trans_to_EN($("#in_prison_date_2nd").val()));
    form_data.append("Out_prison_date_2nd", trans_to_EN($("#out_prison_date_2nd").val()));
    form_data.append("In_prison_date_3rd", trans_to_EN($("#in_prison_date_3rd").val()));
    form_data.append("Out_prison_date_3rd", trans_to_EN($("#out_prison_date_3rd").val()));
    form_data.append("Is_parole", $("#is_parole").val());
    form_data.append("HIV_diagnosis_date", trans_to_EN($("#HIV_diagnosis_date").val()));
    form_data.append("Family_know", $("#family_know").val());
    form_data.append("Cocktail_therapy_status", $("#cocktail_therapy_status").val());
    form_data.append("Cocktail_therapy_name", $("#cocktail_therapy_name").val());
    form_data.append("Interview_date_1st", trans_to_EN($("#interview_date_1st").val()));


    $.ajax({
        url: "database/add_new_upload_counsel.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        success: function (data) {
            // console.log(data);
            if(data == 1){
                swal({
                    type: 'success',
                    title: '新增成功!',
                    allowOutsideClick: false //不可點背景關閉
                    }).then(function () {
                        window.location.replace("counsel.php"); 
                    })
            }else if(data.includes("isfind")){
                swal({
                    type: 'error',
                    title: '新增失敗!呼號重複!',
                    allowOutsideClick: false //不可點背景關閉
                    })
            }
            else{
            swal({
                type: 'error',
                title: '新增失敗!請聯絡負責人',
                allowOutsideClick: false //不可點背景關閉
                })
        }  
        },
            error: function () {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                })
            }
    });
}

// 字母匹配
function dislodgeLetter(str) {
    var result;
    var reg = /[a-zA-Z]+/;  //[a-zA-Z]表示匹配字母，g表示全局匹配
    while (result = str.match(reg)) { //判断str.match(reg)是否没有字母了
      str = str.replace(result[0], ''); //替换掉字母  result[0] 是 str.match(reg)匹配到的字母
    }
    return str;
}

//檢查篩檢者資料的必填欄位region
function check_add_counsel_data()
{
   var refferal = $("#refferal").val();
   var counsel_id = $("#t_sn").val();
   var name = $("#name").val();
   var birth = $("#birth").val();
   var pid = $("#pid").val();
   var cocktail_therapy_status = $("#cocktail_therapy_status").val();
   var cocktail_therapy_name = $("#cocktail_therapy_name").val();

    var errorstr = "";

    if (refferal == null) {
        errorstr += "未選擇矯正機關!\r\n";
    }
    if (counsel_id == null) {
        errorstr += "未填寫呼號!\r\n";
    }
    if (name == null) {
        errorstr += "未填寫姓名!\r\n";
    }
    if (birth == null) {
        errorstr += "未填寫出生年月日!\r\n";
    }
    
    if (pid == null) {
        errorstr += "未填寫身分證字號!\r\n";
    }

    if (errorstr == "") {
        if (refferal.replace(/\s*/g, "") == '') {
            errorstr += "未選擇矯正機關!\r\n";
        }
        if (counsel_id.replace(/\s*/g, "") == '') {
            errorstr += "未填寫呼號!\r\n";
        }
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫姓名!\r\n";
        }
        if (birth.replace(/\s*/g, "") == '') {
            errorstr += "未填寫出生年月日!\r\n";
        }
        
        if (pid.replace(/\s*/g, "") == '') {
            errorstr += "未填寫身分證字號!\r\n";
        }
        else
        {
            if(dislodgeLetter(pid).substr(0,1) != "1" && dislodgeLetter(pid).substr(0,1) != "2")
            {
                errorstr += "請輸入有效的身分證字號!\r\n";
            }
        }

        if(cocktail_therapy_status=="是")
        {
            if (cocktail_therapy_name.replace(/\s*/g, "") == '') {
                errorstr += "未填寫雞尾酒療法服用之藥物名稱!\r\n";
            }
        }
    }

    return errorstr;
}
//endregion


