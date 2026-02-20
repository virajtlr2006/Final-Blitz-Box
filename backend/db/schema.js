import { integer, pgTable, varchar,boolean, numeric } from "drizzle-orm/pg-core";

export const bookingTable = pgTable("bookings", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  start_time:varchar().notNull(),
  end_time:varchar().notNull(),
  booking_status:boolean().default(false),
  payment_status:boolean().default(false),
  price:numeric().notNull(),
  date:varchar().notNull()
});
