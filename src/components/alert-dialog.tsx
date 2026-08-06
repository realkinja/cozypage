import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import styles from "./css/dialog.module.css";
import Button from "./button";

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root {...props} />;
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger {...props} />;
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal {...props} />;
}

function AlertDialogOverlay({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return <AlertDialogPrimitive.Overlay className={styles.overlay} {...props} />;
}

function AlertDialogContent({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content className={styles.content} {...props} />
    </AlertDialogPortal>
  );
}

function AlertDialogCancel({
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel asChild {...props}>
      <Button variant="secondary">{children}</Button>
    </AlertDialogPrimitive.Cancel>
  );
}

function AlertDialogAction({
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action asChild {...props}>
      <Button variant="destructive">{children}</Button>
    </AlertDialogPrimitive.Action>
  );
}

function AlertDialogTitle({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return <AlertDialogPrimitive.Title className={styles.title} {...props} />;
}

function AlertDialogDescription({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return <AlertDialogPrimitive.Description {...props} />;
}

function AlertDialogHeader({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={styles.header}>{children}</div>;
}

function AlertDialogFooter({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={styles.footer}>{children}</div>;
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
