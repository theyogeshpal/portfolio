const fs = require('fs');

const files = ['index.html', 'services.html', 'projects.html', 'gallery.html', 'project-detail.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Fix Nav links
        content = content.replace(/href="\/\#"/g, 'href="index.html"');
        content = content.replace(/href="\/\#([^"]+)"/g, 'href="index.html#$1"');
        
        content = content.replace(/href="\/services"/g, 'href="services.html"');
        content = content.replace(/href="\/gallery"/g, 'href="gallery.html"');
        content = content.replace(/href="\/projects"/g, 'href="projects.html"');
        
        // In index.html, we don't strictly need index.html#home, we can just use #home
        // so script.js can match it exactly. Let's do that for index.html only!
        if (file === 'index.html') {
            content = content.replace(/href="index\.html#([^"]+)"/g, 'href="#$1"');
        }

        // The background color of body might need to be #050505
        // We also need to fix any other small issues. Like the tech-stack section id.
        
        fs.writeFileSync(file, content);
    }
});

// Also fix script.js to match the new URL pattern if needed, but since we changed index.html to use #id, it should work for index.html.
// What about other pages? Other pages don't have the #sections so they don't need scroll spy.

// One more issue: script.js might be doing something with mobile nav links
console.log('Links fixed.');
