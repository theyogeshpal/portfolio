const fs = require('fs');

let jsx = fs.readFileSync('old_projects_utf8.jsx', 'utf8');

const start = jsx.indexOf('return (');
const end = jsx.lastIndexOf('  );');
if (start === -1 || end === -1) {
    console.log('Could not extract JSX');
    process.exit(1);
}

let html = jsx.substring(start + 'return ('.length, end).trim();

// Strip wrapper <> </>
if (html.startsWith('<>')) html = html.substring(2);
if (html.endsWith('</>')) html = html.substring(0, html.length - 3);
html = html.trim();

html = html.replace(/className=/g, 'class=');
html = html.replace(/<\/?\s*>\s*/g, '');
html = html.replace(/<\/?Fragment>\s*/g, '');
html = html.replace(/onClick=\{\(\) => navigate\('\/project\/([^']+)'\)\}/g, 'onclick="window.location.href=\'project-detail.html?id=$1\'"');
html = html.replace(/onClick=\{\(e\) => e\.stopPropagation\(\)\}/g, 'onclick="event.stopPropagation()"');
// Remove isSlider wrapper for slider view
html = html.replace(/\{isSlider \? "([^"]+)" : ""\}/g, '$1');
html = html.replace(/\{isSlider && \(([\s\S]*?)\)\}/g, '$1'); 
html = html.replace(/\{isSlider && ([\s\S]*?)\}/g, '$1'); 
// Replace navigate for View More Projects
html = html.replace(/onClick=\{\(\) => navigate\('\/projects'\)\}/g, 'onclick="window.location.href=\'projects.html\'"');

// Fix Projects container style
html = html.replace(/style=\{isSlider \? \{ scrollbarWidth: "none", msOverflowStyle: "none" \} : \{\}\}/g, 'style="scrollbar-width: none; -ms-overflow-style: none;"');
// Fix boolean attributes if any
html = html.replace(/=\{true\}/g, '="true"');
html = html.replace(/=\{false\}/g, '="false"');

// Fix JSX comments
html = html.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

// Now we need to inject this into index.html replacing the broken Projects section.
let indexHtml = fs.readFileSync('index.html', 'utf8');
const startTag = '<section id="projects"';
const endTag = '<!-- Contact -->';
const startIndex = indexHtml.indexOf(startTag);
const endIndex = indexHtml.indexOf(endTag);
if (startIndex !== -1 && endIndex !== -1) {
    indexHtml = indexHtml.substring(0, startIndex) + html + '\n\n' + indexHtml.substring(endIndex);
    fs.writeFileSync('index.html', indexHtml);
} else {
    console.log('Could not find injection point in index.html');
}

let gridHtml = html;
gridHtml = gridHtml.replace(/class="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar"/, 'class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"');
gridHtml = gridHtml.replace(/min-w-\[85vw\] md:min-w-\[400px\] snap-center shrink-0/g, '');
// Remove view more button from projects.html
gridHtml = gridHtml.replace(/<div class="mt-12 text-center">[\s\S]*?<\/div>/, '');

let projectsHtml = fs.readFileSync('projects.html', 'utf8');
const pStartIndex = projectsHtml.indexOf(startTag);
const pEndIndex = projectsHtml.indexOf('<!-- Footer -->');
if (pStartIndex !== -1 && pEndIndex !== -1) {
    projectsHtml = projectsHtml.substring(0, pStartIndex) + gridHtml + '\n\n' + projectsHtml.substring(pEndIndex);
    fs.writeFileSync('projects.html', projectsHtml);
}

console.log('Fixed projects section.');
