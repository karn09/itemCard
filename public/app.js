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
				// "lineItems": [{
				// 	"image": "http://img.costumecraze.com/images/vendors/rubies/882019-Deluxe-Kids-Chewbacca-Costume-large.jpg",
				// 	"unitPrice": "$47.12",
				// 	"color": "N/A",
				// 	"size": "large",
				// 	"title": "Chebacca Costume",
				// 	"quantity": "2"
				// }, {
				// 	"image": "https://dl.dropboxusercontent.com/u/7062951/img_test/genesis-lightsabers.jpg",
				// 	"unitPrice": "$244.74",
				// 	"color": "Blue",
				// 	"size": "N/A",
				// 	"title": "Light Saber",
				// 	"quantity": "1"
				// }],
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
