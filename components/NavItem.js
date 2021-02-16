import React from "react";
import styles from "../styles/Navigation.module.css";
import Link from "next/link";

export default function NavItem(props) {
  let { img, title, text, link } = props;
  return (
    <a>
      <Link href={link}>
        <div className={`navitem ${styles.nav_item}`}>
          <span>
            <img className={styles.nav_item_ic} src={img} alt={title} />
          </span>
          <div>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </div>
      </Link>
    </a>
  );
}
