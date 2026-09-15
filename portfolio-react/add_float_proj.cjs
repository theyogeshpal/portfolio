const fs = require('fs');
let proj = fs.readFileSync('src/components/Projects.jsx', 'utf8');
let origProj = proj;

proj = proj.replace(/className="w-12 h-12 text-white opacity-80/g, 'className="w-12 h-12 text-white animate-float opacity-80');

if (origProj !== proj) {
    fs.writeFileSync('src/components/Projects.jsx', proj);
    console.log('Projects updated');
}
