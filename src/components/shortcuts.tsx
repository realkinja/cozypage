"use client";
import Button from "./button";
import styles from "./css/shortcuts.module.css";
import {
  getShortcutsFromStorage,
  saveShortcutsToStorage,
  Shortcut,
} from "@/lib/utils";
import Link from "next/link";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuSubLabel,
  ContextMenuTrigger,
} from "./context-menu";
import IconEdit from "./icons/IconEdit";
import IconDelete from "./icons/IconDelete";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";
import { useEffect, useState } from "react";
import AddShortcut from "./add-shortcut";

export default function Shortcuts() {
  const [shortcuts, setShortcuts] = useState(new Array<Shortcut>());
  const [selectedShortcut, setSelectedShortcut] = useState(null);
  const [isOpenAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    if (!(localStorage.getItem("shortcuts") === null)) {
      setShortcuts(getShortcutsFromStorage());
    }
  }, []);

  const handleDeleteShortcut = (e: any, title: string) => {
    e.preventDefault();
    const shortcutsFiltered = shortcuts.filter((s) => s.title !== title);

    setShortcuts(shortcutsFiltered);
    saveShortcutsToStorage(shortcutsFiltered);
  };

  return (
    <div className={styles.container}>
      {shortcuts.map((shortcut) => (
        <div key={shortcut.title}>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <Link
                className={styles.link}
                href={shortcut.url}
                scroll={false}
                prefetch={false}
              >
                <Button variant="shortcut">{shortcut.title[0]}</Button>
              </Link>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <div className={styles.contextTop}>
                <ContextMenuLabel>{shortcut.title}</ContextMenuLabel>
                <ContextMenuSubLabel>{shortcut.url}</ContextMenuSubLabel>
              </div>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <IconEdit />
                Edit Shortcut
              </ContextMenuItem>
              <ContextMenuItem
                variant="destructive"
                onSelect={(e) => {
                  setSelectedShortcut(shortcut.title);
                  setOpenAlert(true);
                }}
              >
                <IconDelete />
                Delete Shortcut
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          <AlertDialog onOpenChange={setOpenAlert} open={isOpenAlert}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to remove "{selectedShortcut}?"
                </AlertDialogTitle>
                <AlertDialogDescription>
                  You will have to go back and re-add this shortcut after.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  onClick={(e) => {
                    handleDeleteShortcut(e, selectedShortcut);
                    setOpenAlert(false);
                  }}
                >
                  Yes, continue.
                </AlertDialogAction>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ))}
      {shortcuts.length < 9 ? (
        <AddShortcut shortcuts={shortcuts} setShortcuts={setShortcuts} />
      ) : null}
    </div>
  );
}
