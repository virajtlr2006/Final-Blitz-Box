import { integer, pgTable, varchar,boolean, numeric } from "drizzle-orm/pg-core";

export const bookingTable = pgTable("bookings", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull(),
  start_time:varchar().notNull(),
  end_time:varchar().notNull(),
  booking_status:boolean().default(false),
  payment_status:boolean().default(false),
  price:integer().notNull(),
  date:varchar().notNull()
});

export const SlotTable = pgTable("slots",{
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  start_time:varchar().notNull(),
  end_time:varchar().notNull(),
  price:integer().notNull()
})