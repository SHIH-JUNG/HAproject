const notyf = new Notyf();

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
    // minDate: new Date(
    //   new Date().getFullYear() - 2,
    //   new Date().getMonth() - 3,
    //   1
    // ),
    // maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
    yearRange: "-15:+5",
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
director_msg_arr = [];
supervise_msg_arr = [];

// 抓會議記錄資料 region
$(document).ready(function () {


  //將name名稱為ch_datepicker創建datepicker初始化 region
  $("[datepicker='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  $.ajax({
    type:'POST',
    url:'database/find_check_user.php',
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log('test',data)
        for (var index in data.Id) {
            $("[id=supervise]").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            $("[id=director]").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
        }
    },
  });


  //載入會議資料
  load_rec_datas();

  if(user_name == $("#supervise").val() || user_name == $("#director").val())
  {
    $("#allow_status").attr("disabled", false);
    $("#submit_area").show();
  }
  else
  {
    $("#allow_status").attr("disabled", true);
    $("#submit_area").hide();
  }

  //jsignature插件初始化 region
  jsignature_initialization();
  //endregion  

  //隱藏jsignature畫布區域 region
  $("#signature_area").hide();
  //endregion

  imagePreview();
  
  tab_toggle();
});

//endregion

sign_msg_model = function (sign_type_name) {
  //手動新增按鈕點擊跳出模態框
  $("#myModal2").on("shown.bs.modal", function () {
    $("#" + sign_type_name).trigger("focus");
  });

  // console.log(social_worker_msg_arr)
  // console.log(supervise_msg_arr)

  switch (sign_type_name) {
    case "director":
      var type_name = "主管";
      $(".sign_msg").text(director_msg_arr[0]);
      $(".sign_msg_time").val(director_msg_arr[1]);
      break;

    case "supervise":
      var type_name = "執行長";
      $(".sign_msg").text(supervise_msg_arr[0]);
      $(".sign_msg_time").val(supervise_msg_arr[1]);
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

  var ajax_url = "database/update_board_supervisor_data_detail_signature_v2.php";

  var src_data = $("#signature_images").attr("src");
  // console.log(src);

  // 判斷有無簽名圖片，若有送出簽名並儲存檔案
  if (src_data) {
    // console.log("submit_sign");
    $.ajax({
      type: "post",
      url: ajax_url,
      data: {
        bs_id: bs_id,
        src_data: src_data,
        sign_msg: $("#signature_msg").val(),
        sign_type: sign_type,
        sign_name:$("#"+sign_type+"").val(),
        sign_url:window.location.href.split("HA\/")[1],
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
            title: "生成簽名圖片失敗！請聯絡網站維護人員",
            type: "error",
          });
        }
      },
    });
  } else {
    alert("簽名圖片檔不能為空！");
    return false;
  }
}
//endregion

//按簽名 按紐，顯示簽名畫布 隱藏其他詳細資料 region
signature_btn_click = function(sign_board_name) {

  var type_name = "";

  switch (sign_board_name) {
    case "director":
      type_name = "主管";
      break;

    case "supervise":
      type_name = "執行長";
      break;
  }

  $("#signature_h4").text(type_name + "簽名");
  $("#signature_title_td").text(type_name);
  $("#signature_msg_td").text(type_name);
  $("#sign_submit_btn").attr("board_name", sign_board_name);

  $("#signature_area").show();
  $("#collapseOne").hide();
  $("#collapseTwo").hide();
}
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function () {
  $("#signature_area").hide();
  $("#collapseOne").show();
  $("#collapseTwo").show();

  // $('html, body').scrollTop(0);
};
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
    // case "fillin":
    //   rec_update_fillin();
    //   break;
    case "upload":
      rec_update_upload();
      break;
  }
}
//endregion


//宣告存入 file Object的空陣列
var file_name = [];


// 檢查檔案類型是否為圖片 region
function isAssetTypeAnImage(ext) {
  return [
  'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].
  indexOf(ext.toLowerCase()) !== -1;
}
// endregion

function load_rec_datas() 
{
  $.ajax({
    url: "database/find_board_supervisor_data_detail_v2.php",
    data: {
      bs_id: bs_id,
      year: bs_year,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
      // console.log(data);

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

        //customFile1顯示資料處理 region
        
        var customFile1_arr = value.Agenda_file_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");

        window.customFile1_input_val_arr = [];

        var customFile1_htmlstr = "";
        
        if(value.Agenda_file_path != "")
        {
          $.each(customFile1_arr, function (i, val) {

            var agenda_file_path = val.replace("../", "./");
            var agenda_file_name = val.split("/");

            var agenda_file_val = agenda_file_name[agenda_file_name.length - 1];

            customFile1_input_val_arr.push(val);

            var index = agenda_file_val.lastIndexOf(".");
            
            if(isAssetTypeAnImage(agenda_file_val.substr(index+1)))
            {
              customFile1_htmlstr += '<input class="bs_question" style="zoom: 1.5" class="form-check-input" type="radio" name="customFile1_check" file_type_name="agenda_file_path" forms_sql_id="' + value.Id + '" value="' + i + '">'
              + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + agenda_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + agenda_file_val
              + '</a><br/>'
              +'<img src="' + agenda_file_path + '" id="val_arr_img'+i+'" title="'+agenda_file_val+'" width="200" height="200" class="apreview" />' 
              +'<hr/><br/>';
            }
            else
            {
              customFile1_htmlstr += '<input class="bs_question" style="zoom: 1.5" class="form-check-input" type="radio" name="customFile1_check" file_type_name="agenda_file_path" forms_sql_id="' + value.Id + '" value="' + i + '">'
              + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + agenda_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + agenda_file_val
              + '</a><br/><br/>';
            }
            
          });
        }
        
        customFile1_htmlstr += '<br/>'
          + '<button class="bs_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(0);">刪除</button>'
          + '<div>※點選上面要刪除的檔案</div>'
          + '<br/><hr style="border:3px dashed blue; height:1px">'
          + '<button class="bs_question" style="color:blue;" type="button" onclick="selectFiles_insert(0);">新增檔案+</button><br/><div id="selected-files1"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';

        $("#customFile1").html(customFile1_htmlstr);
        //customFile1顯示資料處理 endregion

        //customFile1顯示資料處理 region
        var customFile2_arr = value.Rec_file_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");

        window.customFile2_input_val_arr = [];

        var customFile2_htmlstr = "";
        
        if(value.Rec_file_path != "")
        {
          $.each(customFile2_arr, function (i, val) {

            var rec_file_path = val.replace("../", "./");
            var rec_file_name = val.split("/");

            var rec_file_val = rec_file_name[rec_file_name.length - 1];

            customFile2_input_val_arr.push(val);

            var index = rec_file_val.lastIndexOf(".");
            
            if(isAssetTypeAnImage(rec_file_val.substr(index+1)))
            {
              customFile2_htmlstr += '<input class="bs_question" style="zoom: 1.5" class="form-check-input" type="radio" name="customFile2_check" file_type_name="rec_file_path" forms_sql_id="' + value.Id + '" value="' + i + '">'
              + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + rec_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + rec_file_val
              + '</a><br/>'
              +'<img src="' + rec_file_path + '" id="val_arr_img'+i+'" title="'+rec_file_val+'" width="200" height="200" class="apreview" />' 
              +'<hr/><br/>';
            }
            else
            {
              customFile2_htmlstr += '<input class="bs_question" style="zoom: 1.5" class="form-check-input" type="radio" name="customFile2_check" file_type_name="rec_file_path" forms_sql_id="' + value.Id + '" value="' + i + '">'
              + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + rec_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + rec_file_val
              + '</a><br/><br/>';
            }
            
          });
        }
        
        customFile2_htmlstr += '<br/>'
          + '<button class="bs_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(1);">刪除</button>'
          + '<div>※點選上面要刪除的檔案</div>'
          + '<br/><hr style="border:3px dashed blue; height:1px">'
          + '<button class="bs_question" style="color:blue;" type="button" onclick="selectFiles_insert(1);">新增檔案+</button><br/><div id="selected-files2"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';

        $("#customFile2").html(customFile2_htmlstr);
        //customFile1顯示資料處理 endregion

        //supervise顯示簽名 region
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
        //supervise顯示簽名 endregion

        //director顯示簽名 region
        var director_sign_file_val = value.Director_signature.replace("\.\.\/board_supervisor\/signature\/", "");
        
        $("#director").val(value.Director)


        $("#director_signature_simg").text("點擊顯示簽名圖片")

        if(director_sign_file_val=="")
        {
          $("#director_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
        }
        else
        {
          $("#director_signature_simg").attr("href", "./board_supervisor/signature/"+director_sign_file_val)
        }

        director_msg_arr.push(value.Director_sign_msg)
        director_msg_arr.push(value.Director_sign_time)
        //director顯示簽名 endregion

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
      notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
    },
  });

  $(".bs_question").prop("disabled", true);
}


//檢查檔案重複，並更新上傳會議記錄 region
function rec_update_upload() {
  var stau = false;

  if (check_updat_data() != "") 
  {
    stau = false;
  } 
  else 
  {
    stau = true;
  }

  if (!stau) 
  {
    swal({
      title: check_updat_data(),
      type: "error",
    });
  } 
  else 
  {
    submit_form_data_upload();
  }
}
//endregion

//更新上傳會議記錄ajax資料格式 region
function submit_form_data_upload() 
{
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

  var form_data = new FormData();
  var form = $(".form").serializeArray();

  $.each(form, function (seq, element) {

    var inputs_type = $("[name='"+element.name+"']").prop("tagName");

    if(inputs_type == "TEXTAREA")
    {
      element.value = element.value.replace(/\r\n/g, ";;");
    }

  });

  var upload_rec_date_year_split = $("#upload_rec_date").val().split("年");

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

  for (var a = 0; a < selectedFiles1.length; a++) {
    form_data.append("agenda_files[]", selectedFiles1[a]);
  }

  for (var a = 0; a < selectedFiles2.length; a++) {
    form_data.append("rec_files[]", selectedFiles2[a]);
  }

  form_data.append("bs_id", bs_id);
  form_data.append("rec_type", rec_type);

  form_data.append("year", upload_rec_date_year_split[0]);
  form_data.append("upload_content", JSON.stringify(form));
  form_data.append("signed_timestamp", $(".sign_msg_time").val());
  // form_data.append("Director",$("#director").val());
  // form_data.append("Supervise",$("#supervise").val());
  form_data.append("assign", $("#applicant").text());
  form_data.append("title", '理監事會記錄簽核：'+$("#upload_title_name").val());
  form_data.append("signer", $("#director").val() + "、" + $("#supervise").val());
  form_data.append("rec_date_time", split_date($("#upload_rec_date").val())+" 00:00");
  

  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }

  $.ajax({
    url: "database/update_upload_board_supervisor_data_detail_v2.php",
    type: "POST",
    data: form_data,
    contentType: false,
    cache: false,
    processData: false,
    async: true,
    success: function (data) {
    //   console.log(data);
      if (data == 1) {
        swal({
          type: "success",
          title: "更新成功!",
          allowOutsideClick: false, //不可點背景關閉
        }).then(function () {
          window.location.href =
            "board_supervisor_detail_v2.php?year=" +
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
          title: "更新失敗！請聯絡網站維護人員",
          allowOutsideClick: false, //不可點背景關閉
        });
      }
    },
    error: function (e) {
      swal({
        type: "error",
        title: "更新失敗！請聯絡網站維護人員",
        allowOutsideClick: false, //不可點背景關閉
      });
    //   console.log(e);
    },
  });
}
//endregion

//會議記錄(update)的必填欄位 region
function check_updat_data() {
  var upload_title_name = $("#upload_title_name").val();
  var upload_agenda_title_name = $("#upload_agenda_title_name").val();
  // var customFile1 = $("[name*=customFile1]").prop("files").length;
  // var customFile2 = $("[name*=customFile2]").prop("files").length;

  var director = $("#director").val();
  var supervise = $("#supervise").val();

  var errorstr = "";

  if(upload_title_name == null) {
    errorstr += "未填寫理監事會記錄標題!\r\n";
  }
  if(upload_agenda_title_name == null) {
    errorstr += "未填寫會議章程標題!\r\n";
  }
  // if(customFile1 == 0) {
  //   errorstr += "未上傳會議章程檔案!\r\n";
  // }
  // if(customFile2 == 0) {
  //   errorstr += "未上傳會議記錄檔案!\r\n";
  // }
  if (director == null) {
    errorstr += "未選擇主管!\r\n";
  }
  if (supervise == null) {
    errorstr += "未選擇執行長!\r\n";
  }
  if (errorstr == "") {
    if(upload_title_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫理監事會記錄標題!\r\n";
    }
    if(upload_agenda_title_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議章程標題!\r\n";
    }
    if (director.replace(/\s*/g, "") == "") {
      errorstr += "未選擇主管!\r\n";
    }
    if (supervise.replace(/\s*/g, "") == "") {
      errorstr += "未選擇執行長!\r\n";
    }
  }

  return errorstr;
}
//endregion

// 刪除履歷表檔案內容 多檔案上傳 region
selectFiles_delete = function (select_file_type_n) {


  var file_type_n = "";

  switch (select_file_type_n) {
    case 0:
      file_type_n = "customFile1";
      var file_input_val_arr = customFile1_input_val_arr;
      break;
  
    case 1:
      file_type_n = "customFile2";
      var file_input_val_arr = customFile2_input_val_arr;
      break;
  }

  if ($("[name='"+file_type_n+"_check']:checked").length > 0) {
    // console.log($("#val_arr" + $("[name='"+file_type_n+"_check']:checked").attr("value")))
    swal({
      title: "是否刪除該檔案？\n" + "檔名："+ $("#val_arr" + $("[name='"+file_type_n+"_check']:checked").attr("value")).text(),
      text: "確認刪除後將無法復原操作",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "確認",
      cancelButtonText: "取消",
      showConfirmButton: true,
      showCancelButton: true
    }).then(function (result) {
      if (result) {
        var file_sql_id = $("[name='"+file_type_n+"_check']:checked").attr("forms_sql_id");
        var file_val = $("[name='"+file_type_n+"_check']:checked").attr("value");

        
        // console.log(file_input_val_arr)
        var bs_file = file_input_val_arr.splice(parseInt(file_val), 1);
        // console.log("------------------------")
        // console.log(file_sql_id)
        // console.log(bs_id)
        // console.log(file_input_val_arr)
        // console.log(file_val)
        // console.log(bs_file[0])

        $.ajax({
          url: "database/delete_bs_file.php",
          type: "POST",
          data: {
            File_type_n:file_type_n,
            Form_sql_id: file_sql_id,
            bs_id: bs_id,
            File_arr: file_input_val_arr,
            File_delete_index: file_val,
            Remove_file: bs_file[0],
          },
          // dataType: "JSON",
          success: function (data) {
            // console.log(data);
            if (data == 1) {
              swal({
                type: "success",
                title: "刪除檔案成功!",
                allowOutsideClick: false, //不可點背景關閉
              }).then(function () {
                location.reload();
              });
            }

          },
          error: function (e) {
            //console.log(e)
            swal({
              type: "error",
              title: "刪除檔案失敗！請聯絡網站維護人員",
              allowOutsideClick: false, //不可點背景關閉
            });
          },
        });

      }
    }, function (dismiss) {
      if (dismiss == 'cancel') {
        swal({
          title: '已取消',
          type: 'success',
        })
      }
    }).catch(swal.noop)
  }
  else {
    swal({
      type: 'warning',
      title: '請選取要刪除的檔案!',
      allowOutsideClick: false //不可點背景關閉
    })
  }
}
//endregion

window.selectedFiles1 = [];
window.selectedFiles1_str = "";


window.selectedFiles2 = [];
window.selectedFiles2_str = "";

selectFiles_insert = function (select_file_type_n) 
{



  switch (select_file_type_n) {
    case 0:
      // console.log("a1")
      if(selectedFiles1.length==0)
      {
        selected_files(select_file_type_n);
      }
      else
      {
          swal({
            title: "已經有選擇檔案，是否清空當前檔案清單，重新選取？",
            text: "目前檔案清單："+selectedFiles1_str,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確認",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (result) {
            if (result) {
              selected_files(select_file_type_n);
            }
          }, function (dismiss) {
            if (dismiss == 'cancel') {
              swal({
                title: '已取消',
                type: 'success',
              })
            }
          }).catch(swal.noop)
      }
      break;
  
    case 1:
      // console.log("a2")
      if(selectedFiles2.length==0)
      {
        selected_files(select_file_type_n);
      }
      else
      {
          swal({
            title: "已經有選擇檔案，是否清空當前檔案清單，重新選取？",
            text: "目前檔案清單："+selectedFiles2_str,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確認",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true
          }).then(function (result) {
            if (result) {
              selected_files(select_file_type_n);
            }
          }, function (dismiss) {
            if (dismiss == 'cancel') {
              swal({
                title: '已取消',
                type: 'success',
              })
            }
          }).catch(swal.noop)
      }
      break;
  }  


    
}


selected_files = function(select_file_type_n) {


  switch (select_file_type_n) {
    case 0:

      selectedFiles1 = [];
      selectedFiles1_str = "";

      var html = '<span style="color:red;">上傳檔案清單預覽：</span><br/>';

      $("#selected-files1").html(html);

      $.FileDialog({
        "accept": "*",
        "drag_message": "將檔案拖曳至此處新增",
        "title": "載入檔案",
      }).on("files.bs.filedialog", function (event) {
        for (var a = 0; a < event.files.length; a++) {
          selectedFiles1.push(event.files[a]);
    
          //console.log(event.files[a])
          //console.log(selectedFiles1)
          if(a == 0)
          {
            selectedFiles1_str += event.files[a].name;
          }
          else
          {
            selectedFiles1_str += "," + event.files[a].name;
          }
    
          html += '<span style="color:red;" value="' + event.files[a].name + '">' + event.files[a].name + '</span><br/>';
    
          //若檔案類型為圖片則創建img元素
          var index = event.files[a].name.lastIndexOf(".");
    
          if(isAssetTypeAnImage(event.files[a].name.substr(index+1)))
          {
            html += '<img width="300" height="300" id="customFile1_pre_img' + a + '" src=""/>';
          }
    
          if(event.files.length > 1)
          {
            html += '<hr/>';
          }
    
          html += '<br/>';
    
        }
    
        $("#selected-files1").html(html);
    
        $.each(event.files, function(key,val) {
          var m_pre_img_id = $('#customFile1_pre_img' + key);
          var index = event.files[key].name.lastIndexOf(".");
          
          if(isAssetTypeAnImage(event.files[key].name.substr(index+1)))
          {
            const fr = new FileReader();
            fr.onload = function (event) {
              // console.log(event.target.result)
              // console.log(m_pre_img_id)
              m_pre_img_id.attr('src', event.target.result);//读取的结果放入圖片
            };
    
            fr.readAsDataURL(event.files[key]);
          }
        });
    
        // $("#selected-files").html(html);
      });
      break;
  
    case 1:

      selectedFiles2 = [];
      selectedFiles2_str = "";

      var html = '<span style="color:red;">上傳檔案清單預覽：</span><br/>';
      
      $("#selected-files2").html(html);

      $.FileDialog({
        "accept": "*",
        "drag_message": "將檔案拖曳至此處新增",
        "title": "載入檔案",
      }).on("files.bs.filedialog", function (event) {
        for (var a = 0; a < event.files.length; a++) {
          selectedFiles2.push(event.files[a]);
    
          //console.log(event.files[a])
          //console.log(selectedFiles2)
    
          if(a == 0)
          {
            selectedFiles2_str += event.files[a].name;
          }
          else
          {
            selectedFiles2_str += "," + event.files[a].name;
          }
    
          html += '<span style="color:red;" value="' + event.files[a].name + '">' + event.files[a].name + '</span><br/>';
    
          //若檔案類型為圖片則創建img元素
          var index = event.files[a].name.lastIndexOf(".");
    
          if(isAssetTypeAnImage(event.files[a].name.substr(index+1)))
          {
            html += '<img width="300" height="300" id="customFile2_pre_img' + a + '" src=""/>';
          }
    
          if(event.files.length > 1)
          {
            html += '<hr/>';
          }
    
          html += '<br/>';
    
        }
    
        $("#selected-files2").html(html);
    
        $.each(event.files, function(key,val) {
          var m_pre_img_id = $('#customFile2_pre_img' + key);
          var index = event.files[key].name.lastIndexOf(".");
          
          if(isAssetTypeAnImage(event.files[key].name.substr(index+1)))
          {
            const fr = new FileReader();
            fr.onload = function (event) {
              // console.log(event.target.result)
              // console.log(m_pre_img_id)
              m_pre_img_id.attr('src', event.target.result);//读取的结果放入圖片
            };
    
            fr.readAsDataURL(event.files[key]);
          }
        });
    
        // $("#selected-files").html(html);
      });
      break;
  }
  


}

imagePreview = function () {
  // 图片距离鼠标的位置
  this.xOffset = 10;
  this.yOffset = -10;

  //hover([over,]out)
  //over:鼠标移到元素上要触发的函数
  //out:鼠标移出元素要触发的函数

  //鼠标悬浮的事件
  $(".apreview").hover(function (e) {
      this.t = this.title;//显示在图片下的标题
      this.title = "";    //将title置为空，不让文字悬浮提示
      this.imgSr = this.src;//图片的连接
      this.c = (this.t != "") ? "<br/>" + this.t : "";
      $("body").append("<p class='preview'><img src='" + this.imgSr + "' alt='Image preview' width='auto' height='auto' />" + this.c + "</p>");
      
      $(".preview")
          .css("top", (e.pageY + yOffset) + "px")
          .css("left", (e.pageX + xOffset) + "px")
          // .css("max-width", "400px")
          // .css("max-height", "400px")
          .fadeIn("fast");
  },
  function () {
      this.title = this.t;//恢复title
      $(".preview").remove();
  });


  //鼠标移动的事件，让图片随着移动
  $(".apreview").mousemove(function (e) {  
      $(".preview")
          .css("top", (e.pageY - yOffset) + "px")
          .css("left", (e.pageX + xOffset) + "px");
  });
};

// page reload時保持上次的頁籤狀態 region
function tab_toggle() {
  $('a[data-toggle="pill"]').on('show.bs.tab', function(e) {
      localStorage.setItem('activeTab', $(e.target).attr('href'));
  });
  // console.log(localStorage)
  var activeTab = localStorage.getItem('activeTab');
  // console.log(activeTab)
  if(activeTab){
      $('#myTab a[href="' + activeTab + '"]').tab('show');
  }
}

$('#menu_tab_nav li a, .breadcrumb li, .brand-img').on('click',function() {
  localStorage.removeItem('activeTab');
});


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
