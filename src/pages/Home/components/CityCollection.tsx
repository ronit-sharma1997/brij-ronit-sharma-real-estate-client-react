import { Collection } from '../slices/CollectionSearchSlice.tsx';

const CityCollection: React.FC<{ collection: Collection }> = ({ collection }) => {
  function numberWithCommas(num: number) {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <>
      {!collection.loading && (
        <div className="card w-full mt-6 md:mt-12 lg:w-[48%] 2xl:w-[31%] rounded overflow-hidden shadow-lg divide-white cursor-pointer">
          <div className="flex h-60">
            <div className="w-[65%] relative max-h-64">
              <img className="w-full h-full border-r-4" src={collection.photoUrls[0]} alt="Sunset in the mountains" />
              <div className="absolute top-3 left-1.5 font-roboto-serif text-xs md:text-sm font-semibold uppercase bg-white rounded-full px-3">
                {collection.propertyCount} properties
              </div>
            </div>
            <div className="w-[35%]">
              <img className="w-full border-b-4 h-1/2" src={collection.photoUrls[1]} alt="Sunset in the mountains" />
              <img className="w-full h-1/2" src={collection.photoUrls[2]} alt="Sunset in the mountains" />
            </div>
          </div>

          <div className="flex flex-wrap px-6 py-4">
            <div className="city w-full font-playfair-display font-semibold text-xl md:text-2xl mb-1 tracking-widest">
              {collection.city} Listings
            </div>
            <div className="price w-full font-roboto-serif text-base md:text-lg tracking-widest">
              Price: ${numberWithCommas(collection.minPrice)} - ${numberWithCommas(collection.maxPrice)}
            </div>
            <div>
              <div className="beds font-roboto-serif text-base md:text-lg tracking-widest inline-flex mr-4">
                <img src="common/double-bed-icon.svg" alt="Bedrooms" className="w-6 h-6 my-auto mr-2" />
                {collection.minBeds} to {collection.maxBeds} beds
              </div>
              <div className="font-roboto-serif text-base md:text-lg tracking-widest inline-flex mr-4">
                <img src="common/bathtub-icon.svg" alt="Bathrooms" className="w-6 h-6 my-auto mr-2" />2 to 3 baths
              </div>
              <div className="sqft font-roboto-serif text-base md:text-lg tracking-widest inline-flex">
                <img src="common/tape-ruler-icon.svg" alt="Sqft" className="w-6 h-6 my-auto mr-2" />
                {numberWithCommas(collection.minSqFt)} to {numberWithCommas(collection.maxSqFt)} sqft
              </div>
            </div>
          </div>
        </div>
      )}
      {collection.loading && (
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
export default CityCollection;
