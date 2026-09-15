const fs = require('fs');

const files = ['index.html', 'services.html', 'projects.html', 'gallery.html', 'project-detail.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove JSX comments: {/* comment */}
        // This regex matches {/* followed by anything lazy, followed by */}
        content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
        
        fs.writeFileSync(file, content);
    }
});

console.log('Removed JSX comments.');
