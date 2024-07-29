import styles from "./process.module.css";
import {
  brewArrow,
  brew,
  cookie,
  donut,
  grinder,
  hearArrow,
  heatWater,
  kettle,
  kettleArrow,
  portafilter,
  pour,
  pourArrow,
  serve,
  serveArrow,
  bannerLeafLeft,
  bannerLeafRight,
  bannerCoffeeBeansLeft,
} from "../../public/images";

export default function Process() {
  return (
    <div className={styles.process}>
      <div className={styles.main}>
        <h2>Take a look at our carefully crafted process</h2>
        <img src={grinder.src} alt="grinder" />
        <h3>Measure and grind the coffee beans</h3>
        <p>
          Measure out the desired amount of whole coffee beans and grind them to
          the appropriate size, depending on the brewing method you are using.
        </p>
        <img src={hearArrow.src} alt="arrow" />
        <img src={heatWater.src} alt="heat water" />
        <h3>Heat water to the correct temperature</h3>
        <p>
          For most brewing methods, the ideal water temperature is between 195°F
          to 205°F (90°C to 96°C). Use a thermometer to measure the water
          temperature or bring it to a boil and let it cool for a few minutes.
        </p>
        <img src={kettleArrow.src} alt="arrow" />
        <img src={kettle.src} alt="kettle" />
        <h3>Measure and grind the coffee beans</h3>
        <p>
          Measure out the desired amount of whole coffee beans and grind them to
          the appropriate size, depending on the brewing method you are using.
        </p>
        <img src={pourArrow.src} alt="arrow" />
        <img src={pour.src} alt="pour" />
        <h3>Pour the hot water over the coffee</h3>
        <p>
          Slowly pour the hot water over the coffee in a circular motion, making
          sure all the grounds are evenly saturated. The water should be poured
          in stages or pulses, depending on the brewing method.
        </p>
        <img src={brewArrow.src} alt="arrow" />
        <img src={brew.src} alt="brew" />
        <h3>Allow the coffee to brew</h3>
        <p>
          Depending on the brewing method, allow the coffee to brew for a few
          minutes. During this time, the water will extract the coffee's flavor
          and aroma.
        </p>
        <img src={serveArrow.src} alt="arrow" />
        <img src={serve.src} alt="serve" />
        <h3>Serve and enjoy</h3>
        <p>
          Once the coffee has finished brewing, remove the brewing device and
          serve the coffee immediately. You can add cream, milk, or sweeteners
          to taste.
        </p>
      </div>
      <img src={bannerLeafRight.src} className={styles.leafRight} alt="leaf" />
      <img src={bannerLeafLeft.src} className={styles.leafLeft} alt="leaf" />
      <img
        src={bannerCoffeeBeansLeft.src}
        className={styles.coffeeLeft}
        alt="coffee"
      />
      <img src={portafilter.src} className={styles.portafilter} alt="portafilter" />
      <img src={cookie.src} className={styles.cookie} alt="cookie" />
      <img src={donut.src} className={styles.donut} alt="donut" />
    </div>
  );
}
