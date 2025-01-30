import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import style from "./home.module.css"


const  Home = () =>{
    return (
        <div className={styles.container}>
            <div className={style.textContainer}> 
                <h1 className={styles.title}>Creative Thought Agency.</h1>
                <p className={styles.desc}>
                    Loren, ipsus dolor site set consecutetur adipiscing elit. Vero 
                    blanditis minima reiciendis a autom assumends dolore
                </p>
                <div className={styles.buttons}>
                    <button className={styles.learn}>Learn more</button>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.brands}>
                   <Image src="/brands.png" alt="" width={500} height={50} className={styles.brandImg} />
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/hero.gif" alt="" width={100} height={100} className={styles.heroImg} />
            </div>
        </div>
    )
}
export default Home
