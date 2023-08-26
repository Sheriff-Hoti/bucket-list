import mongoose from 'mongoose';

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        console.log('DB already connected')
        return mongoose.connections[0];
    }

    try {
        console.log('trying to connect')
        return await mongoose.connect(process.env.MONGODB_URI!,
            {dbName: process.env.MONGODB_DATABASE_NAME}
        );

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectToDatabase;
