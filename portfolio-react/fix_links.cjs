const fs = require('fs');

let nav = fs.readFileSync('src/components/Nav.jsx', 'utf8');
nav = nav.replace(/href="gallery\.html"/g, 'href="/gallery"');
fs.writeFileSync('src/components/Nav.jsx', nav);

let proj = fs.readFileSync('src/components/Projects.jsx', 'utf8');
proj = proj.replace(/href="project-detail\.html\?id=([^"]+)"/g, 'href="/project/$1"');
fs.writeFileSync('src/components/Projects.jsx', proj);
