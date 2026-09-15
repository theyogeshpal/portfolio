const fs = require('fs');

const files = ['index.html', 'projects.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Fix class={`project-card...`}
    content = content.replace(/class=\{\`project-card block min-w-\[85vw\] md:min-w-\[400px\] snap-center shrink-0 ([^\`]+)\`\}/g, 'class="project-card block min-w-[85vw] md:min-w-[400px] snap-center shrink-0 $1"');
    
    // For projects grid it might just be class={`project-card block  bg-white...`}
    content = content.replace(/class=\{\`project-card block  ([^\`]+)\`\}/g, 'class="project-card block $1"');

    // In case it's just class={`project-card...`} without the $ variable substitution
    content = content.replace(/class=\{\`([^\`]+)\`\}/g, 'class="$1"');

    fs.writeFileSync(file, content);
});

console.log('Fixed final React brackets.');
