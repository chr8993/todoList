// import our schema
var ListItem = require('../models/todoModel.js');

// create new item and run callback function
exports.addItem = function(task, callback) {
    if(!task) return false;
    var item = new ListItem({ task: task });
    item.save(callback);
};

// update item by id
exports.updateItem = function(id, task, callback) {
    if(!id || !task) return false;
    ListItem.update({ _id: id }, {
        $set: { task: task }
    }, callback);
};

// remove item by id
exports.removeItem = function(id, callback) {
    if(!id) return false;
    ListItem.remove({
        _id: id
    }, callback);
};

// list all todo items
exports.listItems = function(callback) {
    ListItem.find({}, callback);
};
