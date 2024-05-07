import { ChangeEvent, ComponentProps, useEffect, useState } from "react"
import styles from "./input.module.css"
import cx from "classnames"
import { X } from "lucide-react"

export type InputProps = {
  /** Placeholder for the input */
  placeholder: string
  /** Whether the input is invalid */
  invalid?: boolean
  /** Optional error on the input */
  errorMessage?: string | null
  /** Whether the input is disabled */
  disabled?: boolean
  /** Optional extra info text for the field */
  info?: string
  /** Whether the input is clearable */
  clearable?: boolean
  /** Icon */
  icon?: any
  /** Callback on clear */
  onClear?(): void
  /** Select large for text area */
  large?: boolean

  onChange?: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void
} & ComponentProps<"input"> &
  ComponentProps<"textarea">

export function Input({
  large = false,
  placeholder,
  invalid,
  errorMessage,
  disabled,
  info,
  clearable,
  onClear,
  value,
  onChange,
  className,
  icon: Icon,
  ...props
}: InputProps) {
  const [inputValue, setInputValue] = useState<any>(value)
  const [active, setActive] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)

  useEffect(() => {
    setActive(!!inputValue)
  }, [inputValue])

  useEffect(() => {
    setIsInvalid(invalid ?? false)
    if (value && String(value).length > 0) {
      setIsInvalid(false)
    }
  }, [invalid, value])

  const El = large ? "textarea" : "input"

  return (
    <div className={cx(styles["input-container"], className)}>
      <El
        className={cx(
          styles["input-field"],
          disabled && styles.disabled,
          active && styles.active,
          (isInvalid ?? errorMessage) && styles.error
        )}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          setInputValue(e.target.value)
          onChange?.(e)
        }}
        {...props}
      />
      {clearable && !isInvalid && !!inputValue && (
        <X
          className={styles.icon}
          data-testid="input-clear"
          onClick={() => setInputValue("")}
        />
      )}
      {info && (
        <div className={cx(styles.info, disabled && styles["disabled-info"])}>
          {info}
        </div>
      )}
      {errorMessage && isInvalid && (
        <div className={styles["error-message"]}>{errorMessage}</div>
      )}
    </div>
  )
}
