if (!Kustomer) {
  throw "Kustomer not initialized"
}

Kustomer.initialize(function(context) {
  console.log('========CONTEXT=========')
  console.log(context);
})
