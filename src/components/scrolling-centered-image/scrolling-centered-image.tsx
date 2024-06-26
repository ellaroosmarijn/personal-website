"use client"

import { useEffect, useState } from "react"
import styles from "./scrolling-centered-image.module.css"
import cx from "classnames"

type ScrollItemTextProps = {
  title: string
  description: string
}

type DataItem = {
  image: {
    src: string
    alt: string
  }
  details: ScrollItemTextProps
}

type ScrollingCenteredImageProps = {
  data: DataItem[]
}

type HandleScrollProps = {
  componentIndex: number
  vanishPoint: number
  showPoint: number
}

export function ScrollingCenteredImage({ data }: ScrollingCenteredImageProps) {
  const [isFeatureHidden, setIsFeatureHidden] = useState([
    true,
    true,
    true,
    true,
    true,
  ])

  useEffect(() => {
    const handleScroll = ({
      componentIndex,
      vanishPoint,
      showPoint,
    }: HandleScrollProps) => {
      let hideComponent = true

      if (window.scrollY >= showPoint && window.scrollY < vanishPoint) {
        hideComponent = false
      } else if (window.scrollY >= vanishPoint) {
        hideComponent = true
      }

      setIsFeatureHidden((prevStates) => {
        prevStates[componentIndex] = hideComponent
        return [...prevStates]
      })
    }

    const handlers = [
      () =>
        handleScroll({
          componentIndex: 0,
          vanishPoint: 600,
          showPoint: 0,
        }),
      () =>
        handleScroll({
          componentIndex: 1,
          vanishPoint: 700,
          showPoint: 600,
        }),
      () =>
        handleScroll({
          componentIndex: 2,
          vanishPoint: 11000,
          showPoint: 700,
        }),
    ]

    handlers.forEach((handler) => {
      window.addEventListener("scroll", handler)
      handler()
    })

    return () => {
      handlers.forEach((handler) =>
        window.removeEventListener("scroll", handler)
      )
    }
  }, [])

  return (
    <div className={styles["scroll-container"]}>
      {data.map((item, index: number) => {
        const isEven = index % 2 === 0

        return (
          <div
            key={index}
            className={cx(
              styles["scroll-content"],
              isFeatureHidden[index] ? styles["hidden"] : ""
            )}
          >
            <div className={cx(styles["scroll-item-section"])}>
              {isEven && (
                <ScrollItemText
                  title={item.details.title}
                  description={item.details.description}
                />
              )}
            </div>
            <div className={styles["scroll-item-section"]}>
              <img
                src={item.image.src}
                alt={item.image.alt}
                className={styles.image}
                data-testid={`image-${index}`}
              />
            </div>
            <div className={cx(styles["scroll-item-section"])}>
              {!isEven && (
                <ScrollItemText
                  title={item.details.title}
                  description={item.details.description}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ScrollItemText({ title, description }: ScrollItemTextProps) {
  return (
    <div className={styles["text-container"]}>
      <h3 className={styles["page-title"]}>{title}</h3>
      <p className={styles["page-description"]}>{description}</p>
    </div>
  )
}
