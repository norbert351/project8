import Image from "next/image";
import styles from "./about.module.css";

const  AboutPage = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, bravers, better.
                </h1>
                <p className={styles.desc}>we create digms hbdnghj gsdgbhsvbc gsdjgcdcgyu yuvsj
                    gsdbvdkvccjnch cjhdvjvh cdyghjc sdhjghj yughhkg hkduj 
                    hcghhdskhch cukhysdcj jghdjkyg ykbkhds kdjks khjsd
                    jhjkcjcksjk.
                </p>
                <div className={styles.boxes}>
                   <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Year of experience</p>
                   </div>
                   <div className={styles.box}>
                    <h1>10 k+</h1>
                    <p>Year of experience</p>
                   </div>
                   <div className={styles.box}>
                    <h1>10 k+</h1>
                    <p>Year of experience</p>
                   </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                src="/about.png"
                alt="About image"
                fill
                className={styles.img}
                />
            </div>
        </div>
    )
}
export default AboutPage