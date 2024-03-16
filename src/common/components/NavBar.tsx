const NavBar: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5">
      {/* Left Side - BR Logo along with Titles */}
      <div className="flex">
        <div className="font-style-script text-black tracking-[0.5rem] my-auto text-4xl md:text-6xl">BR</div>
        <div>
          <div className="font-playfair-display text-black text-2xl md:text-3xl">Brij & Ronit Sharma</div>
          <div className="font-roboto-serif text-black uppercase font-medium tracking-widest text-sm md:text-xl mt-1.5">
            Real Estate Agents
          </div>
          <div className="font-roboto-serif text-black uppercase font-medium tracking-widest text-sm md:text-xl">
            DDS Real Estate
          </div>
        </div>
      </div>
      {/* Right Side - Navigation Menus/Links */}
      <div className="hidden min-[900px]:flex mx-auto mt-5 xl:mt-0 xl:mx-0">
        <div className="font-roboto-serif text-black uppercase font-medium text-base my-auto mx-7 relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Property Search
        </div>
        <div className="font-roboto-serif text-black uppercase font-medium text-base my-auto mx-7 relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          About Us
        </div>
        <div className="font-roboto-serif text-black uppercase font-medium text-base my-auto mx-7 relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Stories
        </div>
        <div className="font-roboto-serif text-black uppercase font-medium text-base my-auto mx-7 relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Contact
        </div>
        <div className="font-roboto-serif text-black uppercase font-medium text-base my-auto ml-7 relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          Home Valuation
        </div>
      </div>
      {/* Right Side - Hamburger Icon on Small Screens */}
      <div className="flex min-[900px]:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-black my-auto transition ease-linear hover:bg-gray-100 hover:cursor-pointer duration-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  );
};
export default NavBar;
