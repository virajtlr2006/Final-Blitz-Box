import express from "express";
import UserRouter from "./Routes/SlotsRoutes.js";
import AdminRouter from "./Routes/AdminRoutes.js"

const app = express();

app.use(express.json())

app.listen(8080,()=>{
    console.log("port is running at 8080");
})

app.use("/user",UserRouter)
app.use("/admin",AdminRouter)