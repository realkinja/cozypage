import styles from "./css/input.module.css";

function Input({ type, ...props }: React.ComponentProps<"input">) {
  return <input type={type} className={styles.input} {...props} />;
}

export default Input;
