'use client'
import SlotCard from '@/components/SlotCard';
import { Slot } from '@/types/slot';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [slots,setSlots] = useState<Slot[]>([]);

    const fetchSlots = async() => {
        try {
            const res = await fetch("http://localhost:8080/getSlots");
            if(!res.ok)throw new Error("failed to fecth slots");
            const data = await res.json();
            setSlots(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchSlots();
    },[]);

  return (
    <div>
        <h1>Admin Dashboard</h1>
        <div>
            {/* sidebar comp */}
            1.create new slot
            2.admin profile
            3.billing history
        </div>
        <div>
            {
               slots.map((slot)=>(
                   <SlotCard 
                        key={slot.id} 
                        id={slot.id} 
                        start_time={slot.start_time}
                        end_time={slot.end_time}
                        price={slot.price}
                        date={slot.date}
                        booking_status={slot.booking_status}
                        payment_status={slot.payment_status}
                        email={slot.email}
                   />
               )) 
            }
        </div>
    </div>
  )
}

export default Dashboard