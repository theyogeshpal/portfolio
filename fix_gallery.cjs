const fs = require('fs');

const images = [
    "./assets/gallary/img-1.png",
    "./assets/gallary/img-2.jpeg",
    "./assets/gallary/img-3.jpeg",
    "./assets/gallary/img-4.jpeg",
    "./assets/gallary/img-5.jpeg",
    "./assets/gallary/img-6.jpeg",
    "./assets/gallary/img-7.jpeg"
];

let galleryItems = '';
images.forEach(img => {
    galleryItems += `
    <div class="relative group cursor-pointer overflow-hidden rounded-xl" onclick="openImageModal('${img}')">
        <img src="${img}" alt="Gallery Image" class="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110">
        <div class="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
            <i data-lucide="zoom-in" class="w-8 h-8 text-white"></i>
        </div>
    </div>
    `;
});

let html = fs.readFileSync('gallery.html', 'utf8');

// The single div I injected earlier was for IMG-20240905-WA0004.jpg
html = html.replace(/<div class="relative group cursor-pointer overflow-hidden rounded-xl" onclick="openImageModal\('\.\/assets\/gallery\/IMG-20240905-WA0004\.jpg'\)">[\s\S]*?<\/div>/, galleryItems);

fs.writeFileSync('gallery.html', html);
console.log('Fixed gallery.');
