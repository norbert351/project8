import Image from "next/image"
import styles from "./contact.module.css"
import { contact } from "@/action/user"


const  Contact = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.formContainer}>
                <form action={contact} className={styles.form}>
                    <input type="text" name="name" placeholder="Name and Surname" />
                    <input type="text" name="email" placeholder="Email Address" />
                    <input type="text" name="phone" placeholder="Phone number" />
                    <textarea name="remark"
                     id=""
                     cols="30" 
                    rows="3" 
                    placeholder="Message">

                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
export default Contact