// 設定欄列數量和各表頭名稱 region
resourcetab_th_num = 6;
resourcetab_row_num = 15;
resourcetab_th = '<tr><th>機構/捐助者<br/>名稱</th><th>承辦人員及聯絡電話</th><th>協助<br/>項目</th><th>個案運用之資源</th><th>日期</th><th>社工員</th></tr>';
//endregion

// 網頁載入 region
$(document).ready(function () {

    create_resourcetab_default();
    generate_resourcetab_td_default();
});
//endregion

// 創建表格 region
create_resourcetab_default = function() {

    default_table_str = '<table style="width:100%;" class="table table-bordered resource_table" id="rtable1">'
    +'<thead class="resourcetab_th"></thead>'
    +'<tbody class="resourcetab_tb"></tbody>';

    $(".form_resource").append(default_table_str);
    $(".resourcetab_th").html(resourcetab_th);
}
//endregion

// 生成表格內容及輸入框 region
generate_resourcetab_td_default = function() {
    var td_str = "";

    $(".form_resource table").each(function(index, name){
        var get_this_id = $(this).attr("id");

        if($("#"+get_this_id).children().children().children().children("input").length<=0)
        {
            for(var i=0; i<resourcetab_row_num;i++)
            {
                td_str +='<tr>';
        
                for(var j=0; j<resourcetab_th_num;j++)
                {
                    if(j==4)
                    {
                        //第5欄輸入框類型為date(日期欄位)
                        td_str += '<td><input name="'+get_this_id+'&resource_rec_1[]" type="date"></td>';
                    }
                    else if(j==5)
                    {
                        //第6欄輸入框類型為text，並設置不監聽輸入狀態(社工員欄位)
                        td_str += '<td><input name="'+get_this_id+'&resource_rec_1[]" type="text"></td>';
                    }
                    else
                    {
                        //其他輸入框類型為text，並設置監聽輸入狀態
                        td_str += '<td><input name="'+get_this_id+'&resource_rec_1[]" oninput="input_onchange('+i+', '+get_this_id+')" onporpertychange="input_onchange('+i+', '+get_this_id+')" type="text"></td>';
                    }
                }
                td_str +='</tr>';
            }

            $("#"+get_this_id+" .resourcetab_tb").html(td_str);
        }
    });
}
//endregion

// 監聽輸入框的狀態，改變社工員欄位的填寫內容 region
input_onchange = function(index, inputname){
    // index+1 為當前監聽的輸入框所在的列數，inputname為輸入框的parents table id

    // 獲取輸入框的parents table id
    var get_this_id = $(inputname).attr("id");

    // 獲取輸入框的parents tbody class name
    var get_tobody = $("#"+get_this_id).children("tbody").attr("class")
    // console.log(index, get_tobody)

    var is_input_null = "";

    //加總每該列每一欄字串
    for(var i=(index+1)*6-2;i>(index+1)*6-7;i--)
    {
        // console.log(i)
        var inputs_value = $("#"+get_this_id+" ."+get_tobody+" input").eq(i).val();
        is_input_null+= inputs_value;
    }

    // console.log(is_input_null)

    //獲取社工員欄位的內容
    var assign_name_val =  $("#"+get_this_id+" ."+get_tobody+" input").eq((index+1)*6-1).val();

    //若每一列字串加總不為空字串，並且社工員欄位為空字串，則社工員欄位自動填入當前登入的帳號名稱
    if(is_input_null!="")
    {
        if(assign_name_val=="")
        {
            $("#"+get_this_id+" ."+get_tobody+" input").eq((index+1)*6-1).val(assign_name);
        }
    }//若每一列字串加總為空字串，並且社工員欄位不為空字串，則社工員欄位自動清空內容
    else if(is_input_null=="")
    {
        if(assign_name_val!="")
        {
            $("#"+get_this_id+" ."+get_tobody+" input").eq((index+1)*6-1).val("");
        }
    }
}
//endregion