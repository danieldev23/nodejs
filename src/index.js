const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');

const exphbs  = require('express-handlebars');
const hbs = exphbs.create({
    extname: '.hbs'
}); 


app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
// app.use(morgan('combined'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Templates engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
 
// Action ---> Dispatcher ---> Function Handler 


route(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));