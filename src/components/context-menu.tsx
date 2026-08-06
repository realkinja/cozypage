"use client";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import styles from "./css/context-menu.module.css";

type ContextMenuItemVariant = "default" | "destructive";

const itemVariants = {
  default: styles.itemDefault,
  destructive: styles.itemDestructive,
} satisfies Record<ContextMenuItemVariant, string>;

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root {...props} />;
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return <ContextMenuPrimitive.Portal {...props} />;
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return <ContextMenuPrimitive.Trigger {...props} />;
}

function ContextMenuContent({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPortal>
      <ContextMenuPrimitive.Content className={styles.content} {...props} />
    </ContextMenuPortal>
  );
}

function ContextMenuItem({
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  variant?: ContextMenuItemVariant;
}) {
  return (
    <ContextMenuPrimitive.Item
      className={`${styles.item} ${itemVariants[variant]}`}
      {...props}
    />
  );
}

function ContextMenuLabel({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label>) {
  return <ContextMenuPrimitive.Label className={styles.label} {...props} />;
}

function ContextMenuSubLabel({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label>) {
  return <ContextMenuPrimitive.Label className={styles.sublabel} {...props} />;
}

function ContextMenuSeparator({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator className={styles.separator} {...props} />
  );
}

export {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuTrigger,
  ContextMenuSubLabel,
  ContextMenuSeparator,
};
