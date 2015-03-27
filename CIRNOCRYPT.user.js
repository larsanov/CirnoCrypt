// ==UserScript==
// @name         CIRNOCRYPT
// @author       larsanov
// @version      1.0
// @description  Pisechki bez registracii i sms
// @unwrap
// @run-at       document-end
// @grant        none
// @include      https://2ch.hk/*/res/*.html*
// @match        https://2ch.hk/*/res/*.html*
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
	
	var CirnoСryptImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wMXDxY0k6IX8wAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAKnSURBVDgRlZPNS6JRFMYfHRs/Sy0VhlYREakrcR0xRJuJKVEIIt3FgIH/gJuKTNBhNi1CgiDoA5d9UENU25CgjW2ShmYgyBnfSgU/erWae46jQ7ObC/Ke673vOef5PedV7H/dD9xJuS/VaqVLq9NBp9VBq9VCJ2KNRou3bW2QazWIc5TLZVQq4lkp47FalTpMHUHV9x/fPn/84OmyWCz4nyXdSZazs1RClb39aTUYDKJCld+v1+vY2NjA4eEhXl5e+D/qyO/3Y2hoqFXDoDfgMnNpVsmyjOfnZz7I5XKYmZmBx+PB0tISLi4uoFAo0NfXh+XlZezs7CAWi0GpVPL9mpDGCagSbYLBICKRCNqEbqrmdrtRLBbx8PCA7e1t7O3tYW5uDrOzs40Ecg3KZgfr6+vw+Xzo7e1FPB7H2NgYEokEtra2YLVakUwm4fV6QV1mMhnuWq7JlKDGWo+OjjA+Ps7x9fU1nE4nx9Sdw+HA8fEx76emplgKdy3XRYLHvwxIL/Egzaenpxw/PT0hlUohm83yvr+/H1dXV40OBL8WRMrYhBkKhTA5OckyyHeTyQS1Wt16iSDS3VcQCRwNClnW3d2Nk5MTkBS9Xo/NzU1IksQSzs/PYbfbOSZ+DJHaJGgrKyuguFQqcYWenh5OSnMRCARAM7K2tobR0VG+96eDBsSRkREcHByAYLa3t7OlRqMR9/f3CIfDzGVxcRHDw8OgqSXJZECLARkbjUbZZ41Gg9XVVdbe2dmJdDqN6elpDA4OYmJiosXqFQNKQBwWFhZ4And3d3Fzc8NTRzbOz8/DZrNxZbpLixiohI23At47otxcAwMDoN+/i/g0F/FQvVH9UrhcrveiQlLYZSG7zGYzt076aU+fNbmTz+dRKBT4SaMtbLwTZ59+AzKao9aUOShEAAAAAElFTkSuQmCC';
	
	var CirnoKukla = '#de-btn-crypt:empty { height: 23px; width: 27px; display: inline-block; background:url(data:image/gif;base64,R0lGODlhFwAWAKEAAAAAAGRkZPDw8AAAACH5BAEAAAMALAAAAAAXABYAAAJg3IKpq3YM4Qui2ovryqB7kCmXh5GWWHWZpWpJCsLAzMZoLNDp6CI5rvvVBCKcEMYrjoBGkHI5C+aIL2OpSfVJecMbVGp7HX9WHWrMwZ3JV+NaFrVmfat6dhLJBxz6vKEAADs=) no-repeat center !important; }';
	
	var CirnoNeutron = '.m-crypt { height: 27px; width: 27px; display: inline-block; background: url("data:image/png;base64,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") repeat scroll 0% 0% transparent; }';

	var CirnoMuon = '.m-crypt { height: 27px; width: 27px; display: inline-block; background: url("data:image/png;base64,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") repeat scroll 0% 0% transparent; }';
	
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
				this.unsafeWindow = doc.querySelector("unsafeWindow").onclick();
				unsafeWindow = window.unsafeWindow;
			}
		}
	})();
	var win = unsafeWindow;
	var doc = ((typeof(win.document) == "undefined")?document:win.document);
	//----------------[/Кроссбраузерное получение window для внедрения кода в макабу]----------------//
	
	//----------------[Функция ожидания завершения построения DOM]----------------//
	function CheckDOMReady(handler)
	{
		var called = false;
		function ready()
		{
			if (called) return;
			called = true;
			handler();
		}
		if (typeof(doc.addEventListener) != "undefined")
			doc.addEventListener("DOMContentLoaded", function(){ ready(); }, false);
		else if (typeof(win.addEventListener) != "undefined") win.addEventListener('load', ready, false);
	}
	//----------------[/Функция ожидания завершения построения DOM]----------------//

	//----------------[Поиск в загруженном треде меток сырнопостов]----------------//
	var html = doc.documentElement.innerHTML;
	var findCirno = [];
	var tmp = ""; var tmpArr;
	var regexp = /id="m([0-9]*)"/;
	var pos = html.indexOf('​⁠⁠⁠⁠⁠⁠⁠'); //Ищем метку: 0111 1111
	while (pos != -1)
	{
		tmp = html.substr(pos-150, 150);
		if((tmpArr = regexp.exec(tmp)) !== null) findCirno.push(tmpArr[1]);
		pos = html.indexOf('​⁠⁠⁠⁠⁠⁠⁠', pos+2500);
	}
	//----------------[/Поиск в загруженном треде меток сырнопостов]----------------//
	
	//----------------[Функция Сырношифрования]----------------//
	function CirnoCrypt()
	{
		
	}
	//----------------[/Функция Сырношифрования]----------------//
	
	//----------------[Функция Сырнорасшифрования]----------------//
	function CirnoEncrypt()
	{

	}
	//----------------[/Функция Сырнорасшифрования]----------------//
	
	
	//----------------[Функция обработки текста в поле]----------------//
	function CirnoEdit()
	{
		var txtarea = doc.getElementById('shampoo');
		var len = txtarea.value.length;
		var start = txtarea.selectionStart;
		var end = txtarea.selectionEnd;
		var scrollTop = txtarea.scrollTop;
		var scrollLeft = txtarea.scrollLeft;
		
		//var sel = txtarea.value.substring(start, end);
		alert(txtarea.selectionStart);
		//txtarea.value =  txtarea.value.substring(0,start) + rep + ToolbarTextarea.value.substring(end,len);
		txtarea.scrollTop = scrollTop;
		txtarea.scrollLeft = scrollLeft;
		txtarea.focus();
		txtarea.setSelectionRange(start, end);
	}
	//----------------[/Функция обработки текста в поле]----------------//
	
	//----------------[Внедряемся в панель кнопок]----------------//
	CheckDOMReady(function() {
		var style = doc.createElement('style');
		style.type = 'text/css';
		doc.head.appendChild(style);
		var styleSheet = style.sheet;
		
		var cmntToolbar, cmntsmToolbar, cryptSpan;
		
		if(doc.getElementById('de-btn-logo') !== null){
			//Нашли куклоскрипт =3
			cmntToolbar = doc.getElementById('de-txt-panel');
			cryptDiv = doc.createElement('div');
			cryptDiv.setAttribute("id", "de-btn-crypt");
			cryptDiv.setAttribute("de-title", "Сырношифр");
			cryptDiv.title = "Сырношифр";
			styleSheet.insertRule(CirnoKukla, 0);
			cmntToolbar.appendChild(cryptDiv);
			cryptDiv.addEventListener("click", CirnoEdit , false);
		}else{
			cmntToolbar = doc.getElementById('CommentToolbar');
			cmntsmToolbar = doc.getElementById('qr-CommentToolbar');
			if(win.Store.get('styling.portform_format_panel') !== true)
			{
				cmntToolbar.parentNode.style.display = "table-row";
				cmntsmToolbar.parentNode.style.display = "block";
				CommentToolbar.innerHTML = win.edToolbar('shampoo');
				cmntsmToolbar.innerHTML = win.edToolbar('qr-shampoo');
			}
	
			cryptSpan = doc.createElement('span'); cryptSpan.className = 'm-crypt'; 
			var cryptIcon = doc.createElement('img');  cryptSpan.appendChild(cryptIcon);
			cryptIcon.className = 'markup'; cryptIcon.src = CirnoСryptImg; cryptIcon.title = "Сырношифр";
			cryptSpan.addEventListener("click", CirnoEdit, false);
	
			var cryptSpan2 = cryptSpan.cloneNode(true);
			cryptSpan2.addEventListener("click", CirnoEdit, false);
	
			if(doc.getElementById('SwitchStyles').value == 'neutron')
			{
				styleSheet.insertRule(CirnoNeutron, 0);
			}else if(doc.getElementById('SwitchStyles').value == 'muon'){
				styleSheet.insertRule(CirnoMuon, 0);
			}
			cmntToolbar.insertBefore(cryptSpan, cmntToolbar.lastChild);
			cmntsmToolbar.insertBefore(cryptSpan2, cmntsmToolbar.lastChild);
			
			if(win.location.pathname.toString().indexOf('/b/res/') != -1)
			{
				var areply = document.querySelectorAll("a.postbtn-reply-href");
				if(areply.length > 0)
				{
					var fz = win.getComputedStyle(areply[0], null).getPropertyValue('font-size');
					if(fz.indexOf('px') != -1)
					{
						styleSheet.insertRule('.postbtn-reply-href { font-size: 0px; }', 0);
						styleSheet.insertRule('.postbtn-reply-href::after { font-size: '+fz+'; content: attr(name); }', 0);
					}
				}
			}
		}
	});
	//----------------[/Внедряемся в панель кнопок]----------------//

})();
