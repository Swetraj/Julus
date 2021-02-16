import React from "react";
import styles from "../styles/Home.module.css";
import NavHamburger from "../components/NavHamburger";

export default function traffic() {
  return (
    <>
      <div className={styles.container}>
        <NavHamburger />
        <h2>Traffic Analyzer</h2>
        <p className={styles.subtext}>
          Traffic Jam? Well, we help to <br />
          analyze the situation, for a hack route.
        </p>
      </div>
    </>
  );
}
