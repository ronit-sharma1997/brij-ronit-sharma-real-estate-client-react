import { useAppDispatch, useAppSelector } from '../../App/hook.ts';
import {
  selectSearchText,
  selectSearchResults,
  fetchSearchResults,
  setSearchText,
} from '../slices/propertySearchSlice.tsx';
import { useEffect, useState } from 'react';

const SearchBar: React.FC = () => {
  const searchText = useAppSelector(selectSearchText);
  const searchResults = useAppSelector(selectSearchResults);
  const [searchRequestStatus, setSearchRequestStatus] = useState('idle');

  const dispatch = useAppDispatch();
  {
    /* Function to create the html that highlights the search text within a matched option*/
  }
  function createHighlightedText(text: string, searchText: string) {
    const parts: string[] = text.split(new RegExp(`(${searchText})`, 'gi'));
    return (
      <span>
        {parts.map((part: string) => (part.toLowerCase() === searchText.toLowerCase() ? <b>{part}</b> : part))}
      </span>
    );
  }

  useEffect(() => {
    const fetchData = setTimeout(async () => {
      try {
        await dispatch(fetchSearchResults()).unwrap();
      } catch (err) {
        console.error('Failed to search in searchbar: ', err);
      } finally {
        setSearchRequestStatus('idle');
      }
    }, 1000);

    return () => clearTimeout(fetchData);
  }, [searchText, dispatch]);

  return (
    <div className="relative font-roboto-serif">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <svg
          className="w-6 h-6 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      {searchRequestStatus == 'pending' && (
        <div className="absolute inset-y-0 end-0 flex items-center ps-3.5 pe-3.5 pointer-events-none">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-black"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <input
        type="text"
        value={searchText}
        onChange={(event) => {
          setSearchRequestStatus('pending');
          dispatch(setSearchText(event.target.value));
        }}
        className="w-[20rem] md:w-[40rem] rounded block ps-12 pe-12 px-2 py-4 focus:outline-none"
        placeholder="Enter City, Zip Code, MLS#, or Address"
      />
      {
        // If search text matches any of the predefined values, display the options, otherwise don't
      }
      {searchResults.length > 0 && searchRequestStatus != 'pending' && (
        <div className="absolute left-0 mt-1 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {searchResults.map((result, idx) => {
            return (
              <div key={idx} className={`px-5 py-4 flex justify-between cursor-pointer rounded-md hover:bg-gray-100`}>
                {createHighlightedText(result.label, searchText)}
                <div className="rounded-full bg-black text-white px-4 py-0.5 text-sm">{result.type}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
