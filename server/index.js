var express = require('express')
var app = express()
var path = require('path');
var logger = require('morgan');


// loggen aller Aufrufe an den Server in der Konsole
app.use(logger('dev'));

// alle files im directory "client" können geladen werden
app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000);
