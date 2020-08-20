const mongoose=require('mongoose')


const orderSchema=new mongoose.Schema({
    device:{
        type:String,
    },
    products:{
        type:Array
    },
    totalPrice: {
        type:Number
    },
    purchased: {
        type:Boolean
    }
    
}, {timestamps:true})

module.exports=mongoose.model('Order', orderSchema)