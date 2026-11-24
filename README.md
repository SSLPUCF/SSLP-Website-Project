# SSLP website

The website for the Solidworks Student Leadership Program at UCF. You can change events and the About us page by editing text files. No coding needed.

The site's public address is https://sslpucf.github.io/SSLP-Website/. It goes live after the first upload to GitHub.

**Anything in these files can be seen by anyone** once it's uploaded to GitHub, even if it doesn't appear on the site. **Never put student information in them** (signup lists, NID emails, Discord handles or scores). Use made-up examples such as `test@test.com`.

## Run the site on your computer

You need [Node.js](https://nodejs.org/) version 22.23.4 or newer. To check what you have, run `node --version`.

1. Open a terminal in this folder. In VS Code, choose **Terminal**, then **New Terminal**.
2. The first time only, run `npm install`. This needs an internet connection.
3. Run `npm run dev`. The first run needs internet too, to download the fonts.
4. Open http://localhost:4321/SSLP-Website/ in your browser. If the terminal shows a different port number, use that number instead of `4321`.

Saved changes show up in the browser. If one doesn't, refresh the page. To stop the site, press **Ctrl+C** in the terminal.

## Add an event

1. Go to the folder `src/content/events/`.
2. Make a copy of `_template.md` in the same folder.
3. Rename the copy, for example `2027-01-kickoff.md`. The name must end in `.md` and must **not** start with an underscore, or the site ignores it.
4. Fill in the lines between the two `---` marks, then delete the lines that start with `#`:

   ```
   ---
   title: Name of the event
   date: 2027-01-31
   location: Building and room, or "Online"
   link:
   ---
   ```

   | Line | What to write |
   |---|---|
   | `title` | The event's name. |
   | `date` | Year, month, day, like `2027-01-31`. No quotes. |
   | `location` | Where it is. |
   | `link` | A full address starting with `https://`, or leave it blank. |

5. Save the file and check the home page.

You don't need to move old events. An event is listed under "Upcoming events" through its date (Orlando time), then under "Past events".

The two files starting with `placeholder-` are stand-ins. When you add a real upcoming event, delete `placeholder-upcoming.md`. When you have a real past event, delete `placeholder-past.md`.

## Edit the About us page

1. Open `src/content/about/team.md`.
2. Change the `name` and `role` lines. Replace every `TODO` before the site is published. **Ask each person before adding their name.**
3. Save the file and check the About us page.

A group with two people looks like this:

```
  - title: Leads
    members:
      - name: First person's name
        role: First person's role
      - name: Second person's name
        role: Second person's role
```

- Keep the spaces at the start of each line as shown. Use spaces, not tabs.
- To add someone, copy a `- name:` line and the `role:` line under it.
- To leave a group empty, write `members: []` and remove the names under it.
- People appear in the order you list them. The page has no photos.

## Quotes

In event files and `team.md`, put quotes around any text that contains a colon (`:`) or a `#`:

```
title: "Workshop: sheet metal"
```

## Publish changes

Every change that reaches the `main` branch on GitHub publishes itself, usually within a few minutes. To check on it, open the repository's **Actions** tab. A green check means it worked. A red X means it didn't, and the site keeps its last working version. Click the failed run to see the error.

- **Small text edits:** open the file on GitHub, click the pencil icon, make the change, then click **Commit changes**.
- **From your computer:** use [GitHub Desktop](https://desktop.github.com/). Commit your changes, then click **Push origin**.

**Don't upload the project folder by dragging it onto the GitHub website.** That ignores `.gitignore`, the list of private files, so it could publish them. GitHub Desktop follows the list. Before every commit, check that nothing from `docs/` is selected.

One-time setup: in the repository, go to **Settings**, then **Pages**, and set **Source** to **GitHub Actions**.

## Other things you can change

| What | File |
|---|---|
| Mission statement on the home page | `src/content/home/mission.md` |
| Discord, YouTube and other links | `src/data/site.ts` (change only the text inside the quotes) |

## If something goes wrong

Before sharing your changes, run `npm run build`. It checks the whole site. If it ends with `Complete!`, it worked. This doesn't publish anything.

| Problem | What to do |
|---|---|
| The error says `does not match collection schema` | It names the file (such as `team`) and the line that's wrong (such as `role`). In `team.md`, numbering starts at 0, so `groups.0.members.1.role` means the first group's second person. |
| Another kind of error after editing a file | Check the spacing, quotes and `---` marks in the file you just changed. |
| `Another astro dev server is already running` | The site is already running, so open the address shown. To restart it, run `npx astro dev stop`, then `npm run dev`. |
| PowerShell says running scripts is disabled | Use Command Prompt instead. In VS Code, click the arrow next to the **+** in the terminal panel and choose **Command Prompt**. |
