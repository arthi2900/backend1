console.log("hi connect");
const express=require('express')
const cors= require('cors')
const app=express()
const PORT= 4000 ||3001 ;
app.use(cors());
app.get("/api", (req, res) => {
        res.json({ message: "welcome all" });
      });
      
      app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
      });