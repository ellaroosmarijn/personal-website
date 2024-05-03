import { ComponentProps } from 'react'
import styles from './call-to-action.module.css'

type CallToActionProps = {
  title: string
  subtitle: string
} & ComponentProps<'div'>

export function CallToAction({
  title,
  subtitle,
  className,
}: CallToActionProps) {
  return (
    <div className={className}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <input className={styles.input} />
      </div>
    </div>
  )
}
