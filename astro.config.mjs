// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // The GitHub Pages address is site + base. `base` must match the repository
  // name exactly, capitals included. Internal links go through src/lib/url.ts.
  // When the club's own domain is connected: set `site` to it and delete `base`.
  site: 'https://sslpucf.github.io',
  base: '/SSLP-Website-Project',

  // Astro downloads these from Google Fonts when it builds and serves them from
  // our own site, so visitors' browsers never contact Google.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: [600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Sora',
      cssVariable: '--font-sora',
      weights: [400, 600],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'DM Mono',
      cssVariable: '--font-dm-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
