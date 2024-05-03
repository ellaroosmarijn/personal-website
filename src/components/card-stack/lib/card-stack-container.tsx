import type { ComponentProps } from "react";
import styles from "./card-stack-container.module.css";

export function CardStackContainer({
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div {...props} className={styles.container}>
      {children}
    </div>
  );
}
