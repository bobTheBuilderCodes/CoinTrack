const express = require("express");
const app = express();

const connectToDB = require("../db/connect");

require("dotenv").config()


const PORT = process.env.PORT || 5000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello, Worlddd");
});


async function startServer(){
    try {
        console.log("Connecting to DB....")
        await connectToDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`Server connected at port ${PORT}`))
        console.log(`Connection to DB successful...`)
        
    } catch (error) {
        console.log(error)

    }
}

startServer()

// app.listen(PORT, console.log(`Server connected at port ${PORT}`))


