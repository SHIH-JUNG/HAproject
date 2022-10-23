//取得url id值region
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}
//endregion

var id = getUrlVars()["id"];
var bs_id = getUrlVars()["bs_id"];
var rec_type = getUrlVars()["rec_type"];
var bs_year = getUrlVars()["year"];

//datepicker創建 region
datepicker_create = function (selector_id) {
  $("#" + selector_id).datepicker({
    changeYear: true,
    changeMonth: true,
    currentText: "今天",
    dateFormat: "R年mm月dd日",
    showButtonPanel: true,
    minDate: new Date(
      new Date().getFullYear() - 2,
      new Date().getMonth() - 3,
      1
    ),
    maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
    onClose: function (dateText) {
      // console.log($('#'+selector_id).val());
      // console.log(trans_to_EN(dateText));
    },
    beforeShow: function (input, inst) {
      var $this = $(this);
      var cal = inst.dpDiv;
      var outerh = $this.outerHeight();
      if ($this.offset().top > 1200) {
        outerh = outerh * 4;
      } else {
        outerh = outerh * 3;
      }
      // console.log($this.offset().top)
      // console.log(outerh)

      var top = $this.offset().top - outerh;
      var left = $this.offset().left - 10;
      setTimeout(function () {
        cal.css({
          top: top,
          left: left,
        });
      }, 10);
    },
  });
};
//endregion

//將日期轉為民國年格式111.03.07 region
trans_to_Tw = function (endate) {
  var strAry = endate.split("-");

  if (parseInt(strAry[0]) > 1911) {
    strAry[0] = parseInt(strAry[0]) - 1911;
  }

  return strAry.join(".");
};
//endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN = function (endate) {
  var strAry = endate.split(".");

  if (parseInt(strAry[0]) < 1911) {
    strAry[0] = parseInt(strAry[0]) + 1911;
  }

  return strAry.join("-");
};
//endregion

//檢查SQL撈出來的日期格式region
check_sql_date_format = function (date) {
  if (date == "0000-00-00") {
    date = "";
  } else {
    date = trans_to_Tw(date);
  }

  return date;
};

//存放簽章相關留言arr
supervise_msg_arr = [];

// 抓會議記錄資料 region
$(document).ready(function () {
  $.ajax({
    url: "database/find_board_supervisor_data_detail.php",
    data: {
      bs_id: bs_id,
      year: bs_year,
    },
    type: "POST",
    dataType: "JSON",
    success: function (data) {
      console.log(data);

      $.each(data, function (index, value) {
        switch (rec_type) {
          case "fillin":
            var content_json = JSON.parse("[" + value.record_content + "]");
            break;
          case "upload":
            var content_json = JSON.parse(
              "[" +
                value.upload_content.replace('"[', "[").replace(']"', "]") +
                "]"
            );
            break;
          default:
            var content_json = JSON.parse("[" + value.record_content + "]");
            break;
        }

        // console.log(content_json[0])
        
        $.each(content_json[0], function (i, datan) {
          //獲取name值對應的input類型
          var inputs_type = $("input[name='" + datan.name + "']").attr("type");

          //根據對應的類型選擇js語法填入資料
          if (inputs_type != undefined) {
            switch (inputs_type) {
              case "radio":
              case "checkbox":
                //radio & checkbox填值語法格式
                $(
                  "input[name='" +
                    datan.name +
                    "'][value='" +
                    datan.value +
                    "']"
                ).attr("checked", true);
                break;

              //text填值語法格式
              case "text":
                $("input[name='" + datan.name + "']").val(datan.value);
                break;
              case "file":
                //file類型跳過，下面再後續處理
                break;
              default:
                $("input[name='" + datan.name + "']").val(datan.value);
                break;
            }
          } 

          //若不是input標籤
          var tag_name = $("[name='" + datan.name + "']").prop("tagName");
          //其他 select、textarea

          if(tag_name == "TEXTAREA")
          {
            $("[name='" + datan.name + "']").val(datan.value.replaceAll(";;", "\r\n"));
          }
          else if(tag_name == "SELECT")
          {
            $("[name='" + datan.name + "']").val(datan.value);
          }
        });

        //file類型顯示資料處理 region
        //獲取所有 type="file" 的元素
        var inputs_type_files = $('[type="file"]');
        // console.log(inputs_type_files)
        //如果存在 type="file" 的元素，繼續以下動作
        if (inputs_type_files.length > 0) {
          //顯示檔案圖片、路徑
          for (var i = 0; i < inputs_type_files.length; i++) {
            //從資料庫抓取的格式為 "../upload/檔案.檔名"
            //replace()更改為 "檔案.檔名"
            var file_val = data[0].file_path.replace(
              "../board_supervisor/upload/",
              ""
            );

            //該input value寫入"檔案.檔名"
            $("input[name*='customFile']").eq(i).attr("value", file_val);

            //檔案連結與圖片string
            var file_html =
              '<a name="customFile' +
              (i + 1) +
              '_a" href="./board_supervisor/upload/' +
              file_val +
              '" style="text-decoration:none;color:blue;" target="_blank">' +
              file_val +
              '<br/><img style="vertical-align:middle;" width="auto" src="./board_supervisor/upload/' +
              file_val +
              '"></a>';

            //寫入該input相對應的div元素 (id="customFile^") 中顯示
            $("#customFile" + (i + 1)).html(file_html);
          }
        }
        //endregion

        var supervise_sign_file_val = value.Supervise_signature.replace("\.\.\/board_supervisor\/signature\/", "");
        
        $("#supervise").val(value.Supervise)


        $("#supervise_signature_simg").text("點擊顯示簽名圖片")

        if(supervise_sign_file_val=="")
        {
          $("#supervise_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
        }
        else
        {
          $("#supervise_signature_simg").attr("href", "./board_supervisor/signature/"+supervise_sign_file_val)
        }

        supervise_msg_arr.push(value.Supervise_sign_msg)
        supervise_msg_arr.push(value.Supervise_sign_time)

        $("#adate").text(
          value.Create_date != "0000-00-00 00:00:00" ? value.Create_date : ""
        );
        $("#applicant").text(value.Create_name);
        $("#udate").text(
          value.Update_date != "0000-00-00 00:00:00" ? value.Update_date : ""
        );
        $("#up_applicant").text(value.Update_name);
      });
    },
    error: function (e) {
      console.log("error");
    },
  });
  $(".bs_question").attr("disabled", true);

  //將name名稱為ch_datepicker創建datepicker初始化 region
  $("[datepicker='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  //jsignature插件初始化 region
  jsignature_initialization("supervise");
  //endregion  

  //隱藏jsignature畫布區域 region
  $("#supervise_signature_area").hide();
  $("#social_worker_signature_area").hide();
  //endregion  
});

//endregion
sign_msg_model = function(sign_type_name) {
  //手動新增按鈕點擊跳出模態框
  $('#myModal').on('shown.bs.modal', function () {
      $('#'+sign_type_name).trigger('focus');
  });

  // console.log(social_worker_msg_arr)
  // console.log(supervise_msg_arr)

  switch (sign_type_name) {
      case 'supervise':
              var type_name = "督導";
              $(".sign_msg").text(supervise_msg_arr[0]);
              $(".sign_msg_time").val(supervise_msg_arr[1]);
          break;
  
      case 'social_worker':
              var type_name = "社工員";
              $(".sign_msg").text(social_worker_msg_arr[0]);
              $(".sign_msg_time").val(social_worker_msg_arr[1]);
          break;
  }

  $(".sign_msg_td_name").text(type_name+"簽名留言內容");
}


//jsignature插件初始化 region
function jsignature_initialization(init_name) {
  var $sigdiv = $("#"+init_name+"_signature");
  $sigdiv.jSignature({'UndoButton':true}); // 初始化jSignature插件-属性用","隔开
  // $sigdiv.jSignature({'decor-color':'red'}); // 初始化jSignature插件-设置横线颜色
  // $sigdiv.jSignature({'lineWidth':"6"});// 初始化jSignature插件-设置横线粗细
  // $sigdiv.jSignature({"decor-color":"transparent"});// 初始化jSignature插件-去掉横线
  // $sigdiv.jSignature({'UndoButton':true});// 初始化jSignature插件-撤销功能
  // $sigdiv.jSignature({'height': 100, 'width': 200}); // 初始化jSignature插件-设置书写范围(大小)

  $("#"+init_name+"_signature").bind('change', function(e){
      var datapair = $sigdiv.jSignature("getData", "image");
      $("#"+init_name+"_images").attr('src','data:' + datapair[0] + "," + datapair[1]);
  })

  $("#"+init_name+"_signature_submit").click(function(){

      var ajax_url = 'database/update_board_supervisor_data_detail_signature.php';

      var src_data = $("#"+init_name+"_images").attr('src');
      // console.log(src);
      // console.log(bs_id);
      if(src_data){
          $.ajax({
              type:'post',
              url:ajax_url,
              data:{
                  bs_id: bs_id,
                  src_data:src_data,
                  sign_msg:$("#"+init_name+"_signature_msg").val(),
                  sign_type:init_name,
                  sign_url:window.location.href.split("HA\/")[1],
              },
              async:false,
              success:function(data){
                  // console.log(data);
                  if(data){
                      swal({
                          title:'送出簽名成功！',
                          type:'success',                        
                      }).then(function(){
                          location.reload();
                      }) 
                  }else{
                      swal({
                          title:'生成簽名圖片失敗！請聯絡負責單位',
                          type:'error',
                      })
                  }
              }
          });
      }else{
          alert('簽名圖片檔不能為空！');return false;
      }
  });
  $("#"+init_name+"_reset").click(function(){
      $("#"+init_name+"_signature").jSignature("reset"); //重置画布，可以进行重新作画
      $("#"+init_name+"_images").attr('src','');
  });
}
//endregion

//按督導簽名，顯示簽名畫布 region
$("#supervise_signature_btn").on('click',function(){
  $("#supervise_signature_area").show();
  $("#collapseTwo").hide();
});
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function() {
  $("#supervise_signature_area").hide();
  $("#social_worker_signature_area").hide();
  $("#collapseTwo").show();
  // $('html, body').scrollTop(0);
}
//endregion

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion

// 判斷會議記錄 是屬於上傳檔案或填寫檔案 region
function rec_update() {
  var rec_type = getUrlVars()["rec_type"];

  switch (rec_type) {
    case "fillin":
      rec_update_fillin();
      break;
    case "upload":
      rec_update_upload();
      break;
  }
}
//endregion

//修改會議記錄region
function rec_update_fillin() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

  var form = $("#form_a").serializeArray();

  $.each(form, function (seq, element) {

    var inputs_type = $("[name='"+element.name+"']").prop("tagName");

    if(inputs_type == "TEXTAREA")
    {
      element.value = element.value.replace(/\r\n/g, ";;");
    }

  });

  var meeting_date_year_split = $("#meeting_date").val().split("年");
  var title = '理監事會記錄簽核：'+$("#title_name").val();

  // console.log(form)

  var stau = false;

  if (check_updat_board_supervisor_data() != "") {
    stau = false;
  } else {
    stau = true;
  }

  if (!stau) {
    swal({
      title: check_updat_board_supervisor_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/update_board_supervisor_data_detail.php",
      type: "POST",
      data: {
        bs_id: bs_id,
        record_content: form,
        year: meeting_date_year_split[0],

        signed_timestamp:$(".sign_msg_time").val(),
        assign:$("#applicant").text(),
        title:title,
        signer:$("#supervise").val(),
        rec_date_time:split_date($("#meeting_date").val())+" "+$("#meeting_time").val(),
      },
      //            dataType: "JSON",
      success: function (data) {
        // console.log(data);
        if (data == 1) {
          swal({
            type: "success",
            title: "更新成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.href =
              "board_supervisor_detail.php?year=" +
              meeting_date_year_split[0] +
              "&id=" +
              id +
              "&bs_id=" +
              bs_id +
              "&rec_type=" +
              rec_type +
              "";
          });
        } else {
          swal({
            type: "error",
            title: "更新失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          });
        }
      },
      error: function () {
        swal({
          type: "error",
          title: "更新失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
        });
      },
    });
  }
}
//endregion

//宣告存入 file Object的空陣列
var file_name = [];

//選擇檔案的動作region
$("input[name*='customFile']").change(function (event) {
  //獲取 檔名.檔案格式
  var filePath = $(this).val().split("\\");
  //獲取 file name名稱
  var name = $(this).attr("name");
  //獲取檔案格式
  var filetype = filePath[filePath.length - 1].split(".");
  var ext = filetype[filetype.length - 1];
  // console.log(ext)

  //file_name中name值 重複次數
  var repeat_num = 0;
  //file_name中name值 重複的索引值
  var repeat_index;

  //創建臨時檔案連結
  // var tmppath = URL.createObjectURL(event.target.files[0]);

  //若檔案為圖片格式，則顯示圖片，否則不顯示圖片
  if (isAssetTypeAnImage(ext.toLowerCase())) {
    $("#" + name + "_img")
      .fadeIn("fast")
      .attr("src", URL.createObjectURL(event.target.files[0]));
  } else {
    $("#" + name + "_img").css("display", "none");
  }

  //預覽上傳檔名
  $("#" + name).html("檔名：" + filePath[filePath.length - 1]);

  //查看 file_name 中是否已有重複元素
  $.each(file_name, function (i, obj) {
    if (obj.name == name) {
      repeat_num++;
      repeat_index = i;
    } else {
      repeat_num = 0;
    }
  });
  // console.log(repeat_num);

  //如果file_name中未找到相同name值，則新加入一筆資料至file_name
  //否則，找到相對應索引repeat_index name值，更新該value值
  if (repeat_num == 0) {
    file_name.push({ name: name, value: filePath[filePath.length - 1] });
  } else {
    file_name[repeat_index]["value"] = filePath[filePath.length - 1];
  }

  // console.log(file_name)
});
//endregion

//檢查是否為圖片檔region
function isAssetTypeAnImage(ext) {
  return (
    ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd", "svg", "tiff"].indexOf(
      ext.toLowerCase()
    ) !== -1
  );
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
      url: "database/board_supervisor_file_check.php",
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
              "../board_supervisor/upload/",
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
      },
    });
  });
  return exist_info;
}
//endregion

//檢查檔案重複，並更新上傳會議記錄 region
function rec_update_upload() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

  //判斷該量表是否含有 input[type="file"] 類型資料
  if ($('input[type="file"]').length != 0) {
    var exist_arr = check_file_exist();

    console.log(exist_arr);
    //如果上傳的檔案檔名重複則提示使用者
    if (exist_arr.length != 0) {
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
              submit_form_data_upload();
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
      submit_form_data_upload();
    }
  } else {
    submit_form_data_upload();
  }
}
//endregion

//更新上傳會議記錄ajax資料格式 region
function submit_form_data_upload() {
  var form_data = new FormData();
  var form = $("#form_b").serializeArray();


  $.each(form, function (seq, element) {

    var inputs_type = $("[name='"+element.name+"']").prop("tagName");

    if(inputs_type == "TEXTAREA")
    {
      element.value = element.value.replace(/\r\n/g, ";;");
    }

  });


  var customfile = $('[type="file"]').prop("files");

  var upload_rec_date_year_split = $("#upload_rec_date").val().split("年");

  // console.log(customfile)

  if (file_name.length == 0) {
    var input_files_len = $('[type="file"]');
    var inputs_files_value = $('[type="file"]').attr("value");
    var inputs_files_name = $('[type="file"]').attr("name");

    if (inputs_files_value != undefined) {
      for (var i = 0; i < input_files_len.length; i++) {
        file_name.push({ name: inputs_files_name, value: inputs_files_value });
      }
    }

    form = form.concat(file_name);
  } else {
    form = form.concat(file_name);
  }

  if (customfile != undefined) {
    if (customfile.length != 0) {
      for (var i = 0; i < customfile.length; i++) {
        form_data.append("file4", customfile[i]);
        // console.log(customfile[i])
      }
    } else {
      //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
      form_data.append("File_name", $('[type="file"]').attr("value"));
    }
  }

  form_data.append("bs_id", bs_id);
  form_data.append("year", upload_rec_date_year_split[0]);
  form_data.append("upload_content", JSON.stringify(form));
  form_data.append("signed_timestamp", $(".sign_msg_time").val());

  form_data.append("assign", $("#applicant").text());
  form_data.append("title", '理監事會記錄簽核：'+$("#upload_title_name").val());
  form_data.append("signer", $("#supervise").val());
  form_data.append("rec_date_time", split_date($("#upload_rec_date").val())+" 00:00");
  
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }

  $.ajax({
    url: "database/update_upload_board_supervisor_data_detail.php",
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
          title: "更新成功!",
          allowOutsideClick: false, //不可點背景關閉
        }).then(function () {
          window.location.href =
            "board_supervisor_detail.php?year=" +
            upload_rec_date_year_split[0] +
            "&id=" +
            id +
            "&bs_id=" +
            bs_id +
            "&rec_type=" +
            rec_type +
            "";
        });
      } else {
        swal({
          type: "error",
          title: "更新失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
        });
      }
    },
    error: function (e) {
      swal({
        type: "error",
        title: "更新失敗!請聯絡負責人",
        allowOutsideClick: false, //不可點背景關閉
      });
      console.log(e);
    },
  });
}
//endregion

test = function() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

  var form = $("#form_a").serializeArray();

  var meeting_date_year_split = $("#meeting_date").val().split("年");
  $.each(form, function (seq, element) {

    var inputs_type = $("[name='"+element.name+"']").prop("tagName");

    if(inputs_type == "TEXTAREA")
    {
      element.value = element.value.replace(/\\/g, "");
    }

  });
  
  console.log(form)
}

//會議記錄(update)的必填欄位 region
function check_updat_board_supervisor_data() {
  var ceo_name = $("#ceo_name").val();
  var attendees = $("#attendees").val();
  var absent = $("#absent").val();
  var record = $("#record").val();
  var meeting_date = $("#meeting_date").val();
  var meeting_time = $("#meeting_time").val();
  var place = $("#place").val();

  var errorstr = "";

  if (ceo_name == null) {
    errorstr += "未填寫主席!\r\n";
  }
  if (attendees == null) {
    errorstr += "未填寫出席人員!\r\n";
  }
  if (absent == null) {
    errorstr += "未填寫請假人員!\r\n";
  }
  if (record == null) {
    errorstr += "未填寫紀錄者!\r\n";
  }
  if (meeting_date == null) {
    errorstr += "未填寫會議日期!\r\n";
  }
  if (meeting_time == null) {
    errorstr += "未填寫會議時間!\r\n";
  }
  if (place == null) {
    errorstr += "未填寫會議地點!\r\n";
  }
  if (errorstr == "") {
    if (ceo_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫主席!\r\n";
    }
    if (attendees.replace(/\s*/g, "") == "") {
      errorstr += "未填寫出席人員!\r\n";
    }
    if (absent.replace(/\s*/g, "") == "") {
      errorstr += "未填寫請假人員!\r\n";
    }
    if (record.replace(/\s*/g, "") == "") {
      errorstr += "未填寫紀錄者!\r\n";
    }
    if (meeting_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議日期!\r\n";
    }
    if (meeting_time.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議時間!\r\n";
    }
    if (place.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議地點!\r\n";
    }
  }

  return errorstr;
}
//endregion

// 禁止所有輸入框輸入 反斜線符號\ region
$("input, textarea").on("input", function() {
    return $(this).val($(this).val().replace(/\\/g,''));
});
//endregion

//會議記錄總表格鎖定控制region
function bs_edit() {
  $(".bs_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
//endregion

//取消重整region
function bs_cancel() {
  location.reload();
}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on("click", function () {
  var bs_id = getUrlVars()["bs_id"];
  //    console.log(id);
  location.href = "preview_word.php?bs_id=" + bs_id + "";
});

$("#preview_word2").on("click", function () {
  var bs_id = getUrlVars()["bs_id"];
  //    console.log(id);
  location.href = "preview_word2.php?bs_id=" + bs_id + "";
});
//endregion
