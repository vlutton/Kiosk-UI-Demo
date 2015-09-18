(function() {
	'use strict';

	angular
		.module('kioskUi')
		.filter("Paginate", Paginate);

	/** @ngInject */
	function Paginate() {
		return function (items, pager) {
	        if (items) {
	            pager.total = $.isArray(items) ? items.length : Object.keys(items).length;
	            pager.totalPages = Math.ceil(pager.total / pager.itemsPerPage);

	            var first = pager.pageNumber * pager.itemsPerPage;
	            var added = first + pager.itemsPerPage;
	            var last = (added > pager.total) ? pager.total : added;

	            pager.first = first + 1;
	            pager.last = last;

	            if($.isArray(items)) {
	                return items.slice(first, last);
	            }
	            // Support objects
	            else { 
	                var result = {};
	                var count = 0;
	                for(var i in items) {
	                    ++count;
	                    if(count >= first && count <= last)
	                        result[i] = items[i];
	                }
	                return result;
	            }
	        };
    	};
	}
})();