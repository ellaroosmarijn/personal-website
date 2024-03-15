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
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <input className={styles.input} />
      </div>
    </div>
  )
}
