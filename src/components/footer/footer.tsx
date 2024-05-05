"use client"

import Link from "next/link"
import styles from "./footer.module.css"
import cx from "classnames"
import { useState } from "react"

export function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <footer className={styles["footer-container"]}>
      <div className={cx(styles["link-container"], styles.contact)}>
        <h2
          className={cx(styles.title, styles.link)}
          onClick={() => setModalOpen(!modalOpen)}
        >
          Let's get in touch!
        </h2>
      </div>
      <div className={styles["link-container"]}>
        <Link href={"/projects"} className={styles.link}>
          Projects
        </Link>
        <Link href={"/socials"} className={styles.link}>
          Socials
        </Link>
        <Link href={"/contact"} className={styles.link}>
          Contact
        </Link>
      </div>
    </footer>
  )
}
