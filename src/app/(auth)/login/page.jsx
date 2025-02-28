import Link from "next/link";
import styles from "./login.module.css"
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import { login } from "@/action/login";


const Login = async () => {
     const session = await auth();
     const user = session?.user;
     if (user) redirect("/");

    return (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <h1>Login</h1>
            <form className={styles.form}
            action={login}>
                {/* <label htmlFor="email">Email Address</label> */}
                <input type="email" 
                placeholder="email" 
                name="email"
                />

                {/* <label htmlFor="password">Password</label> */}
                <input type="password" 
                placeholder="password" 
                name="password"
                />

                <button>
                    Login &rarr;
                </button>

                <p>Don't have account? <Link href="/register">Register</Link></p>

                {/* <section>
                     <div>
                        <button>
                            <IconBrandGithub/>
                          <span>Github</span>

                        </button>
                        </div>

                        
                        <button>
                            <IconBrandGithub/>
                          <span>Google</span>

                        </button>
                </section> */}
             </form>
         </div>
        </div>
    )
}
export default Login;