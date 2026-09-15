const fs = require('fs');

const services = [
    {
      id: "01",
      title: "Custom Web Application Development",
      description: "End-to-end web solutions built with modern frameworks. We deliver scalable, secure, and lightning-fast web apps tailored to your business needs.",
      techStack: "React.js • Next.js • Tailwind CSS • Vite",
      icon: "layout",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "02",
      title: "Mobile App Development",
      description: "High-performance native and cross-platform mobile applications for iOS and Android that provide seamless user experiences and robust functionality.",
      techStack: "React Native • Flutter • iOS • Android",
      icon: "smartphone",
      color: "from-orange-500 to-orange-700"
    },
    {
      id: "03",
      title: "Backend & API Architecture",
      description: "Robust, secure, and scalable backend systems and REST/GraphQL APIs that power your applications and handle thousands of concurrent users.",
      techStack: "Node.js • ASP.NET Core • Express • MongoDB • SQL",
      icon: "server",
      color: "from-emerald-500 to-teal-700"
    },
    {
      id: "04",
      title: "E-Commerce Solutions",
      description: "Conversion-optimized online stores and digital marketplaces with secure payment gateways, inventory management, and intuitive admin dashboards.",
      techStack: "MERN Stack • Shopify • Stripe Integration",
      icon: "shopping-bag",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "05",
      title: "UI/UX Design & Prototyping",
      description: "User-centric interface designs that captivate audiences. We turn complex ideas into beautiful, intuitive, and pixel-perfect digital experiences.",
      techStack: "Figma • Adobe XD • Wireframing • User Research",
      icon: "pen-tool",
      color: "from-rose-500 to-red-700"
    },
    {
      id: "06",
      title: "Cloud Deployment & DevOps",
      description: "Automated CI/CD pipelines, secure cloud hosting, and infrastructure setup to ensure your applications have 99.9% uptime and scale effortlessly.",
      techStack: "AWS • Azure • Vercel • Docker • GitHub Actions",
      icon: "cloud",
      color: "from-cyan-500 to-blue-700"
    }
];

let servicesHtml = '';
services.forEach((service, index) => {
    servicesHtml += `
          <div class="group bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-gray-700 hover:bg-[#151515] transition-all duration-300 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity"></div>
            
            <div class="flex items-start justify-between mb-8">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px]">
                <div class="w-full h-full bg-[#111111] rounded-2xl flex items-center justify-center group-hover:bg-opacity-0 transition-all duration-300">
                  <i data-lucide="${service.icon}" class="w-7 h-7 text-white animate-float"></i>
                </div>
              </div>
              <span class="text-4xl font-black text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${service.color} transition-all opacity-50">${service.id}</span>
            </div>

            <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${service.color} transition-all">${service.title}</h3>
            
            <p class="text-gray-400 mb-6 leading-relaxed">
              ${service.description}
            </p>

            <div class="pt-6 border-t border-gray-800">
              <p class="text-sm font-semibold text-gray-500 mb-2">Primary Tech Stack</p>
              <p class="text-sm text-gray-300 font-mono">${service.techStack}</p>
            </div>
          </div>
    `;
});

let html = fs.readFileSync('services.html', 'utf8');

const startStr = '{services.map';
const startIndex = html.indexOf(startStr);

if (startIndex !== -1) {
    const endMatchStr = '          ))}';
    const endIndex = html.indexOf(endMatchStr, startIndex) + endMatchStr.length;
    html = html.substring(0, startIndex) + servicesHtml + html.substring(endIndex);
}

fs.writeFileSync('services.html', html);
console.log('Fixed services array.');
