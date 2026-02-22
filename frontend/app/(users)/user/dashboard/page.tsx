'use client'

import { useCurrentUser } from '@/hooks/useUserHook'
import { BookingSlot } from '@/types/Slot'
import axios from 'axios'

const DashBaord = () => {
    const {email,isLoaded} = useCurrentUser();
    if(!isLoaded)return;
    const slots = [
        { id: 1, date: "2024-01-15", start_time: "12:00 AM", end_time: "1:00 AM", price: 200 },
        { id: 2, date: "2024-01-15", start_time: "1:00 AM", end_time: "2:00 AM", price: 200 },
        { id: 3, date: "2024-01-15", start_time: "2:00 AM", end_time: "3:00 AM", price: 200 },
        { id: 4, date: "2024-01-15", start_time: "3:00 AM", end_time: "4:00 AM", price: 200 },
        { id: 5, date: "2024-01-15", start_time: "4:00 AM", end_time: "5:00 AM", price: 200 },
        { id: 6, date: "2024-01-15", start_time: "5:00 AM", end_time: "6:00 AM", price: 250 },
        { id: 7, date: "2024-01-15", start_time: "6:00 AM", end_time: "7:00 AM", price: 300 },
        { id: 8, date: "2024-01-15", start_time: "7:00 AM", end_time: "8:00 AM", price: 350 },
        { id: 9, date: "2024-01-15", start_time: "8:00 AM", end_time: "9:00 AM", price: 400 },
        { id: 10, date: "2024-01-15", start_time: "9:00 AM", end_time: "10:00 AM", price: 450 },
        { id: 11, date: "2024-01-15", start_time: "10:00 AM", end_time: "11:00 AM", price: 450 },
        { id: 12, date: "2024-01-15", start_time: "11:00 AM", end_time: "12:00 PM", price: 400 },
        { id: 13, date: "2024-01-15", start_time: "12:00 PM", end_time: "1:00 PM", price: 450 },
        { id: 14, date: "2024-01-15", start_time: "1:00 PM", end_time: "2:00 PM", price: 450 },
        { id: 15, date: "2024-01-15", start_time: "2:00 PM", end_time: "3:00 PM", price: 400 },
        { id: 16, date: "2024-01-15", start_time: "3:00 PM", end_time: "4:00 PM", price: 400 },
        { id: 17, date: "2024-01-15", start_time: "4:00 PM", end_time: "5:00 PM", price: 350 },
        { id: 18, date: "2024-01-15", start_time: "5:00 PM", end_time: "6:00 PM", price: 350 },
        { id: 19, date: "2024-01-15", start_time: "6:00 PM", end_time: "7:00 PM", price: 400 },
        { id: 20, date: "2024-01-15", start_time: "7:00 PM", end_time: "8:00 PM", price: 450 },
        { id: 21, date: "2024-01-15", start_time: "8:00 PM", end_time: "9:00 PM", price: 450 },
        { id: 22, date: "2024-01-15", start_time: "9:00 PM", end_time: "10:00 PM", price: 400 },
        { id: 23, date: "2024-01-15", start_time: "10:00 PM", end_time: "11:00 PM", price: 300 },
        { id: 24, date: "2024-01-15", start_time: "11:00 PM", end_time: "12:00 AM", price: 250 }
    ]

    const handleBookNow = async(data:BookingSlot) => {
        try {
            if(!isLoaded && !email)return;
            const newdata = {...data,email}
            console.log(newdata)
            const res = await axios.post("http://localhost:8080/user/new",newdata);
            console.log(res)
            if(!res)throw new Error("failed to book a slot");
        } catch (error) {
            if(axios.isAxiosError(error)){
        console.log("Status:", error.response?.status);
        console.log("Backend message:", error.response?.data); // <-- this tells you exactly what's wrong
    }
        }
    }

  return (
    <div>
        {slots.map((slot)=>(
            <div key={slot.id}>
                <p>{slot.start_time}</p>
                <p>{slot.end_time}</p>
                <p>{slot.price}</p>
                <p>{slot.date}</p>
                <button className='bg-green-400' onClick={() => handleBookNow(slot)}>book now</button>
            </div>
        ))}
    </div>
  )
}

export default DashBaord