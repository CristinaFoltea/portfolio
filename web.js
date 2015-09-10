var express = require('express');
var app = express();
var transporter = nodemailer.createTransport(transport);
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);
