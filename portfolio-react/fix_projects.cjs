const fs = require('fs');
let code = fs.readFileSync('src/components/Projects.jsx', 'utf8');

// Replace onClick="window.location.href='project-detail.html?id=...'"
code = code.replace(/onClick="window\.location\.href='project-detail\.html\?id=([^']+)'"/g, "onClick={() => navigate('/project/$1')}");

// Also fix the nested onClick="event.stopPropagation()"
code = code.replace(/onClick="event\.stopPropagation\(\)"/g, "onClick={(e) => e.stopPropagation()}");

// Add useNavigate import
if (!code.includes('useNavigate')) {
    code = code.replace("import React, { useEffect } from 'react';", "import React, { useEffect } from 'react';\nimport { useNavigate } from 'react-router-dom';");
    code = code.replace("export default function Projects() {", "export default function Projects() {\n  const navigate = useNavigate();");
}

fs.writeFileSync('src/components/Projects.jsx', code);
