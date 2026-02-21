import { Slot } from '@/types/slot'
import React from 'react'

const SlotCard = ({id,start_time,end_time,price,date,booking_status,payment_status,email}:Slot) => {
  return (
    <div>
        <h2>Slot ID: {id}</h2>
        <p>Start Time: {start_time}</p>
        <p>End Time: {end_time}</p>
        <p>Price: {price}</p>
        <p>Date: {date}</p>
        <p>Booking Status: {booking_status}</p>
        <p>Payment Status: {payment_status}</p>
        <p>Email: {email}</p>
        <button>delete</button>
    </div>
  )
}

export default SlotCard