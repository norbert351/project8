import { register } from "@/action/user"
import styles from "./register.module.css"
import Link from "next/link"
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
   const session = await auth();
       const user = session?.user;
       if (user) redirect("/");
  
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

              <h2>Welcome to myshop</h2>

              <p>Please provide all neccessary information</p>

          <form action={register} className={styles.form}>
              {/* <label htmlFor="firstname">first Name</label> */}
            <input type="text" name="firstname" placeholder="First Name" />
               {/* <label htmlFor="lastname">last Name</label> */}
            <input type="text" name="lastname" placeholder="Last Name"/>

            {/* <label htmlFor="email">Email</label> */}
            <input type="text" 
            name="email" 
            placeholder="Email" 
             />

            {/* <label htmlFor="password">Password</label> */}
            <input type="password" 
            name="password" 
            placeholder="password" 
             />

            {/* <label htmlFor="password">Confirmpassword</label> */}
            <input type="password" name="confirmPassword" placeholder="Confirm Password" id="confirmpassword" />

            <button>Register &rarr;</button>
           
           <p>Already have an account? <Link href="/login">Login</Link></p>
          </form>
          </div> 
        </div>
    )
}
export default RegisterPage