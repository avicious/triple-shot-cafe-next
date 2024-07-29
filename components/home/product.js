import styles from "./product.module.css";

export default function Product({ img, title, info, price }) {
  return (
    <div className={styles.product}>
      <img src={img.src} alt={title} />
      <h3>{title}</h3>
      <p className={styles.info}>{info}</p>
      <p className={styles.price}>Price: ${price}</p>
      <button>Order Now</button>
    </div>
  );
}
