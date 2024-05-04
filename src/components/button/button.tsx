import Link, { LinkProps } from "next/link"
import { ComponentProps } from "react"
import styles from "./button.module.css"
import cx from "classnames"

export type ButtonProps = {
  loading?: boolean
  href?: string
  label: string
  theme?: "primary" | "secondary" | "ghost"
  disabled?: boolean
} & ComponentProps<"button"> &
  Partial<LinkProps>

export function Button({
  loading,
  disabled,
  label,
  theme = "primary",
  href,
  className,
  ...props
}: ButtonProps) {
  const El = href ? Link : "button"
  const linkProps = href ? { href } : undefined

  return (
    <El
      {...linkProps}
      className={cx(
        styles.button,
        styles[theme],
        loading && styles.loading,
        disabled && styles.disabled,
        className
      )}
      {...(props as any)}
    >
      {label}
    </El>
  )
}
