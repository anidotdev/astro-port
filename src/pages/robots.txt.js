export function GET({ site }) {
  const sitemap = new URL('sitemap-index.xml', site);
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
