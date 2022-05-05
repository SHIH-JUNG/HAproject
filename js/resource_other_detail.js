resourcetab_th_num = 6;
resourcetab_row_num = 15;
resourcetab_th = '<tr><th>機構/捐助者<br/>名稱</th><th>承辦人員及聯絡電話</th><th>協助<br/>項目</th><th>個案運用之資源</th><th>日期</th><th>社工員</th></tr>';

//網頁載入 region
$(document).ready(function () {

    create_resourcetab_default();
    generate_resourcetab_td_default();
});
//endregion


create_resourcetab_default = function() {

    default_table_str = '<table style="width:100%;" class="table table-bordered resource_table" id="rtable1">'
    +'<thead class="resourcetab_th"></thead>'
    +'<tbody class="resourcetab_tb"></tbody>';

    $(".form_resource").append(default_table_str);
    $(".resourcetab_th").html(resourcetab_th);
}

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
                    td_str += '<td><input name="'+get_this_id+'&resource_rec_1[]" type="text"></td>';
                }
                td_str +='</tr>';
            }

            $("#"+get_this_id+" .resourcetab_tb").html(td_str);
        }


    });
}