const config = require("./config");
const mongoose = require('mongoose');
const dbURI = config.db.host;

const connect = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.log('MongoDB not connected');
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = { connect }