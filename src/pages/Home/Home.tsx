import NavBar from '../../common/components/NavBar.tsx';
import SearchBar from '../../common/components/SearchBar.tsx';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <img className="w-screen h-[55vh] md:h-screen" src="/Home/home-interior.jpg" alt="Home Interior" />
      <NavBar
        parentClassName={
          'flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 bg-gradient-to-b from-black text-white absolute top-0 w-full'
        }
      />
      <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 -translate-y-1/4">
        <ul className="flex text-sm font-medium text-center">
          <li className="me-1">
            <a className="inline-block px-8 py-3 text-white bg-black rounded-t-lg active">Buy</a>
          </li>
          <li className="me-1">
            <a className="inline-block px-8 py-3 rounded-t-lg text-white bg-black/60 hover:text-gray-600 hover:bg-gray-50">
              Rent
            </a>
          </li>
          <li className="me-1">
            <a className="inline-block px-8 py-3 rounded-t-lg text-white bg-black/60 hover:text-gray-600 hover:bg-gray-50">
              Sold
            </a>
          </li>
        </ul>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};
export default Home;
