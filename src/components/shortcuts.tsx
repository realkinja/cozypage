"use client";
import Button from "./button";
import styles from "./css/shortcuts.module.css";
import IconPlus from "./icons/IconPlus";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  getShortcutsFromStorage,
  saveShortcutsToStorage,
  Shortcut,
} from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "./dialog";
import Input from "./input";
import Label from "./label";
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

function AddShortcut({
  shortcuts,
  setShortcuts,
}: {
  shortcuts: Shortcut[];
  setShortcuts: Dispatch<SetStateAction<Shortcut[]>>;
}) {
  const [open, setOpen] = useState(false);
  const handleSaveShortcut = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const shortcut: Shortcut = {
      title: formData.get("title") as string,
      url: formData.get("url") as string,
    };

    setOpen(false);
    setShortcuts([...shortcuts, shortcut]);
    saveShortcutsToStorage([...shortcuts, shortcut]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={styles.addShortcut} variant="shortcut">
          <IconPlus />
          Add shortcut
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add shortcut</DialogTitle>
          <DialogDescription>
            Create a new shortcut here. Click 'Add' when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSaveShortcut} className={styles.form}>
          <div className={styles.fields}>
            <div className={styles.fieldGroup}>
              <Label htmlFor="title">Title</Label>
              <Input
                name="title"
                id="title"
                required
                placeholder="i.e. Youtube"
              />
            </div>
            <div className={styles.fieldGroup}>
              <Label htmlFor="url">URL</Label>
              <Input
                name="url"
                id="url"
                required
                placeholder="i.e. https://youtube.com"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function Shortcuts() {
  const [shortcuts, setShortcuts] = useState(new Array<Shortcut>());

  useEffect(() => {
    if (!(localStorage.getItem("shortcuts") === null)) {
      setShortcuts(getShortcutsFromStorage());
    }
  }, []);

  const handleDeleteShortcut = (title: string) => {
    const shortcutsFiltered = shortcuts.filter((s) => s.title !== title);

    setShortcuts(shortcutsFiltered);
    saveShortcutsToStorage(shortcutsFiltered);
  };

  return (
    <div className={styles.container}>
      {shortcuts.map((shortcut) => (
        <ContextMenu key={shortcut.title}>
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
              onSelect={(e) => handleDeleteShortcut(shortcut.title)}
              variant="destructive"
            >
              <IconDelete />
              Delete Shortcut
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
      {shortcuts.length < 9 ? (
        <AddShortcut shortcuts={shortcuts} setShortcuts={setShortcuts} />
      ) : null}
    </div>
  );
}
