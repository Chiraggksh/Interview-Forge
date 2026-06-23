const mongoose = require("mongoose")



async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        // console.log("Bhaii mongo me dikkt arri h")
        console.log(err)
    }
}

module.exports = connectToDB