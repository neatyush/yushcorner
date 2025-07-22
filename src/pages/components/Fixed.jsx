import React from "react";
import salesPoster from "../../assets/originalimages/salesandmarketing.png";
import maketingPoster from "../../assets/originalimages/marketing.png";
import foPoster from "../../assets/originalimages/frontoffice.png";
import hrPoster from "../../assets/originalimages/hr.png";
import fandbPoster from "../../assets/originalimages/foodhandler.png";
import kitchenPoster from "../../assets/originalimages/kitchen.png";
import interviewPoster from "../../assets/originalimages/interviewtips.png";
import winePairingPoster from "../../assets/originalimages/foodandwinepairing.png";
import complaintPoster from "../../assets/originalimages/mostasked.png";
import winePoster from "../../assets/originalimages/foodandwinepairing.png";
import cigarPoster from "../../assets/originalimages/cigars.png";
import cocktailPoster from "../../assets/originalimages/cocktailcreation.png";
import { Link } from 'react-router-dom'

{
  /* Blog Component */
}
const Fixed = () => {
  const blogSectionTitle = "Free Learning Resource";
  const blogSectionTitleTwo = "Tips and Tricks";
  const blogSectionTitleThree = "Wine, Cocktails and Cigars";
  const blogSectionTitleFour = "Blog, Quiz and more exciting stuff comming soon";

  return (
    <>
      {/* Section Title */}
      <div className="mt-[80px] lg:px-[100px] md:px-36">
        <p className="text-[32px] font-nunito mx-auto text-center font-bold lg:text-left lg:mx-0 lg:ml-8">
          {blogSectionTitle}
        </p>
        <hr className="bg-gray-950 w-[90%] mx-auto" />
      </div>

      {/* Whole cards */}
      <div className="flex justify-center">
        <div className="wholecard pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 ">

          {/* Sales Card 1 */}
          <Link to="/sales" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden">
            <img src={salesPoster} alt="hotelsales" className="w-[296px] h-[185px]" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Hospitality Sales</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Learn Hospitality Sales and marketing with these resources...</h3>
            </div>
          </Link>

          {/* Marketing 2 */}
          <Link to="/marketing" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden">
            <img src={maketingPoster} alt="hotelmarketing" className="w-[296px] h-[185px] object-cover" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Hospitality Marketing</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Learn Hospitality marketing with these resources...</h3>
            </div>
          </Link>

          {/* FO Card 3 */}
          <Link to="/frontoffice" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden">
            <img src={foPoster} alt="frontofficeinhotel" className="w-[296px] h-[185px]" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Front Office</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Learn eveything about Front Office Departement with these resources...</h3>
            </div>
          </Link>

          {/* Hr Card 4 */}
          <Link to="/hr" className="card bg-white rounded-xl pb-4 w-[296px] shadow-xl overflow-hidden">
            <img src={hrPoster} alt="humanresourceinhotel" className="w-[296px] h-[185px]" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Human Resource</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Learn Hospitality Sales and marketing with these resources...</h3>
            </div>
          </Link>

          {/* Kitchen 5 */}
          <Link to="/kitchen" className="card bg-white rounded-xl pb-4 w-[296px] shadow-xl overflow-hidden">
            <img src={kitchenPoster} alt="kitchen" className="w-[296px] h-[185px]" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Kitchen and Production</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Learn Kitchen and Food Production with these resources...</h3>
            </div>
          </Link>

          {/* F AND B service 6 */}
          <Link to="/fnb" className="card bg-white rounded-xl w-[296px] pb-4 shadow-xl overflow-hidden">
            <img src={fandbPoster} alt="foodandbeverage" className="w-full h-[185px] object-cover" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Food and Beverage Resource</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Learn F and B and food handling with these resources...</h3>
            </div>
          </Link>

        </div>
      </div>


      {/* ------------------------------------------------------------------------------------------------------------ */}
       {/* Wine, Cigar and cocktails */}
         <div className="mt-[80px] lg:px-[100px] md:px-36">
        <p className="text-[32px] font-nunito mx-auto text-center font-bold lg:text-left lg:mx-0 lg:ml-8">
          {blogSectionTitleThree}
        </p>
        <hr className="bg-gray-950 w-[90%] mx-auto" />
      </div>
      
      <div className="flex justify-center">
        <div className="wholecard pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 ">

          {/* Wine */}
          <Link to="/wine" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden flex flex-col">
            <img src={winePoster} alt="hotelsales" className="w-full object-cover h-[185px]" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Wine</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Cover the basic of wine...</h3>
            </div>
          </Link>

          {/* Cocktails */}
          <Link to="/cocktail" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden">
            <img src={cocktailPoster} alt="hotelmarketing" className="w-[296px] h-[185px] object-cover" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Cocktail</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">All classic cocktails you must know...</h3>
            </div>
          </Link>

          {/* Cigar*/}
          <Link to="/Cigar" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden">
            <img src={cigarPoster} alt="frontofficeinhotel" className="w-[296px] h-[185px] object-cover" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Cigar</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Learn the how cigars are made...</h3>
            </div>
          </Link>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------- */}
       {/* Section Two */}
      <div className="mt-[80px] lg:px-[100px] md:px-36">
        <p className="text-[32px] font-nunito mx-auto text-center font-bold lg:text-left lg:mx-0 lg:ml-8">
          {blogSectionTitleTwo}
        </p>
        <hr className="bg-gray-950 w-[90%] mx-auto" />
      </div>

      {/* Whole cards */}
      <div className="flex justify-center">
        <div className="wholecard pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 ">

          {/* Interview Questions */}
          <Link to="/interview" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden">
            <img src={interviewPoster} alt="hotelsales" className="w-[296px] h-[185px] object-cover" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">50+ Interview Question</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Practise Interview Question with this list...</h3>
            </div>
          </Link>

          {/* Handling Guest Complaint */}
          <Link to="/complainthandling" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden">
            <img src={complaintPoster} alt="hotelmarketing" className="w-[296px] h-[185px] object-cover" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Complaint Handling</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Most common guest complaint are...</h3>
            </div>
          </Link>

          {/* Wine and Food Pairing*/}
          <Link to="/winepairing" className="card bg-white pb-4 rounded-xl w-[296px] shadow-xl overflow-hidden">
            <img src={winePairingPoster} alt="frontofficeinhotel" className="w-[296px] h-[185px] object-cover" />
            <div className="cardTitle p-2 flex gap-3 flex-col">
              <h1 className="font-nunito text-[16px] font-semibold p-0 m-0 ">Wine and Food Pairing</h1>
              <h3 className="font-nunito text-[14px] font-medium p-0 m-0">Learn the secret of wine pairing with any food...</h3>
            </div>
          </Link>
        </div>
      </div>


      {/* ------------------------------------------------------------------------------------------------------------ */}
       {/* Comming Soon */}
         <div className="mt-[80px] p-20 lg:px-[100px] md:px-36">
        <p className="text-[32px] font-nunito mx-auto text-center font-bold lg:text-left lg:mx-0 lg:ml-8">
          {blogSectionTitleFour}
        </p>
        <hr className="bg-gray-950 w-[90%] mx-auto" />
      </div>
      
      <div className="flex justify-center">
        <div className="wholecard pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 ">

          
        </div>
      </div>
    </>
  );
};

export default Fixed;
