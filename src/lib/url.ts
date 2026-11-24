// Adds the site's base path to an internal link. GitHub Pages project sites live
// under /repo-name/, so always use this instead of writing href="/about/".
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
