const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const MONGO_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@campusbuddy.c2brprc.mongodb.net/${process.env.MONGO_DBNAME}?appName=campusbuddy`
        await mongoose.connect(MONGO_URL);

        // Remove stale index from older schema versions where universityID was unique.
        try {
            await mongoose.connection.collection('users').dropIndex('universityID_1');
            console.log('Dropped stale index: users.universityID_1');
        } catch (indexError) {
            // Ignore when index does not exist.
            if (!['IndexNotFound', 27].includes(indexError.codeName || indexError.code)) {
                console.warn(`Index cleanup warning: ${indexError.message}`);
            }
        }

        console.log(`MongoDB connected successfully`)
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB