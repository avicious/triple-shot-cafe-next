import styles from "./newsletter.module.css";

export default function Newsletter() {
  async function formHandler(FormData) {
    "use server";
    const data = {
      email: FormData.get("email"),
    };
  }

  return (
    <div className={styles.newsletter}>
      <div className={styles.main}>
        <h2>Get offers straight to your inbox</h2>
        <p>Sign up for the Triple Shots Cafe newsletter.</p>
        <form action={formHandler}>
          <input type="email" name="email" placeholder="Your email here" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
