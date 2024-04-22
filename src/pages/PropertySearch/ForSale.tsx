import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Disclosure } from '@headlessui/react';
import React from 'react';

const ForSale: React.FC<{
  buttonRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ buttonRef, menuRef, toggle, setToggle }) => {
  return (
    <>
      <span className="bg-red-700 rounded-full w-4 h-4 inline-block ml-2 align-middle mr-2"></span>
      <div className="inline-block hover:opacity-70" ref={buttonRef} onClick={() => setToggle(!toggle)}>
        For Sale
        <ChevronDownIcon
          className={`${toggle ? 'rotate-180 transform' : ''} h-5 w-5 mb-1 inline-block`}
          aria-hidden="true"
        />
      </div>
      <div
        className={`${toggle ? 'block' : 'hidden'} absolute bg-white rounded-lg shadow-lg top-10 border-t-[0.1em] card w-80 z-40`}
        ref={menuRef}
      >
        <div className="flex flex-wrap">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between px-6 my-6 cursor-pointer">
                  <div>
                    <span className="bg-red-700 rounded-full w-4 h-4 inline-block align-middle mr-2"></span>
                    For Sale
                  </div>
                  <ChevronDownIcon
                    className={`${open ? 'rotate-180 transform' : ''}ml-1 h-5 w-5 inline-block`}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 flex flex-wrap cursor-default">
                  <div className="w-full">
                    <input type="checkbox" className="mr-5 align-middle" />
                    Active
                  </div>
                  <div className="w-full mt-4">
                    <input type="checkbox" className="mr-5 align-middle" />
                    Active Coming Soon
                  </div>
                  <div className="w-full mt-4">
                    <input type="checkbox" className="mr-5 align-middle" />
                    Under Contract
                  </div>
                  <div className="w-full mt-4 mb-8">
                    <input type="checkbox" className="mr-5 align-middle" />
                    Closed
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between px-6 mb-6 cursor-pointer">
                  <div>
                    <span className="bg-green-700 rounded-full w-4 h-4 inline-block align-middle mr-2"></span>
                    For Rent
                  </div>
                  <ChevronDownIcon
                    className={`${open ? 'rotate-180 transform' : ''}ml-1 h-5 w-5 inline-block`}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 flex flex-wrap cursor-default">
                  <div className="w-full">
                    <input type="checkbox" className="mr-5 align-middle" />
                    Active
                  </div>
                  <div className="w-full mt-4">
                    <input type="checkbox" className="mr-5 align-middle" />
                    Active Coming Soon
                  </div>
                  <div className="w-full mt-4">
                    <input type="checkbox" className="mr-5 align-middle" />
                    Under Contract
                  </div>
                  <div className="w-full mt-4 mb-8">
                    <input type="checkbox" className="mr-5 align-middle" />
                    Rented
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <hr className="w-full" />
          <div className="py-4 w-full text-right">
            <button className="bg-black px-4 py-2 text-white rounded-md mr-4">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForSale;
