import React from 'react'
import { Link } from 'react-router'
import {SalesData} from "./staticData/SalesData.js"
import ScrollToTop from "../../../src/pages/components/ScrollToTop.jsx";
import MinimalFooter from '../components/MinimalFooter.jsx';

const Sales = () => {
  return (
    <section className="mt-10 px-4 lg:px-40 m-10">
    <ScrollToTop></ScrollToTop>
      {/* Blog Heading */}
      <h1 className="font-nanito text-3xl lg:text-5xl font-bold text-center text-[#004e98] mb-4">
        {SalesData.title}
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Published on {SalesData.date}
      </p>

      {/* Banner Image */}
      <div className="rounded-2xl overflow-hidden shadow-md mb-8 mt-10">
        <img
          src={SalesData.bannerImg}
          alt="Blog Banner"
          className="w-full object-cover h-[250px] lg:h-[400px]"
        />
      </div>

      {/* Intro */}
      <p className="text-[18px] font-ubuntu text-gray-800 leading-relaxed mb-6">
        {SalesData.intro}
      </p>

      {/* Sections */}
      <div className="space-y-6">
        {SalesData.sections.map((sec, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#f9fafc] border border-gray-200 shadow-sm"
          >
            <a
              href={sec.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#004e98] font-semibold hover:underline"
            >
              {sec.heading}
            </a>
            <p className="mt-2 text-gray-700 text-[16px] font-ubuntu">
              {sec.note}
            </p>
          </div>
        ))}
      </div>

      {/* Outro */}
      <p className="mt-10 font-ubuntu text-lg text-gray-700 italic">
        {SalesData.outro}
      </p>

      {/* Back to Home */}
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

export default Sales


