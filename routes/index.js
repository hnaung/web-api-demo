// Filename: index.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API is Working',
       message: 'Welcome to Config API!',
    });
});

// Import config controller
var configController = require('../controllers/index');
// config routes
router.route('/configs')
    .get(configController.index)
    .post(configController.new);
router.route('/configs/:name')
    .get(configController.view)
    .patch(configController.update)
    .put(configController.update)
    .delete(configController.delete);
router.route('/search')
    .get(configController.search);

// Export API routes
module.exports = router;
