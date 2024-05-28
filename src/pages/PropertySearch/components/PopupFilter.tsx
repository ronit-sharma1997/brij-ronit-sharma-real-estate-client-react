import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const PopupFilter: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => console.log('Closed')}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-end text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center">
                  <Dialog.Panel className="h-full w-full md:w-1/2 xl:w-1/3 transform bg-white text-left align-middle shadow-xl transition-all">
                    <div className="flex sticky top-0 py-4 border-b-[1px] bg-white">
                      <div className="font-roboto-serif font-semibold text-xl relative w-full text-center">
                        15 Results
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8 my-auto transition ease-linear hover:bg-gray-100 hover:cursor-pointer duration-300 absolute right-5 top-0"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-wrap mt-10 mb-4">
                      <div className="w-full text-lg px-4 font-roboto-serif">Price</div>
                      <div className="inline-flex w-full mt-2 items-center px-4">
                        <input
                          type="number"
                          className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5 font-roboto-serif"
                          placeholder="Min"
                        />
                        <div className="text-2xl px-2 text-black/30">-</div>
                        <input
                          type="number"
                          className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5 font-roboto-serif"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex flex-wrap cursor-default font-roboto-serif">
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
                    <div className="flex flex-wrap mt-6 mb-12 font-roboto-serif">
                      <div className="w-full text-lg px-4">Beds</div>
                      <div className="inline-flex w-full mt-2 items-center px-4">
                        <input
                          type="number"
                          className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5"
                          min="0"
                          max="10"
                          placeholder="Min"
                        />
                        <div className="text-2xl px-2 text-black/30">-</div>
                        <input
                          type="number"
                          className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5"
                          min="0"
                          max="10"
                          placeholder="Max"
                        />
                      </div>
                      <div className="w-full text-lg px-4 mt-5">Baths</div>
                      <div className="inline-flex w-full mt-2 items-center px-4">
                        <input
                          type="number"
                          className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5"
                          min="0"
                          max="10"
                          placeholder="Min"
                        />
                        <div className="text-2xl px-2 text-black/30">-</div>
                        <input
                          type="number"
                          className="w-[46%] border-[0.75px] border-black/30 rounded-md py-2 ps-5"
                          min="0"
                          max="10"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                    <div className="flex font-roboto-serif py-4 bg-white border-t-[1px] sticky bottom-0">
                      <div className="inline-flex w-full mt-2 items-center px-4">
                        <div className="w-[46%] font-roboto-serif text-center mr-3.5">Reset All Filters</div>
                        <button className="bg-black px-4 py-2 text-white rounded-md w-[46%] ml-3.5">Apply</button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default PopupFilter;
