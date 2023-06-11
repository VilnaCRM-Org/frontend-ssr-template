// initial page load url: Google Maps
function url() {
  return 'http://localhost:3000/';
}

// action where we want to detect memory leaks: click the Hotels button
async function action(page) {
  // puppeteer page API
  await page.click('button');
}

// action where we want to go back to the step before: click clear search
async function back(page) {
  // puppeteer page API
  await page.click('button');
}

module.exports = {action, back, url};
