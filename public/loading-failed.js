window.supportES2023 = !!(function () {
	try { return eval('Array.prototype.with') }
	catch (e) { }
})()

var loadingFailedBlueScreenPrinting = false
window.onerror = function (event, source, lineo, colno) {
	if (loadingFailedBlueScreenPrinting) return
	loadingFailedBlueScreenPrinting = true

	if (window.root && !window.loading) return
	window.stop && stop()

	var output = '<h1>:(</h1><h2>Loading failed'

	if (window.supportES2023)
		output += '</h2><p>Support'
	else
		output += ', please upgrade or change browser</h2><p>Unsupported'

	output += ' ES2023</p><style>body{background-color:#2977e7;margin:32px;color:white;font-family:Arial}h1{font-size:80px}h2{margin:48px 0;font-size:30px}</style>'

	var browserName
	if (browserName = /(MSIE |(Firefox|Chrome|Safari|Opera)\/)[\d\.]+/.exec(navigator.userAgent))
		browserName = browserName[0]
	else if (navigator.userAgent.indexOf('Trident') > -1)
		browserName = 'IE 11'
	else
		browserName = 'unknown'

	if (navigator.userAgent.indexOf('Mobi') > -1) browserName += ' Mobile'

	output += '<p>Browser: ' + browserName + '</p><p>UserAgent: ' + navigator.userAgent +
		'</p><p style="margin-top:48px">' +
		String(event).replace(/&/g, '&amp;').replace(/</g, '&lt;') + '<br>' +
		String(source).replace(location.protocol + '//' + location.host, '') + ' (' + lineo + ', ' + colno + ')</p>'

	function f() {
		document.close()
		document.write(output)
	}
	for (var i = 100; i <= 1000; i += 100) {
		setTimeout(f, i)
	}
	f()
}
