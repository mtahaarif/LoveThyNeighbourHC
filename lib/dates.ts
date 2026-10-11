// Dates render in the business's time zone so server and client output always match.
const fmt = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/New_York' });

export const formatDate = (iso: string) => fmt.format(new Date(iso));
