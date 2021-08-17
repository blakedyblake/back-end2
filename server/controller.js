const dataBase = require("./db.json");
let baseID = 4;

module.exports = {  
    getHouses : function(req,res){
        console.log(dataBase)
        res.status(200).send(dataBase);
    },
    createHouse : (req,res)=>{
        let {address, price, imageURL} = req.body;
        let newID = baseID;
        baseID++;
        let newHouse  = {
            "id": newID,
            "address": address,
            "price": parseInt(price), //Other wise it will concat the input
            "imageURL": imageURL

        }
        dataBase.push(newHouse);
        res.status(200).send(dataBase)
        //Insert into the json?
        //Send message back
    },
    deleteHouse : (req,res)=>{
        //
        let index = dataBase.findIndex(e => +e.id === +req.params.id)
        dataBase.splice(index,1)
        res.status(200).send(dataBase)
    },
    updateHouse : (req,res)=>{
        // let{id, address, price, imageURL} = req.body; // Doesn't work 
        let {id} = req.params; //Getting rid of .id made it work... why thought
        let {type} = req.body;
        console.log(type)

        let index = dataBase.findIndex(e => +e.id === +id)
        if(type === 'minus'){
            dataBase[index].price -= 10000
            res.status(200).send(dataBase)
        }
        else if(type === 'plus'){
            dataBase[index].price  +=10000
            res.status(200).send(dataBase)
        }

        


    }

}