import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';
import './PropertySearchModal.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useAppDispatch, useAppSelector } from '../../../App/hook.ts';
import { selectIsModalOpen, selectSelectedProperty, setIsModalOpen } from '../slices/PropertySearchSlice.tsx';
import { PropertyMedia } from '../../../common/models/Property.tsx';
import { convertHomePriceToString } from '../../../common/utils/HomeData.tsx';

const PropertySearchModal: React.FC = () => {
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const selectedProperty = useAppSelector(selectSelectedProperty);
  const cancelButtonRef = useRef(null);
  const dispatch = useAppDispatch();
  const [carouselEndIndex, setCarouselEndIndex] = useState(4);

  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? carouselEndIndex : curr - 1));

  const next = () => setCurr((curr) => (curr === carouselEndIndex ? 0 : curr + 1));

  const PropertyPhotosLargeDevice: React.FC<{
    className: string;
    photos: PropertyMedia[];
  }> = ({ className, photos }) => {
    const result = [];
    for (let i = 0; i < photos.length; ) {
      if (i == 0 && photos.length == 1) {
        result.push(
          <div className="w-full flex-shrink-0 border-2 border-white" key={i}>
            <img className="border-l-1 border-white h-full" src={photos[i].MediaURL} />
          </div>,
        );
        i += 1;
      } else if (i == 0 || i == photos.length - 1) {
        result.push(
          <div className="w-1/2 flex-shrink-0 border-2 border-white" key={i}>
            <img className="border-l-1 border-white h-full" src={photos[i].MediaURL} />
          </div>,
        );
        i += 1;
      } else {
        result.push(
          <div className="w-1/4 flex-shrink-0 border-2 border-white" key={i}>
            <img className="w-full h-1/2" src={photos[i].MediaURL} />
            <img className="w-full h-1/2 border-t-4 border-white" src={photos[i + 1].MediaURL} />
          </div>,
        );
        i += 2;
      }
    }
    setCarouselEndIndex(Math.ceil(photos.length / 8) - 1);
    return <div className={className}>{result}</div>;
  };

  const PropertyPhotosSmallDevice: React.FC<{
    className: string;
    photos: PropertyMedia[];
  }> = ({ className, photos }) => {
    const result = photos.map((photo, idx) => {
      return (
        <div className="w-full h-72 md:h-96 flex-shrink-0" key={idx}>
          <img className="w-full h-full" src={photo.MediaURL} />
        </div>
      );
    });
    return <div className={className}>{result}</div>;
  };

  const DisclosureDetail: React.FC<{
    detailKey: string;
    value: string | number | string[] | number[];
    className: string;
  }> = ({ detailKey, value, className }) => {
    return (
      <div className={className}>
        <div className="flex justify-between">
          {detailKey}
          <span className="font-normal text-right">
            {Array.isArray(value)
              ? value.map((eachValue, idx) => {
                  if (idx + 1 === value.length) {
                    return <span>{eachValue}</span>;
                  } else if ((idx + 1) % 3 === 0) {
                    return (
                      <span>
                        {eachValue}
                        <br />
                      </span>
                    );
                  }
                  return <span>{eachValue}, </span>;
                })
              : value}
          </span>
        </div>
      </div>
    );
  };

  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(setIsModalOpen(false))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-full">
          <div className="flex h-screen justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all h-full w-full xl:w-4/5 min-[1900px]:w-1/2">
                <div className="flex flex-wrap">
                  <div className="w-full shadow-xl sticky top-0 z-10 bg-white pb-4">
                    <div className="flex justify-between w-full px-5 md:px-10 py-8">
                      <div
                        className="font-roboto-serif font-medium text-lg hover:underline cursor-pointer"
                        onClick={() => dispatch(setIsModalOpen(false))}
                      >
                        <FontAwesomeIcon className="w-7 h-7 align-middle" icon={faChevronLeft} />
                        Back
                      </div>
                      <div>
                        <FontAwesomeIcon className="w-7 h-7" icon={faArrowUpRightFromSquare} />
                      </div>
                    </div>
                    <hr className="w-full" />
                    <div className="flex flex-wrap w-full px-5 md:px-10 pt-4">
                      <div className="w-full xl:w-1/2">
                        <div className="font-roboto-serif font-medium text-2xl tracking-widest pt-1">
                          {selectedProperty.SubdivisionName}
                        </div>
                        <div className="font-roboto-serif text-xl tracking-widest pt-2">
                          {selectedProperty.UnparsedAddress}
                        </div>
                        <div className="flex pt-1">
                          <div className="font-roboto-serif text-md tracking-widest">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 me-1 my-auto inline"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                                />
                              </svg>
                              {selectedProperty.BedroomsTotal} Beds
                            </span>
                            <span className="ml-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 me-1 my-auto inline"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                                />
                              </svg>
                              {selectedProperty.BathroomsTotalDecimal} Baths
                            </span>
                            <span className="ml-6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 me-1 my-auto inline"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                                />
                              </svg>
                              {selectedProperty.LivingArea} sqft
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full xl:w-1/2 my-auto">
                        <div className="xl:text-right font-roboto-serif font-medium text-lg tracking-widest">
                          <span className="bg-red-700 rounded-full w-4 h-4 inline-block xl:ml-2 align-middle mr-2"></span>
                          For Sale - Active
                        </div>
                        <div className="xl:text-right font-roboto-serif text-2xl tracking-widest">
                          ${convertHomePriceToString(selectedProperty.ListPrice)}
                        </div>
                      </div>
                      {/*<div className="w-1/2 font-roboto-serif font-medium text-2xl tracking-widest pt-1">*/}
                      {/*  {selectedProperty.subdivisionName}*/}
                      {/*</div>*/}
                      {/*<div className="w-1/2 text-right font-roboto-serif font-medium text-lg tracking-widest">*/}
                      {/*  <span className="bg-red-700 rounded-full w-4 h-4 inline-block ml-2 align-middle mr-2"></span>*/}
                      {/*  For Sale - Active*/}
                      {/*</div>*/}
                    </div>
                    {/*<div className="flex w-full px-10">*/}
                    {/*  <div className="w-1/2 font-roboto-serif text-xl tracking-widest pt-2">*/}
                    {/*    {selectedProperty.unparsedAddress}*/}
                    {/*  </div>*/}
                    {/*  <div className="w-1/2 text-right font-roboto-serif text-2xl tracking-widest">*/}
                    {/*    ${selectedProperty.listPrice}{" "}*/}
                    {/*    <span className="rounded-full bg-red-700 text-base text-white px-2 py-1">*/}
                    {/*      -5.00%*/}
                    {/*    </span>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    {/*<div className="flex w-full px-10 pt-1">*/}
                    {/*  <div className="font-roboto-serif text-md tracking-widest">*/}
                    {/*    <span>*/}
                    {/*      <svg*/}
                    {/*        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        fill="none"*/}
                    {/*        viewBox="0 0 24 24"*/}
                    {/*        strokeWidth="1.5"*/}
                    {/*        stroke="currentColor"*/}
                    {/*        className="w-4 h-4 me-1 my-auto inline"*/}
                    {/*      >*/}
                    {/*        <path*/}
                    {/*          strokeLinecap="round"*/}
                    {/*          strokeLinejoin="round"*/}
                    {/*          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"*/}
                    {/*        />*/}
                    {/*      </svg>*/}
                    {/*      {selectedProperty.bedroomsTotal} Beds*/}
                    {/*    </span>*/}
                    {/*    <span className="ml-6">*/}
                    {/*      <svg*/}
                    {/*        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        fill="none"*/}
                    {/*        viewBox="0 0 24 24"*/}
                    {/*        strokeWidth="1.5"*/}
                    {/*        stroke="currentColor"*/}
                    {/*        className="w-4 h-4 me-1 my-auto inline"*/}
                    {/*      >*/}
                    {/*        <path*/}
                    {/*          strokeLinecap="round"*/}
                    {/*          strokeLinejoin="round"*/}
                    {/*          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"*/}
                    {/*        />*/}
                    {/*      </svg>*/}
                    {/*      {selectedProperty.bathroomsTotalDecimal} Baths*/}
                    {/*    </span>*/}
                    {/*    <span className="ml-6">*/}
                    {/*      <svg*/}
                    {/*        xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        fill="none"*/}
                    {/*        viewBox="0 0 24 24"*/}
                    {/*        strokeWidth="1.5"*/}
                    {/*        stroke="currentColor"*/}
                    {/*        className="w-4 h-4 me-1 my-auto inline"*/}
                    {/*      >*/}
                    {/*        <path*/}
                    {/*          strokeLinecap="round"*/}
                    {/*          strokeLinejoin="round"*/}
                    {/*          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"*/}
                    {/*        />*/}
                    {/*      </svg>*/}
                    {/*      {selectedProperty.livingArea} sqft*/}
                    {/*    </span>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </div>
                  <div className="overflow-hidden relative">
                    <div
                      className="flex transition-transform ease-out duration-500"
                      style={{ transform: `translateX(-${curr * 100}%)` }}
                    >
                      <PropertyPhotosLargeDevice className="hidden md:flex" photos={selectedProperty.Media} />
                      <PropertyPhotosSmallDevice className="md:hidden flex" photos={selectedProperty.Media} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                      <button
                        onClick={prev}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                      </button>
                      <button
                        onClick={next}
                        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap mt-5">
                    <div className="w-[90%] mx-auto xl:w-3/5">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between">
                              <span className="font-roboto-serif text-2xl font-medium">Public Remarks</span>
                              <FontAwesomeIcon
                                className={`w-7 h-7 align-middle transition duration-700 linear ${open ? 'rotate-180' : ''}`}
                                icon={faChevronUp}
                              />
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
                                {selectedProperty.PublicRemarks}
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between  mt-8 transition duration-700 linear">
                              <span className="font-roboto-serif text-2xl font-medium">General Facts</span>
                              <FontAwesomeIcon
                                className={`w-7 h-7 align-middle transition duration-700 linear ${open ? 'rotate-180' : ''}`}
                                icon={faChevronUp}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-500 linear"
                              enterFrom="transform opacity-0"
                              enterTo="transform opacity-100"
                              leave="transition duration-300 linear"
                              leaveFrom="transform opacity-100"
                              leaveTo="transform opacity-0"
                            >
                              <Disclosure.Panel className=" pb-2 pt-2 font-roboto-serif text-base">
                                <div className="flex flex-wrap justify-between font-roboto-serif text-lg">
                                  <DisclosureDetail
                                    detailKey={'MLS#'}
                                    value={selectedProperty.ListingId}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Style'}
                                    value={selectedProperty.ArchitecturalStyle}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Property Type'}
                                    value={selectedProperty.PropertyType}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Property SubType'}
                                    value={selectedProperty.PropertySubType}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Lot Acres'}
                                    value={selectedProperty.LotSizeAcres}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Lot Sq. Ft'}
                                    value={selectedProperty.LotSizeSquareFeet}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Lot Size'}
                                    value={selectedProperty.LotSizeDimensions}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Lot Description'}
                                    value={selectedProperty.LotFeatures}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Living Area Sq. Ft'}
                                    value={selectedProperty.LivingArea}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Price / Sq. Ft'}
                                    value={`$${selectedProperty.ListPrice / selectedProperty.LivingArea}`}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Rooms'}
                                    value={selectedProperty.RoomsTotal}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Levels'}
                                    value={selectedProperty.Levels}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Stories'}
                                    value={selectedProperty.StoriesTotal}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Year Built'}
                                    value={selectedProperty.YearBuilt}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Days On Market'}
                                    value={selectedProperty.DaysOnMarket}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Subdivision'}
                                    value={selectedProperty.SubdivisionName}
                                    className={'w-full md:w-[48%] font-medium border-b-2 py-2'}
                                  />
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between  mt-8 transition duration-700 linear">
                              <span className="font-roboto-serif text-2xl font-medium">Exterior Features</span>
                              <FontAwesomeIcon
                                className={`w-7 h-7 align-middle transition duration-700 linear ${open ? 'rotate-180' : ''}`}
                                icon={faChevronUp}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-500 linear"
                              enterFrom="transform opacity-0"
                              enterTo="transform opacity-100"
                              leave="transition duration-300 linear"
                              leaveFrom="transform opacity-100"
                              leaveTo="transform opacity-0"
                            >
                              <Disclosure.Panel className=" pb-2 pt-2 font-roboto-serif text-base">
                                <div className="flex flex-wrap justify-between font-roboto-serif text-lg">
                                  <DisclosureDetail
                                    detailKey={'Parking'}
                                    value={selectedProperty.ParkingFeatures}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Roof'}
                                    value={selectedProperty.Roof}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Garage Spaces'}
                                    value={selectedProperty.GarageSpaces}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Additional Features'}
                                    value={selectedProperty.ExteriorFeatures}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between  mt-8 transition duration-700 linear">
                              <span className="font-roboto-serif text-2xl font-medium">Interior Features</span>
                              <FontAwesomeIcon
                                className={`w-7 h-7 align-middle transition duration-700 linear ${open ? 'rotate-180' : ''}`}
                                icon={faChevronUp}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-500 linear"
                              enterFrom="transform -translate-y-0 opacity-0"
                              enterTo="transform translate-y-0 opacity-100"
                              leave="transition duration-300 linear"
                              leaveFrom="transform translate-y-0 opacity-100"
                              leaveTo="transform -translate-y-0 opacity-0"
                            >
                              <Disclosure.Panel className=" pb-2 pt-2 font-roboto-serif text-base">
                                <div className="flex flex-wrap justify-between font-roboto-serif text-lg">
                                  <DisclosureDetail
                                    detailKey={'Flooring'}
                                    value={selectedProperty.Flooring}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Kitchen Features'}
                                    value={selectedProperty.RoomKitchenFeatures}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Dining Room'}
                                    value={selectedProperty.RoomDiningRoomFeatures.length > 0 ? 'Yes' : 'No'}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  {selectedProperty.RoomDiningRoomFeatures.length > 0 && (
                                    <DisclosureDetail
                                      detailKey={'Dining Room Features'}
                                      value={selectedProperty.RoomDiningRoomFeatures}
                                      className={'w-full font-medium border-b-2 py-2'}
                                    />
                                  )}
                                  {selectedProperty.RoomMasterBedroomFeatures && (
                                    <DisclosureDetail
                                      detailKey={'Master Bedroom Features'}
                                      value={selectedProperty.RoomMasterBedroomFeatures}
                                      className={'w-full font-medium border-b-2 py-2'}
                                    />
                                  )}
                                  <DisclosureDetail
                                    detailKey={'Appliances'}
                                    value={selectedProperty.Appliances}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Basement'}
                                    value={selectedProperty.Basement.length > 0 ? 'Yes' : 'No'}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  {selectedProperty.Basement.length > 0 && (
                                    <DisclosureDetail
                                      detailKey={'Basement Features'}
                                      value={selectedProperty.Basement}
                                      className={'w-full font-medium border-b-2 py-2'}
                                    />
                                  )}
                                  <DisclosureDetail
                                    detailKey={'Additional Features'}
                                    value={selectedProperty.InteriorFeatures}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between  mt-8 transition duration-700 linear">
                              <span className="font-roboto-serif text-2xl font-medium">Financial Information</span>
                              <FontAwesomeIcon
                                className={`w-7 h-7 align-middle transition duration-700 linear ${open ? 'rotate-180' : ''}`}
                                icon={faChevronUp}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-500 linear"
                              enterFrom="transform -translate-y-0 opacity-0"
                              enterTo="transform translate-y-0 opacity-100"
                              leave="transition duration-300 linear"
                              leaveFrom="transform translate-y-0 opacity-100"
                              leaveTo="transform -translate-y-0 opacity-0"
                            >
                              <Disclosure.Panel className=" pb-2 pt-2 font-roboto-serif text-base">
                                <div className="flex flex-wrap justify-between font-roboto-serif text-lg">
                                  <DisclosureDetail
                                    detailKey={'Tax Year'}
                                    value={selectedProperty.TaxYear}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Annual Taxes'}
                                    value={selectedProperty.TaxAnnualAmount}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'HOA Fee'}
                                    value={selectedProperty.AssociationFee}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between  mt-8 transition duration-700 linear">
                              <span className="font-roboto-serif text-2xl font-medium">Utilities Information</span>
                              <FontAwesomeIcon
                                className={`w-7 h-7 align-middle transition duration-700 linear ${open ? 'rotate-180' : ''}`}
                                icon={faChevronUp}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-500 linear"
                              enterFrom="transform -translate-y-0 opacity-0"
                              enterTo="transform translate-y-0 opacity-100"
                              leave="transition duration-300 linear"
                              leaveFrom="transform translate-y-0 opacity-100"
                              leaveTo="transform -translate-y-0 opacity-0"
                            >
                              <Disclosure.Panel className=" pb-2 pt-2 font-roboto-serif text-base">
                                <div className="flex flex-wrap justify-between font-roboto-serif text-lg">
                                  <DisclosureDetail
                                    detailKey={'Heat'}
                                    value={selectedProperty.Heating}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Gas'}
                                    value={selectedProperty.Gas}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Cooling'}
                                    value={selectedProperty.Cooling}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Water'}
                                    value={selectedProperty.WaterSource}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Utilities'}
                                    value={selectedProperty.Utilities}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                  <DisclosureDetail
                                    detailKey={'Sewer'}
                                    value={selectedProperty.Sewer}
                                    className={'w-full font-medium border-b-2 py-2'}
                                  />
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between  mt-8 transition duration-700 linear">
                              <span className="font-roboto-serif text-2xl font-medium">Map</span>
                              <FontAwesomeIcon
                                className={`w-7 h-7 align-middle transition duration-700 linear ${open ? 'rotate-180' : ''}`}
                                icon={faChevronUp}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-500 linear"
                              enterFrom="transform -translate-y-0 opacity-0"
                              enterTo="transform translate-y-0 opacity-100"
                              leave="transition duration-300 linear"
                              leaveFrom="transform translate-y-0 opacity-100"
                              leaveTo="transform -translate-y-0 opacity-0"
                            >
                              <Disclosure.Panel className=" pb-2 pt-2 font-roboto-serif text-base">
                                <div className="flex flex-wrap justify-between font-roboto-serif text-lg h-96">
                                  <MapContainer
                                    center={{
                                      lat: selectedProperty.Latitude,
                                      lng: selectedProperty.Longitude,
                                    }}
                                    zoom={20}
                                    scrollWheelZoom={true}
                                    style={{ width: '100%', height: '100%' }}
                                  >
                                    <TileLayer
                                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker
                                      position={{
                                        lat: selectedProperty.Latitude,
                                        lng: selectedProperty.Longitude,
                                      }}
                                    />
                                  </MapContainer>
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between  mt-8 transition duration-700 linear">
                              <span className="font-roboto-serif text-2xl font-medium">Mortgage Calculator</span>
                              <FontAwesomeIcon
                                className={`w-7 h-7 align-middle transition duration-700 linear ${open ? 'rotate-180' : ''}`}
                                icon={faChevronUp}
                              />
                            </Disclosure.Button>
                            <Transition
                              enter="transition duration-500 linear"
                              enterFrom="transform -translate-y-0 opacity-0"
                              enterTo="transform translate-y-0 opacity-100"
                              leave="transition duration-300 linear"
                              leaveFrom="transform translate-y-0 opacity-100"
                              leaveTo="transform -translate-y-0 opacity-0"
                            >
                              <Disclosure.Panel className=" pb-2 pt-2 font-roboto-serif text-base">
                                <div className="flex flex-wrap justify-between font-roboto-serif">
                                  <div className="w-full">
                                    <label
                                      htmlFor="mortgage-amount"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Mortgage Amount
                                    </label>
                                    <input
                                      type="text"
                                      name="mortgage-amount"
                                      id="mortgage-amount"
                                      className="block w-full rounded-md border-2 placeholder:text-black font-roboto-serif py-3 ps-3"
                                      placeholder="$80000"
                                    />
                                  </div>
                                  <div className="w-[48%] mt-2">
                                    <label
                                      htmlFor="down-payment"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Down Payment %
                                    </label>
                                    <input
                                      type="text"
                                      name="down-payment"
                                      id="down-payment"
                                      className="block w-full rounded-md border-2 ps-3 placeholder:text-black font-roboto-serif py-3"
                                      placeholder="2%"
                                    />
                                  </div>
                                  <div className="w-[48%] mt-2">
                                    <label
                                      htmlFor="interest-rate"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Interest Rate %
                                    </label>
                                    <input
                                      type="text"
                                      name="interest-rate"
                                      id="interest-rate"
                                      className="block w-full rounded-md border-2 ps-3 placeholder:text-black font-roboto-serif py-3"
                                      placeholder="5%"
                                    />
                                  </div>
                                  <div className="w-full mt-2 pb-4 border-b-2">
                                    <label
                                      htmlFor="mortgage-term"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Term
                                    </label>
                                    <select
                                      id="mortgage-term"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                      <option selected>Choose a country</option>
                                      <option value="US">United States</option>
                                      <option value="CA">Canada</option>
                                      <option value="FR">France</option>
                                      <option value="DE">Germany</option>
                                    </select>
                                  </div>
                                  <div className="w-full font-roboto-serif mt-2">
                                    <div className="flex justify-between">
                                      <div>Total Mortgage Cost:</div>
                                      <div className="text-right">$500</div>
                                    </div>
                                  </div>
                                  <div className="w-full font-roboto-serif mt-2">
                                    <div className="flex justify-between">
                                      <div>Monthly Payment:</div>
                                      <div className="text-right">$500</div>
                                    </div>
                                  </div>
                                </div>
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                      <hr className="mt-4" />
                      <div className="py-6 font-roboto-serif text-xs">
                        <img className="w-20 inline" src="PropertySearch/cjmls.jfif" />
                        The data relating to real estate for sale on this web-site comes in part from the Internet
                        Listing Display database of the CENTRAL JERSEY MULTIPLE LISTING SYSTEM, INC. Real estate
                        listings held by brokerage firms other than this site-owner are marked with the ILD logo. The
                        CENTRAL JERSEY MULTIPLE LISTING SYSTEM, INC. does not warrant the accuracy, quality,
                        reliability, suitability, completeness, usefulness or effectiveness of any information provided.
                        The information being provided is for consumers' personal, non-commercial use and may not be
                        used for any purpose other than to identify properties the consumer may be interested in
                        purchasing or renting.
                        <br />
                        <br />
                        <div className="italic">
                          Copyright 2024, CENTRAL JERSEY MULTIPLE LISTING SYSTEM, INC. All rights reserved. The CENTRAL
                          JERSEY MULTIPLE LISTING SYSTEM, INC retains all rights, title and interest in and to its
                          trademarks, service marks and copyrighted material.
                        </div>
                      </div>
                    </div>
                    <div className="w-full pb-10 xl:w-[35%]">
                      <div className="sticky top-[20%]">
                        <div className="w-[90%] mx-auto font-roboto-serif text-2xl font-medium">Your Agents</div>
                        <div className="w-[90%] md rounded-md overflow-hidden shadow-xl divide-white mx-auto pt-6">
                          <div className="flex flex-wrap">
                            <div className="w-[10%] xl:w-1/5 m-3">
                              <img className="rounded-full mx-auto" src="PropertySearch/avatar.jfif" alt="avatar pic" />
                            </div>
                            <div className="w-[80%] xl:w-2/3 mt-3">
                              <div className="font-roboto-serif font-medium text-xl tracking-widest">
                                Brij & Ronit Sharma
                              </div>
                              <div className="font-roboto-serif text-base">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5 inline mr-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                  />
                                </svg>
                                sharmafamily@gmail.com
                              </div>
                              <div className="font-roboto-serif font-medium text-base">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5 inline mr-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                  />
                                </svg>
                                +1 (732) 395-1368
                              </div>
                            </div>
                            <div className="w-[95%] mx-auto">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3"
                                placeholder="Name"
                              />
                              <input
                                type="email"
                                name="Email Address"
                                id="email"
                                className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3 mt-4"
                                placeholder="Email"
                              />
                              <input
                                type="text"
                                name="Phone"
                                id="phone"
                                className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3 mt-4"
                                placeholder="Phone Number"
                              />
                              <textarea
                                name="message"
                                id="message"
                                className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif resize-none py-3 ps-3 mt-4"
                                placeholder="Message"
                              />
                              <button className="rounded-md w-full my-4 border-2 px-2 py-4 border-black bg-black text-white font-roboto-serif text-sm uppercase hover:bg-white hover:cursor-pointer hover:text-black transition-[all] duration-700">
                                Request Showing
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PropertySearchModal;
