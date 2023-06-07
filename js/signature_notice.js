const notyf = new Notyf();

// //簽核通知 region
// $.ajax({
//     url: "database/find_signature_notice.php",
//     type: "POST",
//     dataType: "JSON",
//     async: false,//啟用同步請求
//     success: function (data) {
//         // console.log(data);
//         var cssString = "";
//         $.each(data,function(index,value){

//         var tr_color = "";
//         var url = value.Url;

//         // console.log(url);
//             switch (value.Sign_state) {
//                 case "未簽核":
//                     tr_color = "#FF9797";
//                     break;
//                 case "已簽核":
//                     tr_color = "#90ee90";
//                     break;
//                 default:
//                     tr_color = "#90ee90";
//                     break;
//             }

//             cssString += 
//                     '<tr style="background-color:'+tr_color+';">' +
//                     '<td style="LINE-HEIGHT:1px">' + value.Title + '</td>' +
//                     '<td style="LINE-HEIGHT:1px">' + value.Timestamp + '</td>' +
//                     '<td style="LINE-HEIGHT:1px">' + value.Assign + '</td>' +
//                     '<td style="LINE-HEIGHT:1px">' + value.Signer + '</td>' +
//                     '<td style="LINE-HEIGHT:1px">' + value.Sign_state + '</td>' +
//                     '<td>' + '<a style="text-decoration: underline;" href="'+value.Url+'">查看</a>' + '</td>' +
//                     '</tr>'
//         });
//         $("#sign_notice").html(cssString);
//     },
//     error: function (e) {
//         notyf.alert('伺服器錯誤,無法載入' + e);
//     }
// });
// //endregion 


//將各簽核板子顯示出來 region
$.ajax({
    url: "database/find_signature_notice.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var board_cssString = "";

        // 預設板子類型
        var sign_board_type = ['published', 'received'
        , 'day_off', 'overtime'
        , 'volunteer'
        , 'supervisor_record', 'board_supervisor', 'members_assemble', 'accounting_record_cash'
        , 'current_case', 'placement_case'
        , 'closed', 'dlgrec'];
        

        //存放sql抓到的板子類型
        var sign_board_type_sql = [];

        $.each(data,function(index,value){
            sign_board_type_sql.push(value.Type);
        });

        // 比對後 篩選沒有的板子類型
        var sign_board_type_filter = sign_board_type.filter(element => sign_board_type_sql.includes(element));

        // console.log(sign_board_type_filter)
        
        //如果是第一個板子 顯示展開
        $.each(sign_board_type_filter,function(i,v){

            var find_board_big5_str = find_board_big5(v);
            
            var collapse_state = "collapse";

            if(i == 0)
            {
                collapse_state = "collapse in";
            }

            // 前端html格式
            board_cssString += 
            '<div class="panel panel-warning" style="padding-bottom: .5em;">' +
            '<div class="panel-heading" role="tab" id="heading_' + v + '">' +
            '<h4 class="panel-title">' +
                '<a role="button" data-toggle="collapse" data-parent="#accordion_panel" href="#collapse_' + v + '" aria-expanded="true" aria-controls="collapse_' + v + '" style="font-size: large;">' +
                find_board_big5_str +
                
                '</a>' +
            '</h4>' +
            '</div>' +
            '<div id="collapse_' + v + '" class="panel-collapse ' + collapse_state + '" role="tabpanel" aria-labelledby="heading_' + v + '">' +
            '<div class="panel-body">' +
                '<table style="font-size:15px;font-family:新細明體;" class="text-center table-hover table-striped table-sm" data-toggle="table" data- data-page-size=5 data-search="false" data-pagination="true" data-pagination-parts="[pageList]">' +
                    '<thead>' +
                    '<tr>' +
                        '<th>標題</th>' +
                        '<th>日期</th>' +
                        '<th>承辦人員</th>' +
                        '<th>簽核主管</th>' +
                        '<th>簽核狀態</th>' +
                        '<th></th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody id="' + v + "_tb" + '">' +
                        
                    '</tbody>' +
                '</table>' +
            '</div>' +
            '</div>' +
            '</div>';
        });

        $("#accordion_panel").append(board_cssString);
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion


//簽核通知顯示  依據板子類型顯示簽核提示 region
$.ajax({
    url: "database/find_signature_notice.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        console.log(data);

        

        $.each(data,function(index,value){

            // 將簽核者、簽核狀態分割
            var signer_arr = value.Signer.split("、");
            var sign_state_arr = value.Sign_state.split("、");

            var panel_color = "";
            var signer_arr_index = -1;
            var sign_state_arr_index = -1;

            var cssString = "";

           console.log(signer_arr)
            console.log(sign_state_arr)

            // 在簽核者欄位中找有無跟當前登入使用者名稱相符的元素，並儲存陣列索引值
            $.each(signer_arr,function(i,v){

                if(v.includes(user_name))
                {
                    signer_arr_index = i;
                }


            });

            // 在簽核狀態欄位中找有無跟當前登入使用者名稱符合的元素，並儲存陣列索引值
            $.each(sign_state_arr,function(i,v){

                if(v.includes(user_name))
                {
                    sign_state_arr_index = i;
                }


            });

            // console.log(signer_arr_index)
            // console.log(sign_state_arr_index)

            // 如果當前登入使用者名稱 非 承辦人員名稱 (屬於簽核者) 則顯示欄列顏色
            // 單位簽核者和多位簽核者的簽核狀態內容不同 分開處理字串
            if(signer_arr_index > -1)
            {
                // signer 只有一位
                if(signer_arr.length==1)
                {
                    switch (sign_state_arr[0]) {
                        case "未簽核":
                            panel_color = "#FF9797";
                            break;
                        case "已簽核":
                            panel_color = "#90ee90";
                            break;
                        default:
                            panel_color = "#90ee90";
                            break;
                    }
                }
                // signer 多位
                else
                {
                    var user_sign_state = "";

                    if(sign_state_arr_index > -1)
                    {
                        user_sign_state = sign_state_arr[sign_state_arr_index].split(user_name) || '';
                        console.log(user_sign_state)

                        switch (user_sign_state[1]) {
                            case "未簽核":
                                panel_color = "#FF9797";
                                break;
                            case "已簽核":
                                panel_color = "#90ee90";
                                break;
                            default:
                                panel_color = "#90ee90";
                                break;
                        }
                    }
                    else
                    {
                        user_sign_state = "";
                        panel_color = "#FF9797";
                    }
                    
                }
            }
            
            // 寫入前端網頁元素
            cssString = 
            '<tr style="background-color:'+panel_color+';">' +
            '<td style="LINE-HEIGHT:1px;">' + value.Title + '</td>' +
            '<td style="LINE-HEIGHT:1px">' + value.Timestamp + '</td>' +
            '<td style="LINE-HEIGHT:1px">' + value.Assign + '</td>' +
            '<td style="LINE-HEIGHT:1px">' + value.Signer + '</td>' +
            '<td style="LINE-HEIGHT:1px">' + value.Sign_state + '</td>' +
            '<td>' + '<a style="text-decoration: underline;" href="'+value.Url+'">查看</a>' + '</td>' +
            '</tr>';

            $("#" + value.Type + "_tb").append(cssString);

        });
         
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion 


//將簽核的板子名稱從英文名稱轉換至中文名稱 region
function find_board_big5(board_name) {

    var board_name_big5 = "";

    switch (board_name) {
        case 'published':
            board_name_big5 = '發文';
            break;
    
        case 'received':
            board_name_big5 = '收文';
            break;
        case 'day_off':
            board_name_big5 = '請假';
            break;
        case 'overtime':
            board_name_big5 = '加班';
            break;
        case 'volunteer':
        board_name_big5 = '志工';
            break;
        case 'supervisor_record':
        board_name_big5 = '團督記錄';
            break;
        case 'board_supervisor':
            board_name_big5 = '理監事會記錄';
            break;
        case 'members_assemble':
            board_name_big5 = '會員大會記錄';
            break;
        case 'accounting_record_cash':
            board_name_big5 = '零用金記錄';
            break;
        case 'current_case':
            board_name_big5 = '開案個案';
            break;
        case 'placement_case':
            board_name_big5 = '安置評估';
            break;
        case 'closed':
            board_name_big5 = '結案';
            break;
        case 'dlgrec':
            board_name_big5 = '生輔記錄';
            break;
    }

    return board_name_big5;
}
//endregion 
