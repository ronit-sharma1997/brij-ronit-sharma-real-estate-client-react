import { useEffect, useState } from 'react';
import './Collection.css';

const Collection: React.FC<{ city: string }> = ({ city }) => {
  const [loading, setLoadingState] = useState(true);
  const [collectionData, setCollectionData] = useState<{
    minBeds: number;
    maxBeds: number;
    minPrice: number;
    maxPrice: number;
    minSqFt: number;
    maxSqFt: number;
    propertyCount: number;
    photoUrls: string[];
  }>({ maxBeds: 0, maxPrice: 0, maxSqFt: 0, minBeds: 0, minPrice: 0, minSqFt: 0, propertyCount: 0, photoUrls: [] });
  useEffect(() => {
    fetch(
      `https://api.bridgedataoutput.com/api/v2/OData/jerseymls/Property?access_token=41d0ccfaedd3af3c0669a6f3c665b620&$filter=City eq '${city}'  and PropertyType eq 'Residential' and (MlsStatus eq 'Active' or MlsStatus eq 'Active Coming Soon')`,
    )
      .then((response) => response.json())
      .then((json) => {
        const result: {
          minBeds: number;
          maxBeds: number;
          minPrice: number;
          maxPrice: number;
          minSqFt: number;
          maxSqFt: number;
          propertyCount: number;
          photoUrls: string[];
        } = {
          minBeds: Infinity,
          maxBeds: 0,
          minPrice: Infinity,
          maxPrice: 0,
          minSqFt: Infinity,
          maxSqFt: 0,
          propertyCount: 0,
          photoUrls: [],
        };
        json.value.forEach((property) => {
          result.minBeds = Math.min(result.minBeds, property.BedroomsTotal);
          result.maxBeds = Math.max(result.maxBeds, property.BedroomsTotal);
          result.minPrice = Math.min(result.minPrice, property.ListPrice);
          result.maxPrice = Math.max(result.maxPrice, property.ListPrice);
          result.minSqFt = Math.min(result.minSqFt, property.LivingArea);
          result.maxSqFt = Math.max(result.maxSqFt, property.LivingArea);
          if (result.photoUrls.length < 3) {
            if (property.Media?.length > 0) {
              result.photoUrls.push(property.Media[0].MediaURL);
            }
          }
        });
        result.propertyCount = json['@odata.count'];
        setCollectionData(result);
        setLoadingState(false);
      })
      .catch((error) => console.error(error));
  }, []);

  function numberWithCommas(num: number) {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <>
      {!loading && (
        <div className="w-full mt-12 lg:w-[32%] 2xl:w-[31%] rounded overflow-hidden shadow-lg divide-white">
          <div className="flex">
            <div className="w-1/2 relative max-h-64">
              <img
                className="w-full h-full border-r-4"
                src={collectionData.photoUrls[0]}
                alt="Sunset in the mountains"
              />
              <div className="absolute top-3 left-1.5 font-roboto-serif text-md uppercase bg-white rounded-full px-3">
                {collectionData.propertyCount} properties
              </div>
            </div>
            <div className="w-1/2 max-h-64">
              <img
                className="w-full border-b-4 h-1/2"
                src={collectionData.photoUrls[1]}
                alt="Sunset in the mountains"
              />
              <img className="w-full h-1/2" src={collectionData.photoUrls[2]} alt="Sunset in the mountains" />
            </div>
          </div>

          <div className="flex flex-wrap px-6 py-4">
            <div className="city w-full font-playfair-display font-medium text-xl md:text-2xl mb-1 tracking-widest">
              {city} Listings
            </div>
            <div className="price w-full font-roboto-serif text-md md:text-xl 2xl:text-md tracking-widest">
              Price Range: ${numberWithCommas(collectionData.minPrice)} - ${numberWithCommas(collectionData.maxPrice)}
            </div>
            <div className="w-full min-[1956px]:w-1/2 mt-2">
              <div className="beds font-roboto-serif text-md md:text-xl 2xl:text-lg tracking-widest inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-7 md:h-7 me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
                {collectionData.minBeds} to {collectionData.maxBeds} beds
              </div>
            </div>
            <div className="baths w-full min-[1956px]:w-1/2 mt-2">
              <div className="font-roboto-serif text-md md:text-xl 2xl:text-lg tracking-widest inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-7 md:h-7 me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
                2 to 3 baths
              </div>
            </div>
            <div className="w-full min-[1956px]:w-3/4 mt-2">
              <div className="sqft font-roboto-serif text-md md:text-xl 2xl:text-lg tracking-widest inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 md:w-7 md:h-7 me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
                {numberWithCommas(collectionData.minSqFt)} to {numberWithCommas(collectionData.maxSqFt)} sqft
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="is-loading w-full mt-12 lg:w-[32%] 2xl:w-[31%] rounded overflow-hidden shadow-lg divide-white">
          <div className="flex">
            <div className="pics"></div>
          </div>
          <div className="flex flex-wrap px-6 py-4 justify-between">
            <div className="city w-full font-playfair-display font-medium text-xl md:text-2xl tracking-widest"></div>
            <div className="price w-full font-roboto-serif text-md md:text-xl 2xl:text-md tracking-widest mt-2"></div>
            <div className="beds w-full min-[1956px]:w-[48%] mt-2">
              <div className="font-roboto-serif text-md md:text-xl 2xl:text-lg tracking-widest inline-flex"></div>
            </div>
            <div className="baths w-full min-[1956px]:w-[48%] mt-2">
              <div className="font-roboto-serif text-md md:text-xl 2xl:text-lg tracking-widest inline-flex"></div>
            </div>
            <div className="sqft w-full mt-2">
              <div className="font-roboto-serif text-md md:text-xl 2xl:text-lg tracking-widest inline-flex"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Collection;
