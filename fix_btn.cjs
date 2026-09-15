const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/onClick=\{\(\) => navigate\('\/projects'\) class=/g, 'onclick="window.location.href=\'projects.html\'" class=');
html = html.replace(/<\/div>\}/g, '</div>');

fs.writeFileSync('index.html', html);
console.log('Fixed button in index.html');
