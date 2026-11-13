/** Trips that only run part of the year (e.g. high passes closed in winter). */

/** true when the date (YYYY-MM-DD) is empty, or falls in one of the open months. */
export const monthOk = (date: string, months: number[]) =>
  !date || months.length === 0 || months.includes(Number(date.slice(5, 7)));

/** Fills {from} and {to} in a text with the first and last open month names. */
export function seasonText(template: string, months: number[], intl: string) {
  if (months.length === 0) return '';
  const sorted = [...months].sort((a, b) => a - b);
  const fmt = new Intl.DateTimeFormat(intl, { month: 'long' });
  const name = (m: number) => fmt.format(new Date(Date.UTC(2026, m - 1, 15)));
  return template.replace('{from}', name(sorted[0])).replace('{to}', name(sorted[sorted.length - 1]));
}
