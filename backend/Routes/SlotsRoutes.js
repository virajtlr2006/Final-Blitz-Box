// 📦 Import dependencies for routing and database operations
import express from "express";
import { db } from "../index.js"
import { bookingTable } from "../db/schema.js";

// 🚀 Initialize router
const router = express.Router();

// 📝 POST endpoint to create a new booking
router.post("/new", async (req, res) => {
    // 📥 Extract booking details from request body with default values
    const { start_time, end_time, email, booking_status = false, payment_status = false, price, date } = req.body
    console.log(req.body)

    try {
        // ✅ Validate all required fields are present
        if (!start_time || !end_time || !email || !price || !date) {
            return res.status(400).json(
                { message: "All fields are required" }
            )
        }
        // 💾 Insert new booking into database
        const newBooking = await db.insert(bookingTable).values({ start_time, end_time, email, booking_status, payment_status, price, date })
        // console.log(newBooking)
        // ✔️ Return success response
        return res.status(200).json(
            { "message": "Booking created successfully" }
        )
    } catch (error) {
        // ❌ Handle server errors
        res.status(400).json(
            { "message": "Internl Server Error" }
        )
    }
})

// 📤 Export router for use in main application
export default router