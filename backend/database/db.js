import mongoose from "mongoose";

const Connection = async (username, password) => {
    try {
        const URL = `mongodb+srv://${username}:${password}@blog-cluster.jbs1pw9.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database", error);
    }
};

export default Connection;
