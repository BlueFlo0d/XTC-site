var scrollFlag = false;
var runningFlag = false;
var touchFlag = false;
var target = $(".row").eq(1);
var delta = 0;
var timeStamp = new Date().getTime();

window.ontouchstart = function() {
	touchFlag = true;
}

window.ontouchend = function() {
	touchFlag = false;
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop <= target.offset().top) changePage(scrollTop);
}

window.onscroll = function(event) {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	changeNav(scrollTop);
	if (runningFlag || touchFlag) {
		//event.preventDefault();
		return;
	}
	if (scrollTop <= target.offset().top) changePage(scrollTop);
	console.log(scrollTop + " " + target.offset().top + " " + window.innerHeight);
};

function changePage(scrollTop) {
	if (new Date().getTime() - timeStamp <= 600) return;
	if (scrollFlag == false && scrollTop >= (target.offset().top - window.innerHeight) + delta) {
		scrollFlag = true;
		runningFlag = true;
		$("#more").removeClass("fa-angle-double-down");
		$("#more").addClass("fa-angle-double-up");
		//var poshigh = target.height();
		$("html,body").animate({scrollTop: target.offset().top}, 500, function() {
			timeStamp = new Date().getTime();
			runningFlag = false;
		});
	}
	else if (scrollFlag == true && scrollTop <= window.innerHeight - delta) {
		scrollFlag = false;
		runningFlag = true;
		$("#more").removeClass("fa-angle-double-up");
		$("#more").addClass("fa-angle-double-down");
		$("html,body").animate({scrollTop: 0}, 500, function() {
			timeStamp = new Date().getTime();
			runningFlag = false;
		});
	}
}

function changeNav(scrollTop) {
	console.log(scrollTop + " " + target.offset().top);
	if (scrollTop >= target.offset().top) {
		$("#top").removeClass("no-background-color");
		$("#top").addClass("navbar-fixed-top");
		$("style").eq(2).html("");
	}
	else {
		$("#top").addClass("no-background-color");
		$("#top").removeClass("navbar-fixed-top");
		$("style").eq(2).html("	#top a {\
		color: #FFF;\
	}\
	#top span {\
		background-color: #FFF;\
	}\
	.nav li a {\
		color: rgba(255,255,255,0.8) !important;\
	}\
	.nav .open > a, .dropdown-menu a {\
		color: rgba(255,255,255,0.8) !important;\
		background-color: #337ab7 !important;\
	}\
	.dropdown-menu {\
		background-color: #337ab7 !important;\
	}\
	.dropdown-menu a:focus, .dropdown-menu a:hover {\
		background-color: #104590 !important;\
	}");
	}
}