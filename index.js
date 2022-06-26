console.log("hi connect");
import  express from 'express';
import  cors from 'cors';
import {MongoClient} from "mongodb";
const PORT=4000 ||3001 ;
const MONGO_URL='mongodb+srv://arthi:arthi@cluster0.ayv6i.mongodb.net';

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
    export const client=await createConnection();
      app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
      });