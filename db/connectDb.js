import mongoose from "mongoose";
const connectDb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "blogdb",
        }
    
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected to database");
} catch (error) {
    console.log(error);
}
};
export default connectDb;