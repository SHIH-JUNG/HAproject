
// 載入google sheet內容，讀取txt檔案內儲存的網址 region
$(document).ready(function () {
    $.get("./accounting_sheet/HAproject_accounting_google_sheet_api_new.txt", function(url) {
        $("#google_sheet_frame").attr("src", url);
    });
    $.ajaxSettings.async = true;

    $.get("./accounting_sheet/HAproject_accounting_google_sheet_share_url_new2.txt", function(url) {
        $("#google_sheet_url").attr("href", url);
    });
    $.ajaxSettings.async = true;
});
//endregion