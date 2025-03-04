'use server'

import { signIn } from "../../auth";

export async function login(formdata) {
    try {
        await signIn("credentials", formdata)
        return 'ok'
    } catch (error) {
        return ''
    }
   
}