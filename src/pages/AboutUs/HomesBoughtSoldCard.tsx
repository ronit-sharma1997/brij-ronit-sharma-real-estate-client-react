import { HomeProps } from './HomesBoughtSoldCarousel.tsx';
import { convertHomePriceToString } from '../../common/utils/HomeData.tsx';

const HomesBoughtSoldCard: React.FC<{ home: HomeProps }> = ({ home }) => {
  return (
    <div className="basis-full md:basis-[47%] xl:basis-[32%] 2xl:basis-[23.5%] rounded overflow-hidden shadow-lg divide-white mr-[2%] md:mr-[6%] xl:mr-[2%] flex-grow flex-shrink-0">
      <img className="w-full h-56" src={home.mediaUrl} alt="Sunset in the mountains" />
      <div className="pt-2 pb-4 px-2">
        <div className="w-full font-roboto-serif font-semibold text-xl tracking-widest mt-2">
          {home.subdivisionName}
        </div>
        <div className="w-full font-roboto-serif text-base md:text-lg tracking-widest mt-2">
          <div dangerouslySetInnerHTML={{ __html: home.unparsedAddress }} />
        </div>
        <div className="mt-2">
          <div className="font-roboto-serif text-base md:text-lg tracking-widest inline-flex mr-2">
            <img src="common/double-bed-icon.svg" alt="Bedrooms" className="w-4 h-4 my-auto mr-2" />
            {home.bedroomsTotal} beds
          </div>
          <div className="font-roboto-serif text-base md:text-lg tracking-widest inline-flex mr-2">
            <img src="common/bathtub-icon.svg" alt="Bathrooms" className="w-4 h-4 my-auto mr-2" />
            {home.bathroomsTotal} baths
          </div>
          <div className="font-roboto-serif text-base md:text-lg tracking-widest inline-flex">
            <img src="common/tape-ruler-icon.svg" alt="Sqft" className="w-4 h-4 my-auto mr-2" />
            {convertHomePriceToString(home.livingArea)} sqft
          </div>
        </div>
        <div className="w-full font-roboto-serif text-2xl tracking-widest mt-2">
          ${convertHomePriceToString(home.closePrice)}
          <span className="rounded-full bg-black text-base text-white ml-2 px-2 py-1">
            {home.representedBuyer && home.representedSeller
              ? 'Dual Agent'
              : home.representedBuyer
                ? "Buyer's Agent"
                : "Seller's Agent"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default HomesBoughtSoldCard;
