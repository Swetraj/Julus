import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Navigation.module.css";

export default function NavCloser() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <svg className={styles.hamburger} viewBox="0 0 16 14">
        <path
          fill="none"
          stroke="black"
          strokeLinecap="square"
          d="M 4.5 4.5 L 11.5 11.5 M 4.5 11.5 L 11.5 4.5"
        />
      </svg>
    </div>
  );
}
