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

// $(document).ready(function(){
//   load_remain_hours();
// });

//查詢當前帳號登入者的今年度特休/請假/加班/可請假時數 region
  $.ajax({
    url: "database/find_employee_hours_manager_2.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
      
      console.log(data)

      window.ehm = []


      $.each(data, function (index, value) {
        ehm.push([value.Name, value.Resume_id, value.Seniority_num, value.Annual_default, value.Change_num, value.Day_off_id])
      });

      console.log(ehm)
    },

    error:function(e){
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        // console.log(e)
    }
    
  });

// endregion

// 查詢當前帳號登入者的今年度特休/請假/加班/可請假時數 region
window.ehm_annual_hours = 0;
window.ehm_comp_hours = 0;
window.ehm_leave_hours = 0;
window.ehm_cssString = '';


$.each(ehm, function (i, inner_ehm) {
  // console.log(inner_ehm[1])
  $.ajax({
    url: "database/find_employee_hours_manager.php",
    data: {
      Resume_id: inner_ehm[1],
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
      
      // console.log(data)

      // $.each(data, function (index, value) {

      //   switch (value.Type) {
      //     case "Annual_default":
      //       ehm_annual_hours += Number(value.Annual_default);
      //       break;
        
      //     case "Annual_hours":
      //       ehm_annual_hours += Number(value.Change_num);
      //       break;

      //     case "Comp_hours":
      //       ehm_comp_hours += Number(value.Change_num);
      //       break;

      //     case "Leave":
      //       ehm_leave_hours += Number(value.Change_num);
      //       break;
      //   }
      // });

      ehm_cssString +=
        '<tr resume_id="' +
        inner_ehm[1] +
        '">' +
        '<td class="n_row" style="text-align:center">' +      
        inner_ehm[0] +
        "</td>" +
        '<td class="n_row" style="text-align:center">' +
        inner_ehm[2] +
        "</td>" +
        '<td class="n_row" style="text-align:center">' +
        // parseFloat(ehm_annual_hours).toFixed(1) +
        inner_ehm[3]+
        "</td>" +
        '<td class="n_row" style="text-align:center">' +
        // parseFloat(ehm_comp_hours).toFixed(1) +
        inner_ehm[4] +
        "</td>" +
        '<td class="n_row" style="text-align:center">' +
        // parseFloat(ehm_leave_hours).toFixed(1) +
        inner_ehm[5] +
        "</td>" +
        '<td class="n_row" style="text-align:center">' +
        parseFloat(parseFloat(inner_ehm[3]) + parseFloat(inner_ehm[4]) - parseFloat(inner_ehm[5])).toFixed(1) +
        "</td>" +
        "</tr>";
      
      $("#call_view").on("click", ".n_row", function() {
        var attr_id = $(this).parent("tr").attr("resume_id");
        // var attr_id = $(this).children("tr").attr("id");
        
        $('#ehm_edit').modal('show');
    
        show_ehm_modal(attr_id);
      });
    },
    error:function(e){
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        // console.log(e)
    }
  });

  $("#call_view").html(ehm_cssString);

});
// endregion
  Init_datatable()
//table設定region
  function Init_datatable() {
     $table = $("#tab_all").DataTable({
      "ordering": true,
      "info": true,
      "paging": true,
      "lengthChange": false,
      "pageLength": 10,
      "pagingType": "simple_numbers",
      "searching": true,
      "destory": true,
      "retrieve": true,
      "dom":
          "<'col-sm-12'tr>"+
          "<'col-sm-6'<'text-left'i>><'col-sm-6'<'text-right'p>>"+
          "<'col-sm-12'<'text-left'B>>",
      language: {
      
          "sZeroRecords": "没有匹配结果",
          "sInfo": "顯示 _START_ 到 _END_ 筆資料，總共有 _TOTAL_ 筆資料",
          "sInfoEmpty": "目前共有 0 筆紀錄",
          "sInfoFiltered": "(由 _MAX_ 筆資料结果過濾)",
          "fnInfoCallback": function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
              // $("#count_people").text("人次："+iTotal);
              return sPre
          },
          paginate: {
              previous: '‹上一頁',
              next:     '下一頁›'
          },
          aria: {
              paginate: {
                  previous: 'Previous',
                  next:     'Next'
              }
          }
      },
      buttons: [
          {
              extend: 'excelHtml5',
              title: '快樂聯盟-員工特/補休時數',
              text:'匯出Excel'
          },
      ]
  });
//endregion  

//匯出EXCEL按鈕CSS設定 region
  $('.buttons-excel').each(function() { 
      $(this).removeClass('dt-button').addClass('btn btn-default') ;
  }) 
}
//endregion
  
//show detail show modal region
function show_ehm_modal(modal_id) {
  $("#call_view").html(ehm_cssString);
}
//endregion

//insert 社工訪視 region
$("#visit_add").click(function(){
  $('#ehm_edit').modal('show'); 
});
//endregion


