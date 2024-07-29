import styles from "./story.module.css";
import { storyImg } from "../../public/images";

export default function Story() {
  return (
    <div className={styles.story}>
      <div className={styles.main}>
        <div>
          <h2>At the heart of everything</h2>
          <p>
            At Triple Shot Café, we believe that every cup of coffee is an
            opportunity to create something special. That's why we're dedicated
            to sourcing the highest quality beans from around the world, and to
            crafting each cup with care and attention to detail.
          </p>
          <p>
            Our commitment to quality extends beyond just our coffee. We also
            take pride in creating a warm and welcoming atmosphere in our cafes,
            where our customers can relax, catch up with friends, or get some
            work done. Whether you're a coffee aficionado or just looking for a
            cozy spot to grab a drink, we have something for everyone.
          </p>
        </div>
        <div>
          <img src={storyImg.src} alt="cup" />
        </div>
      </div>
    </div>
  );
}
