function (window, Ractive, Kustomer)({

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

		var $orderedItemsList = $('#ordered-items');

		var orders = new Ractive({
      el: 'orderedItemsCard',
      template: '#items-info',
      data: {
        "orderInfo": orderInfo,
        "lineItems": lineItems,
        "orderTitle": orderTitle,
        "orderTotal": orderTitle
      }
		});

		lineItems.forEach(function (item) {
			var qty = item.quantity;
			var price = item.price;
			var title = item.title;
			var image = item.image;
			var newItem =
				`
    <div class="item">
        <img class="ui avatar image" src="` + image + `">
        <div class="content">
            <a class="header">` + title + `</a>
            <div class="description">cost:<span class="item-price">` + price + `</span> - qty:<span class="item-qty">` + quantity + `</span></div>
        </div>
    </div>
    `;

			$orderedItemsList.append($(newItem));
		});

	};


	Kustomer.initialize(updateCard),
	Kustomer.on("context", updateCard);

})(window, Ractive, Kustomer);
