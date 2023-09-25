$(document).ready(function(){

    append_user();
    $("#user").val(assign_name);
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
  
    form_data.append("bf_num", $("#bf_num").val());
    form_data.append("al_num", $("#al_num").val());
    form_data.append("em_num", $("#em_num").val());
    form_data.append("lp_num",$("#lp_num").val());
    form_data.append("leave_num",$("#leave_num").val());
    form_data.append("peers_dlgrec_date",$("#peers_dlgrec_date").val());
    form_data.append("peers_dlgrec_0", $("#peers_dlgrec_0").val());
    form_data.append("peers_dlgrec_1", $("#peers_dlgrec_1").val());
    form_data.append("peers_dlgrec_2", $("#peers_dlgrec_2").val());
    form_data.append("peers_dlgrec_3",$("#peers_dlgrec_3").val());
    form_data.append("peers_dlgrec_4",$("#peers_dlgrec_4").val());
    form_data.append("peers_dlgrec_5",$("#peers_dlgrec_5").val());
    form_data.append("peers_dlgrec_6", $("#peers_dlgrec_6").val());
    form_data.append("peers_dlgrec_7", $("#peers_dlgrec_7").val());
    form_data.append("peers_dlgrec_8", $("#peers_dlgrec_8").val());
    form_data.append("peers_dlgrec_9",$("#peers_dlgrec_9").val());
    form_data.append("peers_dlgrec_10",$("#peers_dlgrec_10").val());
    form_data.append("peers_dlgrec_11",$("#peers_dlgrec_11").val());
  
  
    form_data.append("dlg_manager", $("#dlg_manager").val());
    form_data.append("social_worker",$("#social_worker").val());
    form_data.append("supervise1",$("#supervise1").val());
    form_data.append("supervise2",$("#supervise2").val());
  
  
  
    $.ajax({
        url: "database/add_new_peers_dlgrec.php",
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
              type: "success",
              title: "新增成功!",
              allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
              window.location.href =
                "peers_dlgrec.php";
            });
          } else {
            swal({
              type: "error",
              title: "新增失敗!請聯絡負責人",
              allowOutsideClick: false, //不可點背景關閉
            });
          }
        },
        error: function (e) {
            console.log(e)
            swal({
                type: "error",
                title: "新增失敗!請聯絡負責人",
                allowOutsideClick: false, //不可點背景關閉
            });
        },
      });
  }
  
  // //新增來文紀錄region
  $("#peers_dlgrec_add_new").on("click", function () {
     
    //判斷該量表是否含有 input[type="file"] 類型資料
    if ($('input[type="file"]').length != 0) {
      var exist_arr = check_file_exist();
  
      // console.log(exist_arr);
      //如果上傳的檔案檔名重複則提示使用者
      if (exist_arr.length != 0) {
        // console.log(exist_arr[0][1]);
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
      } else {
        var stau = false;
  
        if (check_null_data() != "以下為必填欄位，不能為空值!\r\n") {
          stau = false;
        } else {
          stau = true;
        }
  
        if (!stau) {
          swal({
            title: check_null_data(),
            type: "error",
          });
        } else {
          submit_form();
        }
      }
    } else {
      return false;
    }
  });
  //endregion
  
  //檢查生輔紀錄的必填欄位region
function check_add_peers_dlgrec_data()
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
  
  //檢查必填欄位 region
  function check_null_data() {
    var errorstr = "以下為必填欄位，不能為空值!\r\n";
  
    $(".fillin_need").each(function(index,element){
  
      var check_element = $(this).parent("td").siblings("td").children()[0];
      var check_element_name = $(this).parent("td").text();
  
      console.log($(check_element))
      console.log($(check_element).val())
  
      var check_element_tagname = $(check_element).prop("tagName");
      var check_element_type = $(check_element).attr("type");
  
      if(check_element_tagname == "INPUT" && check_element_type=="file")
      {
        var file_len = $(check_element).prop("files").length;
  
        if(file_len == 0)
        {
          errorstr += check_element_name.replace("※", "") + "\r\n";
        }
      }
      else if(check_element_tagname == "INPUT" && check_element_type=="radio")
      {
        var check_element_children_name = $(this).parent("td").siblings("td").children().attr("name");
  
        if($('[name="'+check_element_children_name+'"]:checked').length==0)
        {
          errorstr += check_element_name.replace("※", "") + "\r\n";
        }
      }
      else
      {
        if($(check_element).val() == null || $(check_element).val().replace(/\s*/g, "") == "")
        {
          errorstr += check_element_name.replace("※", "") + "\r\n";
        }
      }    
    });
  
    return errorstr;
  }
  //endregion
  
  //檢查檔名是否重複，提示使用者region
  function check_file_exist() {
    var check_file_value = $('input[type="file"]').prop("files");
    var warning_str = "";
    var file_arr = [];
    var file_n = "";
    var exist_info = [];
  
    for (var i = 0; i < check_file_value.length; i++) {
      file_arr.push(check_file_value[i]["name"]);
    }
    $.each(file_arr, function (index, value) {
      $.ajax({
        url: "database/peers_dlgrec_file_check.php",
        data: {
          file_name: value,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
          //  console.log(data)
          if (data != "") {
            $.each(data, function (index, value) {
              file_n = data[index].file_path.replace(
                "../peers_dlgrec/",
                ""
              );
  
              warning_str += "已有重複檔案名稱：\n" + file_n;
  
              exist_info.push([file_n, warning_str]);
            });
          } else {
            warning_str = "";
          }
        },
        error: function (e) {
          console.log(e);
          notyf.alert('伺服器錯誤,無法載入');
        },
      });
    });
    return exist_info;
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
  
  