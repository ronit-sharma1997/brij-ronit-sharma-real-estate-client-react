import NavBar from '../../common/components/NavBar.tsx';
import Stories from '../../common/components/Stories.tsx';
import Footer from '../../common/components/Footer.tsx';

const StoryPage: React.FC = () => {
  return (
    <>
      <NavBar
        parentClassName={'flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 text-black border-b-2'}
        hoverStyle={
          'relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
        }
      />
      <Stories />
      <hr className="w-full xl:w-[85%] 3xl:w-[63%] mx-auto" />
      <Footer />
    </>
  );
};

export default StoryPage;
