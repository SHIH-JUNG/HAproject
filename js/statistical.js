//統計電話詢戒表region
$("#select_date").on('change',function(){
var date = ($("#select_date").val()).split("-");
var year = date[0];
var month = date[1];
    $.ajax({
        url: "database/find_phone_all_data.php",
        type: "POST",
        dataType: "JSON",
        async: true,//啟用同步請求
        data:{
            year:year,
            month:month,
        },
        success: function (data) {
//            console.log(data.time)
            $("#times").html(data.times);
            $("#nums").html(data.num);
            $("#f_times").html(data.f_times);
            $("#f_nums").html(data.f_num);
            $("#boy").html(data.boy);
            $("#girl").html(data.girl);
            $("#g_total").html(parseInt(data.boy)+parseInt(data.girl));
            $("#ok").html(data.ok);
            $("#no").html(data.no);
            $("#none").html(data.none);
            $("#north").html(data.north);
            $("#central").html(data.central);
            $("#south").html(data.south);
            $("#east").html(data.east);
            $("#place_none").html(data.place_none);
            
            //選擇新日期後重置為0 region
            $("#internet").html("0");
            $("#hospital").html("0");
            $("#prison").html("0");
            $("#old").html("0");
            $("#organization").html("0");
            $("#detoxification").html("0");
            $("#friend").html("0");
            $("#church").html("0");
            $("#other").html("0");
            $("#spouse").html("0");
            $("#parents").html("0");
            $("#brother").html("0");
            $("#child").html("0");
            $("#relative").html("0");
            $("#s_worker").html("0");
            $("#r_church").html("0");
            $("#r_frinend").html("0");
            $("#me").html("0");
            $("#r_other").html("0");
            $("#h_18").html("0");
            $("#h_26").html("0");
            $("#h_36").html("0");
            $("#h_46").html("0");
            $("#h_56").html("0");
            $("#h_none").html("0");
            $("#a_18").html("0");
            $("#a_26").html("0");
            $("#a_36").html("0");
            $("#a_46").html("0");
            $("#a_56").html("0");
            $("#a_none").html("0");
            $("#k_18").html("0");
            $("#k_26").html("0");
            $("#k_36").html("0");
            $("#k_46").html("0");
            $("#k_56").html("0");
            $("#k_none").html("0");
            $("#al_18").html("0");
            $("#al_26").html("0");
            $("#al_36").html("0");
            $("#al_46").html("0");
            $("#al_56").html("0");
            $("#al_none").html("0");
            $("#o_18").html("0");
            $("#o_26").html("0");
            $("#o_36").html("0");
            $("#o_46").html("0");
            $("#o_56").html("0");
            $("#o_none").html("0");
            //endregion
            
            //判斷有幾個人region
            if(data.k_place != ""){
                for (var index in data.k_place) {
                    if(data.k_place[index] == "網路"){
                        $("#internet").html(data.k_place_num[index]);
                    }else if(data.k_place[index] == "醫院"){
                        $("#hospital").html(data.k_place_num[index]);
                    }else if(data.k_place[index] == "監所"){
                        $("#prison").html(data.k_place_num[index]);
                    }else if(data.k_place[index] == "舊個案"){
                        $("#old").html(data.k_place_num[index]);
                    }else if(data.k_place[index] == "社福機構"){
                        $("#organization").html(data.k_place_num[index]);
                    }else if(data.k_place[index] == "戒毒機構"){
                        $("#detoxification").html(data.k_place_num[index]);
                    }else if(data.k_place[index] == "朋友"){
                        $("#friend").html(data.k_place_num[index]);
                    }else if(data.k_place[index] == "教會"){
                        $("#church").html(data.k_place_num[index]);
                    }else if(data.k_place[index] == "其他"){
                        $("#other").html(data.k_place_num[index]);
                    }
                }
            }
            if(data.r_name != ""){
                for (var index in data.r_name) {
                    if(data.r_name[index] == "配偶"){
                        $("#spouse").html(data.r_num[index]);
                    }else if(data.r_name[index] == "父母"){
                        $("#parents").html(data.r_num[index]);
                    }else if(data.r_name[index] == "手足"){
                        $("#brother").html(data.r_num[index]);
                    }else if(data.r_name[index] == "子女"){
                        $("#child").html(data.r_num[index]);
                    }else if(data.r_name[index] == "親戚"){
                        $("#relative").html(data.r_num[index]);
                    }else if(data.r_name[index] == "社工"){
                        $("#s_worker").html(data.r_num[index]);
                    }else if(data.r_name[index] == "教會"){
                        $("#r_church").html(data.r_num[index]);
                    }else if(data.r_name[index] == "朋友"){
                        $("#r_frinend").html(data.r_num[index]);
                    }else if(data.r_name[index] == "本人"){
                        $("#me").html(data.r_num[index]);
                    }else if(data.r_name[index] == "其他"){
                        $("#r_other").html(data.r_num[index]);
                    }
                }
            }
            //endregion
            
            //海洛因region
            var h_total = 0;
            if(data.h_age != ""){
                for (var index in data.h_age) {
//                    console.log(data.h_num[index])
                    if(data.h_age[index] == "18-25"){
                        $("#h_18").html(data.h_num[index]);
                        h_total=h_total+parseInt(data.h_num[index]);
                    }else if(data.h_age[index] == "26-35"){
                        $("#h_26").html(data.h_num[index]);
                        h_total=h_total+parseInt(data.h_num[index]);
                    }else if(data.h_age[index] == "36-45"){
                        $("#h_36").html(data.h_num[index]);
                        h_total=h_total+parseInt(data.h_num[index]);
                    }else if(data.h_age[index] == "45-55"){
                        $("#h_46").html(data.h_num[index]);
                        h_total=h_total+parseInt(data.h_num[index]);
                    }else if(data.h_age[index] == "56以上"){
                        $("#h_56").html(data.h_num[index]);
                        h_total=h_total+parseInt(data.h_num[index]);
                    }else if(data.h_age[index] == "不明"){
                        $("#h_none").html(data.h_num[index]);
                        h_total=h_total+parseInt(data.h_num[index]);
                    }
                }
             
            }
            $("#h_total").html(h_total);
            //endregion
            
            //安非他命region
            var a_total = 0;
            if(data.a_age != ""){
                for (var index in data.a_age) {                
                    if(data.a_age[index] == "18-25"){
                        $("#a_18").html(data.a_num[index]);
                        a_total=a_total+parseInt(data.a_num[index]);
                    }else if(data.a_age[index] == "26-35"){
                        $("#a_26").html(data.a_num[index]);
                        a_total=a_total+parseInt(data.a_num[index]);
                    }else if(data.a_age[index] == "36-45"){
                        $("#a_36").html(data.a_num[index]);
                        a_total=a_total+parseInt(data.a_num[index]);
                    }else if(data.a_age[index] == "45-55"){
                        $("#a_46").html(data.a_num[index]);
                        a_total=a_total+parseInt(data.a_num[index]);
                    }else if(data.a_age[index] == "56以上"){
                        $("#a_56").html(data.a_num[index]);
                        a_total=a_total+parseInt(data.a_num[index]);
                    }else if(data.a_age[index] == "不明"){
                        $("#a_none").html(data.a_num[index]);
                        a_total=a_total+parseInt(data.a_num[index]);
                    }
                }
            }
//            console.log(a_total)
            $("#a_total").html(a_total);
            //endregion
            
            //K他命region
            var k_total = 0;
            if(data.k_age != ""){
                for (var index in data.k_age) {                
                    if(data.k_age[index] == "18-25"){
                        $("#k_18").html(data.k_num[index]);
                        k_total=k_total+parseInt(data.k_num[index]);
                    }else if(data.k_age[index] == "26-35"){
                        $("#k_26").html(data.k_num[index]);
                        k_total=k_total+parseInt(data.k_num[index]);
                    }else if(data.k_age[index] == "36-45"){
                        $("#k_36").html(data.k_num[index]);
                        k_total=k_total+parseInt(data.k_num[index]);
                    }else if(data.k_age[index] == "45-55"){
                        $("#k_46").html(data.k_num[index]);
                        k_total=k_total+parseInt(data.k_num[index]);
                    }else if(data.k_age[index] == "56以上"){
                        $("#k_56").html(data.k_num[index]);
                        k_total=k_total+parseInt(data.k_num[index]);
                    }else if(data.k_age[index] == "不明"){
                        $("#k_none").html(data.k_num[index]);
                        k_total=k_total+parseInt(data.k_num[index]);
                    }
                }
            }
//            console.log(k_total)
            $("#k_total").html(k_total);
            //endregion
            
            //酒精region
            var al_total = 0;
            if(data.al_age != ""){
                for (var index in data.al_age) {                
                    if(data.al_age[index] == "18-25"){
                        $("#al_18").html(data.al_num[index]);
                        al_total=al_total+parseInt(data.al_num[index]);
                    }else if(data.al_age[index] == "26-35"){
                        $("#al_26").html(data.al_num[index]);
                        al_total=al_total+parseInt(data.al_num[index]);
                    }else if(data.al_age[index] == "36-45"){
                        $("#al_36").html(data.al_num[index]);
                        al_total=al_total+parseInt(data.al_num[index]);
                    }else if(data.al_age[index] == "45-55"){
                        $("#al_46").html(data.al_num[index]);
                        al_total=al_total+parseInt(data.al_num[index]);
                    }else if(data.al_age[index] == "56以上"){
                        $("#al_56").html(data.al_num[index]);
                        al_total=al_total+parseInt(data.al_num[index]);
                    }else if(data.al_age[index] == "不明"){
                        $("#al_none").html(data.al_num[index]);
                        al_total=al_total+parseInt(data.al_num[index]);
                    }
                }
            }
//            console.log(al_total)
            $("#al_total").html(al_total);
            //endregion
            
            //其他region
            var o_total = 0;
            if(data.o_age != ""){
                for (var index in data.o_age) {                
                    if(data.o_age[index] == "18-25"){
                        $("#o_18").html(data.o_num[index]);
                        o_total=o_total+parseInt(data.o_num[index]);
                    }else if(data.o_age[index] == "26-35"){
                        $("#o_26").html(data.o_num[index]);
                        o_total=o_total+parseInt(data.o_num[index]);
                    }else if(data.o_age[index] == "36-45"){
                        $("#o_36").html(data.o_num[index]);
                        o_total=o_total+parseInt(data.o_num[index]);
                    }else if(data.o_age[index] == "45-55"){
                        $("#o_46").html(data.o_num[index]);
                        o_total=o_total+parseInt(data.o_num[index]);
                    }else if(data.o_age[index] == "56以上"){
                        $("#o_56").html(data.o_num[index]);
                        o_total=o_total+parseInt(data.o_num[index]);
                    }else if(data.o_age[index] == "不明"){
                        $("#o_none").html(data.o_num[index]);
                        o_total=o_total+parseInt(data.o_num[index]);
                    }
                }
            }
//            console.log(o_total)
            $("#o_total").html(o_total);
            //endregion
            
            //計算總和region
            var age_total1 = parseInt($("#h_18").html())+parseInt($("#a_18").html())+parseInt($("#k_18").html())+parseInt($("#al_18").html())+parseInt($("#o_18").html());
            $("#age_total1").html(age_total1);
            var age_total2 = parseInt($("#h_26").html())+parseInt($("#a_26").html())+parseInt($("#k_26").html())+parseInt($("#al_26").html())+parseInt($("#o_26").html());
            $("#age_total2").html(age_total2);
            var age_total3 = parseInt($("#h_36").html())+parseInt($("#a_36").html())+parseInt($("#k_36").html())+parseInt($("#al_36").html())+parseInt($("#o_36").html());
            $("#age_total3").html(age_total3);
            var age_total4 = parseInt($("#h_46").html())+parseInt($("#a_46").html())+parseInt($("#k_46").html())+parseInt($("#al_46").html())+parseInt($("#o_46").html());
            $("#age_total4").html(age_total4);
            var age_total5 = parseInt($("#h_56").html())+parseInt($("#a_56").html())+parseInt($("#k_56").html())+parseInt($("#al_56").html())+parseInt($("#o_56").html());
            $("#age_total5").html(age_total5);
            var age_total6 = parseInt($("#h_none").html())+parseInt($("#a_none").html())+parseInt($("#k_none").html())+parseInt($("#al_none").html())+parseInt($("#o_none").html());
            $("#age_total6").html(age_total6);
            var age_total7 = parseInt($("#age_total1").html())+parseInt($("#age_total2").html())+parseInt($("#age_total3").html())+parseInt($("#age_total4").html())+parseInt($("#age_total5").html())+parseInt($("#age_total6").html());
            $("#age_total7").html(age_total7);
            //endregion
        },
        error: function (e) {
                alert('伺服器錯誤,無法載入' + e);
         }
    });
});

//endregion

//匯出成word region
$("#export_word").on('click',function(){
    $("#word_demo").wordExport("統計資料word");
});
//endregion

//自動日歷region
//for(var i = 1;i < 32;i++){
////console.log(i)
//    $("#month_start_day").append('<option>'+i+'</option>');
//    $("#month_end_day").append('<option>'+i+'</option>');
//}
//endregion

//



