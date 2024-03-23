import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import NavLinks from './NavLinks.tsx';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const MobilePropertySearch: React.FC<{ hoverStyle: string }> = ({ hoverStyle }) => {
  return (
    <div className="flex flex-col font-roboto-serif font-medium text-base my-auto mx-7">
      <Disclosure>
        <Disclosure.Button className="inline-flex">
          <div className={`relative uppercase cursor-pointer ${hoverStyle}`}>Property Search</div>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
        </Disclosure.Button>
        <Transition
          enter="transition duration-500 linear"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-300 linear"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Disclosure.Panel className=" pb-2 pt-4 font-roboto-serif text-base">
            <div className="px-5 py-2">
              <div>
                <span className="relative text-black after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                  Buy
                </span>
              </div>

              <div className="mt-5">
                <span className="relative text-black after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                  Rent
                </span>
              </div>
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

const MobileNavBar: React.FC<{ isOpen: boolean; setIsOpen: (arg0: boolean) => void }> = ({ isOpen, setIsOpen }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
              <Dialog.Panel className="h-full w-full md:w-1/2 xl:w-1/3 transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 my-auto transition ease-linear hover:bg-gray-100 hover:cursor-pointer duration-300 mb-6"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
                <NavLinks
                  className={'flex flex-col mx-auto mt-5 xl:mt-0 xl:mx-0'}
                  childrenMargin={'mt-6'}
                  hoverStyle={
                    'relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
                  }
                  propertySearch={
                    <MobilePropertySearch
                      hoverStyle={
                        'relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
                      }
                    />
                  }
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default MobileNavBar;
