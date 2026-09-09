const fs = require('fs');
let code = fs.readFileSync('src/components/Projects.jsx', 'utf8');

code = code.replace(/className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid"/, 
                    'className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden" id="projects-grid" style={{ scrollbarWidth: "none" }}');

code = code.replace(/<div data-category="([^"]+)" className="project-card block /g,
                    '<div data-category="$1" className="project-card min-w-[85vw] md:min-w-[400px] snap-center shrink-0 block ');

fs.writeFileSync('src/components/Projects.jsx', code);
