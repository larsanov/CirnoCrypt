// ==UserScript==
// @name         CIRNOCRYPT
// @author       larsanov
// @version      1.0
// @description  Pisechki bez registracii i sms
// @unwrap
// @run-at       document-end
// @grant        none
// @include      https://2ch.hk/*/res/*.html
// @match        https://2ch.hk/*/res/*.html
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
	
	var CirnoEncryptImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wMXDxY0k6IX8wAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAKnSURBVDgRlZPNS6JRFMYfHRs/Sy0VhlYREakrcR0xRJuJKVEIIt3FgIH/gJuKTNBhNi1CgiDoA5d9UENU25CgjW2ShmYgyBnfSgU/erWae46jQ7ObC/Ke673vOef5PedV7H/dD9xJuS/VaqVLq9NBp9VBq9VCJ2KNRou3bW2QazWIc5TLZVQq4lkp47FalTpMHUHV9x/fPn/84OmyWCz4nyXdSZazs1RClb39aTUYDKJCld+v1+vY2NjA4eEhXl5e+D/qyO/3Y2hoqFXDoDfgMnNpVsmyjOfnZz7I5XKYmZmBx+PB0tISLi4uoFAo0NfXh+XlZezs7CAWi0GpVPL9mpDGCagSbYLBICKRCNqEbqrmdrtRLBbx8PCA7e1t7O3tYW5uDrOzs40Ecg3KZgfr6+vw+Xzo7e1FPB7H2NgYEokEtra2YLVakUwm4fV6QV1mMhnuWq7JlKDGWo+OjjA+Ps7x9fU1nE4nx9Sdw+HA8fEx76emplgKdy3XRYLHvwxIL/Egzaenpxw/PT0hlUohm83yvr+/H1dXV40OBL8WRMrYhBkKhTA5OckyyHeTyQS1Wt16iSDS3VcQCRwNClnW3d2Nk5MTkBS9Xo/NzU1IksQSzs/PYbfbOSZ+DJHaJGgrKyuguFQqcYWenh5OSnMRCARAM7K2tobR0VG+96eDBsSRkREcHByAYLa3t7OlRqMR9/f3CIfDzGVxcRHDw8OgqSXJZECLARkbjUbZZ41Gg9XVVdbe2dmJdDqN6elpDA4OYmJiosXqFQNKQBwWFhZ4And3d3Fzc8NTRzbOz8/DZrNxZbpLixiohI23At47otxcAwMDoN+/i/g0F/FQvVH9UrhcrveiQlLYZSG7zGYzt076aU+fNbmTz+dRKBT4SaMtbLwTZ59+AzKao9aUOShEAAAAAElFTkSuQmCC';
	var CirnoDecryptImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wMXDxgdT5OiEQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAKHSURBVDgRlVPLS2JxFP7yMeUDU3SEWVlLDaOCaOMiJ3AzMSEIZsHgqoHZuk5oJYEOroJZ1aIEF1lUxCz6B8aiTW180cxCHB+RLVK713R+58iVaXZz4HLu4by+853zGzn/fv7pvlH/2um0rTq9HnqdHjqdDnrxPzamwxutFpIsQ/jRarXQbgvdbuG502mYzKYvmp+/SvGPH/xWm82G/5HGfcN2efnjm+Z3pfrWaDSKDh3O73a7ODg4wOHhIUqlErQCwczMDMLhMBYXF4c9jAYjcvmcRSNJEnq9Hjvq9TpCoRCur695hNnZWfT7fZyenuL4+JiLxONxqFQqjpfFaFyAgshQkh0OB46OjnB1dQWTyQSLxYKVlRXs7e2B0G5tbQ0KSDJUCoL9/X3uTJ5IJMIFNjY2sLq6imq1ikAgwEk7OzvI5/OMWpIlKiAzTJpZkYmJCdzc3Cgmbm9vsbS0xDaNe3Jywjmy1BUFngccEGGK5HI5LCwsKCbm5+dht9uHdrFYHCAQ/A1JVKvVw4BkMolUKoVMJsNkPjw88A0oAUQiIXlF4tTUFCqVCseUy2V4vV5MTk7i6ekJa2tr+PtOXC4Xj0D8MYkvLy8IBoNKA4yOjnIAjUX/ROTu7i776UKXl5dBOYRgSKLP52MHRU1PTyObzeLi4oK3sb29jUKhwAWi0SijodXTAoYckDeRSMBgMCCdTsPj8cBqtaJWq4Guk5Bsbm4yUuXwXnFABehsY7EY1tfXcXZ2hru7Oz5jt9sNv9/Pm6DOihAHGrHGinhl76iDIk6nE/T9KzS3IoRKo9bURubm5t6LDaTFM7WZzWY+W9Lj4+MgTaTRM242m3h8fGRNaxVj3Avf5z+JQm91S2k6rgAAAABJRU5ErkJggg==';
	
	//----------------[Кроссбраузерное получение window для внедрения кода в макабу]----------------//
	var unsafeWindow = this.unsafeWindow; //Костыль для Оперы
	(function(){
		var doc = unsafeWindow.document || document;
		var injectSCR = doc.createElement("script");
		injectSCR.text = "window.CIRNONEBAKA=true";
		doc.querySelector("body").appendChild(injectSCR);
		
		if (typeof(unsafeWindow) == "undefined" || !unsafeWindow['CIRNONEBAKA']) {
			if (window['CIRNONEBAKA']) {
				unsafeWindow = window;
			} else {
				var injectChromeSCR = doc.createElement("script");
				injectChromeSCR.text= "(" +
					(function() {
						var injUW = doc.createElement('unsafeWindow');
						injUW.style.display = 'none';
						injUW.onclick=function(){return window};
						doc.body.appendChild(injUW);
					}).toString() + ")()";
				doc.querySelector("body").appendChild(injectChromeSCR);
				this.unsafeWindow = doc.querySelector("unsafeWindow").onclick();
				unsafeWindow = window.unsafeWindow;
			};
		}
	})();
	//----------------[/Кроссбраузерное получение window для внедрения кода в макабу]----------------//

	//----------------[Поиск в загруженном треде меток сырнопостов]----------------//
	var win = unsafeWindow; var doc = unsafeWindow.document || document;
	var html = doc.documentElement.innerHTML;
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
	//----------------[/Функция ожидания завершения построения DOM]----------------//
	
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
	
	//----------------[/Функция ]----------------//
	function GetSelect()
	{
		var txtarea = doc.getElementById('shampoo');
		var len = txtarea.value.length;
		var start = txtarea.selectionStart;
		var end = txtarea.selectionEnd;
		var scrollTop = txtarea.scrollTop;
		var scrollLeft = txtarea.scrollLeft;
		var sel = txtarea.value.substring(start, end);
		//txtarea.value =  txtarea.value.substring(0,start) + rep + ToolbarTextarea.value.substring(end,len);
		txtarea.scrollTop = scrollTop;
		txtarea.scrollLeft = scrollLeft;
		txtarea.focus();
		txtarea.setSelectionRange(start, end);
		
		return sel;
	}
	//----------------[Функция ]----------------//
	
	//----------------[Внедряемся в обработчик постинга]----------------//
	CheckDOMReady(function() {
		var cmntToolbar = doc.getElementById('CommentToolbar');
		
		var decryptSpan = doc.createElement('span'); decryptSpan.className = 'm-decrypt'; 
		var decryptIcon = doc.createElement('img');  decryptSpan.appendChild(decryptIcon);
		decryptIcon.className = 'markup'; decryptIcon.src = CirnoDecryptImg;
		decryptIcon.title = "Сырноразшифровать";
		cmntToolbar.insertBefore(decryptSpan, cmntToolbar.lastChild);
		decryptIcon.addEventListener("click", function() {
			alert(GetSelect());
		}, false);
		
		var encryptSpan = doc.createElement('span'); encryptSpan.className = 'm-encrypt'; 
		var encryptIcon = doc.createElement('img');  encryptSpan.appendChild(encryptIcon);
		encryptIcon.className = 'markup'; encryptIcon.src = CirnoEncryptImg;
		encryptIcon.title = "Сырнозашифровать";
		cmntToolbar.insertBefore(encryptSpan, cmntToolbar.lastChild);
		encryptIcon.addEventListener("click", function() {

		}, false);
	})
	//----------------[/Внедряемся в обработчик постинга]----------------//

})();
