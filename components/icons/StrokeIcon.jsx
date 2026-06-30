import { getStrokeIcon } from "@/lib/strokeIcons";

/**
 * Icono SVG con trazo (24×24). Usar `name` (registro global) o `paths` (ad hoc).
 *
 * @param {{
 *   name?: string;
 *   paths?: string | string[];
 *   className?: string;
 *   strokeWidth?: number;
 *   strokeLinecap?: 'butt' | 'round' | 'square';
 *   strokeLinejoin?: 'miter' | 'round' | 'bevel';
 * }} props
 */
export function StrokeIcon({
  name,
  paths,
  className,
  strokeWidth,
  strokeLinecap = "round",
  strokeLinejoin = "round",
}) {
  const def = name ? getStrokeIcon(name) : undefined;
  const resolvedPaths = paths ?? def?.paths;

  if (!resolvedPaths) {
    return null;
  }

  const pathList = Array.isArray(resolvedPaths) ? resolvedPaths : [resolvedPaths];
  const resolvedStrokeWidth = strokeWidth ?? def?.strokeWidth ?? 1.75;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden
    >
      {pathList.map((d) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth={resolvedStrokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      ))}
    </svg>
  );
}
