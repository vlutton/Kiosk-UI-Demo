(function() {
	'use strict';

	angular
		.module('kioskUi')
		.factory('Cart', Cart);

	/** @ngInject */
	function Cart() {
		var cart = {
			addToCart: addToCart,
			removeFromCart: removeFromCart,
			items: {},
			totalQuantity: 0,
			total: 0.0,
			totalTax: 0.0,
			subtotal: 0.0,
		};

		return cart;

		function addToCart(product_obj) {
			this.totalQuantity += 1;
            this.subtotal += parseFloat(product_obj.price);

            var tax = (product_obj.taxable * parseFloat(product_obj.price) * 0.0825);
            this.totalTax += tax;
            this.total += (parseFloat(product_obj.price) + tax);

            if(product_obj.id in this.items) {
                ++this.items[product_obj.id].qty;
                this.items[product_obj.id].total += parseFloat(product_obj.price) + tax;
            }
            else  {
                product_obj.qty = 1;
                product_obj.total = parseFloat(product_obj.price) + tax;
                this.items[product_obj.id] = product_obj;
            }
		}

		function removeFromCart(product_obj) {
			if ((product_obj.id in this.items) && (this.items[product_obj.id].qty > 0)) {
                var tax = (product_obj.taxable * parseFloat(product_obj.price) * 0.0825);
                this.totalTax -= tax;
                this.subtotal -= parseFloat(product_obj.price);
                this.total -= (parseFloat(product_obj.price) + tax);
                this.items[product_obj.id].total -= (parseFloat(product_obj.price) + tax);

                --this.items[product_obj.id].qty;
                --this.totalQuantity;
            }
		}

	}
})();