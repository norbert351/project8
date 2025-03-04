"use server";
import { contactTable, registerTable, } from "@/db/schema.js";
import { saltAndHashPassword } from "@/utils/password";
import { eq } from "drizzle-orm";
import { db } from "../db/index";

export async function register(formdata){
    
     const data = Object.fromEntries(formdata)
       const user = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: await saltAndHashPassword (data.password),
        confirmPassword: await saltAndHashPassword (data.confirmPassword),
    };
    // console.log(user);
    // // existing user
    // const existingUser = await db.select(registerTable).where(eq(registerTable.email, data.email))
    // if (existingUser) throw new Error("User already exists");


    try{
        await db.insert(registerTable).values(user)
    } catch (error) {
        console.log(error);
    }
  
};

export async function contact(formdata){
    
    const data = Object.fromEntries(formdata)
      const user = {
       name: data.name,
       email: data.email,
       phone: data.phone,
       remark: data.remark,
   };
   console.log(contact);
   try{
       await db.insert(contactTable).values(user);
   } catch (error) {
       console.log(error);
   }
};

export async function login(formdata) {
    const data = Object.fromEntries(formdata)
    // existing user
    const existingUser = await db.select().from(registerTable).where(eq(registerTable.email, data.email))
    if (existingUser) throw new Error("User already exists");

}
