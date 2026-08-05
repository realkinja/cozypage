"use client";
import { Dialog as DialogPrimitive } from "radix-ui";
import styles from "./css/dialog.module.css";
import Button from "./button";
import IconX from "./icons/IconX";

export function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

export function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

export function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

export function DialogOverlay({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={styles.overlay}
      {...props}
    />
  );
}

export function DialogContent({
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={styles.content}
        {...props}
      >
        {children}
        <DialogPrimitive.Close asChild>
          <Button className={styles.contentClose} variant="icon">
            <IconX />
          </Button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export function DialogHeader({ ...props }: React.ComponentProps<"div">) {
  return <div className={styles.header} {...props} />;
}

export function DialogTitle({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className={styles.title} {...props} />;
}

export function DialogDescription({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description {...props} />;
}
