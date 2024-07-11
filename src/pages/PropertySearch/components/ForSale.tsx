import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Disclosure } from '@headlessui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../App/hook.ts';
import {
  fetchProperties,
  selectMLSStatus,
  selectSearchType,
  setMLSStatus,
  setSearchType,
} from '../slices/PropertySearchSlice.tsx';
import { fetchSearchResults } from '../../../common/slices/PropertySearchBarSlice.tsx';

const ForSale: React.FC<{
  buttonRef: React.RefObject<HTMLDivElement>;
  menuRef: React.RefObject<HTMLDivElement>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ buttonRef, menuRef, toggle, setToggle }) => {
  const dispatch = useAppDispatch();
  const searchType = useAppSelector(selectSearchType);
  const mlsStatus = useAppSelector(selectMLSStatus);
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
                <Disclosure.Button
                  className="w-full flex justify-between px-6 my-6 cursor-pointer"
                  onPointerUp={() => dispatch(setSearchType(searchType === 'For Sale' ? 'For Rent' : 'For Sale'))}
                >
                  <div>
                    <span className="bg-red-700 rounded-full w-4 h-4 inline-block align-middle mr-2"></span>
                    For Sale
                  </div>
                  <ChevronDownIcon
                    className={`${open ? 'rotate-180 transform' : ''}ml-1 h-5 w-5 inline-block`}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                {searchType === 'For Sale' && (
                  <Disclosure.Panel className="px-6 flex flex-wrap cursor-default" static>
                    <div className="w-full">
                      <input
                        type="checkbox"
                        className="mr-5 align-middle"
                        checked={mlsStatus === 'Active'}
                        onChange={(event) =>
                          dispatch(setMLSStatus({ checked: mlsStatus !== 'Active', mlsStatus: 'Active' }))
                        }
                      />
                      Active
                    </div>
                    <div className="w-full mt-4">
                      <input
                        type="checkbox"
                        className="mr-5 align-middle"
                        checked={mlsStatus === 'Active Coming Soon'}
                        onChange={(event) =>
                          dispatch(
                            setMLSStatus({
                              checked: mlsStatus !== 'Active Coming Soon',
                              mlsStatus: 'Active Coming Soon',
                            }),
                          )
                        }
                      />
                      Active Coming Soon
                    </div>
                    <div className="w-full mt-4">
                      <input
                        type="checkbox"
                        className="mr-5 align-middle"
                        checked={mlsStatus === 'Under Contract'}
                        onChange={(event) =>
                          dispatch(
                            setMLSStatus({ checked: mlsStatus !== 'Under Contract', mlsStatus: 'Under Contract' }),
                          )
                        }
                      />
                      Under Contract
                    </div>
                    <div className="w-full mt-4 mb-8">
                      <input
                        type="checkbox"
                        className="mr-5 align-middle"
                        checked={mlsStatus === 'Closed'}
                        onChange={(event) =>
                          dispatch(setMLSStatus({ checked: mlsStatus !== 'Closed', mlsStatus: 'Closed' }))
                        }
                      />
                      Closed
                    </div>
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="w-full flex justify-between px-6 mb-6 cursor-pointer"
                  onPointerUp={() => dispatch(setSearchType(searchType === 'For Sale' ? 'For Rent' : 'For Sale'))}
                >
                  <div>
                    <span className="bg-green-700 rounded-full w-4 h-4 inline-block align-middle mr-2"></span>
                    For Rent
                  </div>
                  <ChevronDownIcon
                    className={`${open ? 'rotate-180 transform' : ''}ml-1 h-5 w-5 inline-block`}
                    aria-hidden="true"
                  />
                </Disclosure.Button>
                {searchType === 'For Rent' && (
                  <Disclosure.Panel className="px-6 flex flex-wrap cursor-default" static>
                    <div className="w-full">
                      <input
                        type="checkbox"
                        className="mr-5 align-middle"
                        checked={mlsStatus === 'Active'}
                        onChange={(event) =>
                          dispatch(setMLSStatus({ checked: mlsStatus !== 'Active', mlsStatus: 'Active' }))
                        }
                      />
                      Active
                    </div>
                    <div className="w-full mt-4">
                      <input
                        type="checkbox"
                        className="mr-5 align-middle"
                        checked={mlsStatus === 'Active Coming Soon'}
                        onChange={(event) =>
                          dispatch(
                            setMLSStatus({
                              checked: mlsStatus !== 'Active Coming Soon',
                              mlsStatus: 'Active Coming Soon',
                            }),
                          )
                        }
                      />
                      Active Coming Soon
                    </div>
                    <div className="w-full mt-4">
                      <input
                        type="checkbox"
                        className="mr-5 align-middle"
                        checked={mlsStatus === 'Under Contract'}
                        onChange={(event) =>
                          dispatch(
                            setMLSStatus({ checked: mlsStatus !== 'Under Contract', mlsStatus: 'Under Contract' }),
                          )
                        }
                      />
                      Under Contract
                    </div>
                    <div className="w-full mt-4 mb-8">
                      <input
                        type="checkbox"
                        className="mr-5 align-middle"
                        checked={mlsStatus === 'Closed'}
                        onChange={(event) =>
                          dispatch(setMLSStatus({ checked: mlsStatus !== 'Closed', mlsStatus: 'Closed' }))
                        }
                      />
                      Closed
                    </div>
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
          <hr className="w-full" />
          <div className="py-4 w-full text-right">
            <button
              className="bg-black px-4 py-2 text-white rounded-md mr-4"
              onClick={() => dispatch(fetchProperties())}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForSale;
