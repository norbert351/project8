import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const registerTable = mysqlTable('register', {
  id: int().autoincrement().primaryKey(),
  firstname: varchar({ length: 255 }).notNull(),
  lastname: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  confirmPassword: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const contactTable = mysqlTable('contact', {
  id:int().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  phone: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  remark: varchar({ length: 255 }).notNull(),
})

export const productTable = mysqlTable('product', {
  id: int().autoincrement().primaryKey(),
  product: varchar({ length: 255 }).notNull(),
  qtity:  int().notNull(),
  desc: varchar({ length: 255 }).notNull(),
  price: int().notNull(),
});


