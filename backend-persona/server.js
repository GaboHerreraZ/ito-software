const express = require('express');
const app = express();
const config = require('./config');
const db = require('./db');
const cors = require('cors');
const persona  = require('./api/components/persona/network');


db.connect(config.dbUrl);
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true}));


app.use('/api/persona', persona);

app.listen(config.port, () => {
    console.log('Api escuchando en el puerto', config.port);
});