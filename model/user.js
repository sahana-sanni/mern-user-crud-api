const mongoose = require('mongoose')

//create mongoose Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    mobile: {
        type: String,
        required: true,
        unique:true
    },
    dob: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    isActive: {     
        type: Boolean,
        default: true
    }
},{
    collection: "users",
    timestamps: true

})
//string objects array and numbers boolean datatypes

module.exports = mongoose.model("User", userSchema)