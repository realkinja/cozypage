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
