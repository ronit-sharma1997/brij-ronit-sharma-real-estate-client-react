import Privacy from './Privacy.tsx';

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between w-full xl:w-[85%] 3xl:w-[63%] px-4 py-5 md:px-10 md:py-10 mx-auto">
        <div className="w-[48%] lg:w-[28%] overflow-x-hidden">
          <div className="w-full font-playfair-display font-medium tracking-wide text-xl md:text-2xl">
            Brij & Ronit Sharma
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl uppercase">Realtor Associates</div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl">thesharmafamily@gmail.com</div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl">+1 (732)-395-1368</div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl uppercase mt-4">
            Dds Real Estate
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl">371 Hoes Lane Suite #215</div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl">Piscataway, NJ 08854</div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl">+1 (732)-421-2550</div>
          <img className="w-28 md:w-40" src="common/equal-housing-realtor-mls.png" alt="Equal Housing Realtor MLS" />
        </div>
        <div className="w-[48%] lg:w-[22%] px-2">
          <div className="w-full font-playfair-display font-medium tracking-wide text-lg md:text-2xl">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              About Us
            </span>
          </div>
          <div className="w-full font-playfair-display font-medium tracking-wide text-lg md:text-2xl mt-5">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Contact Us
            </span>
          </div>
          <div className="w-full font-playfair-display font-medium tracking-wide text-lg md:text-2xl mt-5">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Home Valuation
            </span>
          </div>
        </div>
        <div className="w-[48%] mt-5 lg:w-1/4 lg:mt-0 px-2">
          <div className="w-full font-playfair-display font-medium tracking-wide text-lg md:text-2xl">
            Top Communities
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Iselin
            </span>
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Woodbridge
            </span>
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Edison
            </span>
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Piscataway
            </span>
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Metuchen
            </span>
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              New Brunswick
            </span>
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Carteret
            </span>
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3">
            <span className="relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Perth Amboy
            </span>
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3 underline cursor-pointer">
            Show All
          </div>
        </div>
        <div className="w-[48%] mt-5 lg:w-1/4 lg:mt-0 px-2">
          <div className="w-full font-playfair-display font-medium tracking-wide text-lg md:text-2xl">
            Latest Stories
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3 text-ellipsis text-nowrap overflow-hidden relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Is 2024 the right time to invest in real estate?
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3 text-ellipsis text-nowrap overflow-hidden relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Keeping up with evolving financing options, interest rates, and mortgage trends that could influence
            investment strategies and affordability for investors.
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3 text-ellipsis text-nowrap overflow-hidden relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            The adoption of technology in real estate, such as virtual tours, artificial intelligence, and blockchain,
            is likely to continue evolving in 2024.
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3 text-ellipsis text-nowrap overflow-hidden relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Growing interest in alternative real estate investments such as real estate crowdfunding, real estate
            investment trusts (REITs), and fractional ownership platforms
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl mt-3 underline cursor-pointer">
            Show All
          </div>
        </div>
      </div>
      <hr className="w-full xl:w-[85%] 3xl:w-[63%] mx-auto" />
      <Privacy />
    </>
  );
};
export default Footer;
