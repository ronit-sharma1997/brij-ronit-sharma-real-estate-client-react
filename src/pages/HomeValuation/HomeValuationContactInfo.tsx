import {
  selectAddress,
  selectEmail,
  selectName,
  selectPhone,
  setAddress,
  setEmail,
  setName,
  setPage,
  setPhone,
} from './slices/HomeValuationSlice.tsx';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hook.ts';

const HomeValuationContactInfo: React.FC = () => {
  const name = useAppSelector(selectName);
  const email = useAppSelector(selectEmail);
  const phone = useAppSelector(selectPhone);
  const address = useAppSelector(selectAddress);

  const dispatch = useAppDispatch();

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
            pattern="[a-z]+"
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
            onClick={() => dispatch(setPage('2'))}
            className="rounded-md w-full md:w-[35rem] my-4 border-2 px-2 py-4 border-white bg-black text-white font-roboto-serif text-sm uppercase hover:bg-white hover:cursor-pointer hover:text-black hover:border-black transition-[all] duration-700 group-invalid:pointer-events-none group-invalid:opacity-30"
          >
            Get Home Valuation
          </button>
        </form>
      </div>
    </>
  );
};

export default HomeValuationContactInfo;
