import { useKeyboardEvent } from "@react-hookz/web"
import { AnimatePresence, motion } from "framer-motion"
import { ComponentProps } from "react"
import styles from "./modal.module.css"
import cx from "classNames"

export type ModalProps = {
  open: boolean
  heading?: string
  onClose(): void
} & ComponentProps<"div">

export function Modal({
  heading,
  open,
  onClose,
  className,
  children,
}: ModalProps) {
  useKeyboardEvent("Escape", onClose)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate={{
            opacity: 1,
          }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className={cx(styles["modal-container"], className)}
        >
          {heading && <h3 className={styles.heading}>{heading}</h3>}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
