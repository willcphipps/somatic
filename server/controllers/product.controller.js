const express = require('express')
const mongoose=require('mongoose')
const Product = require("../models/products");

module.exports.createOne=(req, res)=>{
    Product.create(req.body)
        .then(x=>res.json(x))
        .catch(err=>res.json(err))
}

module.exports.returnAll = (req, res) => {
  Product.find()
    .then(all => res.json(all))
    .catch(err => res.json( err ));
};


module.exports.returnOne = (req, res) => {
    Product.findById({ _id: req.params._id })
        .then(item => res.json(item))
        .catch(err => res.json(err));
}

module.exports.updateOne=(req, res)=>{
    Product.findOneAndUpdate({_id:req.params._id}, req.body, {new:true, runValidators:true})
        .then(updated=>res.json(updated))
        .catch(err=>res.json(err))
}

module.exports.deleteOne=(req, res)=>{
    Product.findOneAndDelete({_id:req.params._id})
        .then(deleted=>res.json(deleted))
        .catch(err=>res.json(err))
}

// module.exports.getIP = (req, res) => {
//     // console.log(req.headers.origin);
//     var ip = req.headers.origin
//         return ip;
//         // })
//         // .catch(err=>console.log(err))
// };
