import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ForSale from './ForSale.tsx';
import Price from './Price.tsx';
import HomeType from './HomeType.tsx';
import BedBath from './BedBath.tsx';

const Filter: React.FC<{ className: string; filterType: string }> = ({ className, filterType }) => {
  const [toggle, setToggle] = useState(false);
  const button = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (menu.current && !menu.current.contains(event.target as Node) && event.target !== button.current) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const createFilter = (filterType: string): ReactElement => {
    if (filterType === 'ForSale') {
      return <ForSale toggle={toggle} setToggle={setToggle} menuRef={menu} buttonRef={button} />;
    } else if (filterType === 'Price') {
      return <Price toggle={toggle} setToggle={setToggle} menuRef={menu} buttonRef={button} allFilter={false} />;
    } else if (filterType === 'HomeType') {
      return <HomeType toggle={toggle} setToggle={setToggle} menuRef={menu} buttonRef={button} allFilter={false} />;
    } else if (filterType === 'BedBath') {
      return <BedBath toggle={toggle} setToggle={setToggle} menuRef={menu} buttonRef={button} allFilter={false} />;
    } else {
      return (
        <div>
          <div className="hover:opacity-70 cursor-pointer" onClick={() => setToggle(!toggle)} ref={button}>
            Filters{' '}
            <ChevronDownIcon
              className={`${toggle ? 'rotate-180 transform' : ''} h-5 w-5 mb-1 inline-block`}
              aria-hidden="true"
            />
          </div>
          <div
            className={`${toggle ? 'hidden min-[575px]:block' : 'hidden'} absolute bg-white rounded-lg shadow-lg top-10 border-t-[0.1em] card w-96 z-40`}
            ref={menu}
          >
            <Price toggle={toggle} setToggle={setToggle} menuRef={menu} buttonRef={button} allFilter={true} />
            <HomeType toggle={toggle} setToggle={setToggle} menuRef={menu} buttonRef={button} allFilter={true} />
            <BedBath toggle={toggle} setToggle={setToggle} menuRef={menu} buttonRef={button} allFilter={true} />
            <hr className="w-full mt-4" />
            <div className="py-4 w-full text-right px-4">
              <button className="bg-black px-4 py-2 text-white rounded-md">Apply</button>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div className={className}>{createFilter(filterType)}</div>;
};
export default Filter;
