import styles from "./css/add-shortcut.module.css";
import {
  saveShortcutsToStorage,
  Shortcut,
  shortcutFromForm,
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
import { Dispatch, SetStateAction, useState } from "react";
import IconPlus from "./icons/IconPlus";
import Button from "./button";

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
    const shortcut = shortcutFromForm(e.target);

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

export default AddShortcut;
