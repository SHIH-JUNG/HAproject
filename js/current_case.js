const notyf = new Notyf();
var buttonCheck = false;
//抓所有個案region
$.ajax({
    url: "database/find_case.php",
    type: "POST",
    data:{
        user_name: user_name,
        id: id
    },
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data);

        // var TimeNow= new Date();
        // var today = TimeNow.getFullYear()+"-"+('0'+(TimeNow.getMonth()+1)).substr(-2)+"-"+('0'+TimeNow.getDate()).substr(-2);

        var cssString = "";

        $.each(data,function(index,value){

            cssString += 
            '<tr name="'+ value.Name +'" date="'+ value.Open_case_date +'" property="'+ value.Case_property +'" type="'+ value.Object_type +'" phoneid="'+value.Phone_id+'" id="'+value.Id+'" openid="'+value.Case_id+'" pid="'+value.Case_pid+'">' +
                '<td style="text-align:center" class="tdBody">' + value.Case_id + '</td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Name + '" size="10"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody">' + value.Case_Create_date + '</td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Object_type + '" size="12"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Case_grade + '" size="12"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Case_property + '" size="12"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Case_stage + '" size="12"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Open_case_date + '" size="12"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Phone + '" size="12"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Birth + '" size="12"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Case_pid + '" size="12" class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><input value="' + value.Referral + '" size="12"  class="caseEdit' + value.Name + '" disabled></td>' +
                '<td style="text-align:center" class="tdBody"><select name="assign" class="caseEdit' + value.Name + ' assign" style="width:125px;" disabled><option value="'+value.Case_assign+'">'+value.Case_assign+'</option></select></td>' +
                '<td style="text-align:center"><button id="' + value.Name + '_edit_btn" onclick="update_case(\'' + value.Name + '\')">修改</button><button id="' + value.Name + '_save_btn" onclick="save_case(\'' + value.Case_id + '\', \'' + value.Name + '\')" hidden>儲存</button></td>'+
            '</tr>'
            // $("#open_id").append('<option value="'+value.Case_id+'">'+value.Case_id+'</option>');
        });

        // //option小到大排序
        // $('#open_id option').sort(function(a,b){
        //     var aText = $(a).text().toUpperCase();
        //     var bText = $(b).text().toUpperCase();
        //     if(aText>bText) return 1;
        //     if(aText<bText) return -1;
        //     return 0;
        // }).appendTo('#open_id')

        // //最前面新增"所有"選像
        // $('#open_id').prepend("<option value='' selected='selected'>所有</option>");

        // $("#open_id").children().each(function() {
        //     text = $(this).text();
        //     if($("select#open_id option:contains("+text+")").length > 1){
        //         $("select#open_id option:contains("+text+"):gt(0)").remove();
        //     }
        //     //    console.log(text)
        // });


        $("#open_case").html(cssString);
            //點擊table tr 進入詳細頁面
            $(".table-hover tbody").on("click","tr",function () {
                // console.log($(this).attr("class"));
                if(buttonCheck==false){
                    window.location.href = 'case_all_all.php?id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'';
                }
                // if($("#username").text() == "園主任"){
                //     window.location.href = 'case_all_all.php?id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'';
                // } else if($(this).attr("assign") == $("#username").text()){
                //     window.location.href = 'case_all_all.php?id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'';
                // }else{
                //     swal({
                //         title: '您無關看此個案的權限！',
                //         type: 'warning',
                //     }).then(function () {
                //         window.location.href = 'current_case.php#';
                //     })
                // }
                // window.location.href = 'four_all_all.php?name='+$(this).attr("name")+'&date='+$(this).attr("date")+'&house='+$(this).attr("house")+'&id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'&addition='+$(this).attr("addition")+'&age='+$(this).attr("age")+'&gender='+$(this).attr("gender")+'&four_id='+$(this).attr("four_id")+'&face_num='+$(this).attr("face_num")+'';
            });
    },
    error: function (e) {
        // console.log(e);
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
     }
});
//endregion

append_user();

$(".caseEdit").attr("disabled", true);

//table設定region
var $table = $('#tab_case').DataTable({
    "ordering": true,
    "info": true,
    "paging": true,
    "lengthChange": false,
    "pageLength": 10,
    "pagingType": "simple_numbers",
    "searching": true,
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
//            $("#count_people").text("人次："+iTotal);
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
            title: "快樂聯盟-"+$(".breadcrumb li").last().text()+"",
            text:'匯出Excel'
        },
    ]
});
//範圍搜尋region

var c_date_range = (
    function( settings, data, dataIndex) {
        var min_date = parseInt(Date.parse( $('#c_min_date').val()), 10 );
        var max_date = parseInt(Date.parse( $('#c_max_date').val()), 10 );
        var date = parseInt(Date.parse( data[2] )) || 0; // use data for the date column        
        if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
             ( isNaN( min_date ) && date <= max_date ) ||
             ( min_date <= date   && isNaN( max_date ) ) ||
             ( min_date <= date   && date <= max_date ) )
        {            
            return true;
        }
        return false;
    });

var o_date_range = (
    function( settings, data, dataIndex) {
        var min_date = parseInt(Date.parse( $('#o_min_date').val()), 10 );
        var max_date = parseInt(Date.parse( $('#o_max_date').val()), 10 );
        var date = parseInt(Date.parse( data[7] )) || 0; // use data for the date column        
        if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
                ( isNaN( min_date ) && date <= max_date ) ||
                ( min_date <= date   && isNaN( max_date ) ) ||
                ( min_date <= date   && date <= max_date ) )
        {            
            return true;
        }
        return false;
    });

var people_count = (
    function( settings, data, dataIndex ) {
        var name = data[2] || 0; // use data for the name column
//        console.log(dt.rows().count())
//        if ()
//        {
//            console.log()
//        }
    });
//endregion


$('select.filter').on('change', function () {
    var rel = $(this).attr("rel");    
    $table.columns(rel).search(this.value).draw();     
});

//預設總人數人次region
//$("#count_people").text("人次："+$table.column(0).data().count());
// $("#count_people2").text("人數："+$table.column(0).data().unique().count());
//endregion

$('#min, #max').keyup( function() {        
    $.fn.dataTable.ext.search.push(age_range);    
    $table.draw();
}); 

$('#c_min_date, #c_max_date').on('change', function() {
    $.fn.dataTable.ext.search.push(c_date_range);
    $table.draw();
}); 

$('#o_min_date, #o_max_date').on('change', function() {
    $.fn.dataTable.ext.search.push(o_date_range);
    $table.draw();
}); 

$table.on('draw', function () {
    $("#count_people2").text("人數："+$table.column(0, {page:'current'} ).data().unique().count());
});

$('input.filter').on('keyup change', function () {
    var rel = $(this).attr("rel");
    $table.columns(rel).search(this.value).draw();

});
//endregion

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
    $(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion

function update_case(caseName){
    buttonCheck=true;
    $(".caseEdit"+caseName).attr("disabled", false);
    $("#"+caseName+"_edit_btn").attr("hidden", true);
    $("#"+caseName+"_save_btn").attr("hidden", false);
}

function save_case(caseID, caseName){
    var NewInput=[];
    $("input[class='caseEdit"+caseName+"']").each(function(index){
        NewInput.push(this["value"]);
    });
    // console.log(NewInput);

    $.ajax({
        url: "database/update_current_case.php",
        type: "POST",
        data: {
            caseID: caseID,
            user_name: user_name,
            newCaseName: NewInput[0],
            Object_type: NewInput[1],
            Case_grade: NewInput[2],
            Case_property: NewInput[3],
            Case_stage: NewInput[4],
            Open_case_date: NewInput[5],
            phone: NewInput[6],
            birthday: NewInput[7],
            ID: NewInput[8],
            Referral: NewInput[9],
            assign: $(".caseEdit"+caseName+".assign").val()
        },
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data)
            if(data==1){
                swal({
                    type: "success",
                    title: "修改成功!",
                    allowOutsideClick: false, //不可點背景關閉
                  }).then(function () {
                    location.reload();
                  });
            }
            else{
                notyf.alert('修改失敗！請聯絡網站維護人員');
            }
        },
        error: function (e) {
            // console.log(e);
            notyf.alert('修改失敗！請聯絡網站維護人員');
         }
    });
}

//呼叫user方法region
function append_user(){
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data)
            for (var index in data.Id) {
              $(".assign").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
  }
  //endregion