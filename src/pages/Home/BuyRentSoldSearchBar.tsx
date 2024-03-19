import SearchBar from '../../common/components/SearchBar.tsx';

const BuyRentSoldSearchBar: React.FC = () => {
  return (
    <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 -translate-y-[15%]">
      <ul className="flex text-sm font-roboto-serif font-medium text-center">
        <li className="me-1">
          <div className="inline-block px-8 py-3 text-white bg-black rounded-t-lg active cursor-pointer">Buy</div>
        </li>
        <li className="me-1">
          <div className="inline-block px-8 py-3 rounded-t-lg text-white bg-black/60 hover:text-gray-600 hover:bg-gray-50 cursor-pointer">
            Rent
          </div>
        </li>
        <li className="me-1">
          <div className="inline-block px-8 py-3 rounded-t-lg text-white bg-black/60 hover:text-gray-600 hover:bg-gray-50 cursor-pointer">
            Sold
          </div>
        </li>
      </ul>
      <SearchBar />
    </div>
  );
};
export default BuyRentSoldSearchBar;
