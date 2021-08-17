const express = require("express");
const cors = require("cors");
const controller = require('./controller')


const app = express();

app.use(cors())
app.use(express.json())


app.get("/api/houses",(req,res)=>{
    controller.getHouses(req,res)
});
app.post("/api/houses",(req,res)=>{
    controller.createHouse(req,res)
}); //Missing parameter here?
app.delete("/api/houses/:id",(req,res)=>{
    controller.deleteHouse(req,res)
})
app.put("/api/houses/:id", (req,res)=>{
    controller.updateHouse(req,res)
})








let portNum = 4001;
app.listen(portNum, ()=>{
    console.log(`Running on port ${portNum}`);
})