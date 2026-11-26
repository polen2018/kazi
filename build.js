// Static site: copy index.html + assets into dist/ (the deploy output folder).
const fs = require('fs');
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', 'dist/index.html');
fs.cpSync('assets', 'dist/assets', { recursive: true });
console.log('Built static site into dist/');

// The hosting deploy drops an empty app_offline.htm at the start of every deploy and never removes it,
// which makes IIS answer 503 for the whole site. The build runs in the site root, so clear it here.
try { fs.rmSync('app_offline.htm', { force: true }); console.log('Removed app_offline.htm'); }
catch (e) { console.log('Could not remove app_offline.htm: ' + e.message); }
