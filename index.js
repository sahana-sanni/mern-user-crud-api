const express = require('express')
const cors = require('cors')

//settings for env secret file
const dotenv = require('dotenv')
const connectDB = require('./db/connect')
dotenv.config()



const PORT = process.env.PORT

//express instance
const app = express()

//body parser middleware
app.use(express.urlencoded({ extended: true })) //urlencoded form of data
app.use(express.json()) //json format data

//cors -> cross origin resource sharing
app.use(cors()) // to write header properties

//default route
// app.all(`*`, async (req,res)=> {
//     return res.status(404).json({ msg: "Requested path not found .."})
// })

//router import
app.use(`/`,require('./route/userRoute'))

//server.listen
app.listen(PORT, () =>{
    connectDB()
    console.log(`server is started .. running @ http://localhost:${PORT}`)
})

