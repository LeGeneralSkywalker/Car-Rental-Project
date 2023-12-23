//mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:passwordfordb@nodetuts.f5ozt13.mongodb.net/')
    .then((e)=>{
        console.log('db connected')
    })
    .catch((e)=>{
        console.log(e)
    });

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    car:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    orderNO:{
        type: Number,
        required: true
    }
})

const usersCollection = mongoose.model("users", userSchema);
const orderCollection = mongoose.model("orders", orderSchema);

module.exports = {
    usersCollection,
    orderCollection
};