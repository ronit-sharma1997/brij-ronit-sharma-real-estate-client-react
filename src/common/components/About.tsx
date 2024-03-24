import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
const About: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      {/*Left Side - Nice Picture*/}
      <div className="w-full lg:w-1/2">
        <img className="w-full h-[50vh] md:h-full 3xl:h-[85vh]" src="common/father-son.jpg" alt="Father & Son" />
      </div>
      {/*Right Side - Profile Description*/}
      <div className="w-full lg:w-1/2 relative my-auto md:pt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-style-script opacity-10 text-[200px] xl:text-[300px] tracking-widest text-center">
          BR
        </div>
        <div className="flex flex-wrap w-4/5 xl:w-1/2 mx-auto pt-10 lg:pt-0">
          <div className="w-full font-playfair-display tracking-wide text-2xl md:text-3xl">Brij & Ronit Sharma</div>
          <div className="w-full font-roboto-serif tracking-wide text-xl md:text-2xl uppercase mt-3">
            Realtor Associates
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl">
            ronitsharma.realtor@gmail.com
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl">+1 (732)-395-1368</div>
          <div className="inline-flex mt-3">
            <FontAwesomeIcon className="w-6 h-6 md:w-8 md:h-8 mr-3" icon={faSquareFacebook} />
            <FontAwesomeIcon className="w-6 h-6 md:w-8 md:h-8 " icon={faSquareInstagram} />
          </div>
          <div className="w-full font-roboto-serif tracking-wide text-base lg:text-lg mt-3">
            “Meet the dynamic duo shaping dreams into reality – a father and son real estate team dedicated to turning
            houses into homes. With years of combined experience, this dynamic duo brings a unique blend of seasoned
            expertise and fresh perspectives to the world of real estate. Whether you're buying, selling, or investing,
            join us on a journey where family values meet unparalleled real estate proficiency. Welcome to a partnership
            where trust, integrity, and a shared passion for properties come together to make your real estate
            aspirations a resounding success.”
          </div>
          {/*Buttons to navigate to other screens*/}
          <div className="w-full mt-8 mb-8">
            <button className="w-full md:w-36 rounded-none border-2 px-2 py-4 border-black font-roboto-serif text-xs md:text-sm uppercase text-black hover:bg-black hover:cursor-pointer hover:text-white transition-[all] duration-700 mr-9">
              View Profile
            </button>
            <button className="w-full md:w-36 mt-4 rounded-none border-2 px-2 py-4 border-black font-roboto-serif text-xs md:text-sm uppercase text-white bg-black hover:bg-white hover:cursor-pointer hover:text-black transition-[all] duration-700 mr-9 z-10">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
