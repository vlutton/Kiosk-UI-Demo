(function() {
	'use strict';

	angular
		.module('kioskUi')
		.factory('Category', Category);

	/** @ngInject */
	function Category($firebaseArray, FIREBASE_URL) {
		var ref = new Firebase(FIREBASE_URL);
		var categories = $firebaseArray(ref.child('categories'));

		var Categories = {
			all: categories
		};

		return Categories;
	}
})();