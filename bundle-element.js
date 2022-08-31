const fs = require('fs-extra');
const concat = require('concat');
(async function build() {

  const params = process.argv.slice(2)[0];
  buildPath = './dist';
  app = params;

  if (params === '' && params === undefined) {
    console.log('param is required');
    return false;
  } else {
    const files2020 = [
      `${buildPath}/${app}/polyfills.js`,
      `${buildPath}/${app}/runtime.js`,
      `${buildPath}/${app}/main.js`
    ]
    await fs.ensureDir(`${buildPath}/${app}/elements`)
    await concat(files2020, `${buildPath}/${app}/elements/${app}-es2020.js`);

    await fs.copyFile(`${buildPath}/${app}/styles.css`, `${buildPath}/${app}/elements/styles.css`);
  }
})()