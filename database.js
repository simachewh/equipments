const config = require("./config");
const dbURI = config.db.host;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.log('MongoDB not connected');
        console.error(err.message);
        process.exit(1);
    }
}