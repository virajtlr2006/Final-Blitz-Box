'use client'
import { Slot } from '@/types/slot'
import { useRouter } from 'next/router'
import React from 'react'

const SlotCard = ({id,start_time,end_time,price,date,booking_status,payment_status,email}:Slot) => {

  const router = useRouter();

  const deleteSlot = async() => {
    try {
      const res = await fetch(`http://localhost:8080/deleteslot/${id}`,{
        method: "DELETE"
      })
      if(res.ok) {
        window.location.reload()
      }
    } catch (error) {
      console.error(error);
    }
  }

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
        <button onClick={()=> router.push(`/admin/edit/${id}`)}>edit</button>
        <button onClick={deleteSlot}>delete</button>
    </div>
  )
}

export default SlotCard