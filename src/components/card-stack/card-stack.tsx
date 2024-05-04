import { ComponentProps } from "react"
import styles from "./card-stack.module.css"
import { Button } from "../button/button"

type CardStackProps = {
  color: "olive" | "yellow" | "brown"
  title: string
  description: string
  image?: { src: string; alt: string }
  buttonText: string
  buttonLink: string
} & ComponentProps<"div">

export function CardStack({
  color,
  title,
  description,
  image,
  buttonText,
  buttonLink,
  ...props
}: CardStackProps) {
  return (
    <div className={styles["card-stack"]} {...props} data-testid={"card-stack"}>
      <div className={styles[`${color}`]}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button theme="ghost" label={buttonText} />
        <Button theme="secondary" label={buttonText} />
        <Button theme="primary" label={buttonText} />
        {image && <img src={image.src} alt={image.alt} />}
      </div>
    </div>
  )
}
