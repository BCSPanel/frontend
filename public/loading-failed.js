//@ts-check
/// <reference types="../loading-failed.d.ts" />

// need compatible:
// 	 Internet Explorer 6 (Windows XP)
// 	 Internet Explorer 8 (Windows 7 SP1)
// 	 Internet Explorer 11

window.supportES2023 = !!(function () {
	try { return eval('Array.prototype.with') }
	catch (e) { }
})();

(function () {
	var notFirst = false
	window.onerror = function (event, source, lineo, colno) {
		if (notFirst) return
		notFirst = true

		if (window.root && window.root.style.display != 'none') return

		// @ts-ignore
		if (window.stop) stop()

		var style = '<style>' +
			'body{background-color:#2977e7;margin:32px;color:white;font-family:Arial}' +
			'h1{font-size:80px}' +
			'h2{margin:48px 0;font-size:30px}' +
			'a{color:white}' +
			'</style>'

		document.write(style)

		/** @type {string | RegExpExecArray | null} */
		var browserName
		if (browserName = /(MSIE |(Firefox|Edg|Edge|Opera|OPR|Chrome|Safari)\/)[\d\.]+/.exec(navigator.userAgent))
			browserName = browserName[0]
		else if (navigator.userAgent.indexOf('Trident') > -1)
			browserName = 'IE 11'
		else
			browserName = 'unknown'

		if (navigator.userAgent.indexOf('Mobi') > -1)
			browserName += ' Mobile'

		var link = 'https://bcspanel.bddjr.com/loadingfailed'

		var output = style +
			'<h1>:(</h1>' +
			'<h2>Loading failed' + (
				window.supportES2023 ? '' : ', please upgrade or change browser'
			) + '</h2>' +
			'<p style=margin-bottom:40px>For more info about this issue and possible fixes, visit <a target=_blank href=' + link + '>' + link + '</a></p>' +
			'<p>' + (
				window.supportES2023 ? 'Support' : 'Unsupported'
			) + ' ES2023</p>' +
			'<p>Browser: ' + browserName + '</p>' +
			'<p>UserAgent: ' + navigator.userAgent + '</p>' +
			'<p>Language: ' + (navigator.language || navigator.browserLanguage) + '</p>' +
			'<p style=margin-top:40px>' + (
				String(event).replace(/&/g, '&amp;').replace(/</g, '&lt;') + '<br>' +
				(source && source.replace(location.protocol + '//' + location.host, '')) + ' (' + lineo + ', ' + colno + ')'
			) + '</p>'

		function f() {
			document.close()
			document.write(output)
		}
		setTimeout(f, 100)
		setTimeout(f, 300)
		setTimeout(f, 800)
	}
})();
