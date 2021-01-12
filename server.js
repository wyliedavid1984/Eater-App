// dependencies
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//imported routes
const routes = require("./controllers/burgers_controller");

// port variable
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.engine('.hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// route paths
app.use(routes);

// listen to server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));