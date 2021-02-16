import React from "react";
import styles from "../styles/Navigation.module.css";
import NavItem from "../components/NavItem";
import NavCloser from "../components/NavCloser";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div>
        <NavCloser />
        <h2>Julus Tracker</h2>
        <p className={styles.subtext}>Cause they are a headache</p>
      </div>

      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <NavItem
            img="icons\traffic_ic.png"
            title="Traffic Analyzer >"
            text="Traffic Jam? Well, we help to analyze the situation, for a hack route."
            link="/traffic"
            key="0"
          />
        </li>
        <li className={styles.nav_list_item}>
          <NavItem
            img="icons\shortcut_ic.png"
            title="Shortcut Finder >"
            text="Need to reach somewhere Fast? We will help you to it."
            link="/shortcut"
            key="1"
          />
        </li>
        <li className={styles.nav_list_item}>
          <NavItem
            img="icons\contribute_ic.png"
            title="Contribute >"
            text="Help us know the status of your location, together we shall win."
            link="/contribute"
            key="2"
          />
        </li>
      </ul>
    </div>
  );
}
