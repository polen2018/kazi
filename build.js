// Static site: copy index.html + assets into dist/ (the deploy output folder).
const fs = require('fs');
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', 'dist/index.html');
fs.cpSync('assets', 'dist/assets', { recursive: true });
if (fs.existsSync('web.config')) fs.copyFileSync('web.config', 'dist/web.config');
console.log('Built static site into dist/');

