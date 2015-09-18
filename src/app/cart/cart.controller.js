(function() {
	'use strict';

	angular
		.module('kioskUi')
		.controller('CartController', CartController);

	/** @ngInject */
	function CartController(Cart, PageTracking) {
		var vm = this;

		PageTracking.pagerObject = vm.pager;

		var DEFAULT_PAGER = { itemsPerPage: 7, pageNumber: 0, total: 0};
		vm.pager = DEFAULT_PAGER;

		vm.cart = Cart;
		
		vm.addToCart = function(product_obj) {
			console.log('add to cart called in controller');
        	Cart.addToCart(product_obj);
	    }

	    vm.removeFromCart = function(product_obj) {
	        Cart.removeFromCart(product_obj);
	    }

	    vm.saveCart = function() {
	    	alert('this is a demo only, so checkout is disabled!');
	    }

	}
})();