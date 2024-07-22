import {
  getHomeValuation,
  selectAddress,
  selectEmail,
  selectName,
  selectPhone,
  selectStatus,
  setAddress,
  setEmail,
  setName,
  setPhone,
} from './slices/HomeValuationSlice.tsx';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hook.ts';
import { setStatus } from '../ContactUs/slices/ContactUsSlice.tsx';

const HomeValuationContactInfo: React.FC = () => {
  const name = useAppSelector(selectName);
  const email = useAppSelector(selectEmail);
  const phone = useAppSelector(selectPhone);
  const address = useAppSelector(selectAddress);
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();

  const formState =
    status == 'failed' ? (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline"> Something seriously bad happened.</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => dispatch(setStatus('idle'))}>
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    ) : (
      <div></div>
    );

  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <div className="font-playfair-display text-2xl tracking-widest md:text-4xl">Get a FREE Home Estimate</div>
          <div className="mt-2 mb-10 font-roboto-serif text-md tracking-widest md:text-xl">Complete the form below</div>
        </div>
        <form className="group" noValidate>
          <input
            type="text"
            name="name"
            id="name"
            className="shadow-sm block w-full md:w-[35rem] border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3 peer/name invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            placeholder="Name"
            required
            pattern="[A-Za-z]+"
            value={name}
            onChange={(event) => {
              dispatch(setName(event.target.value));
            }}
          />
          <span className="mt-1 font-roboto-serif hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]/name:block">
            Please enter a valid name
          </span>
          <input
            type="email"
            name="Email Address"
            id="email"
            className="shadow-sm block w-full md:w-[35rem] border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3 mt-4 peer/email invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            placeholder="Email"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            value={email}
            onChange={(event) => {
              dispatch(setEmail(event.target.value));
            }}
          />
          <span className="mt-1 font-roboto-serif hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]/email:block">
            Please enter a valid email address
          </span>
          <input
            type="tel"
            name="Phone"
            id="phone"
            className="shadow-sm block w-full md:w-[35rem] border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3 mt-4 peer/phone invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            required
            value={phone}
            onChange={(event) => {
              dispatch(setPhone(event.target.value));
            }}
          />
          <span className="mt-1 font-roboto-serif hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]/phone:block">
            Please enter a valid phone number
          </span>
          <input
            type="text"
            name="address"
            id="address"
            className="shadow-sm block w-full md:w-[35rem] border-2 placeholder:text-black rounded-md font-roboto-serif py-3 ps-3 mt-4 peer/address invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            placeholder="Address"
            pattern="(?=\S*\s)(?=[^a-zA-Z]*[a-zA-Z])(?=\D*\d)[a-zA-Z\d\s',.#/-]*"
            required
            value={address}
            onChange={(event) => {
              dispatch(setAddress(event.target.value));
            }}
          />
          <span className="mt-1 font-roboto-serif hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]/address:block">
            Please enter a valid address
          </span>
          <button
            onClick={(event) => {
              event.preventDefault();
              dispatch(getHomeValuation());
            }}
            className="rounded-md w-full md:w-[35rem] my-4 border-2 px-2 py-4 border-white bg-black text-white font-roboto-serif text-sm uppercase hover:bg-white hover:cursor-pointer hover:text-black hover:border-black transition-[all] duration-700 group-invalid:pointer-events-none group-invalid:opacity-30"
          >
            Get Home Valuation
          </button>
          {formState}
        </form>
      </div>
    </>
  );
};

export default HomeValuationContactInfo;
