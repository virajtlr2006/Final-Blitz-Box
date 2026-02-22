import express from "express";
import router from "./Routes/SlotsRoutes.js";
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cors())

app.listen(8080,()=>{
    console.log("port is running at 8080");
})

app.use("/user",router)