// Rules for the Markdown files in src/content/. If a file breaks a rule, the
// build stops with a message naming the file and the field.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const events = defineCollection({
  // Files starting with an underscore (like _template.md) are ignored.
  loader: glob({ base: './src/content/events', pattern: ['**/*.md', '!**/_*.md'] }),
  schema: z.object({
    title: z.string(),
    // Write dates as YYYY-MM-DD, without quotes.
    date: z.coerce.date(),
    location: z.string(),
    // Optional. May be left blank.
    link: z.preprocess(
      (value) => value || undefined,
      z.url({ protocol: /^https?$/ }).optional(),
    ),
    // Only for the stand-in events. Hides their made-up date.
    placeholder: z.boolean().default(false),
  }),
});

// The About us page: one file, src/content/about/team.md.
const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: 'team.md' }),
  schema: z.object({
    groups: z.array(
      z.object({
        title: z.string(),
        // A group with nobody in it can be written as: members: []
        members: z.array(z.object({ name: z.string(), role: z.string() })),
      }),
    ),
  }),
});

export const collections = { events, about };
