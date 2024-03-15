import Link from 'next/link'
import { CallToAction } from '../call-to-action/call-to-action'
import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <CallToAction
        className={styles.cta}
        title={'Contact me'}
        subtitle={`Let's get in touch!`}
      />
      <div className={styles['link-container']}>
        <Link href={'/projects'} className={styles.link}>
          Projects
        </Link>
        <Link href={'/socials'} className={styles.link}>
          Socials
        </Link>
        <Link href={'/contact'} className={styles.link}>
          Contact
        </Link>
      </div>
    </footer>
  )
}
