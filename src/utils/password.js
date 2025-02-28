import bcrypt from "bcryptjs"

export async function saltAndHashPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    
    return hash;
}