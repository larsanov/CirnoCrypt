// ==UserScript==
// @name		CIRNOCRYPT
// @author		larsanov
// @version		1.0
// @description	Pisechki bez registracii i sms
// @unwrap
// @run-at		document-end
// @grant		none
// @include		https://2ch.hk/*/res/*.html
// @match		https://2ch.hk/*/res/*.html
// ==/UserScript==
(function(){

	var ARR = [' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
	'0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
	'@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
	'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_',
	'`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
	'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~','\n',
	'А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О',
	'П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю',
	'Я','а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н',
	'о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э',
	'ю','я','','€','‹','›','«','»','±','§','©','®','™','“','”','➈',
	'➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈',
	'➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈',
	'➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈',
	'➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈',
	'➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈','➈'];
	
	//----------------[Кроссбраузерное получение window для внедрения кода в макабу]----------------//
	var unsafeWindow = this.unsafeWindow; //Костыль для Оперы
	(function(){
		var injectSCR = document.createElement("script");
		injectSCR.text = "window.CIRNONEBAKA=true";
		document.querySelector("body").appendChild(injectSCR);
		
		if (typeof(unsafeWindow) == "undefined" || !unsafeWindow['CIRNONEBAKA']) {
			if (window['CIRNONEBAKA']) {
				unsafeWindow = window;
			} else {
				var injectChromeSCR = document.createElement("script");
				injectChromeSCR.text= "(" +
					(function() {
						var injUW = document.createElement('unsafeWindow');
						injUW.style.display = 'none';
						injUW.onclick=function(){return window};
						document.body.appendChild(injUW);
					}).toString() + ")()";
				document.querySelector("body").appendChild(injectChromeSCR);
				this.unsafeWindow = document.querySelector("unsafeWindow").onclick();
				unsafeWindow = window.unsafeWindow;
			};
		}
	})();
	//----------------[/Кроссбраузерное получение window для внедрения кода в макабу]----------------//

	//----------------[Поиск в загруженном треде меток сырнопостов]----------------//
	var html = (document || unsafeWindow.document).documentElement.innerHTML;
	var findCirno = new Array();
	var tmp = ""; var tmpArr;
	var regexp = /id="m([0-9]*)"/;
	var pos = html.indexOf('​⁠⁠⁠⁠⁠⁠⁠'); //Ищем метку: 0111 1111
	while (pos != -1)
	{
		tmp = html.substr(pos-150, 150);
		if((tmpArr = regexp.exec(tmp)) != null) findCirno.push(tmpArr[1]);
		pos = html.indexOf('​⁠⁠⁠⁠⁠⁠⁠', pos+2500);
	}
	//----------------[/Поиск в загруженном треде меток сырнопостов]----------------//
	
	//----------------[Функция ожидания завершения построения DOM]----------------//
	function CheckDOMReady(handler)
	{
			var called = false
			function ready() {
			if (called) return
			called = true
			handler();
		}
			document.addEventListener( "DOMContentLoaded", function(){ ready(); }, false )
			if (w.addEventListener)
			w.addEventListener('load', ready, false)
		else if (w.attachEvent)
			w.attachEvent('onload', ready)
	}
	
	CheckDOMReady(function() {
	//----------------[/Функция ожидания завершения построения DOM]----------------//
	
		//----------------[Внедряемся в обработчик постинга]----------------//
		
		
		
		//----------------[/Внедряемся в обработчик постинга]----------------//
	})
})();
