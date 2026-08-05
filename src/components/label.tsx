import { Label as LabelPrimitive } from "radix-ui";
import styles from "./css/label.module.css";

function Label({ ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return <LabelPrimitive.Root className={styles.label} {...props} />;
}

export default Label;
