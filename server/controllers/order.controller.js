const express = require('express')
const mongoose=require('mongoose')
const Order = require("../models/order");


module.exports.createOne=(req, res)=>{
    Order.create(req.body)
        .then(x=>res.json(x))
        .catch(err=>res.json(err))
}

module.exports.returnAll = (req, res) => {
    Order.find()
        .then(all => res.json(all))
    .catch(err => res.json( err ));
};

// module.exports.getOrder = (req, res) => {
//     console.log("hellooooooooo")
//     Order.find({ _id: req.params._id })
//     .then(x=>res.json(x))
//     .catch(err=>res.json(err))
// }

module.exports.returnOne = (req, res) => {
    Order.findById({ _id: req.params._id })
        .then(item => res.json(item))
        .catch(err => res.json(err));
}

module.exports.updateOne=(req, res)=>{
    Order.findOneAndUpdate({_id:req.params._id}, req.body, {new:true, runValidators:true})
        .then(updated=>res.json(updated))
        .catch(err=>res.json(err))
}

module.exports.deleteOne=(req, res)=>{
    Order.findOneAndDelete({_id:req.params._id})
        .then(deleted=>res.json(deleted))
        .catch(err=>res.json(err))
}