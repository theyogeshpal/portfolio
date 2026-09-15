const fs = require('fs');

const files = ['index.html', 'projects.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Clean up TechStack remnant if any
    content = content.replace(/[\s]*\)\)\} /g, '');
    content = content.replace(/\)\)\}/g, '');

    // Clean up `project-card block $min-w...`
    content = content.replace(/class=`project-card block \$([^`]+)`/g, 'class="project-card block $1"');
    
    // Clean up the `{isSlider ? flex : grid}` string
    if (file === 'index.html') {
        content = content.replace(/class=\{isSlider \? "[^"]+" : "[^"]+"\} /, 'class="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar" ');
    } else {
        content = content.replace(/class=\{isSlider \? "[^"]+" : "[^"]+"\} /, 'class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ');
    }
    
    // Sometimes $min-w is literally $min-w... let's replace $ with space
    content = content.replace(/block \$min-w/g, 'block min-w');
    
    fs.writeFileSync(file, content);
});

console.log('Cleaned up React syntax from HTML files.');
