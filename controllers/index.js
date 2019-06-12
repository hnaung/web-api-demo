// ConfigController.js
// Import Config model
Config = require('../db/index');
// Handle index actions
exports.index = function (req, res) {
    Config.get(function (err, config) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Configs retrieved successfully",
            data: config
        });
    });
};
// Handle create Config actions
exports.new = function (req, res) {
    var config = new Config();
    config.name = req.body.name;
    config.data = req.body.data;
// save the Config and check for errors
config.save(function (err) {
         if (err)
             res.json(err);
res.json({
            message: 'New Config created!',
            data: config
        });
    });
};
// Handle view Config info
exports.view = function (req, res) {
    Config.find({name: req.params.name}, function (err, config) {
        if (err)
            res.send(err);
            if(config == null)
            config = {};
        res.json({
            message: 'Config details loading..',
            data: config
        });
    });
};
// Handle update Config info
exports.update = function (req, res) {
Config.find({name: req.params.name}, function (err, config) {
        if (err)
            res.send(err);
            for(var i=0;i<config.length;i++){
        config[i].name = req.body.name;
        config[i].data = req.body.data;
// save the Config and check for errors
        config[i].save(function (err) {
            if (err)
                res.json(err);
        });
    }
        res.json({
            message: 'Config Info updated',
            data: config
        });
    });
};
// Handle delete Config
exports.delete = function (req, res) {
    Config.deleteMany({
        name: req.params.name
    }, function (err, config) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Config deleted',
            data: config
        });
    });
};

// Handle search Config
exports.search = function (req, res) {
    let _data = req.query.data;
    if(_data)
    {
    Config.find({name: req.query.name,data: _data}, function (err, config) {
        if (err)
            res.send(err);
            if(config == null)
            config = {};
        res.json({
            message: 'Config details loading..',
            data: config
        });
    });
}
else
{
    Config.find({name: req.query.name}, function (err, config) {
        if (err)
            res.send(err);
            if(config == null)
            config = {};
        res.json({
            message: 'Config details loading..',
            data: config
        });
    });
}
};
