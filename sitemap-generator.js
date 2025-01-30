const { SitemapStream } = require('sitemap');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/projets', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 }
];

const stream = new SitemapStream({ hostname: 'https://luisfds.com' });

links.forEach(link => stream.write(link));

stream.end();

stream.pipe(fs.createWriteStream('public/sitemap.xml'));