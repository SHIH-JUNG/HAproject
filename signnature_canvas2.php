<div class="col-sm-12 col-xs-12" id="signature_area">
    <div class="col-sm-12">
        <div style="margin-top:15px" class="text-center">
            <h4 id="signature_h4">簽名</h4>
        </div>
    </div>
    <div class="panel-body">
    </div>
    <div class="table-wrap">
        <div class="table-responsive">
            <table style="width:100%;margin-bottom: 0px !important;border-bottom: 0px;" class="table table-bordered">
                <tr style="text-align:left">
                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:3em;"><i style="color:red;">※</i><span id="signature_title_td"></span><br/>簽名</td>
                    <td style="border-bottom: solid 1px;">
                        <div><b style="color: red">請按著滑鼠寫字簽名。</b></div>
                        <div id="signature_div"></div>
                        <!-- <input type="button" value="保存" id="yes"/> -->
                        <!-- <input type="button" value="下載" id="download"/> -->
                        <input type="button" value="重寫" id="signature_reset"/>
                        <div id="signature_someelement"><img src="" id="signature_images"></div>
                    </td>
                </tr>
                <tr style="text-align:left">
                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i><span id="signature_msg_td"></span><br/>留言</td>
                    <td style="border-bottom: solid 1px;">
                        <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" id="signature_msg"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="text-center col-sm-12">
                            <button type="button" style="margin-right:2em;" class="btn btn-default btn-lg cancel-btn" onclick="show_main_panel();">取消</button>
                            <button type="button" id="sign_submit_btn" onclick="signature_submit(this)" class="btn btn-default btn-lg">確認送出</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
