import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.js"

dotenv.config();

const PORT = 3000
const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongodb")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`server listening on  ${PORT}`)
});

app.use("/server/user", userRoutes)
