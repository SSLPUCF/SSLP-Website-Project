// Site name, pages and public links. The header and footer both read this file.

export const site = {
  shortName: 'SSLP',
  fullName: 'Solidworks Student Leadership Program',
  school: 'University of Central Florida',
};

// When a "coming soon" page gets real content, change its `ready` to true.
// That moves it into the footer's main list.
export const pages = [
  { label: 'Home', path: '/', ready: true },
  { label: 'About us', path: '/about/', ready: true },
  { label: 'Programs', path: '/programs/', ready: false },
  { label: 'Documentation', path: '/documentation/', ready: false },
  { label: 'Signups', path: '/signups/', ready: false },
  { label: 'Wiki', path: '/wiki/', ready: false },
  { label: '3D printing', path: '/3d-printing/', ready: false },
];

// `label` is used in the footer, `action` at the top of the home page.
// The `primary` link is the home page's red button.
// With an empty url, the footer hides the link and the home page lists it as a TODO.
export const socialLinks = [
  { label: 'Discord', action: 'Join our Discord', url: 'https://discord.gg/xKTd3yEf3x', primary: true },
  { label: 'YouTube', action: 'Watch on YouTube', url: 'https://www.youtube.com/@sslpucf' },
  { label: 'Instagram', action: 'Follow on Instagram', url: '' }, // TODO: owner has not supplied it
  { label: 'KnightConnect', action: 'View on KnightConnect', url: '' }, // TODO: page is currently unavailable
];
