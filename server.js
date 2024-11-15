const express = require('express')
const bodyParser = require("body-parser");
const path = require('path')

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route, this will send a json message whenever a get request is sent to the root of our program
// Express Middleware for serving static files

app.use(express.static('public'));

require("./app/routes/messages_routes.js")(app);
require("./app/routes/admins_routes.js")(app);
require("./app/routes/sender_routes.js")(app);
require("./app/routes/states_routes.js")(app);
require("./app/routes/companies_routes.js")(app);

app.get('/', function(req, res) {
    res.send('hello world');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, _ =>{
    console.log(`APP deployed at Port ${PORT}`);
});
