import mongoose from "mongoose";

const connectToMongo = (url) => {
  console.log("connecting to MongoDB");
  mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB, successfully"))
    .catch((err) => console.log(err));
};

export default connectToMongo;
