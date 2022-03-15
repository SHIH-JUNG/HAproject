//網頁載入 region
$(document).ready(function () {

    generate_health_smoke_rec_table();

    create_medical_table_default();

    get_generate_medical_thead();

    generate_medical_td_default();
});
//endregion


addNewTag = function() {
    var cssString = "";
    cssString += '<li class="new_rec nav-item" role="presentation">' +
        '<a class="nav-link" id="new-tab" data-toggle="pill" href="#tabx0_new" role="tab"  aria-selected="false">' +
        '<b>' + '新增就診紀錄表' + '</b>' +
        '</a>' +
        '</li>'

    if ($('.new_rec').length < 1) {
        $("#new_rec").before(cssString);
    }

    create_medical_table_ohter();

    $(".nav-link").click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
}

generate_health_smoke_rec_table = function() {
    var row_num = 9;
    var col_num = 3;

    $(".smoke_rec_table tbody").each(function(){
        var get_id = $(this).attr("id");
        var td_str = "";

        for(var i=0; i<row_num;i++)
        {
            td_str +='<tr>';
    
            for(var j=0; j<col_num;j++)
            {
                td_str += '<td><input name="'+get_id+'&'+i+"_"+j+'" type="text"></td>';
                
            }
            td_str +='</tr>';
        }


        $("#"+get_id).html(td_str);
    });
}

get_generate_medical_thead = function() {
    medical_rec_1_th = '<tr><th>就診日期</th><th>科別</th><th>肝指數</th><th>CD4</th><th>病毒量</th><th>美沙冬量</th><th>就診狀況</th><th>下次回診醫院/日期</th></tr>';
    medical_rec_2_th = '<tr><th colspan="3">藥      名</th><th>劑量</th><th>服藥時間</th><th colspan="2">給予方式</th><th>服藥狀況</th></tr>';
    medical_rec_1_th_num = 8;
    medical_rec_1_row_num = 4;
    medical_rec_2_th_num = 5;
    medical_rec_2_row_num = 8;

    $(".medical_rec_1_th").html(medical_rec_1_th);
    $(".medical_rec_2_th").html(medical_rec_2_th);
}

create_medical_table_default = function() {

    default_table_str = '<table style="width:100%;" class="table table-bordered medical_rec_table" id="mtable1">'
    +'<thead class="medical_rec_1_th"></thead>'
    +'<tbody class="medical_rec_1"></tbody>'
    +'<thead class="medical_rec_2_th"></thead>'
    +'<tbody class="medical_rec_2"></tbody></table>';

    $(".form_health").append(default_table_str);

}

create_medical_table_ohter = function() {

    var table_num = $(".form_health table").length;

    var table_str = 
    '<div class="tab-pane fade" id="tabx0_new" role="tabpanel" aria-labelledby="new-tab">'+
        '<div class="col-sm-12">'+
            '<div style="margin-top:15px" class="text-center">'+
                '<h4>就診紀錄表</h4>'+
            '</div>'+
        '</div>'+
        '<div class="panel-body">'+
        '</div>'+
        '<div class="table-wrap">'+
            '<div class="table-responsive">'+
                '<form class="form_health">'+
                    '<table style="width:100%;" class="table table-bordered medical_rec_table" id="mtable'+(parseInt(table_num)+1)+'">'+
                    '<thead class="medical_rec_1_th"></thead>'+
                    '<tbody class="medical_rec_1"></tbody>'+
                    '<thead class="medical_rec_2_th"></thead>'+
                    '<tbody class="medical_rec_2"></tbody>'+
                    '</table>'+
                '</form>'+
            '</div>'+
        '</div>'+
    '</div>';

    $(".panel-footer").before(table_str);
    get_generate_medical_thead();
    generate_medical_td_default();

}


generate_medical_td_default = function() {
    var td_str_1 = "";

    var td_str_2 = "";

    $(".form_health table").each(function(index, name){
        var get_this_id = $(this).attr("id");

        if($("#"+get_this_id).children().children().children().children("input").length<=0)
        {
            for(var i=0; i<medical_rec_1_row_num;i++)
            {
                td_str_1 +='<tr>';
        
                for(var j=0; j<medical_rec_1_th_num;j++)
                {
                    // td_str_1 += '<td><input name="'+get_this_id+'&medical_rec_1&'+i+"_"+j+'" type="text"></td>';
                    td_str_1 += '<td><input name="'+get_this_id+'&medical_rec_1[]" type="text"></td>';
                }
                td_str_1 +='</tr>';
            }

            $("#"+get_this_id+" .medical_rec_1").html(td_str_1);

            for(var i=0; i<medical_rec_2_row_num;i++)
            {
                td_str_2 +='<tr>';
        
                for(var j=0; j<medical_rec_2_th_num;j++)
                {
                    switch (j) {
                        case 1:
                            // td_str_2 += '<td colspan="3"><input name="'+get_this_id+'&medical_rec_2&'+i+"_"+j+'" type="text"></td>';
                            td_str_2 += '<td colspan="3"><input name="'+get_this_id+'&medical_rec_2[]" type="text"></td>';

                            break;
                        case 4:
                            // td_str_2 += '<td colspan="2"><input name="'+get_this_id+'&medical_rec_2&'+i+"_"+j+'" type="text"></td>';
                            td_str_2 += '<td colspan="2"><input name="'+get_this_id+'&medical_rec_2[]" type="text"></td>';

                            break;
                        default:
                            // td_str_2 += '<td><input name="'+get_this_id+'&medical_rec_2&'+i+"_"+j+'" type="text"></td>';
                            td_str_2 += '<td><input name="'+get_this_id+'&medical_rec_2[]" type="text"></td>';

                            break;
                    }
                    
                }
                td_str_2 +='</tr>';
            }
            $("#"+get_this_id+" .medical_rec_2").html(td_str_2);
        }


    });
}

h_test = function() {
    
    form_arr = new Array();


    $(".form_health table").each(function(index, name){
    var get_tab_id = $(this).attr("id");
    var name_arr1 = $("[name='"+get_tab_id+"&medical_rec_1[]']");
    var name_arr2 = $("[name='"+get_tab_id+"&medical_rec_2[]']");

    var arr_len  = name_arr1.length;
    var arr2_len  = name_arr2.length;

    var arr1 = new Array();
    var arr2 = new Array();
   
    for (i = 0; i < arr_len; i++)
    {
        arr1.push(name_arr1[i].value); 
    } 
    
    for (i = 0; i < arr2_len; i++)
    {
        arr2.push(name_arr2[i].value); 
    }

    form_arr.push({name:name_arr1.attr("name"),value:arr1})
    form_arr.push({name:name_arr2.attr("name"),value:arr2})


   
    // console.log($("[name='"+get_tab_id+"&medical_rec_2[]']").eq(8).val())
    });
}