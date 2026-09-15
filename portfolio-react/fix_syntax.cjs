const fs = require('fs');

let code = fs.readFileSync('src/components/Projects.jsx', 'utf8');

code = code.replace(/className=\{\`project-card block \$\{isSlider \? "min-w-\[85vw\] md:min-w-\[400px\] snap-center shrink-0" : ""\}\` bg-white/g, 
    'className={`project-card block ${isSlider ? "min-w-[85vw] md:min-w-[400px] snap-center shrink-0" : ""} bg-white');

code = code.replace(/cursor-pointer" onClick=/g, 'cursor-pointer`} onClick=');

fs.writeFileSync('src/components/Projects.jsx', code);

// Fix App.jsx route missing issue
let appCode = fs.readFileSync('src/App.jsx', 'utf8');
if (!appCode.includes('<Route path="/projects" element={<AllProjectsPage />} />')) {
    appCode = appCode.replace(/<Route path="\/project\/:id" element={<ProjectDetailPage \/>} \/>/, '<Route path="/project/:id" element={<ProjectDetailPage />} />\n        <Route path="/projects" element={<AllProjectsPage />} />');
    fs.writeFileSync('src/App.jsx', appCode);
}
