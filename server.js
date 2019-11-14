const express = require('express');
const app = express();
const router = require('./routes/routes');

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express.js HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.use(router);


app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});