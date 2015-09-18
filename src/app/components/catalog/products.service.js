(function() {
	'use strict';

	angular
		.module('kioskUi')
		.factory('Products', Products);

	/** @ngInject */
	function Products($firebaseArray, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL);
		var products = $firebaseArray(ref.child('products'));

		var Products = {
			all: products
		};
		return Products;
	}
})();