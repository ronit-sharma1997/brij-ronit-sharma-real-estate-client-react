import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

const HomeType: React.FC<{
  buttonRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  allFilter: boolean;
}> = ({ buttonRef, menuRef, toggle, setToggle, allFilter }) => {
  return (
    <>
      {!allFilter && (
        <div className="hover:opacity-70 cursor-pointer" onClick={() => setToggle(!toggle)} ref={buttonRef}>
          Home Type{' '}
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
          <div className="mt-8 flex flex-wrap cursor-default">
            <div className="px-6 w-full">
              <input type="checkbox" className="mr-5 align-middle" />
              Houses
            </div>
            <div className="px-6 w-full mt-4">
              <input type="checkbox" className="mr-5 align-middle" />
              Townhomes
            </div>
            <div className="px-6 w-full mt-4">
              <input type="checkbox" className="mr-5 align-middle" />
              Multi-Family
            </div>
            <div className="px-6 w-full mt-4">
              <input type="checkbox" className="mr-5 align-middle" />
              Condos/Co-ops
            </div>
            <div className="px-6 w-full mt-4">
              <input type="checkbox" className="mr-5 align-middle" />
              Lots/Lands
            </div>
            <div className="px-6 w-full mt-4 mb-6">
              <input type="checkbox" className="mr-5 align-middle" />
              Apartments
            </div>
            <hr className="w-full mt-4" />
            <div className="mt-4 mb-4 w-full text-right px-4">
              <button className="bg-black px-4 py-2 text-white rounded-md">Apply</button>
            </div>
          </div>
        </div>
      )}
      {allFilter && (
        <div className="mt-8 flex flex-wrap cursor-default">
          <div className="w-full text-lg px-4">Home Type</div>
          <div className="px-6 mt-4 w-full">
            <input type="checkbox" className="mr-5 align-middle" />
            Houses
          </div>
          <div className="px-6 w-full mt-4">
            <input type="checkbox" className="mr-5 align-middle" />
            Townhomes
          </div>
          <div className="px-6 w-full mt-4">
            <input type="checkbox" className="mr-5 align-middle" />
            Multi-Family
          </div>
          <div className="px-6 w-full mt-4">
            <input type="checkbox" className="mr-5 align-middle" />
            Condos/Co-ops
          </div>
          <div className="px-6 w-full mt-4">
            <input type="checkbox" className="mr-5 align-middle" />
            Lots/Lands
          </div>
          <div className="px-6 w-full mt-4 mb-2">
            <input type="checkbox" className="mr-5 align-middle" />
            Apartments
          </div>
        </div>
      )}
    </>
  );
};

export default HomeType;
