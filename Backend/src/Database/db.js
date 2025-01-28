const mongoose = require('mongoose');


const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
            console.log('Database connected successfully');
        }
     catch (error) {
        console.log('Error connecting to database');
    }
}

module.exports = connectDB;