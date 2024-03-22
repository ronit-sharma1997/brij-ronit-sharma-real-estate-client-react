const Footer: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between w-full xl:w-[90%] px-4 py-5 md:px-10 md:py-10 mx-auto">
      <div className="w-[45%] xl:w-[23%] overflow-hidden">
        <div className="w-full font-playfair-display font-medium tracking-wide text-xl md:text-3xl">
          Brij & Ronit Sharma
        </div>
        <div className="w-full font-roboto-serif tracking-wide text-xl md:text-2xl uppercase mt-10">
          Realtor Associates
        </div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl">thesharmafamily@gmail.com</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl">+1 (732)-395-1368</div>
        <div className="w-full font-roboto-serif tracking-wide text-xl md:text-2xl uppercase mt-7">Dds Real Estate</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl">371 Hoes Lane Suite #215</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl">Piscataway, NJ 08854</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl">+1 (732)-421-2550</div>
        <img className="mt-5" src="common/equal-housing-realtor-mls.png" />
      </div>
      <div className="w-[45%] xl:w-[23%]">
        <div className="w-full font-playfair-display font-medium tracking-wide text-xl md:text-3xl">
          Top Communities
        </div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-10">Iselin</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5">Woodbridge</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5">Edison</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5">Piscataway</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5">Metuchen</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5">New Brunswick</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5">Carteret</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5">Show All</div>
      </div>
      <div className="w-[45%] mt-10 xl:w-[23%] xl:mt-0">
        <div className="w-full font-playfair-display font-medium tracking-wide text-xl md:text-3xl">Your Mom</div>
      </div>
      <div className="w-[45%] mt-10 xl:w-[23%] xl:mt-0">
        <div className="w-full font-playfair-display font-medium tracking-wide text-xl md:text-3xl">Latest Stories</div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-10 text-ellipsis text-nowrap overflow-hidden">
          Is 2024 the right time to invest in real estate?
        </div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5 text-ellipsis text-nowrap overflow-hidden">
          Keeping up with evolving financing options, interest rates, and mortgage trends that could influence
          investment strategies and affordability for investors.
        </div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5 text-ellipsis text-nowrap overflow-hidden">
          The adoption of technology in real estate, such as virtual tours, artificial intelligence, and blockchain, is
          likely to continue evolving in 2024.
        </div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5 text-ellipsis text-nowrap overflow-hidden">
          Growing interest in alternative real estate investments such as real estate crowdfunding, real estate
          investment trusts (REITs), and fractional ownership platforms
        </div>
        <div className="w-full font-roboto-serif tracking-wide text-lg md:text-xl mt-5">Show All</div>
      </div>
    </div>
  );
};
export default Footer;
