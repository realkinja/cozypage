export enum QueryType {
  URL,
  Search,
}

export function checkQueryType(query: string) {
  const urlRegex =
    /(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/gm;

  if (query != "") {
    if (urlRegex.test(query)) {
      return QueryType.URL;
    } else {
      return QueryType.Search;
    }
  }
}

export function prepareURL(url: string) {
  if (!url.startsWith("https://")) {
    return `https://${url}`;
  } else {
    return url;
  }
}

export function searchQueryURL(query: string) {
  const searchURL = "https://duckduckgo.com/?q=";
  return `${searchURL}${query}`;
}

export type Shortcut = {
  id: number;
  title: string;
  url: string;
};

export function getShortcutsFromStorage() {
  let retrievedShortcuts = localStorage.getItem("shortcuts");
  let shortcuts: Array<Shortcut> = JSON.parse(retrievedShortcuts);
  console.info(`Retrieved ${shortcuts.length} shortcut(s).`);
  return shortcuts;
}

export function saveShortcutsToStorage(shortcuts: Array<Shortcut>) {
  let shortcutsString = JSON.stringify(shortcuts);
  localStorage.setItem("shortcuts", shortcutsString);
  console.info(`Saved ${shortcuts.length} shortcut(s).`);
}

export function shortcutFromForm(form: any) {
  const formData = new FormData(form);
  const shortcut: Shortcut = {
    id: parseInt(formData.get("id") as string),
    title: formData.get("title") as string,
    url: formData.get("url") as string,
  };

  return shortcut;
}
