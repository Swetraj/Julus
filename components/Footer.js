import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <h3>Support Us!</h3>
      <div className={styles.social}>
        <ul>
          <li className={styles.social_item}>
            <a>
              <Link href="/">
                <img src="icons\twitter_ic.png" alt="twitter" />
              </Link>
            </a>
          </li>
          <li className={styles.social_item}>
            <a>
              <Link href="/">
                <img src="icons\fb_ic.png" alt="facebook" />
              </Link>
            </a>
          </li>
          <li className={styles.social_item}>
            <a>
              <Link href="/">
                <img src="icons\discord_ic.png" alt="discord" />
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
