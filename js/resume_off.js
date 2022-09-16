//抓所有曾入住紀錄region
$(document).ready(function () {
  $.ajax({
    url: "database/find_res_off.php",
    type: "POST",
    dataType: "JSON",
    success: function (data) {
      var cssstring = "";

      $.each(data, function (index, value) {
        cssstring +=
          '<tr name="num1[]">' +
          "<td>" +
          value.Name +
          "</td>" +
          '<td><a href="resume_off_detail.php?name=' +
          value.Name +
          "&res_id=" +
          value.Id +
          '">點擊進入</a></td>' +
          "</tr>";
        console.log(value.Id);
      });

      $("#res_off_all").append(cssstring);
    },
    error: function (e) {
      console.log(e);
    },
  });
});
//endregion
