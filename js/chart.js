
$.ajax({
    url: "database/phone_chart.php",
    type: "POST",
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        //性別統計
        var ctx = $('#myChart1');
        var myChart = new Chart(ctx, {
          options:{
              "responsive": true,
              "maintainAspectRatio": false,
                plugins: {
                    title: {
                        display: true,
                        text: '性別統計'
                    }
                }
          },
          type: 'pie',
          data: {
            labels: ['男','女'],
            datasets: [{
              data: [data.boy[0],data.girl[0]],
              backgroundColor:['blue','red']  
            }]
          }
        });
        
        //曾使用統計
        var ctx2 = $('#myChart2');
        var myChart2 = new Chart(ctx2, {
          options:{
              "responsive": true,
              "maintainAspectRatio": false,         
          },
          type: 'bar',
          data: {
            labels: ['海洛因', '鴉片', '嗎啡', '古柯鹼', '安非他命', '大麻', '搖頭丸', 'K他命', 'FM2藥丸', '酒精', '強力膠', '檳榔','菸 ','精神藥物',],
            datasets: [{
              label: '曾使用物質統計',
              data: [data.addition[0], data.addition1[0],data.addition2[0], data.addition3[0],data.addition4[0], data.addition5[0], data.addition6[0],data.addition7[0], data.addition8[0], data.addition9[0],data.addition10[0], data.addition11[0], data.addition12[0], data.addition13[0]],
              backgroundColor:['green']  
            }]
          }
        });

        //年齡範圍統計
        var ctx4 = $('#myChart4');
        var myChart4 = new Chart(ctx4, {
          options:{
              "responsive": true,
              "maintainAspectRatio": false,
                plugins: {
                    title: {
                        display: true,
                        text: '年齡區間統計'
                    }
                }
          },
          type: 'pie',
          data: {
            labels: ['10歲以下', '10-19歲', '20-29歲', '30-39歲', '40-49歲', '50-59歲', '60歲以上', '不明'],
            datasets: [{
              label: '年齡範圍統計',
              data: [data.age[0], data.age1[0], data.age2[0],data.age3[0], data.age4[0], data.age5[0],data.age6[0],data.age7[0]],
              backgroundColor:['red','blue','green','#005980','#804000','#190080','#760080','gray']  
            }]
          }
        });
        
        //地區統計
        var ctx3 = $('#myChart3');
        var myChart3 = new Chart(ctx3, {
          options:{
              "responsive": true,
              "maintainAspectRatio": false,
                plugins: {
                    title: {
                        display: true,
                        text: '地區統計'
                    }
                }
          },
          type: 'pie',
          data: {
            labels: ['北部', '中部', '南部', '東部', '離島', '國外'],
            datasets: [{
              label: '地區統計',
              data: [data.place[0], data.place1[0], data.place2[0],data.place3[0], data.place4[0], data.place5[0]],
               backgroundColor:['red','blue','green','#005980','#804000','#190080']
            }]
          }
        });
        //聯絡人和案主關係統計
        var ctx5 = $('#myChart5');
        var myChart5 = new Chart(ctx5, {
          options:{
              "responsive": true,
              "maintainAspectRatio": false,
          },
          type: 'bar',
          data: {
            labels: ['配偶', '父母', '手足', '子女', '親戚', '社工','教會','朋友','本人','其他'],
            datasets: [{
              label: '聯絡人和案主關係統計',
              data: [data.relationship[0], data.relationship1[0], data.relationship2[0],data.relationship3[0], data.relationship4[0], data.relationship5[0],data.relationship6[0],data.relationship7[0],data.relationship8[0],data.relationship9[0]],
               backgroundColor:['#005980']
            }]
          }
        });
        
        //得知管道統計
        var ctx6 = $('#myChart6');
        var myChart6 = new Chart(ctx6, {
          options:{
              "responsive": true,
              "maintainAspectRatio": false,
          },
          type: 'bar',
          data: {
            labels: ['網路', '醫院', '監所', '舊個案', '親戚', '社福機構','戒毒機構','朋友','親友','教會','其他'],
            datasets: [{
              label: '得知管道統計',
              data: [data.k_detail[0], data.k_detail1[0], data.k_detail2[0],data.k_detail3[0], data.k_detail4[0], data.k_detail5[0],data.k_detail6[0],data.k_detail7[0],data.k_detail8[0]],
               backgroundColor:['rgb(255, 235, 0)']
            }]
          }
        });
    },

    error: function (e) {
        console.log(e)
    }
});






