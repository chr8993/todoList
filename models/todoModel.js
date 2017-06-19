// connect to our database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todoList');
var Item = mongoose.model('ListItem', {
    task: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});
// Export our schema so
// that we can import it later
module.exports = Item;
