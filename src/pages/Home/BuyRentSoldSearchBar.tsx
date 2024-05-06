import SearchBar from '../../common/components/SearchBar.tsx';
import { useAppDispatch, useAppSelector } from '../../App/hook.ts';
import { selectSearchType, setSearchType } from '../../common/slices/propertySearchSlice.tsx';

const BuyRentSoldSearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchType = useAppSelector(selectSearchType);
  return (
    <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2">
      <ul className="flex text-sm font-roboto-serif font-medium text-center">
        <li className="me-1" onClick={() => dispatch(setSearchType('For Sale'))}>
          <div
            className={`inline-block px-8 py-3 text-white ${searchType == 'For Sale' ? 'bg-black' : 'bg-black/60 hover:text-gray-600 hover:bg-gray-50'} bg-black rounded-t-lg active cursor-pointer`}
          >
            Buy
          </div>
        </li>
        <li className="me-1" onClick={() => dispatch(setSearchType('For Rent'))}>
          <div
            className={`inline-block px-8 py-3 rounded-t-lg text-white ${searchType == 'For Rent' ? 'bg-black' : 'bg-black/60 hover:text-gray-600 hover:bg-gray-50'} cursor-pointer`}
          >
            Rent
          </div>
        </li>
        <li className="me-1" onClick={() => dispatch(setSearchType('Sold'))}>
          <div
            className={`inline-block px-8 py-3 rounded-t-lg text-white ${searchType == 'Sold' ? 'bg-black' : 'bg-black/60 hover:text-gray-600 hover:bg-gray-50'} cursor-pointer`}
          >
            Sold
          </div>
        </li>
      </ul>
      <SearchBar />
    </div>
  );
};
export default BuyRentSoldSearchBar;
