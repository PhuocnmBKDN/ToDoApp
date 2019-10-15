var bodyParser = require('body-parser');
var db = require('mongoose');

// connect database
db.connect('mongodb+srv://rainbowstar:0914479480@cluster0-ibqs8.mongodb.net/test?retryWrites=true&w=majority')

// Create a schema - this is like buleprint
var todoSchema = new db.Schema({
    item: String,
});

var Todo = db.model('Todo', todoSchema);
// var itemFirst = Todo({item: 'go to school'}).save(function(err){
//     if(err) throw err;
//     console.log('Item save successfully!');
// });

// var data = [
//     {item: 'go to school'},
//     {item: 'go to movie'},
//     {item: 'go out'},
// ]

module.exports = function(app){
    app.get('/todo', function(req, res){
        // get data from mongodb and show it
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data})
        });
    });

    app.use(bodyParser.urlencoded({extended: false}));
 
    app.post('/todo', function(req, res){
        var newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item', function(req, res){
        // delete task from mongoDB
        var item = req.params.item.replace(/-/g, " ");
        Todo.find({item: item}).remove(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });
}