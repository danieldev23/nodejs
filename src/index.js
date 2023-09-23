const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const exphbs  = require('express-handlebars');
const hbs = exphbs.create({
    extname: '.hbs'
}); 

app.use(express.static(path.join(__dirname, 'public')));
// HTTP logger
// app.use(morgan('combined'));

// Templates engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
    res.render('home');
});
app.get('/search', (req, res) => {
    console.log(req.query.q)
    res.render('search');
});
app.get('/news', (req, res) => {
    res.render('news');
});
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));