var express = require('express');
var todoController = require('./controllers/todoController');


var app = express();

// setup template engine (ejs)
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(4444);
console.log('Server running on the port 4444');