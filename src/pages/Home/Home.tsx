import NavBar from '../../common/components/NavBar.tsx';
import BuyRentSoldSearchBar from './BuyRentSoldSearchBar.tsx';
import UniqueCollections from './UniqueCollections.tsx';
import Communities from './Communities.tsx';
import About from '../../common/components/About.tsx';
import Testimonials from '../../common/components/Testimonials.tsx';
import Footer from '../../common/components/Footer.tsx';
import Stories from '../../common/components/Stories.tsx';

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <img className="w-screen h-[55vh] md:h-screen" src="/Home/home-interior.jpg" alt="Home Interior" />
        <NavBar
          parentClassName={
            'flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 bg-gradient-to-b from-black text-white absolute top-0 w-full'
          }
          hoverStyle={
            'relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
          }
        />
        <BuyRentSoldSearchBar />
      </div>
      <UniqueCollections />
      <Communities />
      <About />
      <Testimonials />
      <Stories />
      <hr className="w-full xl:w-[85%] 3xl:w-[63%] mx-auto" />
      <Footer />
    </>
  );
};
export default Home;
