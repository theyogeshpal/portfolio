const fs = require('fs');

function jsxToHtml(html) {
    let match = html.match(/return\s*\(\s*(?:<\w+>|<>\s*)?([\s\S]*?)(?:<\/\w+>|<\/>\s*)?\)\s*;/);
    if (match) html = match[1];

    html = html.replace(/className=/g, 'class=');
    html = html.replace(/htmlFor=/g, 'for=');
    html = html.replace(/<\/?\s*>\s*/g, '');
    html = html.replace(/<\/?Fragment>\s*/g, '');
    html = html.replace(/<>\s*/g, '');
    html = html.replace(/<\/>\s*/g, '');
    html = html.replace(/<Link to="\/#([^"]+)"([^>]*)>(.*?)<\/Link>/gs, '<a href="index.html#$1"$2>$3</a>');
    html = html.replace(/<Link to="([^"]+)"([^>]*)>(.*?)<\/Link>/gs, '<a href="$1.html"$2>$3</a>');
    html = html.replace(/onClick=\{\(\) => navigate\('\/project\/([^']+)'\)\}/g, 'onclick="window.location.href=\'project-detail.html?id=$1\'"');
    html = html.replace(/onClick=\{\(\) => navigate\('([^']+)'\)\}/g, 'onclick="window.location.href=\'$1.html\'"');
    html = html.replace(/onClick=\{\(e\) => e\.stopPropagation\(\)\}/g, 'onclick="event.stopPropagation()"');
    return html.trim();
}

const navJsx = fs.readFileSync('src/components/Nav.jsx', 'utf8');
const footerJsx = fs.readFileSync('src/components/Footer.jsx', 'utf8');

// Gallery
const galleryJsx = fs.readFileSync('src/pages/GalleryPage.jsx', 'utf8');
let galleryHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery - Yogesh Pal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Caveat:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="style.css">
    <style>body { font-family: 'Roboto Mono', monospace; }</style>
</head>
<body class="bg-[#0a0a0a] text-gray-200 overflow-x-hidden">
${jsxToHtml(navJsx)}
${jsxToHtml(galleryJsx).replace(/\{galleryImages\.map[\s\S]*?\}\)\}/, `
            <div class="relative group cursor-pointer overflow-hidden rounded-xl" onclick="openImageModal('./assets/gallery/IMG-20240905-WA0004.jpg')">
                <img src="./assets/gallery/IMG-20240905-WA0004.jpg" alt="Gallery Image" class="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <i data-lucide="zoom-in" class="w-8 h-8 text-white"></i>
                </div>
            </div>
`)}
${jsxToHtml(footerJsx)}
<script src="script.js"></script>
<script>
    setTimeout(window.initPortfolioScript, 100);
    setTimeout(window.lucide.createIcons, 100);
</script>
</body>
</html>`;
fs.writeFileSync('../gallery.html', galleryHtml);

// Project Detail
const pdJsx = fs.readFileSync('src/pages/ProjectDetailPage.jsx', 'utf8');
let pdHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Details - Yogesh Pal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Caveat:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="style.css">
    <style>body { font-family: 'Roboto Mono', monospace; }</style>
</head>
<body class="bg-gray-50 text-gray-900 overflow-x-hidden">
${jsxToHtml(navJsx)}
<div class="pt-24 min-h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 class="text-3xl font-bold mb-4">Project Loading...</h1>
      <a href="index.html" class="text-orange-600 hover:underline">Return Home</a>
  </div>
</div>
${jsxToHtml(footerJsx)}
<!-- Load React Data for Vanilla -->
<script src="script.js"></script>
<script>
    setTimeout(window.initPortfolioScript, 100);
    setTimeout(window.lucide.createIcons, 100);
</script>
</body>
</html>`;
fs.writeFileSync('../project-detail.html', pdHtml);

console.log('Extra files written');
