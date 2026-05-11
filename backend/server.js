import express from "express"

const app = express();

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.send("Imagina API working")
})

const startServer = async () => {
    // await connectDB()
    app.listen(PORT, () => {
        console.log(`Server Running on http://localhost:${PORT}`)
    })
    
}

startServer()