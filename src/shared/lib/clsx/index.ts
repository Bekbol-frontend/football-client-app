export type CLSX_MODS = Record<string, boolean>;

export function clsx(classNames: string[] = [], mods: CLSX_MODS = {}) {
  return [
    ...classNames,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => key),
  ]
    .join(" ")
    .trim();
}
