const fs = require('fs');

// We have the new React components. The user wants HTML/CSS/JS only.
// Let's create a script that reads the old index.html, replaces its body with the converted JSX!

function jsxToHtml(jsxContent) {
    let html = jsxContent;
    // Extract return block
    let match = html.match(/return\s*\(\s*(?:<\w+>|<>\s*)?([\s\S]*?)(?:<\/\w+>|<\/>\s*)?\)\s*;/);
    if (match) html = match[1];

    html = html.replace(/className=/g, 'class=');
    html = html.replace(/htmlFor=/g, 'for=');
    html = html.replace(/<\/?\s*>\s*/g, '');
    html = html.replace(/<\/?Fragment>\s*/g, '');
    html = html.replace(/<>\s*/g, '');
    html = html.replace(/<\/>\s*/g, '');

    // Links to anchors
    html = html.replace(/<Link to="\/#([^"]+)"([^>]*)>(.*?)<\/Link>/gs, '<a href="#$1"$2>$3</a>');
    html = html.replace(/<Link to="([^"]+)"([^>]*)>(.*?)<\/Link>/gs, '<a href="$1.html"$2>$3</a>');

    // useNavigate
    html = html.replace(/onClick=\{\(\) => navigate\('\/project\/([^']+)'\)\}/g, 'onclick="window.location.href=\'project-detail.html?id=$1\'"');
    html = html.replace(/onClick=\{\(\) => navigate\('([^']+)'\)\}/g, 'onclick="window.location.href=\'$1.html\'"');
    html = html.replace(/onClick=\{\(e\) => e\.stopPropagation\(\)\}/g, 'onclick="event.stopPropagation()"');

    // Props logic in Projects
    html = html.replace(/\{isSlider \? "([^"]+)" : "([^"]+)"\}/g, '$1');
    html = html.replace(/\{isSlider && ([\s\S]*?)<\/button>\n\s*<\/div>\}/g, '$1</button>\n</div>');

    // Template literals for classes
    html = html.replace(/class=\{\`([^\`]+)\`\}/g, (m, p1) => {
        let cls = p1.replace(/\$\{isSlider \? "([^"]+)" : "([^"]*)"\}/g, '$1');
        return 'class="' + cls.trim() + '"';
    });

    // Styles
    html = html.replace(/style=\{\{\s*scrollbarWidth:\s*"none"\s*\}\}/g, 'style="scrollbar-width: none;"');
    html = html.replace(/style=\{\{\s*scrollbarWidth:\s*"none",\s*msOverflowStyle:\s*"none"\s*\}\}/g, 'style="scrollbar-width: none; -ms-overflow-style: none;"');
    html = html.replace(/style=\{\{\s*fontFamily:\s*'([^']+)',?\s*([^\}]+)?\s*\}\}/g, 'style="font-family: \'$1\', $2;"');

    // Experience map
    if (html.includes('experiences.map')) {
        let experiences = [
            {
              role: "Software Developer",
              company: "VIJY",
              period: "Dec 2024 - Present",
              description: "Building scalable web applications, optimizing performance, and integrating APIs using ASP.NET and React."
            },
            {
              role: "Junior Web Developer",
              company: "Creative IT Solutions",
              period: "Jan 2024 - Nov 2024",
              description: "Developed and maintained client websites, improved UI/UX, and collaborated closely with the design team."
            },
            {
              role: "Intern",
              company: "Tech Startups",
              period: "Jun 2023 - Dec 2023",
              description: "Assisted in backend API development, wrote unit tests, and participated in daily stand-up meetings."
            }
        ];
        let expHtml = '';
        experiences.forEach(exp => {
            expHtml += `
            <div class="relative pl-8 md:pl-0">
                <div class="hidden md:block absolute left-[50%] top-0 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow -translate-x-[50%] z-10"></div>
                
                <div class="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0 ml-auto md:ml-0 md:mr-auto">
                    <h3 class="text-xl font-bold text-gray-900">${exp.role}</h3>
                    <div class="text-orange-600 font-semibold mb-2">${exp.company}</div>
                </div>
                
                <div class="md:w-1/2 md:pl-12 md:absolute md:left-[50%] md:top-0">
                    <div class="inline-block px-3 py-1 bg-gray-100 text-sm font-medium text-gray-600 rounded-full mb-3 border border-gray-200">
                        ${exp.period}
                    </div>
                    <p class="text-gray-600 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        ${exp.description}
                    </p>
                </div>
            </div>`;
        });
        html = html.replace(/\{experiences\.map\([\s\S]*?\}\)\}/, expHtml);
    }

    // TechStack map
    if (html.includes('stackCategories.map')) {
        const stackCategories = [
            {
              title: "Frontend Engineering",
              icon: "layout",
              skills: ["React.js & Angular", "JavaScript / TypeScript", "Tailwind CSS & Bootstrap", "AOS & SwiperJS", "HTML5 & CSS3"]
            },
            {
              title: "Backend & APIs",
              icon: "server",
              skills: ["C# & .NET Core", "ASP.NET MVC", "Node.js", "Express.js", "RESTful APIs"]
            },
            {
              title: "Database & Cloud",
              icon: "database",
              skills: ["Microsoft SQL Server", "MongoDB", "MySQL", "Entity Framework", "Azure / Hosting"]
            },
            {
              title: "Tools & DevOps",
              icon: "settings",
              skills: ["Git & GitHub", "Version Control", "Postman", "Agile / Scrum", "CI/CD Basics"]
            }
        ];
        let techHtml = '';
        stackCategories.forEach(cat => {
            techHtml += `
            <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all group">
              <div class="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="${cat.icon}" class="w-7 h-7 text-orange-600 animate-float"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">${cat.title}</h3>
              <ul class="space-y-3">
            `;
            cat.skills.forEach(skill => {
                techHtml += `
                <li class="flex items-center gap-3 text-gray-600 font-medium">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i>
                  ${skill}
                </li>`;
            });
            techHtml += `</ul></div>`;
        });
        html = html.replace(/\{stackCategories\.map\([\s\S]*?\}\)\}/, techHtml);
    }

    // Strip remaining {} except if it's normal text
    // Like {new Date().getFullYear()}
    html = html.replace(/\{new Date\(\)\.getFullYear\(\)\}/g, '2026');

    return html.trim();
}

const comps = ['Nav', 'Home', 'About', 'Education', 'Experience', 'TechStack', 'Projects', 'Contact', 'Footer'];
let bodyHtml = '';

comps.forEach(c => {
    let code = fs.readFileSync('src/components/' + c + '.jsx', 'utf8');
    bodyHtml += '\n<!-- ' + c + ' -->\n' + jsxToHtml(code) + '\n';
});

let template = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yogesh Pal - Portfolio | Full Stack Developer</title>
    <link rel="shortcut icon" href="assets/yogesh.png" type="image/x-icon">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Caveat:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="style.css">
    <!-- From React index.css -->
    <style>
        body { font-family: 'Roboto Mono', monospace; }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
    </style>
</head>
<body class="bg-[#050505] text-gray-200 overflow-x-hidden">
${bodyHtml}
<script src="script.js"></script>
<script>
    setTimeout(window.initPortfolioScript, 100);
    setTimeout(window.lucide.createIcons, 100);
</script>
</body>
</html>`;

fs.writeFileSync('../index.html', template);

// Now for Services and other pages
const servicesJsx = fs.readFileSync('src/components/Services.jsx', 'utf8');
const navJsx = fs.readFileSync('src/components/Nav.jsx', 'utf8');
const footerJsx = fs.readFileSync('src/components/Footer.jsx', 'utf8');

let servicesHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - Yogesh Pal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Caveat:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="style.css">
    <style>
        body { font-family: 'Roboto Mono', monospace; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
    </style>
</head>
<body class="bg-[#050505] text-gray-200 overflow-x-hidden">
${jsxToHtml(navJsx)}
${jsxToHtml(servicesJsx).replace('id="services" class="py-20', 'id="services" class="pt-32 pb-20')}
${jsxToHtml(footerJsx)}
<script src="script.js"></script>
<script>
    setTimeout(window.initPortfolioScript, 100);
    setTimeout(window.lucide.createIcons, 100);
</script>
</body>
</html>`;
fs.writeFileSync('../services.html', servicesHtml);

// All Projects
const allProjJsx = fs.readFileSync('src/pages/AllProjectsPage.jsx', 'utf8');
const projJsx = fs.readFileSync('src/components/Projects.jsx', 'utf8');
let projConverted = jsxToHtml(projJsx)
    .replace(/className=\{isSlider \? "flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scroll-smooth hide-scrollbar" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"\}/, 'class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"')
    .replace(/style=\{isSlider \? \{ scrollbarWidth: "none", msOverflowStyle: "none" \} : \{\}\}/, '')
    .replace(/class=\{\`project-card block \$\{isSlider \? "min-w-\[85vw\] md:min-w-\[400px\] snap-center shrink-0" : ""\} bg-white\`\}/g, 'class="project-card block bg-white"')
    .replace(/\{isSlider && <div class="mt-12 text-center">[\s\S]*?<\/div>\}/, ''); // Remove view more button

let allProjectsHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Projects - Yogesh Pal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Caveat:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="style.css">
    <style>body { font-family: 'Roboto Mono', monospace; }</style>
</head>
<body class="bg-gray-50 text-gray-900 overflow-x-hidden">
${jsxToHtml(navJsx)}
<div class="pt-24 bg-gray-50 min-h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
    <a href="index.html#projects" class="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold mb-8 transition-colors">
        <i data-lucide="arrow-left" class="w-5 h-5"></i> Back to Home
    </a>
  </div>
${projConverted}
</div>
${jsxToHtml(footerJsx)}
<script src="script.js"></script>
<script>
    setTimeout(window.initPortfolioScript, 100);
    setTimeout(window.lucide.createIcons, 100);
</script>
</body>
</html>`;
fs.writeFileSync('../projects.html', allProjectsHtml);

console.log('Done generating vanilla HTML files.');
