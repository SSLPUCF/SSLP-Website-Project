// Event dates are calendar days with no time of day.

// Today in Orlando as YYYY-MM-DD, wherever this code runs.
export function todayInOrlando(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

// A date from a Markdown file as YYYY-MM-DD.
export function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// For example "Jan 31, 2027". UTC stops the day from shifting by one.
export function readableDay(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(date);
}
