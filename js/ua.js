/*
mi.ua = navigator.userAgent, 
mi.reg1 = new RegExp("MSIE"),
mi.reg2 = new RegExp("Trident"), 
mi.reg3 = new RegExp(/mobile/i);
if (mi.reg1.test(mi.ua) || mi.reg2.test(mi.ua)) document.write('<div id="IE" style="background-color: #5C5C5C; position: fixed; bottom: 50px; right: 80px; opacity: 0.95; border-radius: 15px; color: #FFFFFF; z-index: 100;"><p style="margin: 15px; max-width: 400px;">系统检测到您正在使用IE内核浏览器浏览。为了保障您的浏览体验，请立即更换或<a target="_blank" href="https://browsehappy.com" class="a_special">升级浏览器<\/a><\/p><\/div>');
//根据ua判断用户是否在使用IE浏览
//Macintosh
//Windows NT
//
"\"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1\""
"Mozilla/5.0 (iPod; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
"Mozilla/5.0 (iPad; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
*/
function checkUA() {
	var ua = navigator.userAgent;
	var regArray = ["iP", "Android", "Macintosh", "Windows NT"];
	for (var i in regArray) {
		//alert(i);
		if (ua.indexOf(regArray[i]) != -1) return i;
	}
	return 1;
}