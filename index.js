var express = require('express');
var PORT = process.env.PORT || 3000
var app = express();

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Server up on port:', PORT);
});
