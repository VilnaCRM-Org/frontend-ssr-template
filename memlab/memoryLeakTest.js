function url() {
  return 'http://localhost:3000/';
}

async function action(page) {
  await page.click('button');
}

async function back(page) {
  await page.click('button');
}

module.exports = {action, back, url};
