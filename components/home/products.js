import styles from "./products.module.css";
import { Costa, Guatemala, Indonesia } from "../../public/images";
import Product from "./product";

const productArr = [
  {
    id: 1,
    img: Guatemala,
    title: "Guatemala Swirl Sensation",
    info: "Medium-bodied coffee with a nutty flavor and a hint of warmth, a comforting experience.",
    price: 49,
  },
  {
    id: 2,
    img: Costa,
    title: "Costa Rica Mocha Madness",
    info: "Indulge in the smooth richness of this coffee, infused with a tantalizing chocolatey aroma.",
    price: 99,
  },
  {
    id: 3,
    img: Indonesia,
    title: "Indonesia Toasted Temptation",
    info: "This coffee boasts a full-bodied flavor with boldness, smoky notes, and hints of chocolate and spice.",
    price: 49,
  },
];

export default function Products() {
  return (
    <div className={styles.products}>
      <h2>Our Products</h2>
      <div className={styles.items}>
        {productArr.map((prod) => (
          <Product key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}
