const fs = require('fs');

function fixFormatting(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Fix the Projects container
    html = html.replace(/<div class=flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar style=\{isSlider \? \{ scrollbarWidth: "none", msOverflowStyle: "none" \} : \{\}\}>/g, 
        '<div class="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar" style="scrollbar-width: none; -ms-overflow-style: none;">');
    
    // Fix caveart style
    html = html.replace(/style="font-family: 'Caveat, cursive', ;"/g, 'style="font-family: \'Caveat\', cursive;"');

    // Fix Nav links
    // Default text color of desktop links should be white for home
    if (file === 'index.html') {
        html = html.replace(/<a href="#([^"]+)" class="nav-link text-gray-700/g, '<a href="#$1" class="nav-link text-white');
        html = html.replace(/<span class="text-orange-600">Yogesh<\/span>Pal\s*<\/a>/g, '<span class="text-orange-600">Yogesh</span>Pal</a>');
        html = html.replace(/<a href="index\.html" class="text-2xl font-bold text-gray-900 group">/, '<a href="index.html" class="text-2xl font-bold text-white group">');
    }

    fs.writeFileSync(file, html);
}

fixFormatting('index.html');
fixFormatting('services.html');
fixFormatting('projects.html');
fixFormatting('gallery.html');
fixFormatting('project-detail.html');
console.log('Fixed format.');
