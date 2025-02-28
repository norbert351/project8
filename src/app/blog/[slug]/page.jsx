import Image from "next/image"
import styles from "./singlePost.module.css"

const  SinglePostPages = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/cat.jpg" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
               <h1>Title</h1>
               <div className={styles.detail}>
                  <Image src="/go.jpg" alt="" width={50} height={50} className={styles.avatar} />
                  <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Terry</span>
                  </div>
                  <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Published</span>
                    <span className={styles.detail}>01.01.2025</span>
                  </div>
               </div>
               <div className={styles.content}>
                Desc
               </div>
            </div>
        </div>
    )
}
export default SinglePostPages