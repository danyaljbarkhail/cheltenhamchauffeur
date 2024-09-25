const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define the base URL of your website
const BASE_URL = 'https://cheltenhamchauffeur.co.uk/';  // Replace with your actual domain

// Define the static routes that you want to include in the sitemap
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/fleet', changefreq: 'monthly', priority: 0.8 },
  { url: '/booking', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
];

// Create the Sitemap
async function generateSitemap() {
  try {
    console.log('Generating sitemap...');  // Log for starting sitemap generation
    
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    // Write the sitemap to the public directory
    const writeStream = createWriteStream(path.join(__dirname, '../public/sitemap.xml'));
    console.log('Writing sitemap to:', path.join(__dirname, '../public/sitemap.xml'));  // Log the file path

    // Pipe the stream to the output file
    sitemap.pipe(writeStream);

    // Add each route to the sitemap
    routes.forEach(route => {
      sitemap.write(route);
      console.log('Adding route:', route.url);  // Log each route added
    });

    // Close the sitemap stream
    sitemap.end();

    // Wait for the stream to finish
    await streamToPromise(sitemap);

    console.log('Sitemap successfully created!');
  } catch (error) {
    console.error('Error generating sitemap:', error);  // Log errors if any
  }
}

// Run the function to generate the sitemap
generateSitemap();
