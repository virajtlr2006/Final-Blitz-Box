// 📦 Import dependencies for routing and database operations
import express from "express";
import { db } from "../index.js"
import { bookingTable } from "../db/schema.js";
import { eq } from "drizzle-orm";

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
        // 🔍 Check if booking already exists for this email
        const CheckBooking = await db.select().from(bookingTable).where(eq(bookingTable.email, email))
        // ⚠️ Prevent duplicate booking for same email
        if (bookingTable.email == email) {
            res.status(400).json(
                { "message": "User Already booked" }
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

// 📋 GET endpoint to fetch single booking detail by ID
router.post("/booking/:id", async (req, res) => {
    // 📌 Extract booking ID from URL parameters
    const { id } = req.params

    try { 
        // 🔎 Query database to find booking by ID
        const SingleBookingDetail = await db.select().from(bookingTable).where(eq(bookingTable.id, Number(id)))
        // console.log(SingleBookingDetail)
        // ✅ Return booking details on success
        res.status(200).json(
            { "Booking-Details": SingleBookingDetail[0] }
        )
    } catch (error) {
        // ❌ Handle fetch errors
        res.status(400).json(
            {"message":"Failed to fetch details, please try again"}
        )
    }

})


// 📤 Export router for use in main application
export default router