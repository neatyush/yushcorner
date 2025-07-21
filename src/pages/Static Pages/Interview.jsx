import React from 'react';
import { InterviewData } from './staticData/InterviewData.js';
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';
import MinimalFooter from '../components/MinimalFooter.jsx';


const Interview = () => {
  return (
    <section className="mt-10 px-4 lg:px-40 m-10">
      <ScrollToTop />
      <h1 className="font-nanito text-3xl lg:text-5xl font-bold text-center text-[#004e98] mb-4">
        {InterviewData.title}
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Published on {InterviewData.date}
      </p>

       {/* Banner Image */}
            <div className="rounded-2xl overflow-hidden shadow-md mb-8 mt-10">
              <img
                src={InterviewData.bannerImg}
                alt="Blog Banner"
                className="w-full object-cover h-[250px] lg:h-[400px]"
              />
            </div>

      <p className="text-[18px] font-ubuntu text-gray-800 leading-relaxed mb-6">
        {InterviewData.intro}
      </p>


      {/* Loop through each department/section */}
      <div className="space-y-8">
        {InterviewData.sections.map((dept, idx) => (
          <div key={idx} className="p-4 bg-[#f9fafc] border rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#004e98] mb-2">{dept.heading}</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {dept.note.trim().split('\n').map((q, i) => (
                <li key={i}>{q.trim()}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 font-ubuntu text-lg text-gray-700 italic">
        {InterviewData.outro}
      </p>

      <Link
        to="/"
        className="text-[#004e98] font-medium mt-8 inline-block hover:underline transition"
      >
        ← Back to Home
      </Link>

        <MinimalFooter></MinimalFooter>
        
    </section>
  );
};

export default Interview;
