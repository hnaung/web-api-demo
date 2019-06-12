// configModel.js
var mongoose = require('mongoose');
// Setup schema
var configSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data: Object
});
// Export Config model
var Config = module.exports = mongoose.model('config', configSchema);
module.exports.get = function (callback, limit) {
    Config.find(callback).limit(limit);
}