"use client"

import Link from "next/link"
import styles from "./footer.module.css"
import cx from "classnames"
import { useState } from "react"
import { Modal } from "../modal/modal"
import { Input } from "../input/input"

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
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        heading={"Heading"}
      >
        {/* Name input field 
        Email input field 
        Message textarea 
        Submit button */}
        <Input placeholder={"Name"} clearable={true} />
        <Input placeholder={"Email"} clearable={true} />
        <Input placeholder={"Message"} clearable={true} large={true} />
      </Modal>
    </footer>
  )
}
