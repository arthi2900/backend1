console.log("hi connect");
import  express from 'express';
import  cors from 'cors';
import {MongoClient} from "mongodb";
const PORT=process.env.PORT ||3001 ;
const MONGO_URL=process.env.MONGO_URL;

export const app=express(); 
app.use(express.json());
app.use(cors());

    /*app.get("/api", (req, res) => {
        res.json({ message: "welcome ARTHI" });
      });
            */
            async function createConnection(){
        const client=new MongoClient(MONGO_URL);
        await client.connect();
        console.log("mongo connect");
        return client;
    }
    app.get("/User", (req, res) => {
      res.json({ message: "welcome ARTHI" });
    });
    export const client=await createConnection();
      app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
      });