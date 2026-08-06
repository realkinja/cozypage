import styles from "./css/button.module.css";
import { Slot } from "radix-ui";

type ButtonVariant =
  | "default"
  | "secondary"
  | "outline"
  | "destructive"
  | "icon"
  | "shortcut";

const buttonVariants = {
  default: styles.default,
  secondary: styles.secondary,
  outline: styles.outline,
  destructive: styles.destructive,
  icon: styles.icon,
  shortcut: styles.shortcut,
} satisfies Record<ButtonVariant, string>;

export default function Button({
  variant = "default",
  className,
  children,
  asChild = false,

  ...props
}: React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      className={`${styles.button} ${buttonVariants[variant]}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
