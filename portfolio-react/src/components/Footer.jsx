import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-950 text-gray-400 py-12 text-center border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="hover:text-orange-500 transition-colors"><i data-lucide="github"></i></a>
                <a href="#" className="hover:text-orange-500 transition-colors"><i data-lucide="linkedin"></i></a>
                <a href="#" className="hover:text-orange-500 transition-colors"><i data-lucide="twitter"></i></a>
            </div>
            <p>Made with ❤️ by Yogesh Pal. &copy; <span id="year"></span> All rights reserved.</p>
        </div>
    </footer>
    </>
  );
}
