



<form id="form_b" class="form" action="">
    <table id="all_data" style="width:75%;margin-bottom: 0px;" class="table table-bordered">
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">團督記錄標題</td>
            <td style="border-bottom: solid 1px;"><input class="sr_question" id="upload_title_name" name="upload_title_name" type="text" style="width:37em;"></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">上傳日期</td>
            <td style="border-bottom: solid 1px;"><input class="sr_question" id="upload_rec_date" name="upload_rec_date" datepicker="ch_datepicker" type="text"></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">檔案上傳</td>
            <td style="border-bottom: solid 1px;">
                <div class="col-sm-12">
                    <div class="text-left">
                        <input class="sr_question" name="customFile1" type="file" class="form-control"/>
                        <br>
                        <div id="customFile1"></div>
                        <img src="" id="customFile1_img" style="display:none;"/>
                    </div>
                </div>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
            <td>
                <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" class="sr_question" id="upload_rec_remark" name="upload_rec_remark" placeholder="請輸入備註"></textarea>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>督導簽章</label>
            </td>
            <td style="">
                <input class="closed_question" style="width:15em;" id="supervise" type="text"><button style="margin:.5em;margin-right:3em;color:red;" type="button" id="supervise_signature_btn">簽名</button>
                <button style="margin:.5em;" type="button" id="supervise_signature_msg_btn" onclick="sign_msg_model('supervise');" data-toggle="modal" data-target="#myModal">查看留言</button>
                <a src="" id="supervise_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>建立日期</label>
            </td>
            <td style="">
                <span id="adate"></span>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>建立者</label>
            </td>
            <td style="">
                <span id="applicant"></span>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>修改日期</label>
            </td>
            <td style="">
                <span id="udate"></span>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                <label>修改者</label>
            </td>
            <td>
                <span id="up_applicant"></span>
            </td>
        </tr>
    </table>
</form>