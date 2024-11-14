//@ts-check
/// <reference types="../loading-failed.d.ts" />

// need test:
// 	 Internet Explorer 6 (Windows XP)
// 	 Internet Explorer 8 (Windows 7 SP1)
// 	 Internet Explorer 11

window.supportES2023 = !!(function () {
	try { return eval('Array.prototype.with') }
	catch (e) { }
})();

(function () {
	function safeInner(s) {
		return String(s)
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
	}

	var notFirst = false

	window.onerror = function (event, source, lineo, colno) {
		if (notFirst) return
		notFirst = true

		if (window.root && window.root.style.display != 'none') return

		// @ts-ignore
		if (window.stop) stop()

		// ---style---

		var style = '<style>' +
			'body{background-color:#2977e7;margin:32px;color:white;font-family:Arial}' +
			'h1{font-size:80px}' +
			'h2{margin:48px 0;font-size:30px}' +
			'a{color:white}' +
			'</style>'

		document.write(style)

		// ---browser name---

		var UA = navigator.userAgent
		var browserName = 'unknown'

		var browserExec = /(Firefox|FxiOS|Chrome|CriOS|Safari|Edge|Opera|MSIE|Trident)[\/ ]([\d\.]+)/.exec(UA)
		if (browserExec) {
			if (browserExec[1] == 'Trident') {
				browserName = 'MSIE 11'
			} else {
				var versionExec = /Version\/([\d\.]+)/.exec(UA)
				if (versionExec)
					browserName = browserExec[1] + ' ' + versionExec[1]
				else
					browserName = browserExec[0]
			}
		}

		if (UA.indexOf('Mobi') > -1)
			browserName += ' Mobile'

		// ---source---

		if (source) {
			var origin = location.protocol + '//' + location.host
			if (source.slice(0, origin.length) == origin)
				source = source.slice(origin.length)
		}

		// ---build---

		var link = 'https://bcspanel.bddjr.com/loadingfailed'

		var output = style +
			'<h1>:(</h1>' +
			'<h2>Loading failed' + (
				window.supportES2023 ? '' : ', please upgrade or change browser'
			) + '</h2>' +
			'<p style=margin-bottom:40px>For more info about this issue and possible fixes, visit <a target=_blank href=' + link + '>' + link + '</a></p>' +
			'<p><b>' + (
				window.supportES2023 ? 'Support' : 'Unsupported'
			) + '</b> ES2023</p>' +
			'<p><b>Browser:</b> ' + safeInner(browserName) + '</p>' +
			'<p><b>UserAgent:</b> ' + safeInner(UA) + '</p>' +
			'<p><b>Language:</b> ' + safeInner(navigator.language || navigator.browserLanguage) + '</p>' +
			'<p style=margin-top:40px>' + (
				safeInner(event) + '<br>' +
				safeInner(source) + ' (' + lineo + ', ' + colno + ')'
			) + '</p>'

		// ---write---

		function f() {
			document.close()
			document.write(output)
		}
		setTimeout(f, 100)
		setTimeout(f, 300)
		setTimeout(f, 800)
	}
})();
