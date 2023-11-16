import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"

dotenv.config();

const PORT = 3001
const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongodb")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`server listening on  ${PORT}`)
});

app.use("/server/user", userRoutes);
app.use("/server/auth", authRoutes);
 

app.use((err, req,res, next)=>{
    const statuseCode = err.statuseCode ;
    const message = err.message ;
    return res.status(statuseCode).json({
        success: false,
        message,
        statuseCode
    })
});
