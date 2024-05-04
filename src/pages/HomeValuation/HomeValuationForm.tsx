import React from 'react';

const HomeValuationForm: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 self-center mr-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <div>
          <div className="font-playfair-display text-2xl tracking-widest md:text-4xl">Get a FREE Estimate</div>
          <div className="mt-2 mb-10 font-roboto-serif text-md tracking-widest md:text-xl">Complete the form below</div>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className="shadow-sm block w-full md:w-[35rem] border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3"
          placeholder="Name"
        />
        <input
          type="email"
          name="Email Address"
          id="email"
          className="shadow-sm block w-full md:w-[35rem] border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3 mt-4"
          placeholder="Email"
        />
        <input
          type="text"
          name="Phone"
          id="phone"
          className="shadow-sm block w-full md:w-[35rem] border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3 mt-4"
          placeholder="Phone Number"
        />
        <button className="rounded-md w-full md:w-[35rem] my-4 border-2 px-2 py-4 border-white bg-black text-white font-roboto-serif text-sm uppercase hover:bg-white hover:cursor-pointer hover:text-black hover:border-black transition-[all] duration-700">
          Get Home Valuation
        </button>
      </div>
    </>
  );
};
export default HomeValuationForm;
