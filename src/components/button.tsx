import styles from "./css/button.module.css";

type ButtonVariant = "default" | "secondary" | "icon" | "shortcut";

const buttonVariants = {
  default: styles.default,
  secondary: styles.secondary,
  icon: styles.icon,
  shortcut: styles.shortcut,
} satisfies Record<ButtonVariant, string>;

export default function Button({
  variant = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & { variant?: ButtonVariant }) {
  return (
    <button
      className={`${styles.button} ${buttonVariants[variant]}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
