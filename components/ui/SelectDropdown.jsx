"use client";

import { useEffect, useId, useRef, useState } from "react";

import { StrokeIcon } from "@/components/icons/StrokeIcon";

/**
 * Accessible single-select dropdown (select-only combobox pattern).
 * A native <select> cannot animate or style its open list, so this
 * component renders its own button and listbox.
 *
 * @param {{
 *   value: string;
 *   options: { value: string; label: string }[];
 *   onChange: (value: string) => void;
 *   labelId: string;
 *   className?: string;
 * }} props
 */
export default function SelectDropdown({
  value,
  options,
  onChange,
  labelId,
  className = "",
}) {
  const baseId = useId();
  const listId = `${baseId}-list`;
  const getOptionId = (index) => `${baseId}-option-${index}`;

  const rootRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const selectedIndex = Math.max(
    options.findIndex((option) => option.value === value),
    0,
  );

  const openList = () => {
    setHighlightedIndex(selectedIndex);
    setIsOpen(true);
  };

  const closeList = () => setIsOpen(false);

  const commit = (index) => {
    onChange(options[index].value);
    closeList();
  };

  // Close when the user clicks or taps outside the dropdown
  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (isOpen) {
          setHighlightedIndex((index) => Math.min(index + 1, options.length - 1));
        } else {
          openList();
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (isOpen) {
          setHighlightedIndex((index) => Math.max(index - 1, 0));
        } else {
          openList();
        }
        break;
      case "Home":
        if (isOpen) {
          event.preventDefault();
          setHighlightedIndex(0);
        }
        break;
      case "End":
        if (isOpen) {
          event.preventDefault();
          setHighlightedIndex(options.length - 1);
        }
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (isOpen) commit(highlightedIndex);
        else openList();
        break;
      case "Escape":
        if (isOpen) {
          event.preventDefault();
          closeList();
        }
        break;
      case "Tab":
        closeList();
        break;
      default:
        break;
    }
  };

  // Prevents a second click event when the Space key is released
  const handleKeyUp = (event) => {
    if (event.key === " ") event.preventDefault();
  };

  return (
    <div ref={rootRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-labelledby={labelId}
        aria-activedescendant={isOpen ? getOptionId(highlightedIndex) : undefined}
        onClick={() => (isOpen ? closeList() : openList())}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        className={`flex items-center justify-between gap-2 rounded-full border bg-white px-4 py-2 text-sm font-semibold text-zinc-800 transition-colors duration-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sys-yellow motion-reduce:transition-none ${
          isOpen ? "border-sys-yellow" : "border-zinc-200"
        }`}
      >
        <span>{options[selectedIndex]?.label}</span>
        <StrokeIcon
          name="chevronDown"
          className={`h-4 w-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        id={listId}
        role="listbox"
        aria-labelledby={labelId}
        onMouseDown={(event) => event.preventDefault()}
        className={`absolute right-0 top-full z-30 mt-2 min-w-full origin-top overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-1.5 shadow-lg transition-all duration-200 ease-out motion-reduce:transition-none ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-95 opacity-0"
        }`}
      >
        {options.map((option, index) => {
          const isSelected = index === selectedIndex;
          const isHighlighted = index === highlightedIndex;

          return (
            <li
              key={option.value}
              id={getOptionId(index)}
              role="option"
              aria-selected={isSelected}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => commit(index)}
              className={`cursor-pointer whitespace-nowrap rounded-xl px-3 py-2 text-sm transition-colors duration-150 ${
                isSelected
                  ? "bg-sys-yellow font-semibold text-black"
                  : isHighlighted
                    ? "bg-zinc-100 font-medium text-zinc-900"
                    : "font-medium text-zinc-700"
              }`}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}