import React from 'react';

export default function TechStack() {
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

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Core Technologies & Capabilities</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Leveraging a modern, enterprise-grade technology stack to deliver scalable, secure, and high-performance digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stackCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all group">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide={category.icon} className="w-7 h-7 text-orange-600 animate-float"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 font-medium">
                    <i data-lucide="check-circle-2" className="w-4 h-4 text-emerald-500"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
