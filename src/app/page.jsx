import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import homeStyle from "./home.module.css"


const  Home = () =>{
    return (
        <div className={homeStyle.container}>
            <div className={homeStyle.textContainer}> 
                <h1 className={homeStyle.title}>Creative Thoughts Agency.</h1>
                <p className={homeStyle.desc}>
                    Loren, ipsus dolor site set consecutetur adipiscing elit. Vero 
                    blanditis minima reiciendis a autom assumends dolore
                </p>
                <div className={homeStyle.buttons}>
                    <button className={homeStyle.button}>Learn more</button>
                    <button className={homeStyle.button}>Contact</button>
                </div>
                <div className={homeStyle.brands}>
                   <Image src="/brands.png" 
                   alt="" width={500} height={50} className={homeStyle.brandImg} />
                </div>
            </div>
            <div className={homeStyle.imgContainer}>
                <Image src="/hero.gif" 
                alt="brands" 
                fill className={homeStyle.heroImg} />
            </div>
        </div>
    )
}
export default Home
