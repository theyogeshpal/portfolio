const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

const projectMap = [
    "inaamify", "cspartner", "aayansh", "aurapark", "amber", "corearchive", 
    "syntax", "riskflight", "nurture", "fanta", "portfolio"
];

let count = 0;
const newContent = content.replace(/<div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g, (match, inner) => {
    const id = projectMap[count++];
    
    // Add transition to h3
    let res = inner.replace(/<h3 class="(.*?)"/g, '<h3 class="$1 group-hover:text-orange-600 transition-colors"');
    
    // Change Visit Project to View Details
    res = res.replace(/<a href="#" class="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"><i data-lucide="external-link" class="w-4 h-4"><\/i> Visit Project<\/a>/g,
        '<span class="text-sm font-semibold text-orange-600 group-hover:text-orange-700 flex items-center gap-1"><i data-lucide="external-link" class="w-4 h-4"></i> View Details</span>');
        
    return `<a href="project-detail.html?id=${id}" class="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 cursor-pointer">${res}</div>\n                    </div>\n                </a>`;
});

fs.writeFileSync('index.html', newContent, 'utf8');
console.log(`Updated ${count} projects.`);
