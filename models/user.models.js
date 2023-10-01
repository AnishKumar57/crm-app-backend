const mongoose = requier('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: email,
        unique: true,
        required: true,
        match: "/\S+@\S+\.\S+/",
        lowercase: true,
    },

    password:{
        type: String,
        minLength: 8,
        maxLength: 50,
        required: true,
        match: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,50}$"
    },

    createdAt:{
        type: Date,
        immutable: true,
        default :  Date.now
    },

    updatedAt:{
        type: Date,
        default :  Date.now
    },

    userType:{
        type: String,
        required: true,
        default: "customer"
    },

    userStatus: {
        type: String,
        required: true,
        default: "approved"
    }

});

module.exports = mongoose.model("User", userSchema);