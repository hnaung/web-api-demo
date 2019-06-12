// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./routes/index")
// Import dotenv
let dotenv = require("dotenv")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.userNewUrlParser = true;
mongoose.connect('mongodb://web-api-mongo/config-api',{ useNewUrlParser: true });
var db = mongoose.connection;
// Setup server port
dotenv.config()
var port = process.env.SERVE_PORT;
// Send message for default URL
app.get('/', (req, res) => res.send('API is up and running'));
// Use Api routes in the App
app.use('/', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function() {
    if(port === undefined){
    console.log("PORT is not setup in Environment Variable. App is failed.");
    return;
    }
    console.log("Running Config API on port " + port);
}
);
