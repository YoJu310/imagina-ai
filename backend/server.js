import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"
import axios from "axios"

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use("/api/user",userRouter)
app.use("/api/image",imageRouter)

app.get("/", (req, res) => {
    res.send("Imagina API working")
})

const startServer = async () => {
    await connectDB()
    app.listen(PORT, () => {
        console.log(`Server Running on http://localhost:${PORT}`)
    })
    
}

startServer()