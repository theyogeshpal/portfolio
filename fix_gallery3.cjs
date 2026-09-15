const fs = require('fs');
let html = fs.readFileSync('gallery.html', 'utf8');

html = html.replace(/onMouseOver=\{\(e\)=>e\.target\.play\(/g, 'onmouseover="this.play()"');
html = html.replace(/onMouseOut=\{\(e\)=>e\.target\.pause\(/g, 'onmouseout="this.pause()"');

fs.writeFileSync('gallery.html', html);
