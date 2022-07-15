<style>
    #form_1 table tr:nth-child(even) td:nth-child(even),
    #form_2 table tr:nth-child(odd) td:nth-child(even)
    {
        background-color:rgb(255 201 54);
        text-align:left;
    }

</style>
<div style="zoom:80%" class="row">
    <div class="col-md-12">
        <div class="panel panel-default card-view">
            <div class="panel-wrapper collapse in">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <div  class="text-center">
                                <h4 id="form_type">生活品質問卷</h4>
                            </div>
                            <br>
                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item active" role="presentation">
                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                        <b>生活品質問卷</b>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                        <b>綜合自我評估</b>
                                    </a>
                                </li>
                                <!-- <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                        <b>個人基本資料</b>
                                    </a>
                                </li> -->
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="col-sm-12">
                                        <div style="margin-top:15px" class="text-center">
                                            <h4>生活品質問卷</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_1" class="form">
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td colspan="4">
                                                            <div class="col-sm-12">
                                                                <div class="text-left" style="color: #d86d6d;">
                                                                    <input name="w_test" style="zoom: 1.5" value="前測" type="radio"><span>前測</span>
                                                                    <input name="w_test" style="zoom: 1.5" value="後測" type="radio"><span>後測</span>&emsp;
                                                                    <span>填寫日期：</span><input name="fillin_date" type="date">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>1.整體來說，您如何評價您的生活品質？</td>
                                                        <td></td>
                                                        <td>2.整體來說，您滿意自己的健康嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer1" style="zoom: 1.5" value="1" type="radio"><span>極不好</span>
                                                            <input name="life_answer1" style="zoom: 1.5" value="2" type="radio"><span>不好</span>
                                                            <input name="life_answer1" style="zoom: 1.5" value="3" type="radio"><span>中等程度好</span>
                                                            <input name="life_answer1" style="zoom: 1.5" value="4" type="radio"><span>好</span>
                                                            <input name="life_answer1" style="zoom: 1.5" value="5" type="radio"><span>極好</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer2" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer2" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer2" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer2" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer2" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                    </tr>
                                                  
                                                    <tr>
                                                        <td></td>
                                                        <td>3.您覺得身體疼痛會妨礙您處理需要做的事情嗎？</td>
                                                        <td></td>
                                                        <td>4.您需要靠醫療的幫助應付日常生活嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer3" style="zoom: 1.5" value="5" type="radio"><span>完全沒有妨礙</span>
                                                            <input name="life_answer3" style="zoom: 1.5" value="4" type="radio"><span>有一點妨礙</span>
                                                            <input name="life_answer3" style="zoom: 1.5" value="3" type="radio"><span>中等程度妨礙</span>
                                                            <input name="life_answer3" style="zoom: 1.5" value="2" type="radio"><span>很妨礙</span>
                                                            <input name="life_answer3" style="zoom: 1.5" value="1" type="radio"><span>極妨礙</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer4" style="zoom: 1.5" value="5" type="radio"><span>完全沒有需要</span>
                                                            <input name="life_answer4" style="zoom: 1.5" value="4" type="radio"><span>有一點需要</span>
                                                            <input name="life_answer4" style="zoom: 1.5" value="3" type="radio"><span>中等程度需要</span>
                                                            <input name="life_answer4" style="zoom: 1.5" value="2" type="radio"><span>很需要</span>
                                                            <input name="life_answer4" style="zoom: 1.5" value="1" type="radio"><span>極需要</span>
                                                        </td>
                                                    </tr>
                                               
                                                    <tr>
                                                        <td></td>
                                                        <td>5.您享受生活嗎？</td>
                                                        <td></td>
                                                        <td>6.您覺得自己生命有意義嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer5" style="zoom: 1.5" value="1" type="radio"><span>完全沒有享受</span>
                                                            <input name="life_answer5" style="zoom: 1.5" value="2" type="radio"><span>有一點享受</span>
                                                            <input name="life_answer5" style="zoom: 1.5" value="3" type="radio"><span>中等程度享受</span>
                                                            <input name="life_answer5" style="zoom: 1.5" value="4" type="radio"><span>很享受</span>
                                                            <input name="life_answer5" style="zoom: 1.5" value="5" type="radio"><span>極享受</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer6" style="zoom: 1.5" value="1" type="radio"><span>完全沒有</span>
                                                            <input name="life_answer6" style="zoom: 1.5" value="2" type="radio"><span>有一點有</span>
                                                            <input name="life_answer6" style="zoom: 1.5" value="3" type="radio"><span>中等程度有</span>
                                                            <input name="life_answer6" style="zoom: 1.5" value="4" type="radio"><span>很有</span>
                                                            <input name="life_answer6" style="zoom: 1.5" value="5" type="radio"><span>極有</span>
                                                        </td>
                                                    </tr>
                                                   
                                                    <tr>
                                                        <td></td>
                                                        <td>7.您集中精神的能力有多好？</td>
                                                        <td></td>
                                                        <td>8.在日常生活中，您感到安全嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer7" style="zoom: 1.5" value="1" type="radio"><span>完全不好</span>
                                                            <input name="life_answer7" style="zoom: 1.5" value="2" type="radio"><span>有一點好</span>
                                                            <input name="life_answer7" style="zoom: 1.5" value="3" type="radio"><span>中等程度好</span>
                                                            <input name="life_answer7" style="zoom: 1.5" value="4" type="radio"><span>很好</span>
                                                            <input name="life_answer7" style="zoom: 1.5" value="5" type="radio"><span>極好</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer8" style="zoom: 1.5" value="1" type="radio"><span>完全不安全</span>
                                                            <input name="life_answer8" style="zoom: 1.5" value="2" type="radio"><span>有一點安全</span>
                                                            <input name="life_answer8" style="zoom: 1.5" value="3" type="radio"><span>中等程度安全</span>
                                                            <input name="life_answer8" style="zoom: 1.5" value="4" type="radio"><span>很安全</span>
                                                            <input name="life_answer8" style="zoom: 1.5" value="5" type="radio"><span>極安全</span>
                                                        </td>
                                                    </tr>
                                                   
                                                    <tr>
                                                        <td></td>
                                                        <td>9.您所處的環境健康嗎？(如污染、噪音、氣候、景觀)</td>
                                                        <td></td>
                                                        <td>10.您每天的生活有足夠的精力嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer9" style="zoom: 1.5" value="1" type="radio"><span>完全不健康</span>
                                                            <input name="life_answer9" style="zoom: 1.5" value="2" type="radio"><span>有一點健康</span>
                                                            <input name="life_answer9" style="zoom: 1.5" value="3" type="radio"><span>中等程度健康</span>
                                                            <input name="life_answer9" style="zoom: 1.5" value="4" type="radio"><span>很健康</span>
                                                            <input name="life_answer9" style="zoom: 1.5" value="5" type="radio"><span>極健康</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer10" style="zoom: 1.5" value="1" type="radio"><span>完全不足夠</span>
                                                            <input name="life_answer10" style="zoom: 1.5" value="2" type="radio"><span>少許足夠</span>
                                                            <input name="life_answer10" style="zoom: 1.5" value="3" type="radio"><span>中等程度足夠</span>
                                                            <input name="life_answer10" style="zoom: 1.5" value="4" type="radio"><span>很足夠</span>
                                                            <input name="life_answer10" style="zoom: 1.5" value="5" type="radio"><span>完全足夠</span>
                                                        </td>
                                                    </tr>
                                                   
                                                    <tr>
                                                        <td></td>
                                                        <td>11.您能接受自己的外表嗎？</td>
                                                        <td></td>
                                                        <td>12.您有足夠的金錢應付所需嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer11" style="zoom: 1.5" value="1" type="radio"><span>完全不能夠</span>
                                                            <input name="life_answer11" style="zoom: 1.5" value="2" type="radio"><span>少許能夠</span>
                                                            <input name="life_answer11" style="zoom: 1.5" value="3" type="radio"><span>中等程度能夠</span>
                                                            <input name="life_answer11" style="zoom: 1.5" value="4" type="radio"><span>很能夠</span>
                                                            <input name="life_answer11" style="zoom: 1.5" value="5" type="radio"><span>完全足夠</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer12" style="zoom: 1.5" value="1" type="radio"><span>完全不能夠</span>
                                                            <input name="life_answer12" style="zoom: 1.5" value="2" type="radio"><span>少許足夠</span>
                                                            <input name="life_answer12" style="zoom: 1.5" value="3" type="radio"><span>中等程度足夠</span>
                                                            <input name="life_answer12" style="zoom: 1.5" value="4" type="radio"><span>很足夠</span>
                                                            <input name="life_answer12" style="zoom: 1.5" value="5" type="radio"><span>完全足夠</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                       
                                                        <td></td>
                                                        <td>13.您能方便得到每日生活所需的資訊嗎？</td>
                                                        <td></td>
                                                        <td>14.您有機會從事休閒活動嗎？</td>
                                                    </tr>
                                                    <tr>
                                                       
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer13" style="zoom: 1.5" value="1" type="radio"><span>完全不方便</span>
                                                            <input name="life_answer13" style="zoom: 1.5" value="2" type="radio"><span>少許方便</span>
                                                            <input name="life_answer13" style="zoom: 1.5" value="3" type="radio"><span>中等程度足夠</span>
                                                            <input name="life_answer13" style="zoom: 1.5" value="4" type="radio"><span>很方便</span>
                                                            <input name="life_answer13" style="zoom: 1.5" value="5" type="radio"><span>完全方便</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer14" style="zoom: 1.5" value="1" type="radio"><span>完全沒有機會</span>
                                                            <input name="life_answer14" style="zoom: 1.5" value="2" type="radio"><span>少許機會</span>
                                                            <input name="life_answer14" style="zoom: 1.5" value="3" type="radio"><span>中等程度機會</span>
                                                            <input name="life_answer14" style="zoom: 1.5" value="4" type="radio"><span>很有機會</span>
                                                            <input name="life_answer14" style="zoom: 1.5" value="5" type="radio"><span>完全有機會</span>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td></td>
                                                        <td>15.您四處行動的能力好嗎？</td>
                                                        <td></td>
                                                        <td>16.您滿意自己的睡眠狀況嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer15" style="zoom: 1.5" value="1" type="radio"><span>完全不好</span>
                                                            <input name="life_answer15" style="zoom: 1.5" value="2" type="radio"><span>有一點好</span>
                                                            <input name="life_answer15" style="zoom: 1.5" value="3" type="radio"><span>中等程度好</span>
                                                            <input name="life_answer15" style="zoom: 1.5" value="4" type="radio"><span>很好</span>
                                                            <input name="life_answer15" style="zoom: 1.5" value="5" type="radio"><span>極好</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer16" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer16" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer16" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer16" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer16" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                    </tr>
                                                   
                                                    <tr>
                                                        <td></td>
                                                        <td>17.您滿意自己從事日常活動的能力嗎？</td>
                                                        <td></td>
                                                        <td>18.您滿意自己的工作能力嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer17" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer17" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer17" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer17" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer17" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer18" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer18" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer18" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer18" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer18" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td></td>
                                                        <td>19.您對自己滿意嗎？</td>
                                                        <td></td>
                                                        <td>20.您滿意自己的人際關係嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer19" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer19" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer19" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer19" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer19" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer20" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer20" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer20" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer20" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer20" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td></td>
                                                        <td>21.您滿意自己的性生活嗎？</td>
                                                        <td></td>
                                                        <td>22.您滿意朋友給您的支持嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer21" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer21" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer21" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer21" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer21" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer22" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer22" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer22" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer22" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer22" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td></td>
                                                        <td>23.您滿意自己住所的狀況嗎？</td>
                                                        <td></td>
                                                        <td>24.您滿意醫療保健服務的方便程度嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer23" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer23" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer23" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer23" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer23" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer24" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer24" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer24" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer24" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer24" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                    </tr>
                                                  
                                                    <tr>
                                                        <td></td>
                                                        <td>25.您滿意所使用的交通運輸方式嗎？</td>
                                                        <td></td>
                                                        <td>26.您常有負面的感受嗎？(如傷心、緊張、焦慮、憂鬱等)</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer25" style="zoom: 1.5" value="1" type="radio"><span>極不滿意</span>
                                                            <input name="life_answer25" style="zoom: 1.5" value="2" type="radio"><span>不滿意</span>
                                                            <input name="life_answer25" style="zoom: 1.5" value="3" type="radio"><span>中等程度滿意</span>
                                                            <input name="life_answer25" style="zoom: 1.5" value="4" type="radio"><span>滿意</span>
                                                            <input name="life_answer25" style="zoom: 1.5" value="5" type="radio"><span>極滿意</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer26" style="zoom: 1.5" value="5" type="radio"><span>從來沒有</span>
                                                            <input name="life_answer26" style="zoom: 1.5" value="4" type="radio"><span>不常有</span>
                                                            <input name="life_answer26" style="zoom: 1.5" value="3" type="radio"><span>一半有一半沒有</span>
                                                            <input name="life_answer26" style="zoom: 1.5" value="2" type="radio"><span>很常有</span>
                                                            <input name="life_answer26" style="zoom: 1.5" value="1" type="radio"><span>一直都有</span>
                                                        </td>
                                                    </tr>
                                                   
                                                    <tr>
                                                        <td></td>
                                                        <td>27.您覺得自己有面子或被尊重嗎？</td>
                                                        <td></td>
                                                        <td>28.您想吃的食物通常都能吃到嗎？</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer27" style="zoom: 1.5" value="1" type="radio"><span>完全沒有</span>
                                                            <input name="life_answer27" style="zoom: 1.5" value="2" type="radio"><span>有一點有</span>
                                                            <input name="life_answer27" style="zoom: 1.5" value="3" type="radio"><span>中等程度有</span>
                                                            <input name="life_answer27" style="zoom: 1.5" value="4" type="radio"><span>很有</span>
                                                            <input name="life_answer27" style="zoom: 1.5" value="5" type="radio"><span>極有</span>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="life_answer28" style="zoom: 1.5" value="1" type="radio"><span>從來沒有</span>
                                                            <input name="life_answer28" style="zoom: 1.5" value="2" type="radio"><span>不常有</span>
                                                            <input name="life_answer28" style="zoom: 1.5" value="3" type="radio"><span>一半有一半沒有</span>
                                                            <input name="life_answer28" style="zoom: 1.5" value="4" type="radio"><span>很常有</span>
                                                            <input name="life_answer28" style="zoom: 1.5" value="5" type="radio"><span>一直都有</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">
                                                            <div class="text-right">
                                                                <span>總分：</span>
                                                                <input style="width:6em;" name="life_answer_score1" id="life_answer_score1" type="text" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="col-sm-12">
                                        <div style="margin-top:15px" class="text-center">
                                            <h4>量表內容</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_2" class="form">
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td></td>
                                                        <td><label for="customRange1" class="form-label">1.整體而言，我對自己<u>身體健康</u>的滿意程度。</label></td>
                                                        <td></td>
                                                        <td><label for="customRange2" class="form-label">2.整體而言，我對自己<u>心理健康</u>的滿意程度。</label></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input type="range" class="form-range" value="50" min="0" max="100" step="5" id="customRange1" name="customRange1" oninput="this.nextElementSibling.value = this.value">
                                                            <output>50</output>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input type="range" class="form-range" value="50" min="0" max="100" step="5" id="customRange2" name="customRange2" oninput="this.nextElementSibling.value = this.value">
                                                            <output>50</output>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td><label for="customRange3" class="form-label">3.整體而言，我對自己獨立程度（日常活動、移動能力、工作能力等）的滿意程度。</label></td>
                                                        <td></td>
                                                        <td><label for="customRange4" class="form-label">4.整體而言，我對自己社會關係（個人關係、社會支持等）的滿意程度。</label></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input type="range" class="form-range" value="50" min="0" max="100" step="5" id="customRange3" name="customRange3" oninput="this.nextElementSibling.value = this.value">
                                                            <output>50</output>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input type="range" class="form-range" value="50" min="0" max="100" step="5" id="customRange4" name="customRange4" oninput="this.nextElementSibling.value = this.value">
                                                            <output>50</output>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td></td>
                                                        <td><label for="customRange5" class="form-label">5.整體而言，我對環境（居家環境、安全、交通、財務資源、資訊取得等）的滿意程度。</label></td>
                                                        <td></td>
                                                        <td><label for="customRange6" class="form-label">6.整體而言，我對<u>自己宗教信仰或信念上</u>的滿意程度。</label></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input type="range" class="form-range" value="50" min="0" max="100" step="5" id="customRange5" name="customRange5" oninput="this.nextElementSibling.value = this.value">
                                                            <output>50</output>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input type="range" class="form-range" value="50" min="0" max="100" step="5" id="customRange6" name="customRange6" oninput="this.nextElementSibling.value = this.value">
                                                            <output>50</output>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td></td>
                                                        <td><label for="customRange7" class="form-label">7.綜合而言，我對自己<u>健康相關生活品質</u>（包括前面第一至第六題）的滿意程度。</label></td>
                                                        <td></td>
                                                        <td><label>8.請就您自己覺得以下哪一方面最影響您的<u>健康相關品質</u>，在空格內依次排名1,2,3,4,5,6；<br/>最重要的寫(1)，次重要的寫(2)，依次類推(3)、(4)、(5)，最不重要的寫(6)。</label></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <input type="range" class="form-range" value="50" min="0" max="100" step="5" id="customRange7" name="customRange7" oninput="this.nextElementSibling.value = this.value">
                                                            <output>50</output>
                                                        </td>
                                                        <td></td>
                                                        <td>
                                                            <input name="n0" style="width:3em;" type="number"><span>身體健康狀態</span>
                                                            <input name="n1" style="width:3em;" type="number"><span>心理健康狀態</span>
                                                            <input name="n2" style="width:3em;" type="number"><span>獨立程度</span>
                                                            <input name="n3" style="width:3em;" type="number"><span>社會關係</span>
                                                            <input name="n4" style="width:3em;" type="number"><span>周遭環境</span>
                                                            <input name="n5" style="width:3em;" type="number"><span>宗教信仰或信念</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4">
                                                            <div class="text-right">
                                                                <span>總分：</span>
                                                                <input style="width:6em;" name="life_answer_score2" id="life_answer_score2" type="text" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="col-sm-12">
                                        <div style="margin-top:15px" class="text-center">
                                            <h4>基本資料部分</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_1" class="form">
                                                <table style="width:auto;" class="table table-bordered">
                                                    <tr>
                                                        <td colspan="3">
                                                            <div class="col-sm-12">
                                                                <div class="text-left" style="color: #d86d6d;">
                                                                    <input name="w_test" style="zoom: 1.5" value="前測" type="radio"><span>前測</span>
                                                                    <input name="w_test" style="zoom: 1.5" value="後測" type="radio"><span>後測</span>&emsp;
                                                                    <span>填寫日期：</span><input name="fillin_date" type="date">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">1.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">姓名</td>
                                                        <td>
                                                            <input name="case_name" id="case_name" type="text">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">2.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">性別</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="sex" style="zoom: 1.5" value="男生" type="radio"><span>男生</span>
                                                                    <input name="sex" style="zoom: 1.5" value="女生" type="radio"><span>女生</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">3.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">出生年月日</td>
                                                        <td>
                                                            <input name="birth" id="birth" type="date">
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">4.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">教育程度</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="education" style="zoom: 1.5" value="不識字" type="radio"><span>不識字</span>
                                                                    <input name="education" style="zoom: 1.5" value="國小/小學" type="radio"><span>國小/小學</span>
                                                                    <input name="education" style="zoom: 1.5" value="國中/初中" type="radio"><span>國中/初中</span>
                                                                    <input name="education" style="zoom: 1.5" value="高中/高職" type="radio"><span>高中/高職</span>
                                                                    <input name="education" style="zoom: 1.5" value="大學/大專" type="radio"><span>大專/大學</span>
                                                                    <input name="education" style="zoom: 1.5" value="研究所以上" type="radio"><span>研究所以上</span>
                                                                    <input name="education" style="zoom: 1.5" value="其他" type="radio"><span>其他</span><input name="education_other" id="education_other" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">5.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">職業</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="current_job" style="zoom: 1.5" value="學生" type="radio"><span>學生</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="軍" type="radio"><span>軍</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="公" type="radio"><span>公</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="教" type="radio"><span>教</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="農" type="radio"><span>農</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="林" type="radio"><span>林</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="牧" type="radio"><span>牧</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="漁" type="radio"><span>漁</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="工" type="radio"><span>工</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="商" type="radio"><span>商</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="自由業" type="radio"><span>自由業</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="服務業" type="radio"><span>服務業</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="家管" type="radio"><span>家管</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="退休" type="radio"><span>退休</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="無" type="radio"><span>無</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="其他" type="radio"><span>其他</span><input name="current_job_other" id="current_job_other" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">6.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">宗教信仰</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="religion" style="zoom: 1.5" value="無" type="radio"><span>無</span>
                                                                    <input name="religion" style="zoom: 1.5" value="佛教" type="radio"><span>佛教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="道教" type="radio"><span>道教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="基督教" type="radio"><span>基督教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="天主教" type="radio"><span>天主教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="無神論" type="radio"><span>無神論</span>
                                                                    <input name="religion" style="zoom: 1.5" value="回教" type="radio"><span>回教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="信有神但沒有特定宗教" type="radio"><span>信有神但沒有特定宗教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="一貫道" type="radio"><span>一貫道</span>
                                                                    <input name="religion" style="zoom: 1.5" value="其他" type="radio"><span>其他</span><input name="religion_other" id="religion_other" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">7.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">婚姻狀況</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="marital" style="zoom: 1.5" value="未婚/單身" type="radio"><span>未婚/單身</span>
                                                                    <input name="marital" style="zoom: 1.5" value="已婚/同居" type="radio"><span>已婚/同居</span>
                                                                    <input name="marital" style="zoom: 1.5" value="離婚/分居" type="radio"><span>離婚/分居</span>
                                                                    <input name="marital" style="zoom: 1.5" value="喪偶" type="radio"><span>喪偶</span>
                                                                    <input name="marital" style="zoom: 1.5" value="其他" type="radio"><span>其他</span><input name="marital_other" id="marital_other" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">8.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">請問您目前患有哪些疾病？</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="disease_type0" style="zoom: 1.5" value="無" type="checkbox"><span>無</span>
                                                                    <span>若有，請列出</span>
                                                                    <input name="disease_type1" id="disease_type1" type="text">/
                                                                    <input name="disease_type2" id="disease_type2" type="text">/
                                                                    <input name="disease_type3" id="disease_type3" type="text">
                                                                    <br/><span>（依嚴重性列出前三項）</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">9.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">自覺個人健康狀況</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="health" style="zoom: 1.5" value="很差" type="radio"><span>很差</span>
                                                                    <input name="health" style="zoom: 1.5" value="差" type="radio"><span>差</span>
                                                                    <input name="health" style="zoom: 1.5" value="不好不壞" type="radio"><span>不好不壞</span>
                                                                    <input name="health" style="zoom: 1.5" value="好" type="radio"><span>好</span>
                                                                    <input name="health" style="zoom: 1.5" value="不好" type="radio"><span>不好</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">9.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">由誰填寫此份問卷</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="fillin_persion" style="zoom: 1.5" value="自己填寫" type="radio"><span>自己填寫</span>
                                                                    <input name="fillin_persion" style="zoom: 1.5" value="別人協助下自己填寫" type="radio"><span>別人協助下自己填寫</span>
                                                                    <input name="fillin_persion" style="zoom: 1.5" value="別人填寫" type="radio"><span>別人填寫</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">10.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">您花多少時間完成此問卷</td>
                                                        <td>
                                                            <input style="width:5em;" name="fillin_endtime" id="fillin_endtime" type="text">   
                                                            <span>分鐘。</span>                                                         
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                </div> -->

                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_life_detail" class="btn btn-default">儲存</button>
                                    <button style="font-size:20px" onclick="history_back_btn();" class="btn btn-default">返回</button>
                                    <button style="font-size:20px" id="preview" class="btn btn-default">預覽匯出</button>
                                </div>
                                <!-- <div class="text-right">
                                    <button style="font-size:20px" id="trans_grade" type="button" class="btn btn-default">轉級</button>
                                    <button style="font-size:20px" id="trans_case" type="button" class="btn btn-default">轉案</button>
                                    <button style="font-size:20px" id="end" type="button" class="btn btn-default">結案</button>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
