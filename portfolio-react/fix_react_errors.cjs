const fs = require('fs');

let footerCode = fs.readFileSync('src/components/Footer.jsx', 'utf8');
footerCode = footerCode.replace(/stroke-width/g, 'strokeWidth');
footerCode = footerCode.replace(/stroke-linecap/g, 'strokeLinecap');
footerCode = footerCode.replace(/stroke-linejoin/g, 'strokeLinejoin');
fs.writeFileSync('src/components/Footer.jsx', footerCode);

let projCode = fs.readFileSync('src/components/Projects.jsx', 'utf8');
if (!projCode.includes('import { useNavigate }')) {
    projCode = projCode.replace("import React from 'react';", "import React from 'react';\nimport { useNavigate } from 'react-router-dom';");
}

projCode = projCode.replace(
    /<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">/, 
    '<div className={isSlider ? "flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"} style={isSlider ? { scrollbarWidth: "none", msOverflowStyle: "none" } : {}}>'
);

projCode = projCode.replace(/onClick="event\.stopPropagation\(\)"/g, 'onClick={(e) => e.stopPropagation()}');

fs.writeFileSync('src/components/Projects.jsx', projCode);
