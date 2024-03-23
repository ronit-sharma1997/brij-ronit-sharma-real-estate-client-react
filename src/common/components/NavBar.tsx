import { Fragment, useState } from 'react';
import MobileNavBar from './MobileNavBar.tsx';
import NavLinks from './NavLinks.tsx';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const PropertySearch: React.FC<{ hoverStyle: string }> = ({ hoverStyle }) => {
  return (
    <div className="relative flex font-roboto-serif font-medium text-base my-auto mx-7">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex">
            <div className={`relative uppercase cursor-pointer ${hoverStyle}`}>Property Search</div>
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-5 py-5">
              <Menu.Item>
                <div>
                  <div>
                    <span className="relative text-black after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                      Buy
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="relative text-black after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                      Rent
                    </span>
                  </div>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const NavBar: React.FC<{ parentClassName: string }> = ({ parentClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={parentClassName}>
        {/* Left Side - BR Logo along with Titles */}
        <div className="flex">
          <div className="font-style-script tracking-[0.5rem] my-auto text-4xl md:text-6xl">BR</div>
          <div>
            <div className="font-playfair-display text-2xl md:text-3xl">Brij & Ronit Sharma</div>
            <div className="font-roboto-serif uppercase font-medium tracking-widest text-base md:text-xl mt-1.5">
              Real Estate Agents
            </div>
            <div className="font-roboto-serif uppercase font-medium tracking-widest text-base md:text-xl">
              DDS Real Estate
            </div>
          </div>
        </div>
        {/* Right Side - Navigation Menus/Links */}
        <NavLinks
          className={'hidden min-[919px]:flex mx-auto mt-5 xl:mt-0 xl:mx-0'}
          childrenMargin={''}
          hoverStyle={
            'relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
          }
          propertySearch={
            <PropertySearch
              hoverStyle={
                'relative after:bg-white after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
              }
            />
          }
        />
        {/* Right Side - Hamburger Icon on Small Screens */}
        <div className="flex min-[919px]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 my-auto transition ease-linear hover:bg-gray-100 hover:cursor-pointer duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </>
  );
};
export default NavBar;
