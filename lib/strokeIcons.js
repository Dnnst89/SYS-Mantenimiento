/** @typedef {string | string[]} StrokeIconPaths */

/**
 * @typedef {{
 *   paths: StrokeIconPaths;
 *   strokeWidth?: number;
 * }} StrokeIconDef
 */

/** @type {Record<string, StrokeIconDef>} */
export const strokeIcons = {
  arrowRight: {
    paths: "M5 12h14M13 6l6 6-6 6",
    strokeWidth: 2,
  },
  arrowRightSmall: {
    paths: "M5 12h12M13 7l6 5-6 5",
    strokeWidth: 2.2,
  },
  chevronDown: {
    paths: "M6 9l6 6 6-6",
    strokeWidth: 2.5,
  },
  checkMini: {
    paths: "M20 6 9 17l-5-5",
    strokeWidth: 2.2,
  },
  phone: {
    paths:
      "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z",
    strokeWidth: 1.5,
  },
  home: {
    paths: "M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z",
  },
  office: {
    paths: [
      "M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18",
      "M9 8h2M13 8h2M9 12h2M13 12h2M9 16h4",
      "M4 22h16",
    ],
  },
  factory: {
    paths: [
      "M4 22V10l4 3V10l4 3V8l8-4v18H4Z",
      "M9 22v-4h3v4M14 22v-6h3v6",
      "M17 6V3h2v3",
    ],
  },
  columns: {
    paths: [
      "M8 22V6l4-3 4 3v16M4 22h16",
      "M10 22V10M14 22V10",
    ],
  },
  calendar: {
    paths: [
      "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
      "M16 2v4M8 2v4M3 10h18",
    ],
    strokeWidth: 1.5,
  },
  clipboard: {
    paths: [
      "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2",
      "M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1",
      "M9 12h6M9 16h5M9 8h2",
    ],
    strokeWidth: 1.5,
  },
  shieldCheck: {
    paths: [
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
      "M9 12.5 11 14.5 15 10.5",
    ],
    strokeWidth: 1.5,
  },
  shield: {
    paths: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
    strokeWidth: 1.65,
  },
  clock: {
    paths: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18", "M12 7v5l3 2"],
    strokeWidth: 1.65,
  },
  helmet: {
    paths: [
      "M9 18h6M6 10a6 6 0 0 1 12 0v2H6v-2Z",
      "M4 14h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z",
    ],
    strokeWidth: 1.65,
  },
  team: {
    paths: [
      "M9 4a3 3 0 1 0 0 6 3 3 0 1 0 0-6",
      "M17 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5",
      "M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M14 21v-1a3 3 0 0 1 3-3h1",
    ],
    strokeWidth: 1.65,
  },
  invoice: {
    paths: [
      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z",
      "M14 2v6h6M8 13h8M8 17h6",
    ],
    strokeWidth: 1.65,
  },
  pin: {
    paths: [
      "M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z",
      "M12 9a2 2 0 1 0 0 4 2 2 0 1 0 0-4",
    ],
    strokeWidth: 1.65,
  },
};

/** @param {string} name */
export function getStrokeIcon(name) {
  return strokeIcons[name];
}
