import mongoose from 'mongoose';


const DBConnection = async() => {
    const MONGODB_URI = `mongodb+srv://sumit:e5BTqKz0zbU2MFJu@harsh.ie50bm6.mongodb.net/share`;
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected successfully');
    }catch(error){
        console.error('Error while connecting with the database ', error.message);
    }
}


export default DBConnection;