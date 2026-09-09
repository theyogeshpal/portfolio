const fs = require('fs');
let code = fs.readFileSync('src/components/Nav.jsx', 'utf8');

// Convert href="#..." to href="/#..."
code = code.replace(/href="#/g, 'href="/#');

// Remove education lines
code = code.split('\n').filter(line => !line.includes('Education')).join('\n');

fs.writeFileSync('src/components/Nav.jsx', code);

let homeCode = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');
homeCode = homeCode.split('\n').filter(line => !line.includes('Education')).join('\n');
fs.writeFileSync('src/pages/HomePage.jsx', homeCode);
