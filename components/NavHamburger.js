import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function NavHamburger() {
  return (
    <Link href="/navigation">
      <svg
        className={styles.hamburger}
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </Link>
  );
}
