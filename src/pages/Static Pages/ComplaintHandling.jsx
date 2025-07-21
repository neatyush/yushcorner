// src/pages/Static Pages/ComplaintHandling.jsx

import React from 'react';
import { ComplaintHandlingData } from './staticData/ComplaintHandlingData.js';
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';
import MinimalFooter from '../components/MinimalFooter.jsx';

const ComplaintHandling = () => {
  return (
    <section className="mt-10 px-4 lg:px-40 m-10">
      <ScrollToTop />
      <h1 className="font-nanito text-3xl lg:text-5xl font-bold text-center text-[#004e98] mb-4">
        {ComplaintHandlingData.title}
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Published on {ComplaintHandlingData.date}
      </p>

     {/* Banner Image */}
          <div className="rounded-2xl overflow-hidden shadow-md mb-8 mt-10">
            <img
              src={ComplaintHandlingData.bannerImg}
              alt="Blog Banner"
              className="w-full object-cover h-[250px] lg:h-[400px]"
            />
          </div>

      <p className="text-[18px] font-ubuntu text-gray-800 leading-relaxed mb-6">
        {ComplaintHandlingData.intro}
      </p>

      {/* Loop through each section */}
      <div className="space-y-8">
        {ComplaintHandlingData.sections.map((sec, idx) => (
          <div key={idx} className="p-4 bg-[#f9fafc] border rounded-xl shadow">
            <h2 className="text-xl font-semibold text-[#004e98] mb-2">{sec.heading}</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {sec.note.trim().split('\n').map((q, i) => (
                q.trim() && <li key={i}>{q.trim().replace(/^[-•]\s*/, '')}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-10 font-ubuntu text-lg text-gray-700 italic">
        {ComplaintHandlingData.outro}
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

export default ComplaintHandling;
