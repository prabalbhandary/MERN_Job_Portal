import mongoose from "mongoose";
import "colors"

const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTAL_WITH_AUTOMATION"
    }).then(()=>{
        console.log("Connected to database.".bgGreen.white)
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`.bgRed.white)
    })
}

export default connection