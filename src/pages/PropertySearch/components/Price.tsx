import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../App/hook.ts';
import {
  fetchProperties,
  selectMaxPrice,
  selectMinPrice,
  setMaxPrice,
  setMinPrice,
} from '../slices/PropertySearchSlice.tsx';

const Price: React.FC<{
  buttonRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  allFilter: boolean;
}> = ({ buttonRef, menuRef, toggle, setToggle, allFilter }) => {
  const minPrice = useAppSelector(selectMinPrice);
  const maxPrice = useAppSelector(selectMaxPrice);
  const dispatch = useAppDispatch();
  return (
    <>
      {!allFilter && (
        <div className="hover:opacity-70 cursor-pointer" onClick={() => setToggle(!toggle)} ref={buttonRef}>
          Price{' '}
          <ChevronDownIcon
            className={`${toggle ? 'rotate-180 transform' : ''} h-5 w-5 mb-1 inline-block`}
            aria-hidden="true"
          />
        </div>
      )}
      {!allFilter && (
        <div
          className={`${toggle ? 'block' : 'hidden'} absolute bg-white rounded-lg shadow-lg top-10 border-t-[0.1em] card w-96 z-40`}
          ref={menuRef}
        >
          <div className="flex flex-wrap mt-6 mb-4">
            <div className="w-full text-lg px-4">Price</div>
            <div className="inline-flex w-full mt-2 items-center px-4">
              <input
                type="text"
                pattern="\d+"
                value={minPrice}
                onChange={(event) => {
                  dispatch(setMinPrice(event.target.value));
                  dispatch(fetchProperties());
                }}
                className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5"
                placeholder="Min"
              />
              <div className="text-2xl px-2 text-black/30">-</div>
              <input
                type="text"
                pattern="\d+"
                value={maxPrice}
                onChange={(event) => {
                  dispatch(setMaxPrice(event.target.value));
                  dispatch(fetchProperties());
                }}
                className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5"
                placeholder="Max"
              />
            </div>
            <hr className="w-full mt-4" />
            <div className="mt-4 w-full text-right px-4">
              <button className="bg-black px-4 py-2 text-white rounded-md">Apply</button>
            </div>
          </div>
        </div>
      )}
      {allFilter && (
        <div className="flex flex-wrap mt-6 mb-4">
          <div className="w-full text-lg px-4">Price</div>
          <div className="inline-flex w-full mt-2 items-center px-4">
            <input
              type="text"
              pattern="\d+"
              value={minPrice}
              onChange={(event) => {
                dispatch(setMinPrice(event.target.value));
                dispatch(fetchProperties());
              }}
              className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5"
              placeholder="Min"
            />
            <div className="text-2xl px-2 text-black/30">-</div>
            <input
              type="text"
              pattern="\d+"
              value={maxPrice}
              onChange={(event) => {
                dispatch(setMaxPrice(event.target.value));
                dispatch(fetchProperties());
              }}
              className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5"
              placeholder="Max"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Price;
