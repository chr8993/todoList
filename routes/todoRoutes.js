module.exports = function(app) {
    // app is our express application
    var items = require('../controllers/todoController.js');

    app.get("/tasks", function(req, res) {
        items.listItems(function(err, data) {
            if(err) res.send(err);
            if(!err) {
                res.json(data);
            }
        });
    });

    app.post("/tasks", function(req, res) {
        if(req.body.task) {
            var task = req.body.task;
            items.addItem(task, function(err, data) {
                if(err) res.send(err);
                if(!err) {
                    res.json(data);
                }
            });
        }
    });

    app.post("/tasks/:id", function(req, res) {
        if(req.body.task && req.params.id) {
            var task = req.body.task;
            var id = req.params.id;
            items.updateItem(id, task, function(err, data) {
                if(err) res.send(err);
                if(!err) {
                    res.json(data);
                }
            });
        }
    });

    app.delete("/tasks/:id", function(req, res) {
        if(req.params.id) {
            var id = req.params.id;
            items.removeItem(id, function(err, data) {
                if(err) res.send(err);
                if(!err) {
                    res.json(data);
                }
            });
        }
    });
};
