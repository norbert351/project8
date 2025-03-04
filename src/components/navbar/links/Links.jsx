"use client";

import Image from "next/image";
import { useActionState, useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { logout } from "@/action/user";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },

    {
        title: "Product",
        path: "/product"
    },

];

const Links = () => {
    const [open,setOpen] = useState(false)
    // const {state, formAction, pending} = useActionState(logout, null)
    //    TEMPORARY 

    const {data: session} = useSession()
  console.log('oluaka',session)
    return (
        <div className={styles.container}>
      <div className={styles.links}>
        
        { session &&
            links.map((link)=>( 
            <NavLink item={link} key={link.title}/>
            ))
        }
        
        {
            session? (
            <>
             <button className={styles.logout} onClick={() => signOut({ callbackUrl: "/" })}>
             Sign Out
            </button>
           
            </>
        ) : (
            <>
            <NavLink item={{title: "Register", path: "/register"}} />
            <NavLink item={{title: "Login", path: "/login"}} />
            </>
        )
    }
      </div>
      <Image className={styles.menuButton}
      src="/menu.png" alt="" 
      width={30} 
      height={30}
      onClick={() =>setOpen((prev) => !prev)} />
      {open && ( 
        <div className={styles.mobileLinks}>
            {links.map(link => (
                <NavLink item={link} key={link.title}/>
            ))}
        </div>
      )}
</div>
    )
}
export default Links;