"use client"

import Link from "next/link"
import styles from "./footer.module.css"
import cx from "classnames"
import { useState } from "react"

export function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <footer className={styles["footer-container"]} data-testid="footer">
      <div className={cx(styles["link-container"], styles.contact)}>
        <div
          className={cx(styles.contact)}
          onClick={() => setModalOpen(!modalOpen)}
        >
          Let's get in touch!
        </div>
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
