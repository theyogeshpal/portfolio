import React, { useEffect } from 'react';
import Projects from '../components/Projects';
import { Link } from 'react-router-dom';

export default function AllProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold mb-8 transition-colors">
            <i data-lucide="arrow-left" className="w-5 h-5"></i> Back to Home
        </Link>
      </div>
      <Projects isSlider={false} />
    </div>
  );
}
