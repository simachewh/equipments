const dotenv = require('dotenv');
dotenv.config();

const server = {
    port : process.env.PORT || 3000
}

const db = {
    host : process.env.DB_HOST || 'localhost'
}

module.exports = {
    server,
    db
}