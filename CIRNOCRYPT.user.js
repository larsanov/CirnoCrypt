// ==UserScript==
// @name        CIRNOCRYPT
// @namespace   BAKA
// @include     https://2ch.hk/*/res/*.html
// @version     1
// @grant       none
// ==/UserScript==


(function (window, undefined) {
    var w; var html;
    if (typeof unsafeWindow != undefined) {
        w = unsafeWindow
    } else {
        w = window;
    }
    
    if (w.self != w.top) {
        return;
    }
    
    html = (document || w.document).documentElement.innerHTML;

    
    var tmp = "";
	var tmpArr;
	var regexp = /id="m([0-9]*)"/;

	pos = html.indexOf('​⁠⁠⁠⁠⁠⁠⁠'); //Ищем метку: 0111 1111
	while (pos != -1)
	{
		tmp = html.substr(pos-150, 150);
	
		if((tmpArr = regexp.exec(tmp)) != null)
		{
			alert(tmpArr[1]);
		}
		pos = html.indexOf('​⁠⁠⁠⁠⁠⁠⁠', pos+2500);
	}
	
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
		alert('ok');
	})
	
})(window);
