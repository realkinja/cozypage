import styles from "./css/button.module.css";

type ButtonVariant = "default" | "secondary" | "icon" | "shortcut";

interface ButtonProps extends React.PropsWithChildren {
  className?: String;
  variant?: ButtonVariant;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default function Button({
  variant = "default",
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
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
      onClick={onClick}
      className={`${variantClass}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
