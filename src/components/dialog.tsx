"use client";
import { Dialog as DialogPrimitive } from "radix-ui";
import styles from "./css/dialog.module.css";
import Button from "./button";
import IconX from "./icons/IconX";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger {...props} />;
}

function DialogOverlay({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return <DialogPrimitive.Overlay className={styles.overlay} {...props} />;
}

function DialogContent({
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content className={styles.content} {...props}>
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

function DialogHeader({ ...props }: React.ComponentProps<"div">) {
  return <div className={styles.header} {...props} />;
}

function DialogTitle({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className={styles.title} {...props} />;
}

function DialogDescription({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description {...props} />;
}

function DialogFooter({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={styles.footer} {...props}>
      {children}
    </div>
  );
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close {...props} />;
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
