const fs = require('fs');
const htmlContent = fs.readFileSync('../index.html', 'utf8');

function extractTag(tag) {
    const regex = new RegExp(`<${tag}[\\s\\S]*?</${tag}>`, 'i');
    const match = htmlContent.match(regex);
    if (!match) return '';
    let content = match[0];
    content = content.replace(/class=/g, 'className=')
                     .replace(/onclick=/g, 'onClick=')
                     .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
                     .replace(/<br>/g, '<br />')
                     .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
                     .replace(/<!--[\s\S]*?-->/g, '');
    return content;
}

const tags = ['nav', 'footer'];
tags.forEach(t => {
    const Name = t.charAt(0).toUpperCase() + t.slice(1);
    let jsx = extractTag(t);
    // Replace anchor links to use Link or just let them be anchor links for hash routing
    // For services link, change href="#services" to href="/services"
    jsx = jsx.replace(/href="#services"/g, 'href="/services"');

    const comp = `import React from 'react';\n\nexport default function ${Name}() {\n  return (\n    <>\n      ${jsx}\n    </>\n  );\n}\n`;
    fs.writeFileSync(`./src/components/${Name}.jsx`, comp);
});
console.log("Nav and Footer generated!");
