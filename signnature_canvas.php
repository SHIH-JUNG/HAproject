<div class="col-sm-12 col-xs-12" id="supervise_signature_area">
    <div class="col-sm-12">
        <div style="margin-top:15px" class="text-center">
            <h4>督導簽名</h4>
        </div>
    </div>
    <div class="panel-body">
    </div>
    <div class="table-wrap">
        <div class="table-responsive">
            <table style="width:100%;margin-bottom: 0px !important;border-bottom: 0px;" class="table table-bordered">
                <tr style="text-align:left">
                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:3em;"><i style="color:red;">※</i>督導<br/>簽名</td>
                    <td style="border-bottom: solid 1px;">
                        <div><b style="color: red">請按著滑鼠寫字簽名。</b></div>
                        <div id="supervise_signature"></div>
                        <!-- <input type="button" value="保存" id="yes"/> -->
                        <!-- <input type="button" value="下載" id="download"/> -->
                        <input type="button" value="重寫" id="supervise_reset"/>
                        <div id="supervise_someelement"><img src="" id="supervise_images"></div>
                    </td>
                </tr>
                <tr style="text-align:left">
                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>督導<br/>留言</td>
                    <td style="border-bottom: solid 1px;">
                        <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" name="supervise_signature_msg" id="supervise_signature_msg"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="col-sm-12">
                            <button type="button" style="margin-right:2em;" class="btn btn-default btn-lg cancel-btn" onclick="show_main_panel();">取消</button>
                            <button type="button" id="supervise_signature_submit" class="btn btn-default btn-lg">確認送出</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>


<div class="col-sm-12 col-xs-12" id="social_worker_signature_area">
    <div class="col-sm-12">
        <div style="margin-top:15px" class="text-center">
            <h4>社工員簽名</h4>
        </div>
    </div>
    <div class="panel-body">
    </div>
    <div class="table-wrap">
        <div class="table-responsive">
            <table style="width:100%;margin-bottom: 0px !important;border-bottom: 0px;" class="table table-bordered">
                <tr style="text-align:left">
                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:3em;"><i style="color:red;">※</i>社工員<br/>簽名</td>
                    <td style="border-bottom: solid 1px;">
                        <div><b style="color: red">請按著滑鼠寫字簽名。</b></div>
                        <div id="social_worker_signature"></div>
                        <!-- <input type="button" value="保存" id="yes"/> -->
                        <!-- <input type="button" value="下載" id="download"/> -->
                        <input type="button" value="重寫" id="social_worker_reset"/>
                        <div id="social_worker_someelement"><img src="" id="social_worker_images"></div>
                    </td>
                </tr>
                <tr style="text-align:left">
                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>社工員<br/>留言</td>
                    <td style="border-bottom: solid 1px;">
                        <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" name="social_worker_signature_msg" id="social_worker_signature_msg"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="col-sm-12">
                            <button type="button" style="margin-right:2em;" class="btn btn-default btn-lg cancel-btn" onclick="show_main_panel();">取消</button>
                            <button type="button" id="social_worker_signature_submit" class="btn btn-default btn-lg">確認送出</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>