# 2023/10/04更新:
# 網頁設定：
```
選單（左側）：
menu.php

上方固定導覽（上方）：
page_nav.php

其他設定
    檢查登入者帳密　database/check_authority.php
    清除網頁快取　no_cache.php
    逾時自動登出　database/timeout_logout.php
    登入保存（打卡）　save_login.php

資料夾設定
    image 放圖片(logo之類的......)
    css 放css檔案
    javascript　放插件或固定原生js檔案
    js 放自定義/一般js檔案
    jSignature 簽名插件
    signature 保存簽名檔圖片
    database 有連結資料庫mysql的php檔案

    published 收文的檔案上傳

    received 發文的檔案上傳

    resume 履歷表的檔案上傳

    volunteer 志工資料的檔案上傳
    volunteer_meeting 志工會議紀錄的檔案上傳

    accounting_record_cash 零用金的檔案上傳
    accounting_record_report 帳目報表的檔案上傳

    supervisor_record 團督記錄的檔案上傳
    board_supervisor 團督記錄的檔案上傳
    members_assemble 會員大會記錄的檔案上傳

    case_forms 開案個案的11種表單格式
    placement_case_forms 安置評估的11種表單格式
    upload 開案個案&安置評估的檔案上傳

    program_plan 方案計畫的檔案上傳

    add_ 開頭的php檔案 新增
    detail 結尾的檔案 詳細資料
    yearlist 年度總覽
```

# 項目名稱：
```
行政管理
    收文 received 
    發文 published
    員工管理
        履歷表檔案 resume、	resume_forms（檔案資料 資料庫表單名稱）、resume_seniority（年資特補休請假加班計算 資料庫表單名稱）
        在職訓練 training
        請假系統 day_off_v2
        加班系統 overtime
        特休規則管理（請假系統計算時數用） leave_rule_table
    志工管理
        志工資料 volunteer、volunteer_hours_record（志工計算時數用 資料庫表單名稱）
        志工會議及活動 volunteer_meeting
    會議管理
        團督記錄 supervisor_record_v2
        理監事會議 board_supervisor_v2
        會員大會 members_assemble_v2
    會計管理
        零用金 accounting_record_cash_v2、accounting_sheet
        帳目報表 accounting_record_report

個案管理
    未開案管理
        簡短服務 phone（一般檔案）、consult（資料庫表單名稱）、detail（詳細資料名稱）
        監所服務 counsel
        篩檢 screening
    開案管理
        開案個案（跟結案聯動） current_case、case、forms（資料庫表單名稱）、form_all_info（資料庫表單名稱）、form_interlocution_queskeywords（會談紀錄-資料庫表單名稱）
        安置評估 placement_case、placement_forms（資料庫表單名稱）、placement_form_all_info（資料庫表單名稱）
    結案　closed
    安置中心生輔紀錄
        生輔紀錄　dlgrec
        同儕生輔紀錄　peers_dlgrec
    服務報表（開案個案的統計表）　case_report、	form_case_report（資料庫表單名稱）
    
    （未開案個案轉至開案個案 phone_trans_to_opencase）－＞未在選單列表裡
    （結案再次開案 reopencase）－＞未在選單列表裡
    （開案個案轉至結案 trans_closed）－＞未在選單列表裡

方案管理
    方案計畫　program_plan
    方案活動　program_act

權限管理 Authority、user_info_default_auth（資料庫名稱）、user_info（資料庫名稱）

首頁
    訊息公告 announcement
    車輛保留 vehicle_retain
    活動 program_plan
    社工訪視 visit_index
    請假 day_off_v2
    會議記錄上傳提醒 record_warn
    簽核 signature_notice
    行事曆 note、calendar
    登入記錄 login_records、login_record（資料庫名稱）
```


