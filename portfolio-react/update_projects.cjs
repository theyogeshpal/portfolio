const fs = require('fs');
let code = fs.readFileSync('src/components/Projects.jsx', 'utf8');

code = code.replace('export default function Projects() {', 'export default function Projects({ isSlider = true }) {');

code = code.replace(
    /className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth \[\&::\-webkit\-scrollbar\]:hidden"/,
    'className={isSlider ? "flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"}'
);

code = code.replace(
    /style=\{\{ scrollbarWidth: "none" \}\}/,
    'style={isSlider ? { scrollbarWidth: "none" } : {}}'
);

code = code.replace(
    /className="project-card min-w-\[85vw\] md:min-w-\[400px\] snap-center shrink-0 block/g,
    'className={`project-card block ${isSlider ? "min-w-[85vw] md:min-w-[400px] snap-center shrink-0" : ""}`'
);

code = code.replace('<div className="mt-12 text-center">', '{isSlider && <div className="mt-12 text-center">');
code = code.replace('</button>\n            </div>', '</button>\n            </div>}');

// Change View More button to navigate to /projects instead of expanding (optional, but good for UX)
code = code.replace(/id="view-more-projects-btn"[^>]+>/, 'id="view-more-projects-btn" onClick={() => navigate(\'/projects\')} className="px-8 py-3 rounded-full font-bold text-sm transition-all bg-white text-gray-800 hover:bg-orange-50 border-2 border-orange-200 hover:border-orange-500 shadow-sm hover:shadow-md flex items-center gap-2 mx-auto">');

fs.writeFileSync('src/components/Projects.jsx', code);
