import 'dotenv/config'
import express from "express"

const app = express()
const PORT = process.env.PORT || 8008


app.get("/",(req,res)=>{
    res.send("Hey!")
})


app.listen(PORT,()=>{
    console.log(`App is running at PORT ${PORT}`)
})