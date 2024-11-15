//@ts-check
/// <reference types="../loading-failed.d.ts" />

// need test:
// 	 Internet Explorer 8 (Windows 7 SP1)
// 	 Internet Explorer 11

window.supportES2023 = !!(function () {
	try { return eval('Array.prototype.with') }
	catch (e) { }
})();

(function () {
	/** @param {any} s */
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

		// ---head---

		var head = '<meta name=viewport content=initial-scale=0.7>' +
			'<style>' +
			'*{color:white}' +
			'body{background-color:#2977e7;margin:32px;font-family:sans-serif}' +
			'p{margin:8px 0}' +
			'.h1{font-size:80px;margin:0 0 16px -6px}' +
			'.h2{margin:0;font-size:30px}' +
			'.visit{margin:48px 0}' +
			'</style>'

		document.write(head)

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

		var output = head +
			'<p class=h1>:(</p>' +
			'<p class=h2>Loading failed' + (
				window.supportES2023 ? '' : ',<br>please upgrade or change browser'
			) + '.</p>' +
			'<p class=visit>For more info about this issue and possible fixes, visit <a target=_blank href="' + link + '">' + link + '</a></p>' +
			'<p>' + safeInner(event) + '</p>' +
			'<p>' + safeInner(source) + ' (' + lineo + ', ' + colno + ')</p>' +
			'<p><b>Browser:</b> ' + safeInner(browserName) + '</p>' +
			'<p><b>ES2023:</b> ' + (
				window.supportES2023 ? 'Support' : 'Unsupported'
			) + '</p>' +
			'<p><b>Language:</b> ' + safeInner(navigator.language || navigator.browserLanguage) + '</p>' +
			'<p><b>UserAgent:</b> ' + safeInner(UA) + '</p>' +
			''

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
