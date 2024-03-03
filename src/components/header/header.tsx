import Link from 'next/link'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles['header-container']}>
      <Link href={'/projects'} className={styles.link}>
        Projects
      </Link>
      <Link href={'/socials'} className={styles.link}>
        Socials
      </Link>
      <Link href={'/contact'} className={styles.link}>
        Contact
      </Link>
    </header>
  )
}
