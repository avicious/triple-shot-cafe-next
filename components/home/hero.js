import styles from "./hero.module.css";
import {
  bannerCoffeeBag,
  bannerCoffeeBeansLeft,
  bannerCoffeeBeansRight,
  bannerCup,
  bannerDonut,
  bannerLeafLeft,
  bannerLeafRight,
} from "../../public/images";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.main}>
        <h1>Experience the Perfect Trio of Coffee</h1>
        <p>
          Discover our hand-picked collection of three exquisite coffees,
          roasted to perfection for a rich, flavorful taste.
        </p>
        <button>Learn More</button>
        <img
          className={styles.coffeeBag}
          src={bannerCoffeeBag.src}
          alt="coffee bag"
        />
      </div>
      <img
        className={styles.coffeeBeansLeft}
        src={bannerCoffeeBeansLeft.src}
        alt="coffee beans"
      />
      <img
        className={styles.coffeeBeansRight}
        src={bannerCoffeeBeansRight.src}
        alt="coffee beans"
      />
      <img className={styles.cup} src={bannerCup.src} alt="coffee cup" />
      <img className={styles.donut} src={bannerDonut.src} alt="donut" />
      <img
        className={styles.bannerLeafRight}
        src={bannerLeafRight.src}
        alt="leaf"
      />
      <img
        className={styles.bannerLeafLeft}
        src={bannerLeafLeft.src}
        alt="leaf"
      />
    </div>
  );
}
