const express = require('express');
const invent = require('./model/inventschema');
const api = express();
require('./model/idb');  // database connection require
require('mongoose')
const port = process.env.PORT || 7001;

api.use(express.json());

api.get("/", (req,res) => {
    res.send("welcome to inventory")
})

api.post("/inventory",(req, res) => {
    console.log(req.body)
    const ad = new invent(req.body);
    ad.save().then(() => {
        res.send(ad);
    }).catch((err) => {
        res.send(err);
        console.log(err);
    })
})


api.get("/inventory",(req,res) => {
    invent.find()
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.status(500).send("error in retrieve all inventory");
    })
})

api.get("/inventory/Apples", (req,res) => {
    
        invent.find({name:"Apples"}).then((result) => {
        res.status(200).send(result);
    }) .catch ((error) => {
        res.status(400).send(error);
    })
  
})

// to update

api.put("/inventory/:id", (req, res) => {
    invent.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(400).send("error found");
        })
    })

// to remove all
api.delete("/inventory", (req,res) => {
invent.remove().then(function(){
    console.log("Data deleted"); // Success
}).catch(function(error){
    console.log(error); // Failure
});
})


api.delete("/inventory/:name",(req,res) => {
invent.findOneAndRemove({name: req.params.name}).then((result) => {
    console.log("deleted deleted"); // Success
    res.status(200).send("delete",result)
}).catch(function(error){
    console.log(error); // Failure
});
})

api.listen(port,() => {
    console.log(`listening on ${port}`);
})