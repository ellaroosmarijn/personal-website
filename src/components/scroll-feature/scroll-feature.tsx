import { useEffect, useState, type ComponentProps } from "react";
import styles from "./scroll-feature.module.css";

type ScrollFeatureProps = {
  data: any;
} & ComponentProps<"div">;

type handleScrollProps = {
  componentIndex: number;
  vanishPoint: number;
  showPoint: number;
};

type ScrollItemTextProps = {
  title: string;
  text: string;
};

/**
 * scrolls through my journey in tech
 */
export function ScrollFeature({
  data,
  className,
  ...props
}: ScrollFeatureProps) {
  const [isFeatureHidden, setIsFeatureHidden] = useState([
    true,
    true,
    true,
    true,
    true
  ]);

  useEffect(() => {
    const handleScroll = ({
      componentIndex,
      vanishPoint,
      showPoint
    }: handleScrollProps) => {
      let hideComponent = true;

      if (window.scrollY >= showPoint && window.scrollY < vanishPoint) {
        hideComponent = false;
      } else if (window.scrollY >= vanishPoint) {
        hideComponent = true;
      }

      setIsFeatureHidden((prevStates) => {
        prevStates[componentIndex] = hideComponent;
        return [...prevStates];
      });
    };

    const handlers = [
      () =>
        handleScroll({
          componentIndex: 0,
          vanishPoint: 800,
          showPoint: 0
        }),
      () =>
        handleScroll({
          componentIndex: 1,
          vanishPoint: 1400,
          showPoint: 800
        }),
      () =>
        handleScroll({
          componentIndex: 2,
          vanishPoint: 2000,
          showPoint: 1400
        }),
      () =>
        handleScroll({
          componentIndex: 3,
          vanishPoint: 2600,
          showPoint: 2000
        }),
      () =>
        handleScroll({
          componentIndex: 4,
          vanishPoint: 20000,
          showPoint: 2600
        })
    ];

    handlers.forEach((handler) => {
      window.addEventListener("scroll", handler);
      handler();
    });

    return () => {
      handlers.forEach((handler) =>
        window.removeEventListener("scroll", handler)
      );
    };
  }, []);

  return (
    <div className={cx(styles["container"], className)} {...props}>
      <div className={styles["intro-text"]}>
        {data?.title && <h1 className={styles.title}>{data?.title}</h1>}
        {data?.subtitle && <p className={styles.subtitle}>{data?.subtitle}</p>}
      </div>
      <div className={styles["scroll-container"]}>
        <div className={styles["purple-center-line"]} />
        <div className={styles["scroll-sticky"]}>
          {data?.pages.map(
            ({ image, pageName, pageInformation }: any, index: number) => {
              return (
                <div
                  className={cx(
                    styles["scroll-item"],
                    isFeatureHidden[index] ? styles["hidden"] : ""
                  )}
                  key={index}
                >
                  <div
                    className={cx(styles["scroll-item-section"])}
                    data-testId={`page-${index}`}
                  >
                    <ScrollItemText title={pageName} text={pageInformation} />
                  </div>
                  <div className={styles["scroll-item-section"]}>
                    <img
                      src=""
                      alt=""
                      className={styles.image}
                      data-testid={`image-${index}`}
                    />
                  </div>
                  <div className={styles["scroll-item-section"]}>
                    <ScrollItemText title={pageName} text={pageInformation} />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

function ScrollItemText({ title, text }: ScrollItemTextProps) {
  return (
    <>
      <h3 className={styles["page-name"]}>{title}</h3>
      <p className={styles["page-description"]}>{text}</p>
    </>
  );
}
