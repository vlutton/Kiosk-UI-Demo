(function () {
	'use strict';

	angular
		.module('kioskUi')
		.controller('catalogController', catalogController);

	/** @ngInject */
	function catalogController(Products, Category, PageTracking, Cart) {
		var vm = this;

		PageTracking.pagerObject = vm.pager;

		var DEFAULT_PAGER = { itemsPerPage: PageTracking.itemsPerPage, pageNumber: 0, total: 0};
		vm.pager = DEFAULT_PAGER;

		var DEFAULT_FILTER = { category: "entree" };
		vm.productFilter = DEFAULT_FILTER;

		vm.changeProduct = function(objName) {
			console.log('change called');
			vm.details = objName;
		}

		vm.addToCart = function(product_obj) {
			Cart.addToCart(product_obj);
		}

		vm.cart = Cart;
		vm.details = "";


		vm.products = Products.all;
		vm.categories = Category.all;

		vm.slide_open = false;

		vm.toggleDetails = function() {
		    // slide to the right
		    if (vm.slide_open == false) {
		        $(".slide-pane").animate({ width: '100%' });
		        vm.slide_open = true;
		    }
		    // slide to the left
		    else {
		        $(".slide-pane").animate({ width: '0%' });
		        vm.slide_open = false;
		    }
		}
		
	}
})();