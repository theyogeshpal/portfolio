const fs = require('fs');

let html = fs.readFileSync('gallery.html', 'utf8');

html = html.replace(/onClick=\{\(\) => openModal\('([^']+)', '([^']+)'\)\}/g, 'onclick="openModal(\'$1\', \'$2\')"');
html = html.replace(/onClick=\{closeModal\}/g, 'onclick="closeModal()"');

html = html.replace(/\{modal\.isOpen && \(/g, '');
html = html.replace(/\{modal\.type === 'image' \? \(/g, '<div id="modal-content-container">');

html = html.replace(/<img src=\{modal\.src\}/g, '<img id="modal-image" src=""');
html = html.replace(/<video src=\{modal\.src\}/g, '<video id="modal-video" src=""');

html = html.replace(/\) : \(/g, '');
// html = html.replace(/<\/video>\n\s*\)\}/g, '</video>\n                        </div>'); // Wait, let's just strip remaining react
html = html.replace(/\{new Date\(\)\.getFullYear\(\)\}/g, '2026');

// Clean up
html = html.replace(/\)\}/g, '');
html = html.replace(/autoPlay/g, 'autoplay');

fs.writeFileSync('gallery.html', html);

// Add JS logic for modal in script.js
let script = fs.readFileSync('script.js', 'utf8');
if (!script.includes('function openModal')) {
    script += `
window.openModal = function(src, type) {
    const modal = document.getElementById('gallery-modal');
    const img = document.getElementById('modal-image');
    const vid = document.getElementById('modal-video');
    if (modal) {
        modal.classList.remove('hidden');
        if (type === 'image') {
            img.src = src;
            img.style.display = 'block';
            vid.style.display = 'none';
        } else {
            vid.src = src;
            vid.style.display = 'block';
            img.style.display = 'none';
        }
    }
};
window.closeModal = function() {
    const modal = document.getElementById('gallery-modal');
    const vid = document.getElementById('modal-video');
    if (modal) {
        modal.classList.add('hidden');
        if(vid) vid.pause();
    }
};
`;
    fs.writeFileSync('script.js', script);
}

// In gallery.html, wrap modal in div id="gallery-modal" class="hidden ..."
let ghtml = fs.readFileSync('gallery.html', 'utf8');
ghtml = ghtml.replace(/<div class="fixed inset-0 z-\[100\] bg-black\/95/, '<div id="gallery-modal" class="hidden fixed inset-0 z-[100] bg-black/95');
fs.writeFileSync('gallery.html', ghtml);

console.log('Fixed gallery react logic.');
