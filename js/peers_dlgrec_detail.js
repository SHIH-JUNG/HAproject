const notyf = new Notyf();

//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

peers_dlgrec_id = getUrlVars()["peers_dlgrec_id"];
social_worker_msg_arr = [];
supervise1_msg_arr = [];
supervise2_msg_arr = [];

//抓個別特定結案表region
$(document).ready(function(){

    $.ajax({
        url: "database/find_peers_dlgrec_data_detail.php",
        data:{
            peers_dlgrec_id:peers_dlgrec_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            // console.log(data)

            $.each(data,function(index,value){

                $("#bf_num").val(value.bf_num)
                $("#al_num").val(value.al_num)
                $("#em_num").val(value.em_num)
                $("#lp_num").val(value.lp_num)
                $("#leave_num").val(value.leave_num)
                $("#peers_dlgrec_date").val(value.peers_dlgrec_date)

                $("#peers_dlgrec_0").val(value.peers_dlgrec_0)
                $("#peers_dlgrec_1").val(value.peers_dlgrec_1)
                $("#peers_dlgrec_2").val(value.peers_dlgrec_2)
                $("#peers_dlgrec_3").val(value.peers_dlgrec_3)
                $("#peers_dlgrec_4").val(value.peers_dlgrec_4)
                $("#peers_dlgrec_5").val(value.peers_dlgrec_5)
                $("#peers_dlgrec_6").val(value.peers_dlgrec_6)
                $("#peers_dlgrec_7").val(value.peers_dlgrec_7)
                $("#peers_dlgrec_8").val(value.peers_dlgrec_8)
                $("#peers_dlgrec_9").val(value.peers_dlgrec_9)
                $("#peers_dlgrec_10").val(value.peers_dlgrec_10)
                $("#peers_dlgrec_11").val(value.peers_dlgrec_11)

                append_user();

                $("#dlg_manager").val(value.dlg_manager)
                $("#social_worker").val(value.social_worker)
                $("#supervise1").val(value.supervise1)
                $("#supervise2").val(value.supervise2)

                var peers_dlgrec_file_path = value.Upload_path.replace("../", "./");
                peers_dlgrec_file_name = value.Upload_name;

                var a_element_content = '<a href="'+peers_dlgrec_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                +peers_dlgrec_file_name
                +'</a><br/><br/>';


                var social_worker_sign_file_val = value.social_worker_sign.replace("\.\.\/signature\/", "");

                $("#social_worker_signature_simg").text("點擊顯示簽名圖片")

                if(social_worker_sign_file_val=="")
                {
                    $("#social_worker_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
                }
                else
                {
                    $("#social_worker_signature_simg").attr("href", "./signature/"+social_worker_sign_file_val)

                }

                social_worker_msg_arr.push(value.social_worker_sign_msg)
                social_worker_msg_arr.push(value.social_worker_sign_time)
                
                var supervise1_sign_file_val = value.supervise1_sign.replace("\.\.\/signature\/", "");

                $("#supervise1_signature_simg").text("點擊顯示簽名圖片")

                if(supervise1_sign_file_val=="")
                {
                    $("#supervise1_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
                }
                else
                {
                    $("#supervise1_signature_simg").attr("href", "./signature/"+supervise1_sign_file_val)

                }
                
                supervise1_msg_arr.push(value.supervise1_sign_msg)
                supervise1_msg_arr.push(value.supervise1_sign_time)

                var supervise2_sign_file_val = value.supervise2_sign.replace("\.\.\/signature\/", "");

                $("#supervise2_signature_simg").text("點擊顯示簽名圖片")

                if(supervise2_sign_file_val=="")
                {
                    $("#supervise2_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
                }
                else
                {
                    $("#supervise2_signature_simg").attr("href", "./signature/"+supervise2_sign_file_val)

                }
                
                supervise2_msg_arr.push(value.supervise2_sign_msg)
                supervise2_msg_arr.push(value.supervise2_sign_time)


                $("#adate").html(value.Create_date);
                $("#applicant").html(value.Create_name);
                $("#udate").html(value.Update_date);
                $("#up_applicant").html(value.Update_name);
            });
        },
        error:function(e){
            console.log(e);
            notyf.alert('伺服器錯誤,無法載入');
        }
    });
    $(".peers_dlgrec_question").attr("disabled",true);


    //jsignature插件初始化 region
    jsignature_initialization();
    //endregion

    //隱藏jsignature畫布區域 region
    $("#signature_area").hide();
    //endregion  
});
//endregion  


sign_msg_model = function (sign_type_name) {
    //手動新增按鈕點擊跳出模態框
    $("#myModal2").on("shown.bs.modal", function () {
      $("#" + sign_type_name).trigger("focus");
    });
  
    switch (sign_type_name) {
        case "supervise1":
            var type_name = "督導";
            $(".sign_msg").text(supervise1_msg_arr[0]);
            $(".sign_msg_time").val(supervise1_msg_arr[1]);
        break;
      
  
      case "supervise2":
        var type_name = "執行長";
        $(".sign_msg").text(supervise2_msg_arr[0]);
        $(".sign_msg_time").val(supervise2_msg_arr[1]);
        break;
  
        case "social_worker":
            var type_name = "社工員";
            $(".sign_msg").text(social_worker_msg_arr[0]);
            $(".sign_msg_time").val(social_worker_msg_arr[1]);
            break;
    }
  
    $(".sign_msg_td_name").text(type_name + "簽名留言內容");
  };
  
  //jsignature插件初始化 region
  function jsignature_initialization() {
    var $sigdiv = $("#signature_div");
    $sigdiv.jSignature({ UndoButton: true }); // 初始化jSignature插件-属性用","隔开
    // $sigdiv.jSignature({'decor-color':'red'}); // 初始化jSignature插件-设置横线颜色
    // $sigdiv.jSignature({'lineWidth':"6"});// 初始化jSignature插件-设置横线粗细
    // $sigdiv.jSignature({"decor-color":"transparent"});// 初始化jSignature插件-去掉横线
    // $sigdiv.jSignature({'UndoButton':true});// 初始化jSignature插件-撤销功能
    // $sigdiv.jSignature({'height': 100, 'width': 200}); // 初始化jSignature插件-设置书写范围(大小)
  
    // 同步更新畫布中的簽名圖片和簽名檔案格式 region
    $("#signature_div").bind("change", function (e) {
      var datapair = $sigdiv.jSignature("getData", "image");
      $("#signature_images").attr(
        "src",
        "data:" + datapair[0] + "," + datapair[1]
      );
    });
    //endregion
  
    //重設繪製簽名 region
    $("#signature_reset").click(function () {
      $("#signature_div").jSignature("reset"); //重置画布，可以进行重新作画
      $("#signature_images").attr("src", "");
    });
    //endregion
  }
  //endregion
  
  
  // 儲存該簽名 region
  signature_submit = function(this_btn) {
  
    // 獲取簽名類型(督導、組長、主管)
    var sign_type = $(this_btn).attr("board_name");
  
    // console.log(sign_type);
  
    var ajax_url = "database/update_peers_dlgrec_data_detail_signature.php";
  
    var src_data = $("#signature_images").attr("src");
    // console.log(src);
  
    // 判斷有無簽名圖片，若有送出簽名並儲存檔案
    if (src_data) {
      // console.log("submit_sign");
      $.ajax({
        type: "post",
        url: ajax_url,
        data: {
          peers_dlgrec_id:peers_dlgrec_id,
          src_data: src_data,
          sign_msg: $("#signature_msg").val(),
          sign_type: sign_type,
          sign_name:$("#"+sign_type+"").val(),
        },
        async: false,
        success: function (data) {
            // console.log(data);
            if (data == 1) 
            {
                swal({
                title: "送出簽名成功！",
                type: "success",
                }).then(function () {
                location.reload();
                });
            }
            else if(data.includes("noallowsign"))
            {
                swal({
                    type: 'error',
                    title: '您無權限簽核此欄位',
                    text: '當前登入的帳號名稱與簽核欄位名稱不符',
                    allowOutsideClick: false //不可點背景關閉
                });
            }
           else 
           {
            swal({
              title: "生成簽名圖片失敗！請聯絡負責單位",
              type: "error",
            });
          }
        },
      });
    } 
    else 
    {
      alert("簽名圖片檔不能為空！");
      return false;
    }
  }
  //endregion
  
  //按簽名 按紐，顯示簽名畫布 隱藏其他詳細資料 region
  signature_btn_click = function(sign_board_name) {
  
    var type_name = "";
  
    switch (sign_board_name) {
    case "supervise1":
        type_name = "督導";
        break;
  
      case "supervise2":
        type_name = "執行長";
        break;
  
    case "social_worker":
        type_name = "社工員";
        break;
    }
  
    $("#signature_h4").text(type_name + "簽名");
    $("#signature_title_td").text(type_name);
    $("#signature_msg_td").text(type_name);
    $("#sign_submit_btn").attr("board_name", sign_board_name);
  
    $("#signature_area").show();
    $("#collapseTwo").hide();
  }
  //endregion
  
  //在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
  show_main_panel = function () {
    $("#signature_area").hide();
    $("#collapseTwo").show();
    // $('html, body').scrollTop(0);
  };
  //endregions



//更新結案表基本資料region
// $("#peers_dlgrec_update").on('click',function(){

// var peers_dlgrec_id = getUrlVars()["peers_dlgrec_id"];

// var stau = false;

//     if (check_updat_peers_dlgrec_data() != "") 
//     {
            
//         stau = false;
//     }
//     else {
//         stau = true;
//     }
//     // console.log(stau);

//     if(!stau)
//     {
//         swal({
//             title:check_updat_peers_dlgrec_data(),
//             type:'error'
//           })
//     }
//     else
//     { 
//         $.ajax({                                                                                    
//             url: "database/update_peers_dlgrec_data_detail.php",
//             data:{
//                 peers_dlgrec_id:peers_dlgrec_id,
//                 bf_num:$("#bf_num").val(),
//                 al_num:$("#al_num").val(),
//                 em_num:$("#em_num").val(),
//                 lp_num:$("#lp_num").val(),
//                 leave_num:$("#leave_num").val(),
//                 peers_dlgrec_date:$("#peers_dlgrec_date").val(),

//                 peers_dlgrec_0:$("#peers_dlgrec_0").val(),
//                 peers_dlgrec_1:$("#peers_dlgrec_1").val(),
//                 peers_dlgrec_2:$("#peers_dlgrec_2").val(),
//                 peers_dlgrec_3:$("#peers_dlgrec_3").val(),
//                 peers_dlgrec_4:$("#peers_dlgrec_4").val(),
//                 peers_dlgrec_5:$("#peers_dlgrec_5").val(),
//                 peers_dlgrec_6:$("#peers_dlgrec_6").val(),
//                 peers_dlgrec_7:$("#peers_dlgrec_7").val(),
//                 peers_dlgrec_8:$("#peers_dlgrec_8").val(),
//                 peers_dlgrec_9:$("#peers_dlgrec_9").val(),
//                 peers_dlgrec_10:$("#peers_dlgrec_10").val(),
//                 peers_dlgrec_11:$("#peers_dlgrec_11").val(),

//                 dlg_manager:$("#dlg_manager").val(),
//                 // social_worker:$("#social_worker").val(),
//                 // supervise1:$("#supervise1").val(),
//                 // supervise2:$("#supervise2").val()
//             },
//             type: "POST",
//             dataType: "JSON",
//             success: function (data) {
//                 if(data == 1){
//                     swal({
//                         title:'更新成功！',
//                         type:'success',                        
//                     }).then(function(){
//                         location.reload();
//                     }) 
//                 }else{
//                     swal({
//                         title:'更新失敗！請聯絡負責單位',
//                         type:'error',
//                     })
//                 }  
//             },
//             error:function(e){
//                 // console.log(e);
//                 swal({
//                     title:'更新失敗！請聯絡負責單位',
//                     type:'error',
//                 })
//             }
//         });
//     }

// });

//更新結案表基本資料region
$("#peers_dlgrec_update").on("click", function () {
    var peers_dlgrec_id = getUrlVars()["peers_dlgrec_id"];
  
    var stau = false;
  
    if (check_updat_peers_dlgrec_data() != "") {
      stau = false;
    } else {
      stau = true;
    }
    console.log(stau);
  
    if (!stau) {
      swal({
        title: check_updat_peers_dlgrec_data(),
        type: "error",
      });
    } else {
      var exist_arr = check_file_exist();
        if(exist_arr.length != 0)
        {
          swal({
            title: exist_arr[0][1],
            text: "選擇『確認送出』覆蓋現有檔案，或是按『取消』更改檔名",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確認送出",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true,
          })
            .then(
              function (result) {
                if (result) {
                  submit_form();
                }
              },
              function (dismiss) {
                if (dismiss == "cancel") {
                  swal({
                    title: "已取消，建議請更改檔名",
                    type: "success",
                  });
                }
              }
            )
            .catch(swal.noop);
        }
        else
        {
          submit_form();
        }
    }
  });
  
  function submit_form() {
  
    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
      if ($(this).attr("type") != "file") {
          $(this).val(jQuery.trim($(this).val()));
      }
      });
    
      var form_data = new FormData();
  
  
      $("input[type='file']").each(function(index, element) {
          var peers_dlgrec_files = $(this).prop("files");
  
          if (peers_dlgrec_files != undefined) {
            if (peers_dlgrec_files.length != 0) {
              for (var i = 0; i < peers_dlgrec_files.length; i++) {
                form_data.append("peers_dlgrec_files"+index, peers_dlgrec_files[i]);
                // console.log(peers_dlgrec_files[i])
              }
            } 
          }
      });
  
      form_data.append("peers_dlgrec_id", peers_dlgrec_id);
      form_data.append("bf_num", $("#bf_num").val());
      form_data.append("al_num", $("#al_num").val());
      form_data.append("em_num", $("#em_num").val());
      form_data.append("lp_num",$("#lp_num").val());
      form_data.append("leave_num",$("#leave_num").val());
      form_data.append("peers_dlgrec_date", $("#peers_dlgrec_date").val());

      form_data.append("peers_dlgrec_0",$("#peers_dlgrec_0").val());
      form_data.append("peers_dlgrec_1",$("#peers_dlgrec_1").val());
      form_data.append("peers_dlgrec_2",$("#peers_dlgrec_2").val());
      form_data.append("peers_dlgrec_3",$("#peers_dlgrec_3").val());
      form_data.append("peers_dlgrec_4",$("#peers_dlgrec_4").val());
      form_data.append("peers_dlgrec_5",$("#peers_dlgrec_5").val());
      form_data.append("peers_dlgrec_6",$("#peers_dlgrec_6").val());
      form_data.append("peers_dlgrec_7",$("#peers_dlgrec_7").val());
      form_data.append("peers_dlgrec_8",$("#peers_dlgrec_8").val());
      form_data.append("peers_dlgrec_9",$("#peers_dlgrec_9").val());
      form_data.append("peers_dlgrec_10",$("#peers_dlgrec_10").val());
      form_data.append("peers_dlgrec_11",$("#peers_dlgrec_11").val());

      form_data.append("dlg_manager",$("#dlg_manager").val());
      form_data.append("social_worker",$("#social_worker").val());
      form_data.append("supervise1",$("#supervise1").val());
      form_data.append("supervise2",$("#supervise2").val());
  
      // 預覽傳到後端的資料詳細內容
      for (var pair of form_data.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
  
  
    $.ajax({
      url: "database/update_peers_dlgrec_data_detail.php",
      type: "POST",
      data: form_data,
      contentType: false,
      cache: false,
      processData: false,
      async: true,
      success: function (data) {
        console.log(data);
        if (data == 1) {
          swal({
            title: "修改成功！",
            type: "success",
          }).then(function () {
            location.reload();
          });
        } else {
          swal({
            title: "修改失敗！請聯絡負責單位",
            type: "error",
          });
        }
      },
      error: function (e) {
        console.log(e);
      },
    });
}


//結案表(update)的必填欄位 region
function check_updat_peers_dlgrec_data()
{
    var peers_dlgrec_date = $("#peers_dlgrec_date").val();
    
    var errorstr = "";

    if (peers_dlgrec_date == null) {
        errorstr += "未填寫日期!\r\n";
    }
    if (errorstr == "") {
        if (peers_dlgrec_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫日期!\r\n";
        }
    }

    return errorstr;
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
                $("#social_worker").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
//endregion

//取消重整region
function cancel(){
    location.reload();
}
//endregion

//結案總表格鎖定控制region
function peers_dlgrec_edit(){
    $('.peers_dlgrec_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
function peers_dlgrec_cancel(){
    $('.peers_dlgrec_question').attr('disabled', true);
    $('#edit_div').attr('hidden', false);
    $('#save_div').attr('hidden', true);
};
//endregion



//進入預覽WORD頁面region
$("#preview_word").on('click',function(){
    var peers_dlgrec_id = getUrlVars()["peers_dlgrec_id"];
//    console.log(id);
    location.href = 'preview_word.php?peers_dlgrec_id='+peers_dlgrec_id+'';
});

$("#preview_word2").on('click',function(){
    var peers_dlgrec_id = getUrlVars()["peers_dlgrec_id"];
//    console.log(id);
    location.href = 'preview_word2.php?peers_dlgrec_id='+peers_dlgrec_id+'';
})
//endregion


