// dependencies
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const routes = require("./controllers/burgers_controller");

// middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.engine('.hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// port variable
const PORT = process.env.PORT || 3000;

// route paths
app.use(routes);

// listen to server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));