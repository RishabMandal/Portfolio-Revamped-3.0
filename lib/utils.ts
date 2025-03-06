// utils.ts
export function cn(...args: (string | false | undefined | null)[]): string {
  return args.filter(Boolean).join(" ");
}
