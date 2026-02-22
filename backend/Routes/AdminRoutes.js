import express from "express"
import {db} from "../index.js"
import {SlotTable } from "../db/schema.js"

const router = express.Router()

router.post("/newslot",async (req,res) => {
    const {start_time,end_time,price} = req.body
    // console.log(start_time,end_time,price)
    const newSlot = await db.insert(SlotTable).values({start_time,end_time,price}).returning()

    res.status(200).json(
        {"message":"Slot added Successfully"}
    )
})

export default router