import { ComponentProps } from "react"
import styles from "./text-section.module.css"
import cx from "classnames"

type TextSectionProps = {
  textColor?: "white" | "black"
} & ComponentProps<"div">

export function TextSection({
  textColor = "black",
  children,
  className,
  ...props
}: TextSectionProps) {
  return (
    <div className={cx(styles["text-section-container"], className)} {...props}>
      <h4 className={cx(styles.text, styles[textColor])}>{children}</h4>
    </div>
  )
}
