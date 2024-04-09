// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

//configuration
dotenv.config({
    path: './env'
})



connectDB();












/* we can use this approach to connect DATABASE
import express from express;
const app = express();

 ;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error", (error) => {
            console.log("Error", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
           
        })
    } catch (error) {
        console.log("Error : ",error)
        throw err
    }
 })()
 */