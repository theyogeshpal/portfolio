const fs = require('fs');

function cleanJsx(html) {
    // Basic JSX to HTML
    let match = html.match(/return\s*\(\s*(<[\s\S]*>)\s*\)\s*;/);
    if (match) html = match[1];

    html = html.replace(/<\/?\s*>\s*/g, '');
    html = html.replace(/<\/?Fragment>\s*/g, '');
    html = html.replace(/<>\s*/g, '');
    html = html.replace(/<\/>\s*/g, '');
    
    html = html.replace(/className=/g, 'class=');
    html = html.replace(/htmlFor=/g, 'for=');
    
    // Links
    html = html.replace(/<Link to="([^"]+)"([^>]*)>(.*?)<\/Link>/gs, '<a href="$1"$2>$3</a>');
    
    // onClick
    html = html.replace(/onClick=\{\(\) => navigate\('([^']+)'\)\}/g, 'onclick="window.location.href=\'$1.html\'"');
    html = html.replace(/onClick=\{\(e\) => e\.stopPropagation\(\)\}/g, 'onclick="event.stopPropagation()"');
    
    // Style
    html = html.replace(/style=\{\{\s*scrollbarWidth:\s*"none"\s*\}\}/g, 'style="scrollbar-width: none;"');
    html = html.replace(/style=\{\{\s*scrollbarWidth:\s*"none",\s*msOverflowStyle:\s*"none"\s*\}\}/g, 'style="scrollbar-width: none; -ms-overflow-style: none;"');
    html = html.replace(/style=\{\{\s*fontFamily:\s*'([^']+)',?\s*([^\}]+)?\s*\}\}/g, 'style="font-family: \'$1\', $2;"');

    // Props like {isSlider ...}
    // Just a basic cleanup for the known ones
    html = html.replace(/\{isSlider \? "([^"]+)" : "([^"]+)"\}/g, '$1');
    html = html.replace(/\{isSlider && /g, '');
    html = html.replace(/<\/button>\n\s*<\/div>\}/g, '</button>\n</div>');
    
    // className={`... ${...}`}
    html = html.replace(/class=\{\`([^\`]+)\`\}/g, (m, p1) => {
        let cls = p1.replace(/\$\{isSlider \? "([^"]+)" : "([^"]*)"\}/g, '$1');
        return 'class="' + cls + '"';
    });
    
    // Remove {stackCategories.map...} logic and expand it? 
    // Oh wait! TechStack uses map!
    // Experience uses map!
    // This script approach will fail for maps.
    return html;
}

// Since maps are used, let's just compile the React components to static HTML using React!
