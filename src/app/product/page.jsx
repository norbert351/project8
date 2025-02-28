import { product } from "@/action/product"
import styles from "./product.module.css" 

const  Product = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
            <form action={product} className={styles.form}>
                <input type="text" name="product" placeholder="Product ID" />
                <input type="text" name="qtity" placeholder="Quantity" />
                <input type="text" name="desc" placeholder="Description" />
                <input type="text" name="price" placeholder="Price" />

                <button>Send</button>
            </form>
            </div>
        </div>
    )
}
export default Product