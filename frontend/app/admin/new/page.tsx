'use client'

import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"

export interface NewSlot {
    start_time: String,
    end_time: String,
    price: number
}

const page = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<NewSlot>()

    const router = useRouter();

    const CreateSlot = async (data: NewSlot) => {
        try {
            const res = await fetch("http://localhost:8080/createslot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            if(!res.ok){
                throw new Error("failed to create slot");
            }
            router.push("/admin/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(CreateSlot)}>

                <input type="time" {...register("start_time", { required: true })} placeholder="Start Time" />
                {errors.start_time && <span>This field is required</span>}

                <input type="time" {...register("end_time", { required: true })} placeholder="End Time" />
                {errors.end_time && <span>This field is required</span>}

                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                {errors.price && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default page