//db connect 

const mongoose = require('mongoose')

const connectDB = async () => {
    if(process.env.MODE === "development") {
        await mongoose.connect(process.env.MONGO_LOCAL)
        .then(res=> {
            console.log(`local mongodb connected`)
        }).catch(err => console.log(err.message))
    }

    //cloud database

    if(process.env.MODE === "production") {
        await mongoose.connect(process.env.MONGO_CLOUD)
        .then(res=> {
            console.log(`cloud mongodb connected`)
        }).catch(err => console.log(err.message))
    }
}
module.exports = connectDB