import express from "express";

import { bookingTable } from "../db/schema.js";
import {db} from '../index.js'
const router = express.Router();

router.post("/new",async(req,res)=>{
    const {start_time,end_time,price,email,booking_status=false,payment_status=false,date}= req.body;
    try {
        await db.insert(bookingTable).values({start_time,end_time,price,email,booking_status,payment_status,date});
        res.json({"msg" : "booking success"})
    } catch (error) {
        console.log(error);
    }
});

export default router