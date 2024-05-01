import NavBar from '../../common/components/NavBar.tsx';
import Footer from '../../common/components/Footer.tsx';

const ContactUs: React.FC = () => {
  return (
    <>
      <NavBar
        parentClassName={'flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 text-black border-b-2'}
        hoverStyle={
          'relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
        }
      />
      <div className="flex flex-wrap bg-black">
        {/*Left Side - Nice Picture*/}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-[30vh] md:h-[50vh] 2xl:h-[85vh] 3xl:h-[90vh]"
            src="common/father-son.jpg"
            alt="Father & Son"
          />
        </div>
        <div className="w-full lg:w-1/2 relative my-auto md:pt-10">
          {/*<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-style-script opacity-10 text-[200px] xl:text-[600px] tracking-widest text-center text-white">*/}
          {/*  BR*/}
          {/*</div>*/}
          <div className="flex flex-wrap w-4/5 xl:w-1/2 mx-auto pt-5 md:pt-0">
            <div className="flex w-full">
              <div className="max-3xl:hidden font-style-script text-[100px] tracking-widest text-center text-white">
                BR
              </div>
              <div>
                <div className="w-full font-playfair-display tracking-wide text-2xl md:text-3xl text-white">
                  Brij & Ronit Sharma
                </div>
                <div className="w-full font-roboto-serif tracking-wide text-xl md:text-2xl uppercase mt-3 text-white">
                  Realtor Associates
                </div>
                <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl text-white">
                  thesharmafamily@gmail.com
                </div>
                <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl text-white">
                  +1 (732)-395-1368
                </div>
              </div>
            </div>

            <div className="w-full mt-6">
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif text-base md:text-xl py-1.5 md:py-3 ps-3"
                placeholder="Name"
              />
              <input
                type="email"
                name="Email Address"
                id="email"
                className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif text-base md:text-xl py-1.5 md:py-3 ps-3 mt-4"
                placeholder="Email"
              />
              <input
                type="text"
                name="Phone"
                id="phone"
                className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif text-base md:text-xl py-1.5 md:py-3 ps-3 mt-4"
                placeholder="Phone Number"
              />
              <textarea
                name="message"
                id="message"
                className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif resize-none text-base md:text-xl py-1.5 md:py-3 ps-3 mt-4"
                placeholder="Message"
              />
              <button className="rounded-md w-full my-4 border-2 px-2 py-3 md:py-4 border-white bg-black text-white font-roboto-serif text-sm uppercase hover:bg-white hover:cursor-pointer hover:text-black transition-[all] duration-700">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
