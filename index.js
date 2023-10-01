const mongoose = require('mongoose');

// Connect to mongoDB
const mongoDBUri = "mongodb://127.0.0.1:27017/crmApp";
mongoose.connect(mongoDBUri).then(
    ()=> {
        // Ready to use. mongoose.connect() promisne resolved to
        console.log("Successfully connected to the Database");
    },
    err=>{
        // handle initial connection error
        console.log("error occured", err);
    }


)