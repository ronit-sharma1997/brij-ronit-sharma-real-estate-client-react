import NavBar from '../../common/components/NavBar.tsx';
import HomeValuationForm from './HomeValuationForm.tsx';

const HomeValuation: React.FC = () => {
  return (
    <>
      <NavBar
        parentClassName={'flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 text-black border-b-2'}
        hoverStyle={
          'relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
        }
      />
      <div className="flex flex-wrap">
        {/*Left Side - Nice Picture*/}
        <div className="w-full xl:w-1/2">
          <img className="w-full h-[30vh] md:h-[50vh] xl:h-[90vh]" src="common/father-son.jpg" alt="Father & Son" />
        </div>
        <div className="w-full mt-10 relative xl:mt-0 xl:w-1/2">
          <div className="absolute xl:top-1/2 xl:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <HomeValuationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeValuation;
