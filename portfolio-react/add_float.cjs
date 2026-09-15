const fs = require('fs');

let svc = fs.readFileSync('src/components/Services.jsx', 'utf8');
svc = svc.replace(/className="w-12 h-12 text-orange-500"/g, 'className="w-12 h-12 text-orange-500 animate-float"');
svc = svc.replace(/className="w-12 h-12 text-white"/g, 'className="w-12 h-12 text-white animate-float"');
fs.writeFileSync('src/components/Services.jsx', svc);

if (fs.existsSync('src/components/About.jsx')) {
    let abt = fs.readFileSync('src/components/About.jsx', 'utf8');
    abt = abt.replace(/<img src="\.\/assets\/my\.jpg" alt="Yogesh Pal" className="w-full h-auto rounded-3xl shadow-2xl" \/>/,
        '<img src="./assets/my.jpg" alt="Yogesh Pal" className="w-full h-auto rounded-3xl shadow-2xl animate-float-slow" />');
    
    // Check if the old image path is used instead
    abt = abt.replace(/<img src="assets\/my\.jpg" alt="Yogesh Pal" className="rounded-2xl shadow-xl w-full max-w-sm mx-auto object-cover border-4 border-gray-100" \/>/,
        '<img src="assets/my.jpg" alt="Yogesh Pal" className="rounded-2xl shadow-xl w-full max-w-sm mx-auto object-cover border-4 border-gray-100 animate-float-slow" />');
        
    fs.writeFileSync('src/components/About.jsx', abt);
}

if (fs.existsSync('src/components/Home.jsx')) {
    let home = fs.readFileSync('src/components/Home.jsx', 'utf8');
    home = home.replace(/className="h-full w-auto object-contain object-bottom grayscale opacity-90 mix-blend-luminosity scale-\[1\.4\] sm:scale-\[1\.2\] md:scale-100 origin-bottom-right"/,
        'className="h-full w-auto object-contain object-bottom grayscale opacity-90 mix-blend-luminosity scale-[1.4] sm:scale-[1.2] md:scale-100 origin-bottom-right animate-float-slow"');
    fs.writeFileSync('src/components/Home.jsx', home);
}
