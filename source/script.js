setInterval(function() {
	// řádkový program
	$(".info").not('.tv2csfd').each(function() {
		$(this).wrap('<span style="white-space: nowrap;" />');
		$(this).after(' <a href="http://www.csfd.cz/hledat/?q='+$(this).text()+'" target="_blank"><img src="http://img.csfd.cz/assets/images/favicon.ico" width="16" height="16" style="vertical-align: bottom;" /></a>');
		$(this).addClass('tv2csfd');
	});

	// sloupcový program
	$(".prog h4").not('.tv2csfd').each(function() {
		$(this).eq(0).append(' <a href="http://www.csfd.cz/hledat/?q='+$(this).text()+'" target="_blank"><img src="http://img.csfd.cz/assets/images/favicon.ico" width="16" height="16" style="vertical-align: bottom;" /></a>');
		$(this).addClass('tv2csfd');
	});
}, 2000);