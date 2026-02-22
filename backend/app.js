import express from "express";
import router from "./Routes/SlotsRoutes.js";

const app = express();

app.use(express.json())

app.listen(8080,()=>{
    console.log("port is running at 8080");
})

app.use("/user",router)