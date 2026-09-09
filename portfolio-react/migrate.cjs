const fs = require('fs');
const path = require('path');

const htmlContent = fs.readFileSync('../index.html', 'utf8');

// Helper to extract section
function extractSection(id) {
    const regex = new RegExp(`<section id="${id}"[\\s\\S]*?</section>`, 'i');
    const match = htmlContent.match(regex);
    if (!match) return '';
    let content = match[0];
    
    // Convert basic HTML to JSX (class -> className, style strings, self-closing tags, onclick, etc)
    content = content.replace(/class=/g, 'className=')
                     .replace(/onclick=/g, 'onClick=')
                     .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
                     .replace(/<br>/g, '<br />')
                     .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
                     .replace(/<!--[\s\S]*?-->/g, '');
                     
    return content;
}

const sections = ['home', 'about', 'education', 'experience', 'projects', 'services', 'contact'];

if (!fs.existsSync('./src/components')) {
    fs.mkdirSync('./src/components');
}

sections.forEach(sec => {
    const Name = sec.charAt(0).toUpperCase() + sec.slice(1);
    let jsx = extractSection(sec);
    
    // For services, the user wants it to be a separate page. We still extract it as a component.
    const comp = `import React from 'react';\nimport { LucideIcon } from 'lucide-react'; // Make sure to use proper icons\n\nexport default function ${Name}() {\n  return (\n    <>\n      ${jsx}\n    </>\n  );\n}\n`;
    
    fs.writeFileSync(`./src/components/${Name}.jsx`, comp);
});

console.log("Components generated!");
