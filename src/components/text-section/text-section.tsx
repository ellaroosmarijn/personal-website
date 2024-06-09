import { ComponentProps } from "react"
import styles from "./text-section.module.css"
import cx from "classnames"

type TextSectionProps = {
  textColor?: "white" | "black"
  title?: string
} & ComponentProps<"div">

export function TextSection({
  textColor,
  title,
  children,
  className,
  ...props
}: TextSectionProps) {
  return (
    <div className={cx(styles["text-section-container"], className)} {...props}>
      {title && (
        <h1 className={cx(styles.title, textColor && styles[textColor])}>
          Welcome to my projects showcase!
        </h1>
      )}
      <h4 className={cx(styles.text, textColor && styles[textColor])}>
        {children}
      </h4>
    </div>
  )
}
