const expres = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const equipmentRouter = require('./routes/equipment.route');
const logRouter = require('./routes/log.route');

const db = require('./database');

try {
    db.connect();
}
catch (err) {
    console.log('MongoDB not connected');
    console.error(err.message);
}
const app = expres();
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(logRouter);
app.use(equipmentRouter);

module.exports = app;