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

// 獲取網址參數 region
var arc_year = getUrlVars()["year"];
var arc_month = getUrlVars()["month"];
var arc_id = getUrlVars()["arc_id"];
var i_type = getUrlVars()["i_type"];
//endregion

window.invoice_year_arr = [];
window.invoice_month_arr = [];

// 設定返回頁面連結 region
back_arc_page = function() {
  window.location.href = "accounting_record_cash_v2.php?year=" + arc_year + "&i_type=" + i_type + "&arc_month=" + arc_month + "";
}
//endregion


$(document).ready(function () {
  
    //載入零用金的年份、月份 region
    $("[invoice_arr='year']").each(function(){

    var this_id = $(this).attr("id");
    invoice_year_arr.push(this_id);
    });

    $.each(invoice_year_arr,function(i,v){
    load_invoice_year_optios(v);
    });

    $("[invoice_arr='month']").each(function(){

    var this_id = $(this).attr("id");
    invoice_month_arr.push(this_id);
    });

    $.each(invoice_month_arr,function(i,v){
    load_invoice_month_optios(v);
    });
    //endregion

    // 抓取資料 region
    $.ajax({
        url: "database/find_accounting_record_cash_detail_v2.php",
        data: {
            Year: arc_year,
            Id: arc_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
          // console.log(data);
    
          $.each(data, function (index, value) {
            // $("#vom_id").html(value.vom_id);
    
            $("#invoice_year").val(value.Year);
            $("#invoice_month").val(value.Month);
            $("#invoice_type").val(value.Invoice_type);
            $("#amount").val(value.Amount);
            $("#remark").val(value.Remark);
    
            
            //customFile1顯示資料處理 region
            var customFile1_arr = value.Files_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");

            window.file_input_val_arr = [];

            var customFile1_htmlstr = "";
            
            if(value.Files_path != "")
            {
            $.each(customFile1_arr, function (i, val) {

                var files_path = val.replace("../", "./");
                var arc_file_name = val.split("/");

                var arc_file_val = arc_file_name[arc_file_name.length - 1];

                file_input_val_arr.push(val);
                
                customFile1_htmlstr += '<input class="arc_question" style="zoom: 1.5" class="form-check-input" type="radio" name="customFile1_check" forms_sql_id="' + value.Id + '" value="' + i + '">'
                + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + files_path + '" style="text-decoration:none;color:blue;" target="_blank">'
                + arc_file_val
                + '</a><br/><br/>';
                
            });
            }
            
            customFile1_htmlstr += '<br/>'
            + '<button class="arc_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete();">刪除</button>'
            + '<div>※點選上面要刪除的檔案</div>'
            + '<br/><hr style="border:3px dashed blue; height:1px">'
            + '<button class="arc_question" style="color:blue;" type="button" onclick="selectFiles_insert();">新增檔案+</button><br/><div id="selected-files1"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';

            $("#customFile1").html(customFile1_htmlstr);
            //customFile1顯示資料處理 endregion

          });
        },
        error: function (e) {
          // console.log(e);
          notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        },
    });
    //endregion

    $(".arc_question").attr("disabled", true);

});

// 載入零用金的年份選項內容 region
load_invoice_year_optios = function(id_arr_val) 
{
    var currentYear = new Date().getFullYear() - 1911;

    var min_range = currentYear - 15;

    var max_range = currentYear + 5;

    // console.log(min_range, max_range)

    $("[id='"+id_arr_val+"']").append('<option value=""  disabled selected>請選擇年度</option>');

    for (i = max_range; i >= min_range; i--) {
    $("[id='"+id_arr_val+"']").append('<option value="'+i+'">'+i+'</option>');
    }
}
//endregion

// 載入零用金的月份選項內容 region
load_invoice_month_optios = function(id_arr_val) 
{  
    $("[id='"+id_arr_val+"']").append('<option value=""  disabled selected>請選擇年度</option>');

    for (i = 1; i <= 12; i++) {
    $("[id='"+id_arr_val+"']").append('<option value="'+i+'">'+i+'</option>');
    }
}
//endregion

//宣告存入 file Object的空陣列
window.file_name = [];

// 顯示檔名 region
$("input[type='file']").change(function (event) {
  // console.log(event.target.files)
  // console.log(event.target.files.length)

  //獲取 file name名稱
  var name = $(this).attr("name");

  var file_names_str = "";

  // 顯示檔名
  $.each(event.target.files, function(key,val) {

    
    file_names_str += "檔案" + (key + 1) + "名稱：" + val.name + "<br/>";

    //若檔案類型為圖片則創建img元素
    var index = val.name.lastIndexOf(".");

    if(isAssetTypeAnImage(val.name.substr(index+1)))
    {
      file_names_str += '<img id="' + name + 'pre_img' + key + '" src=""/>';
    }

    // if(event.target.files.length > 1)
    // {
    //   file_names_str += '<hr/>';
    // }

    // file_names_str += '<br/>';

  });

  //若檔案類型為圖片則顯示圖片
  $.each(event.target.files, function(key,val) {
    var index = val.name.lastIndexOf(".");

    if(isAssetTypeAnImage(val.name.substr(index+1)))
    {
      const fr = new FileReader();
      fr.onload = function (e) {
        $('#' + name + 'pre_img' + key).attr('src', e.target.result);//读取的结果放入圖片
      };

      fr.readAsDataURL(event.target.files[key]);
    }
  });

  //預覽上傳檔名(圖片)
  $("#" + name).html(file_names_str);

});
// endregion


// 檢查檔案類型是否為圖片 region
function isAssetTypeAnImage(ext) {
  return [
  'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].
  indexOf(ext.toLowerCase()) !== -1;
}
// endregion



//檢查檔案重複，並更新上傳記錄 region
function rec_update() {
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

//更新上傳記錄ajax資料格式 region
function submit_form_data_upload() 
{
    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
        $(this).val(jQuery.trim($(this).val()));
    }
    });

    var form_data = new FormData();

    // 設定送出資料後返回連結位置
    var submit_trans_href = "accounting_record_cash_v2.php?year=" + arc_year + "&i_type=" + i_type + "&arc_month=" + arc_month + "";

    for (var a = 0; a < selectedFiles.length; a++) {
        form_data.append("arc_files[]", selectedFiles[a]);
      }

    form_data.append("Invoice_year", arc_year);
    form_data.append("Invoice_month", arc_month);
    form_data.append("arc_id", arc_id);
    form_data.append("Form_class", i_type);

    // form_data.append("Invoice_year", $("#invoice_year").val());
    // form_data.append("Invoice_month", $("#invoice_month").val());

    form_data.append("Invoice_type", $("#invoice_type").val());
    form_data.append("Amount", $("#amount").val());
    form_data.append("Remark", $("#remark").val());

  

    // for (var pair of form_data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    $.ajax({
        url: "database/update_upload_accounting_record_cash_detail_v2.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        success: function (data) {
        // console.log(data);
        if (data == 1) {
            swal({
            type: "success",
            title: "更新成功!",
            allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
            // window.location.href = submit_trans_href;
            location.reload();
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
        // console.log(e);
        },
    });
}
//endregion

//紀錄(update)的必填欄位 region
function check_updat_data() {
    var invoice_year = $("#invoice_year").val();
    var invoice_month = $("#invoice_month").val();
    var invoice_type = $("#invoice_type").val();
    var amount = $("#amount").val();

    var errorstr = "";

    if (invoice_year == null) {
        errorstr += "未填寫年度!\r\n";
    }
    if (invoice_month == null) {
        errorstr += "未填寫月份!\r\n";
    }
    if (invoice_type == null) {
        errorstr += "未選擇收入或支出!\r\n";
    }
    if (amount == null) {
        errorstr += "未填寫金額!\r\n";
    }
  
    if (errorstr == "") {
        if (invoice_year.replace(/\s*/g, "") == "") {
            errorstr += "未填寫年度!\r\n";
        }
        if (invoice_month.replace(/\s*/g, "") == "") {
        errorstr += "未填寫月份!\r\n";
        }
        if (invoice_type.replace(/\s*/g, "") == "") {
        errorstr += "未選擇收入或支出!\r\n";
        }
        if (amount.replace(/\s*/g, "") == "") {
        errorstr += "未填寫金額!\r\n";
        }
    }

    return errorstr;
}
//endregion


// 刪除檔案內容 多檔案上傳 region
selectFiles_delete = function () {


    if ($("[name='customFile1_check']:checked").length > 0) {
      // console.log($("#val_arr" + $("[name='customFile1_check']:checked").attr("value")))
      swal({
        title: "是否刪除該檔案？\n" + "檔名："+ $("#val_arr" + $("[name='customFile1_check']:checked").attr("value")).text(),
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
          // console.log(result)
          var file_sql_id = $("[name='customFile1_check']:checked").attr("forms_sql_id");
          var file_val = $("[name='customFile1_check']:checked").attr("value");
  
          // console.log(file_input_val_arr)
  
          
          // console.log(file_sql_id)
          // console.log(file_input_val_arr)
          // console.log(file_val)
          // console.log(r_file)

          var r_file = file_input_val_arr.splice(parseInt(file_val), 1);


          $.ajax({
            url: "database/delete_accounting_record_cash_file.php",
            type: "POST",
            data: {
              Form_sql_id: file_sql_id,
              Arc_id: arc_id,
              File_arr: file_input_val_arr,
              File_delete_index: file_val,
              Remove_file: r_file[0],
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
              // console.log(e);
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
  
window.selectedFiles = [];
window.selectedFiles_str = "";
  
// 多檔案上傳 選取檔案設定 region
selectFiles_insert = function () {
  
  
    if(selectedFiles.length==0)
    {
      selected_files();
    }
    else
    {
        swal({
          title: "已經有選擇檔案，是否清空當前檔案清單，重新選取？",
          text: "目前檔案清單："+selectedFiles_str,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "確認",
          cancelButtonText: "取消",
          showConfirmButton: true,
          showCancelButton: true
        }).then(function (result) {
          if (result) {
            selected_files();
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
}
//endregion

// 多檔案上傳預覽顯示 region
selected_files = function() {
    selectedFiles = [];
    selectedFiles_str = "";
    var html = '<span style="color:red;">上傳檔案清單預覽：</span><br/>';
  
    $("#selected-files").html(html);
  
    $.FileDialog({
      "accept": "*",
      "drag_message": "將檔案拖曳至此處新增",
      "title": "載入檔案",
    }).on("files.bs.filedialog", function (event) {
      for (var a = 0; a < event.files.length; a++) {
        selectedFiles.push(event.files[a]);
  
        // console.log(event.files[a])
  
        if(a == 0)
        {
          selectedFiles_str += event.files[a].name;
        }
        else
        {
          selectedFiles_str += "," + event.files[a].name;
        }
  
        html += '<span style="color:red;" value="' + event.files[a].name + '">' + event.files[a].name + '</span><br/>';
  
        //若檔案類型為圖片則創建img元素
        var index = event.files[a].name.lastIndexOf(".");
  
        if(event.files.length > 1)
        {
          html += '<hr/>';
        }
  
        html += '<br/>';
  
      }
  
      $("#selected-files").html(html);
  
    //   $.each(event.files, function(key,val) {

    //     var index = event.files[key].name.lastIndexOf(".");
        
    //     if(isAssetTypeAnImage(event.files[key].name.substr(index+1)))
    //     {
    //       var m_pre_img_id = $('#meeting_file_pre_img' + key);
    //       const fr = new FileReader();
    //       fr.onload = function (event) {
    //         // console.log(event.target.result)
    //         // console.log(m_pre_img_id)
    //         m_pre_img_id.attr('src', event.target.result);//读取的结果放入圖片
    //       };
  
    //       fr.readAsDataURL(event.files[key]);
    //     }
    //   });
  
      // $("#selected-files").html(html);
    });
}
//endregion

//記錄總表格鎖定控制region
function arc_edit() {
    $(".arc_question").attr("disabled", false);
    $("#edit_div").attr("hidden", true);
    $("#save_div").attr("hidden", false);
  }
  //endregion
  
  //取消重整region
  function arc_cancel() {
    location.reload();
  }
  //endregion
  
  //進入預覽WORD頁面region
  $("#preview_word").on("click", function () {
    var arc_id = getUrlVars()["arc_id"];
    //    console.log(id);
    location.href = "preview_word.php?arc_id=" + arc_id + "";
  });
  
  $("#preview_word2").on("click", function () {
    var arc_id = getUrlVars()["arc_id"];
    //    console.log(id);
    location.href = "preview_word2.php?arc_id=" + arc_id + "";
  });
  //endregion
  