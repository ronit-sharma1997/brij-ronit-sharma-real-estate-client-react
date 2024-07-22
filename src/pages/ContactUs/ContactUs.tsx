import NavBar from '../../common/components/NavBar.tsx';
import Footer from '../../common/components/Footer.tsx';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../App/hook.ts';
import {
  selectEmail,
  selectName,
  selectPhone,
  selectMessage,
  selectStatus,
  setEmail,
  setName,
  setPhone,
  setMessage,
  sendMessage,
  setStatus,
} from './slices/ContactUsSlice.tsx';
const ContactUs: React.FC = () => {
  const name = useAppSelector(selectName);
  const email = useAppSelector(selectEmail);
  const phone = useAppSelector(selectPhone);
  const message = useAppSelector(selectMessage);
  const status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();

  console.log(status);

  const formState =
    status == 'idle' || status == 'loading' ? (
      <div></div>
    ) : status == 'succeeded' ? (
      <div
        className="bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded relative font-roboto-serif"
        role="alert"
      >
        <strong className="font-bold">Message Sent!</strong>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => dispatch(setStatus('idle'))}>
          <svg
            className="fill-current h-6 w-6 text-green-500"
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
    );

  return (
    <>
      <NavBar
        parentClassName={'flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 text-black border-b-2'}
        hoverStyle={
          'relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
        }
      />
      <div className="flex flex-wrap bg-black">
        {/*Left Side - Nice Picture*/}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-[30vh] md:h-[50vh] 2xl:h-[85vh] 3xl:h-[90vh]"
            src="common/father-son.jpg"
            alt="Father & Son"
          />
        </div>
        <div className="w-full lg:w-1/2 relative my-auto md:pt-10">
          <div className="flex flex-wrap w-4/5 xl:w-1/2 mx-auto pt-5 md:pt-0">
            <div className="flex w-full">
              <div className="max-3xl:hidden font-style-script text-[100px] tracking-widest text-center text-white">
                BR
              </div>
              <div>
                <div className="w-full font-playfair-display tracking-wide text-2xl md:text-3xl text-white">
                  Brij & Ronit Sharma
                </div>
                <div className="w-full font-roboto-serif tracking-wide text-xl md:text-2xl uppercase mt-3 text-white">
                  Realtor Associates
                </div>
                <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl text-white">
                  thesharmafamily@gmail.com
                </div>
                <div className="w-full font-roboto-serif tracking-wide text-base md:text-xl text-white">
                  +1 (732)-395-1368
                </div>
              </div>
            </div>

            <div className="w-full mt-6">
              <form className="group" noValidate>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif text-base md:text-xl py-1.5 md:py-3 ps-3 peer/name invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
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
                  className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif text-base md:text-xl py-1.5 md:py-3 ps-3 mt-4 peer/email invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
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
                  type="text"
                  name="Phone"
                  id="phone"
                  className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif text-base md:text-xl py-1.5 md:py-3 ps-3 mt-4 peer/phone invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  pattern="[0-9]{10}"
                  onChange={(event) => {
                    dispatch(setPhone(event.target.value));
                  }}
                />
                <span className="mt-1 font-roboto-serif hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]/phone:block">
                  Please enter a valid phone number
                </span>
                <textarea
                  name="message"
                  id="message"
                  className="shadow-sm block w-full border-2 placeholder:text-black rounded-md font-roboto-serif resize-none text-base md:text-xl py-1.5 md:py-3 ps-3 mt-4 peer/message invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(event) => {
                    dispatch(setMessage(event.target.value));
                  }}
                />
                <span className="mt-1 font-roboto-serif hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]/message:block">
                  Please enter a valid message
                </span>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(sendMessage());
                  }}
                  className="rounded-md w-full my-4 border-2 px-2 py-3 md:py-4 border-white bg-black text-white font-roboto-serif text-sm uppercase hover:bg-white hover:cursor-pointer hover:text-black transition-[all] duration-700 group-invalid:pointer-events-none group-invalid:opacity-30"
                >
                  Send Message
                </button>
                {formState}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
