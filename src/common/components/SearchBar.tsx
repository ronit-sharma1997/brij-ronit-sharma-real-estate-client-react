import { useEffect, useState } from 'react';

const SearchBar: React.FC = () => {
  {
    /* searchText - text the user types in the search bar */
  }
  const [searchText, setSearchText] = useState<string>('');
  {
    /* matches - any of the predefined options that match the searchText provided by the user */
  }
  const [matches, setMatches] = useState<{ type: string; value: string; label: string }[]>([]);
  {
    /* TODO: Add api to query possible cities, zipcodes, & addresses */
  }
  {
    /* Some predefined cities */
  }
  const cities = [
    { type: 'City', value: 'Iselin', label: 'Iselin, NJ' },
    { type: 'City', value: 'Edison', label: 'Edison, NJ' },
    { type: 'City', value: 'Woodbridge', label: 'Woodbridge, NJ' },
    { type: 'City', value: 'Perth Amboy', label: 'Perth Amboy, NJ' },
  ];
  {
    /* Some predefined zip codes */
  }
  const zipCodes = [{ type: 'Zip Code', value: '08830', label: 'Iselin, NJ 08830' }];

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
    if (searchText === '') {
      setMatches([]);
    } else if (searchText) {
      const result = cities.filter((city) => city.value.toLowerCase().includes(searchText.toLowerCase()));
      result.push(...zipCodes.filter((zipCode) => zipCode.value.includes(searchText)));
      setMatches(result);
    }
  }, [searchText]);

  return (
    <div className="relative font-roboto-serif">
      <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
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
      <input
        type="text"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        className="w-[20rem] md:w-[40rem] rounded block ps-4 pe-12 px-2 py-4 focus:outline-none"
        placeholder="Enter City, Zip Code, MLS#, or Address"
      />
      {/* If search text matches any of the predefined values, display the options, otherwise don't */}
      {matches.length > 0 && (
        <div className="absolute left-0 mt-1 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {matches.map((match, idx) => {
            return (
              <div key={idx} className={`px-5 py-4 flex justify-between cursor-pointer rounded-md hover:bg-gray-100`}>
                {createHighlightedText(match.label, searchText)}
                <div className="rounded-full bg-black text-white px-4 py-0.5 text-sm">{match.type}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
