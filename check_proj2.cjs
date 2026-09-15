const fs = require('fs');
const lines = fs.readFileSync('index.html', 'utf8').split('\n');
const proj = lines.findIndex(l => l.includes('id="projects"'));
console.log(lines.slice(proj+35, proj + 55).join('\n'));
