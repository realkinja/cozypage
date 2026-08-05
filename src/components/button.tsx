import styles from "./css/button.module.css";

type ButtonVariant = "default" | "secondary" | "icon" | "shortcut";

export default function Button({
  variant = "default",
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & { variant: ButtonVariant }) {
  let variantClass: string;

  switch (variant) {
    case "default":
      variantClass = styles.primary;
      break;
    case "secondary":
      variantClass = styles.secondary;
      break;
    case "icon":
      variantClass = styles.icon;
      break;
    case "shortcut":
      variantClass = styles.shortcut;
      break;
  }

  return (
    <button
      className={`${variantClass}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
