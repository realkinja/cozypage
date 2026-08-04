"use client";
import { useRef, useState } from "react";
import { redirect } from "next/navigation";
import styles from "./css/search-bar.module.css";
import IconDuckDuckGo from "./icons/IconDuckDuckGo";
import {
  checkQueryType,
  prepareURL,
  QueryType,
  searchQueryURL,
} from "@/lib/utils";

export default function SearchBar() {
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

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
    const queryType = checkQueryType(inputValue);
    if (queryType == QueryType.URL) {
      redirect(prepareURL(inputValue), "push");
    } else if (queryType == QueryType.Search) {
      redirect(searchQueryURL(inputValue), "push");
    }
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div ref={containerRef} onClick={focusInput} className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <IconDuckDuckGo className={styles.icon} />
        <input
          ref={inputRef}
          onFocus={addFocusStyle}
          onBlur={removeFocusStyle}
          value={inputValue}
          onInput={handleInputValueChange}
          className={styles.input}
          type="search"
          placeholder="Search with DuckDuckGo or enter address"
        />
      </form>
    </div>
  );
}
