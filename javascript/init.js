/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Full height function
	4.Full height function
	5.Resize function
	6.kenny function
	7.Photoswipe init
 ** ***************************************/
 
 "use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
  kenny();
  $('.la-anim-1').addClass('la-animate');
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).load(function(){
	$(".preloader-it").delay(500).fadeOut("slow");
});
/*****Load function* end*****/

/***** Full height function start *****/
var setHeight = function () {
	var height = $(window).height();
	$('.full-height').css('height', (height));
	$('.page-wrapper').css('min-height', (height));
	
	/*Vertical Tab Height Cal Start*/
	var verticalTab = $(".vertical-tab");
	if( verticalTab.length > 0 ){ 
		for(var i = 0; i < verticalTab.length; i++){
			var $this =$(verticalTab[i]);
			$this.find('ul.nav').css(
			  'min-height', ''
			);
			$this.find('.tab-content').css(
			  'min-height', ''
			);
			height = $this.find('ul.ver-nav-tab').height();
			$this.find('ul.nav').css(
			  'min-height', height + 40
			);
			$this.find('.tab-content').css(
			  'min-height', height + 40
			);
		}
	}
	/*Vertical Tab Height Cal End*/
};
/***** Full height function end *****/

/***** Resize function start *****/
$(window).on("resize", function () {
	setHeight();
}).resize();
/***** Resize function end *****/

/***** Kenny function start *****/
var kenny = function(){
	
	/*Counter Animation*/
	var counterAnim = $('.counter-anim');
	if( counterAnim.length > 0 ){
		counterAnim.counterUp({ delay: 10,
        time: 100});
	}
	
	/*Tooltip*/
	if( $('[data-toggle="tooltip"]').length > 0 )
		$('[data-toggle="tooltip"]').tooltip();
	
	/*Popover*/
	if( $('[data-toggle="popover"]').length > 0 )
		$('[data-toggle="popover"]').popover()
	
	/*Progress Bar Animation*/
	var progressAnim = $('.progress-anim');
	if( progressAnim.length > 0 ){
		for(var i = 0; i < progressAnim.length; i++){
			var $this = $(progressAnim[i]);
			$this.waypoint(function() {
			var progressBar = $(".progress-anim .progress-bar");
			for(var i = 0; i < progressBar.length; i++){
				$this = $(progressBar[i]);
				$this.css("width", $this.attr("aria-valuenow") + "%");
			}
			}, {
			  triggerOnce: true,
			  offset: 'bottom-in-view'
			});
		}
	}	
	
	/*Panel Remove*/
	$('.clickable').on('click',function(e){
		e.preventDefault();
		var effect = $(this).data('effect');
			$(this).closest('.panel')[effect]();
		return false;	
	});
	
	/*Accordion js*/
	$('.panel-collapse').on('show.bs.collapse', function () {
		$(this).siblings('.panel-heading').addClass('activestate');
	});
	$('.panel-collapse').on('hide.bs.collapse', function () {
		$(this).siblings('.panel-heading').removeClass('activestate');
	});
	
	/*Sidebar Navigation*/
	$( "#toggle_nav_btn" ).on( "click", function() {
		$(".wrapper").toggleClass('slide-nav-toggle');
		return false;
	});
	$( "#open_right_sidebar" ).on( "click", function() {
		$(".wrapper").toggleClass('open-right-sidebar');
		return false;
	});
	
	/*Todo*/
	var random = Math.random();
	$(document).on("click","#add_todo",function (e) {
		if (!$('.new-todo input').val().length == 0) {
				$('<li class="todo-item"><div class="checkbox checkbox-success"><input type="checkbox" id="checkbox'+random+'"/><label for="checkbox'+random+'">' + $('.new-todo input').val() + '</label></div></li>').insertAfter(".todo-list .todo-item:last-child");
				$('.new-todo input').val('');
		} else{
				alert('Please enter task!');
		}
		return false;
	});
	
	/*Chat*/
	$("#input_msg_send").keypress(function (e) {
		if ((e.which == 13)&&(!$(this).val().length == 0)) {
			$('<li class="self"><div class="self-msg-wrap"><div class="msg block pull-right">' + $(this).val() + '<div class="msg-per-detail mt-5"><span class="msg-time txt-grey">4:30pm</span></div></div></div><div class="clearfix"></div></li>').insertAfter(".chat-content > ul li:last-child");
			$(this).val('');
		} else if(e.which == 13) {
			alert('Please type somthing!');
		}
	});
	 
	/*Slimscroll*/
	$('.nicescroll-bar').slimscroll({height:'100%',color: '#3cb878'});
	$('.message-nicescroll-bar').slimscroll({height:'320px',color: '#3cb878'});
};

/***** Kenny function end *****/

/***** Navbar active function start *****/

$( document ).ready(function() {
	//獲取當前的網頁網址
	var thishref = window.location.href;
	// console.log(thishref);
	var breadcrumb_arr = [];
	//以"/"分割網址放入陣列
	var splitstr = thishref.split("/");
	// console.log(splitstr);
	// console.log(splitstr[splitstr.length - 1]);
	//取得麵包屑的第二個網址(取得主要網頁網址)
	$('.breadcrumb').children("li").each(function(){
		var href = $(this).children("span").children("a").attr("href");
		if(href!=""){
			breadcrumb_arr.push(href)
		}
	});
	// var as = $(".breadcrumb").children("li").eq(1).children("span").children("a").attr("href");
	
	//搜尋每個navbar中的a
	$(".navbar-nav li>a").each(function(){
		//在navbar中找到
		//跟當前頁面網址相同的href
		//or
		//麵包屑的第二個網址相同的href
		if(splitstr[splitstr.length - 1] == $(this).attr("href") || breadcrumb_arr[1] == $(this).attr("href"))
		{	
			//判斷是否為第三層選單
			//第二級選單 itemhead值會是0
			//第三級選單 itemhead值會是1
			var itemhead = $(this).parent("li").parent("ul").parent().parent("ul").siblings("a").length;
			
			//第三級選單
			if(itemhead>0)
			{
				// console.log(itemhead);
				
				//展開上一級(第二級)選單
				$(this).parent("li").parent("ul").collapse();
				//展開再上一級(第一級)選單
				$(this).parent("li").parent("ul").parent().parent("ul").collapse();
				//修改第一級選單class 為 active (設定背景顏色，並高亮文字顏色)
				$(this).parent("li").parent().siblings("a").attr("class","active");
				//修改第二級選單背景顏色
				$(this).parent("li").parent().siblings("a").css("background","#BEBEBE");
				//修改自己所在的第三級選單顏色
				$(this).parent("li").css("background","#D0D0D0");
				//第一級選單高亮文字顏色
				$(this).parent("li").parent().parent().parent().siblings("a").attr("class","active");
			}//第二級選單
			else 
			{
				// console.log(itemhead);

				//展開上一級(第一級)選單
				$(this).parent("li").parent("ul").collapse();
				//修改自己所在的第二級選單顏色
				$(this).parent("li").css("background","#BEBEBE");
				//第一級選單高亮文字顏色
				$(this).parent("li").parent().siblings("a").attr("class","active");
			}
		}
	});
});
/***** Navbar active function end *****/