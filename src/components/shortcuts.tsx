"use client";
import Button from "./button";
import styles from "./css/shortcuts.module.css";
import {
  getShortcutsFromStorage,
  saveShortcutsToStorage,
  Shortcut,
  shortcutFromForm,
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
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AddShortcut from "./add-shortcut";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import Label from "./label";
import Input from "./input";

export default function Shortcuts() {
  const [shortcuts, setShortcuts] = useState(new Array<Shortcut>());
  const [selectedShortcut, setSelectedShortcut] = useState<Shortcut>({
    title: null,
    url: null,
  });
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  useEffect(() => {
    if (!(localStorage.getItem("shortcuts") === null)) {
      setShortcuts(getShortcutsFromStorage());
    }
  }, []);

  const handleDeleteShortcut = (e: any, shortcut: Shortcut) => {
    e.preventDefault();
    const shortcutsFiltered = shortcuts.filter(
      (s) => s.title !== shortcut.title,
    );

    setShortcuts(shortcutsFiltered);
    saveShortcutsToStorage(shortcutsFiltered);
  };

  const handleEditShortcut = (e: any, shortcut: Shortcut) => {
    e.preventDefault();
    const editedShortcut = shortcutFromForm(e.target);
    const shortcutsUpdated = shortcuts.map((s) => {
      if (shortcut === s) {
        return editedShortcut;
      } else {
        return s;
      }
    });

    setShortcuts(shortcutsUpdated);
    saveShortcutsToStorage(shortcutsUpdated);
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
              <ContextMenuItem
                onSelect={(e) => {
                  setSelectedShortcut(shortcut);
                  setIsOpenDialog(true);
                }}
              >
                <IconEdit />
                Edit Shortcut
              </ContextMenuItem>
              <ContextMenuItem
                variant="destructive"
                onSelect={(e) => {
                  setSelectedShortcut(shortcut);
                  setIsOpenAlert(true);
                }}
              >
                <IconDelete />
                Delete Shortcut
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          <AlertDialog onOpenChange={setIsOpenAlert} open={isOpenAlert}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to remove "{selectedShortcut.title}?"
                </AlertDialogTitle>
                <AlertDialogDescription>
                  You will have to go back and re-add this shortcut after.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  onClick={(e) => {
                    handleDeleteShortcut(e, selectedShortcut);
                    setIsOpenAlert(false);
                  }}
                >
                  Yes, continue.
                </AlertDialogAction>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Dialog onOpenChange={setIsOpenDialog} open={isOpenDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit "{selectedShortcut.title}"</DialogTitle>
                <DialogDescription>
                  Edit your shortcut here. Click 'Save' when you're done.
                </DialogDescription>
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  handleEditShortcut(e, selectedShortcut);
                  setIsOpenDialog(false);
                }}
                className={styles.form}
              >
                <div className={styles.fields}>
                  <div className={styles.fieldGroup}>
                    <Label htmlFor="editTitle">Title</Label>
                    <Input
                      name="title"
                      id="editTitle"
                      defaultValue={selectedShortcut.title}
                      required
                      placeholder="i.e. Youtube"
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <Label htmlFor="editUrl">URL</Label>
                    <Input
                      name="url"
                      id="editUrl"
                      defaultValue={selectedShortcut.url}
                      required
                      placeholder="i.e. https://youtube.com"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save</Button>
                  <DialogClose asChild>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      ))}
      {shortcuts.length < 9 ? (
        <AddShortcut shortcuts={shortcuts} setShortcuts={setShortcuts} />
      ) : null}
    </div>
  );
}
