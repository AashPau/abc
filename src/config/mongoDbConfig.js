import mongoose from "mongoose";

export const connectMongo = () => {
  const url = "mongodb://localhost:27017/ntdl";
  mongoose
    .connect(url)
    .then(() => console.log("db connected"))
    .catch((error) => console.log(error));
};
