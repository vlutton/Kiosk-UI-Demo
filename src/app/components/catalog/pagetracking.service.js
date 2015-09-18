(function() {
	'use strict';

	angular
		.module('kioskUi')
		.service('PageTracking', PageTracking);

	function PageTracking() {
		return {
            MAX_ITEMS_PER_PAGE: 3,
            MIN_ITEMS_PER_PAGE: 1,
            ITEMS_PER_PAGE_STEP: 3,
            itemsPerPage: 3,
            itemsSizeList: [],
            pagerObject: {},
            getItemSizeList: function() {
                return _.range(this.MIN_ITEMS_PER_PAGE,this.MAX_ITEMS_PER_PAGE + this.ITEMS_PER_PAGE_STEP, this.ITEMS_PER_PAGE_STEP);
            }
        }
	}
})();