import React from 'react';
import { convertHomePriceToString } from '../../common/utils/HomeData.tsx';

const PropertySearchCard: React.FC<{
  imgUrl: string;
  subdivision: string;
  address: string;
  beds: number;
  baths: number;
  sqFt: number;
  listPrice: number;
  width: string;
  listingId: string;
  onHover(listingId: string): void;
}> = ({ imgUrl, subdivision, address, beds, baths, sqFt, listPrice, width, listingId, onHover }) => {
  return (
    <div
      className={`card mb-6 ${width} rounded overflow-hidden shadow-lg divide-white cursor-pointer`}
      onMouseEnter={() => onHover(listingId)}
      onMouseLeave={() => onHover('')}
    >
      <img className="w-full h-44 3xl:h-56" src={imgUrl} alt="Sunset in the mountains" />
      <div className="pt-2 pb-2 px-2">
        <div className="w-full font-roboto-serif font-semibold text-base 3xl:text-lg tracking-widest mt-2">
          {subdivision}
        </div>
        <div className="w-full font-roboto-serif text-sm 3xl:text-base tracking-widest mt-0.5">{address}</div>
        <div className="w-full 4xl:w-[80%] flex mt-1 justify-between">
          <div className="font-roboto-serif text-xs 3xl:text-sm tracking-widest inline-flex">
            <img src="common/double-bed-icon.svg" alt="Bedrooms" className="w-4 h-4 my-auto mr-2" />
            {beds} Beds
          </div>
          <div className="font-roboto-serif text-xs 3xl:text-sm tracking-widest inline-flex">
            <img src="common/bathtub-icon.svg" alt="Bathrooms" className="w-4 h-4 my-auto mr-2" />
            {baths} Baths
          </div>
          <div className="font-roboto-serif text-xs 3xl:text-sm tracking-widest inline-flex">
            <img src="common/tape-ruler-icon.svg" alt="Sqft" className="w-4 h-4 my-auto mr-2" />
            {sqFt ? sqFt : '----'} sqft
          </div>
        </div>
        <div className="w-full font-roboto-serif text-xl 3xl:text-2xl tracking-widest mt-2">
          ${convertHomePriceToString(listPrice)}{' '}
          <span className="rounded-full bg-red-700 text-base text-white px-2 py-1">-5.00%</span>
        </div>
      </div>
    </div>
  );
};
export default PropertySearchCard;
