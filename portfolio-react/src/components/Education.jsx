import React from 'react';
 // Make sure to use proper icons

export default function Education() {
  return (
    <>
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto rounded-full"></div>
            </div>
            
            
            <div className="max-w-3xl mx-auto space-y-6">
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-orange-500 relative hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row gap-5 mb-4 items-start md:items-center">
                        <div className="bg-gray-50 p-2 rounded-xl shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center">
                            <img src="assets/polytechnic-logo.jpg" alt="BTEUP" className="w-14 h-14 object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex-1 w-full">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                                <h3 className="text-xl font-bold text-gray-900">Polytechnic Diploma in CSE</h3>
                                
                            </div>
                            <h4 className="text-md font-semibold text-gray-700">BTEUP</h4>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm">Currently pursuing Polytechnic Diploma in Computer Science Engineering, focusing on software development, programming, and modern web technologies.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-orange-500 relative hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row gap-5 mb-4 items-start md:items-center">
                        <div className="bg-gray-50 p-2 rounded-xl shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center">
                            <img src="assets/nios.jpg" alt="NIOS Board" className="w-14 h-14 object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex-1 w-full">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                                <h3 className="text-xl font-bold text-gray-900">Intermediate (Science)</h3>
                                
                            </div>
                            <h4 className="text-md font-semibold text-gray-700">NIOS Board</h4>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm">Completed Intermediate education from National Institute of Open Schooling (NIOS) Board with focus on Science stream.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-orange-500 relative hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row gap-5 mb-4 items-start md:items-center">
                        <div className="bg-gray-50 p-2 rounded-xl shadow-sm border border-gray-100 flex-shrink-0 flex items-center justify-center">
                            <img src="assets/cbse.jpg" alt="CBSE Board" className="w-14 h-14 object-contain mix-blend-multiply" />
                        </div>
                        <div className="flex-1 w-full">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                                <h3 className="text-xl font-bold text-gray-900">High School</h3>
                                
                            </div>
                            <h4 className="text-md font-semibold text-gray-700">CBSE Board</h4>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm">Completed High School education from Central Board of Secondary Education (CBSE) with excellent academic performance.</p>
                </div>

            </div>
        </div>
    </section>
    </>
  );
}
