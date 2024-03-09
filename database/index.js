const mongoose = require('mongoose');

const ConnectionString = "mongodb+srv://omgamal10:omgamal10@cluster0.ugb4rxt.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
    await mongoose.connect(ConnectionString);
    console.log("Connected to database successfully");
}

module.exports = connectToDatabase;
