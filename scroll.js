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
	if (runningFlag || touchFlag) {
		//event.preventDefault();
		return;
	}
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop <= target.offset().top) changePage(scrollTop);
	//changeNav(scrollTop);
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
/*
function changeNav(scrollTop) {
	if (scrollTop >= pos) changeClass($("#top"), "navbar-dark", "navbar-light");
	else changeClass($("#top"), "navbar-light", "navbar-dark");
}*/