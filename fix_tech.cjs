const fs = require('fs');

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

let html = fs.readFileSync('index.html', 'utf8');

// Replace the literal JS block with the HTML
const startStr = '{stackCategories.map';
const endStr = '))}';
const startIndex = html.indexOf(startStr);
// Find the last occurrence of ))} in that block. Since there are nested )), we just find the string block.
if (startIndex !== -1) {
    const endMatchStr = '          ))}';
    const endIndex = html.indexOf(endMatchStr, startIndex) + endMatchStr.length;
    html = html.substring(0, startIndex) + techHtml + html.substring(endIndex);
}

fs.writeFileSync('index.html', html);
console.log('Fixed tech stack.');
