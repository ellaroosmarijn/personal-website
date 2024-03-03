import Link from 'next/link'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles['header-container']}>
      <Link href={''} className={styles.link}>
        Projects
      </Link>
      <Link href={''} className={styles.link}>
        Socials
      </Link>
      <Link href={''} className={styles.link}>
        Contact
      </Link>
    </header>
  )
}
