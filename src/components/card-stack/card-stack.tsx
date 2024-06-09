import { ComponentProps } from "react"
import styles from "./card-stack.module.css"
import { Button } from "../button/button"
import cx from "classnames"
type CardStackProps = {
  color: "yellow" | "pink" | "blue"
  title: string
  description: string
  extraInformation?: string
  image?: { src: string; alt: string }
  video?: {
    src: string
    type: string
  }
  primaryButton: {
    theme: "ghost" | "secondary" | "primary"
    text: string
    link: string
  }
  secondaryButton?: { text: string; link: string }
} & ComponentProps<"div">

export function CardStack({
  color,
  title,
  description,
  extraInformation,
  image,
  video,
  primaryButton,
  secondaryButton,
  className,
  ...props
}: CardStackProps) {
  return (
    <div
      className={cx(className, styles["card-stack"], styles[`${color}`])}
      {...props}
      data-testid={"card-stack"}
    >
      <div className={styles.information}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {extraInformation && (
          <p className={styles["extra-information"]}>{extraInformation}</p>
        )}
        <div className={styles["button-container"]}>
          <Button
            theme={primaryButton.theme}
            label={primaryButton.text}
            href={primaryButton.link}
            className={styles["primary-button"]}
          />
          {secondaryButton && (
            <Button
              theme="ghost"
              label={secondaryButton.text}
              href={secondaryButton.link}
            />
          )}
        </div>
      </div>
      {image ? (
        <img className={styles.image} src={image.src} alt={image.alt} />
      ) : video ? (
        <video className={styles.video} controls>
          <source src={video.src} type={video.type} />
        </video>
      ) : null}
    </div>
  )
}
