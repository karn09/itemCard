(function (window, Ractive, Kustomer) {

	// if (!window.$) {
	//   var jq = document.createElement('script'); jq.type = 'text/javascript';
	//   jq.src = 'http://code.jquery.com/jquery-3.1.0.min.js';
	//   document.getElementsByTagName('head')[0].appendChild(jq);
	//   console.log('Hmm.. jQuery not found. Adding to head.')
	// }

	function updateCard(context) {
		// cache order object info
		var orderInfo = context['kobject.order']['attributes']['data'];
		var lineItems = orderInfo['lineItems'];
		var orderTitle = orderInfo['orderTitle'];
		var orderTotal = orderInfo['orderTotal'];

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
				'orderTotal': orderTotal
			}
		})
	};

	Kustomer.initialize(updateCard),
		Kustomer.on("context", updateCard);

})(window, Ractive, Kustomer);
