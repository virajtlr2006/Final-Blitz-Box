'use client'

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

    const CreateSlot = async (data: NewSlot) => {
        console.log(data)
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