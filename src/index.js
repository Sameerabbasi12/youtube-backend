// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})


connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port:${process.env.PORT}`);   
    })
})
.cathch((err)=>{
    console.log("Mongo db connection failed !!!",err);
    
})











// const connectDB = async ()=> {
//     try {
//     const connectionInstance = await mongoose.connect(`&{proces.env.MONGODB_URI}/${DB_NAME}`)
//     console.log(`\n MongoDb connected !! DB HOSt:${connectionInstance.connection.host}`);
    
//     } catch (error) {
//         console.log("MONGODB connection error",error);
//         process.exit(1)
//     }
// }

// export default connectDB














/*
import express from "express"
const app= express()


(async() => {
    try {
        await mongoose.connect(`${process.env.MONGDB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Error:,error");
            throw err
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        } )

    } catch (error) {
        console.log("Error:",error);
        throw err
        
    }
})()
*/