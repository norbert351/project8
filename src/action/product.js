"use server"
import { db } from "../db/index";
import { productTable } from "@/db/schema";

export async function product(formdata){
    
     const data = Object.fromEntries(formdata)
       const user = {
        product: data.product,
        qtity: data.qtity,
        desc: data.desc,
        price: data.price,
    };
    console.log(user);
    try{
        await db.insert(productTable).values(user)
    } catch (error) {
        console.log(error);
    }
}