'use strict';

describe('kiosk-catalog', function() {
	var page;

	beforeEach(function () {
		browser.get('/catalog.html');
		page = require('./catalog.po');
		
	});
});