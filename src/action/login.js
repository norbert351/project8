'use server'

import { signIn } from "../../auth";

export async function login(formdata) {
    await signIn("credentials", formdata)
    return 'ok'
}