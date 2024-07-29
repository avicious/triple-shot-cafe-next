"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";
import { logo, close, menu } from "../../public/images";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src={logo.src} alt="triple shots cafe" />
      </Link>
      <nav>
        <ul className={styles.main}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/process">Our Process</Link>
          </li>
          <li>
            <Link href="/story">Our Story</Link>
          </li>
        </ul>

        <div className={styles.mobile}>
          <img
            src={toggle ? close.src : menu.src}
            alt="menu"
            onClick={() => setToggle((prev) => !prev)}
          />
          <ul className={toggle ? styles.block : styles.hidden}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/process">Our Process</Link>
            </li>
            <li>
              <Link href="/story">Our Story</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
