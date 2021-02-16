import styles from "../styles/Home.module.css";
import NavHamburger from "../components/NavHamburger";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <NavHamburger />
        <h1>Julus</h1>
        <h1>Tracker</h1>
        <p className={styles.subtext}>Cause they are a headache</p>
      </div>
    </>
  );
}
