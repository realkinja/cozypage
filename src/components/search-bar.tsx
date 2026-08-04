"use client";
import { useRef, useState } from "react";
import { redirect } from "next/navigation";
import styles from "./css/search-bar.module.css";
import IconDuckDuckGo from "./icons/IconDuckDuckGo";

export default function SearchBar() {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const urlRegex =
    /(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/gm;

  const addFocusStyle = () => {
    const container = containerRef.current;
    container.className += ` ${styles.focus}`;
  };

  const removeFocusStyle = () => {
    const container = containerRef.current;
    container.className = styles.container;
  };

  const focusInput = () => {
    const input = inputRef.current;
    input.focus();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query != "") {
      if (urlRegex.test(query.trim())) {
        if (query.startsWith("https://")) {
          redirect(`${query.trim()}`, "push");
        } else {
          redirect(`https://${query.trim()}`, "push");
        }
      } else {
        redirect(`https://duckduckgo.com/?q=${query.trim()}`, "push");
      }
    }
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div ref={containerRef} onClick={focusInput} className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <IconDuckDuckGo className={styles.icon} />
        <input
          ref={inputRef}
          onFocus={addFocusStyle}
          onBlur={removeFocusStyle}
          value={query}
          onInput={handleQueryChange}
          className={styles.input}
          type="search"
          placeholder="Search with DuckDuckGo or enter address"
        />
      </form>
    </div>
  );
}
