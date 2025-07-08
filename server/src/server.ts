import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import config from "./config/config";
import cors from 'cors';

const app = express();
const PORT = config.port;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

app.post(`/webhook/test`,async(req,res)=>{
    const eventType = req.headers['x-github-event'];
    console.log(eventType);
    console.log(req.body);
    res.status(200).send({success : true});
})

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})