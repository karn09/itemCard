(function (window, Ractive, Kustomer) {

	function updateCard(context) {
		// cache order object info
		var orderInfo = context['kobject.order']['attributes']['data'];
		var lineItems = orderInfo['lineItems'];
		var orderTitle = orderInfo['orderTitle'];
		var orderTotal = orderInfo['orderTotal'];

		if (lineItems.length === 0) {
			Kustomer.close();
		} else {
			var orderedItems = new Ractive({
				el: '#orderedItemsList',
				template: '#orderedItemsInfo',
				data: {
					"lineItems": lineItems,
				}
			});

			var orderTotal = new Ractive({
				el: '#orderTotal',
				template: '#orderTotalInfo',
				data: {
					'orderTotal': orderTotal,
				}
			})
		}
	};

	Kustomer.initialize(updateCard),
		Kustomer.on("context", updateCard);

})(window, Ractive, Kustomer);
