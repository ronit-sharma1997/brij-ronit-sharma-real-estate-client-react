import { useAppDispatch, useAppSelector } from '../../App/hook.ts';
import { selectAddress, selectEstimate, setPage } from './slices/HomeValuationSlice.tsx';
import { convertHomePriceToString } from '../../common/utils/HomeData.tsx';

const HomeValuationEstimate: React.FC = () => {
  const estimate = useAppSelector(selectEstimate);
  const address = useAppSelector(selectAddress);

  const dispatch = useAppDispatch();
  return (
    <>
      <div className="font-playfair-display text-2xl tracking-widest md:text-4xl">Home Estimate</div>
      <div className="mt-2 font-roboto-serif text-md tracking-widest md:text-xl">{address}</div>
      <div className="mt-2 py-4 flex font-roboto-serif text-md tracking-widest md:text-xl">
        <div className="font-roboto-serif text-md tracking-widest md:text-4xl font-bold">
          ${convertHomePriceToString(estimate)}
        </div>
        <img className="w-28 h-6 self-center ml-2" src="HomeValuation/zillow.png" />
      </div>
      <div className="text-xs text-gray-400">The data provided through the Zestimate API is provided "as is"</div>
      <div className="text-xs text-gray-400">© Zillow, Inc., 2006-2023. Use is subject to Terms of Use</div>

      <button
        className="rounded-md w-full my-8 border-2 px-2 py-4 border-black bg-white text-black font-roboto-serif text-sm uppercase hover:bg-black hover:cursor-pointer hover:text-white hover:border-white transition-[all] duration-700"
        onClick={() => dispatch(setPage('1'))}
      >
        Get Another Estimate
      </button>
    </>
  );
};

export default HomeValuationEstimate;
