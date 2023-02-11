    <h4>請假紀錄</h4>
    <br>
    <div id="day_off_remain_hit_area" style="color:blue;">
        今年剩餘補休時數：--小時，剩餘特休時數：--小時，已使用補休時數：--小時，已使用特休時數：--小時
    </div>
    <br>
    <div class="table-wrap">
        <div class="table-responsive">
            <table class="table display table-hover dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" id="tab_all" data-toolbar="#toolbar">
                <thead>
                    <tr>
                        <th class="text-right" colspan="16">
                            <a href="add_day_off.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                        <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                    </svg>新增</button></a>
                        </th>
                    </tr>
                    <tr style="background-color:rgb(255 201 54);">
                        <!-- <th>審核選項</th> -->
                        <!-- <th>員工姓名</th> -->
                        <th>假別</th>
                        <th>填表日期</th>
                        <th>請假日期(開始)</th>
                        <th>請假日期(結束)</th>
                        <th>請假時數</th>
                        <th>請假事由</th>
                        <th>審核狀態</th>
                        <th>督導簽章</th>
                        <th>代理人簽章</th>
                        <!-- <th>詳細內容</th> -->
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
