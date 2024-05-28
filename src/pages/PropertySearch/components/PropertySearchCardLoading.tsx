import React from 'react';

const PropertySearchCardLoading: React.FC<{ width: string }> = ({ width }) => {
  return (
    <div className={`is-loading card mb-6 ${width} rounded overflow-hidden shadow-lg divide-white`}>
      <div className="flex">
        <div className="property-pics"></div>
      </div>
      <div className="pt-2 pb-2 px-2">
        <div className="subdivision w-full font-roboto-serif font-semibold text-base 3xl:text-lg tracking-widest mt-2"></div>
        <div className="address w-full font-roboto-serif text-sm 3xl:text-base tracking-widest mt-0.5"></div>
        <div className="w-full 4xl:w-[80%] flex mt-1 justify-between">
          <div className="font-roboto-serif text-xs 3xl:text-sm tracking-widest inline-flex">
            <img src="common/double-bed-icon.svg" alt="Bedrooms" className="w-4 h-4 my-auto mr-2" />
            <div className="beds w-[5em]"></div>
          </div>
          <div className="font-roboto-serif text-xs 3xl:text-sm tracking-widest inline-flex">
            <img src="common/bathtub-icon.svg" alt="Bathrooms" className="w-4 h-4 my-auto mr-2" />
            <div className="baths w-[5em]"></div>
          </div>
          <div className="font-roboto-serif text-xs 3xl:text-sm tracking-widest inline-flex">
            <img src="common/tape-ruler-icon.svg" alt="Sqft" className="w-4 h-4 my-auto mr-2" />
            <div className="sqft w-[5em]"></div>
          </div>
        </div>
        <div className="price w-full font-roboto-serif text-xl 3xl:text-2xl tracking-widest mt-2"></div>
      </div>
    </div>
  );
};
export default PropertySearchCardLoading;
