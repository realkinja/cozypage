"use client";
import { redirect } from "next/navigation";
import Button from "./button";
import styles from "./css/shortcuts.module.css";
import IconPlus from "./icons/IconPlus";
import { useEffect, useState } from "react";
import { getShortcutsFromStorage, Shortcut } from "@/lib/utils";

function AddShortcut() {
  return (
    <Button className={styles.addShortcut} variant="shortcut">
      <IconPlus />
      Add shortcut
    </Button>
  );
}

export default function Shortcuts() {
  const [shortcuts, setShortcuts] = useState(new Array<Shortcut>());

  useEffect(() => {
    if (!(localStorage.getItem("shortcuts") === null)) {
      setShortcuts(getShortcutsFromStorage());
    }
  }, []);

  const handleClick = (e, url) => {
    e.preventDefault();
    redirect(url, "push");
  };

  return (
    <div className={styles.container}>
      {shortcuts.map((shortcut) => (
        <Button
          onClick={(e) => handleClick(e, shortcut.url)}
          variant="shortcut"
          key={shortcut.title}
        >
          {shortcut.title[0]}
        </Button>
      ))}
      {shortcuts.length < 9 ? <AddShortcut /> : null}
    </div>
  );
}
