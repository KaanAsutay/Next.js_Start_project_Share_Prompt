import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("=> using existing database connection.")
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: 'prompthub',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    catch(err){
        console.log('error connecting to db', err)
        throw err;
    }
}