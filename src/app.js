import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
    ,credentials: true
}))

app.use(express.json({limit:"15kb"}))

//urlencoder
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//to add static data like images and favicon
app.use(express.static("public"))

app.use(cookieParser())



export { app } 