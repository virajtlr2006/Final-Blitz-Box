import dayjs  from "dayjs"

dayjs().format()

// dayjs().hour() // gets current hour
// const newDate = dayjs().hour(12) // returns new dayjs object
// console.log(newDate)
const a = dayjs()
const start_time = a.hour()
const end_time = a.add(1, 'hour')
console.log(start_time,end_time.hour())