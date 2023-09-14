<h4>查詢</h4>
<div　class="col-sm-12" id="toolbar">
    <div class="col-sm-12">
        <table style="font-size:20px;font-family:微軟正黑體;width:100%" class="table table-bordered NOline">
            <tr>
                <td class="text-right" style="background-color:rgb(255 201 54); width:7em;">員工姓名：</td>
                <td class="text-left">
                    <select id="name" rel="1" class="filter search">
                        <!-- <option value="">所有</option> -->
                    </select>
                </td>

                <td class="text-right" style="background-color:rgb(255 201 54); width:7em;">審核狀態：</td>
                <td class="text-left">
                    <select id="allow_status" rel="7" class="filter search">
                        <!-- <option value="">所有</option> -->
                    </select>
                </td>
            </tr>
            <tr>
                <td class="text-right" style="background-color:rgb(255 201 54)">加班日期：</td>
                <td colspan="3" class="text-left">
                    <input id="overtime_date_start" name="overtime_date" datepicker="ch_datepicker" type="text" placeholder="填表日期搜尋">
                    <label>～</label>
                    <input id="overtime_date_end" name="overtime_date" datepicker="ch_datepicker" type="text" placeholder="填表日期搜尋">
                </td>

            </tr>

            <tr>
                <td colspan="6" class="text-right">
                    <button onclick="location.reload();">重置搜尋</button><span> </span>
                </td>
            </tr>
        </table>
    </div>
</div>
<br>
<h4>加班紀錄一覽表</h4>
<div class="table-wrap">
    <div class="table-responsive">
        <table class="table display table-hover dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" id="tab_all" data-toolbar="#toolbar">
            <thead>
                <tr>
                    <th class="text-right" colspan="15">
                        <a href="add_overtime.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                    <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                    <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                </svg>新增</button></a>
                    </th>
                </tr>
                <tr style="background-color:rgb(255 201 54);">
                    <th>審核選項</th>
                    <th>員工姓名</th>
                    <th>加班日期</th>
                    <th>事由</th>
                    <th>加班時數</th>
                    <th>補休日期</th>
                    <th>補休時數</th>
                    <th>審核狀態</th>
                    <th>主管簽章</th>
                    <th>執行長簽章</th>
                    <th>查核者簽章</th>
                    <th>詳細內容</th>
                </tr>
            </thead>
            <tbody id="call_view"></tbody>
        </table>
        <div class="text-center">
            <span id="count_people"></span>
            <span id="count_people2"></span>
        </div>
    </div>
</div>