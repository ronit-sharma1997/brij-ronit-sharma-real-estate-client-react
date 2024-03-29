import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);

const OurNumbers: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const yoeRef = useRef(null);
  const yoePlusRef = useRef(null);
  const homesBoughtSoldNumRef = useRef(null);
  const homesBoughtSoldPlusRef = useRef(null);
  const clientsSatisfiedNumRef = useRef(null);
  const clientsSatisfiedPercentRef = useRef(null);
  const yoeLabelRef = useRef(null);
  const homesBoughtSoldLabelRef = useRef(null);
  const clientsSatisfiedLabelRef = useRef(null);
  let countUpAnim;

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  // you don't have to import this way, but this works best for next.js
  async function initCountUp(element: React.MutableRefObject<any>, endVal: number) {
    const countUpModule = await import('countup.js');
    countUpAnim = new countUpModule.CountUp(element, endVal);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  useGSAP(() => {
    const yoeRefElement = yoeRef.current;
    const yoePlusRefElement = yoePlusRef.current;
    const yoeLabelRefElement = yoeLabelRef.current;
    const homesBoughtSoldNumRefElement = homesBoughtSoldNumRef.current;
    const homesBoughtSoldPlusRefElement = homesBoughtSoldPlusRef.current;
    const homesBoughtSoldLabelRefElement = homesBoughtSoldLabelRef.current;
    const clientsSatisfiedNumRefElement = clientsSatisfiedNumRef.current;
    const clientsSatisfiedPercentRefElement = clientsSatisfiedPercentRef.current;
    const clientsSatisfiedLabelRefElement = clientsSatisfiedLabelRef.current;
    // years of Experience Transitions
    gsap.fromTo(
      yoeRefElement,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: yoeRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
          onEnter: () => initCountUp(yoeRefElement, 6),
        },
      },
    );
    gsap.fromTo(
      yoePlusRefElement,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: yoeRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
        },
      },
    );
    gsap.fromTo(
      yoeLabelRefElement,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: yoeRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
        },
      },
    );

    // homes bought/sold Transitions
    gsap.fromTo(
      homesBoughtSoldNumRefElement,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: homesBoughtSoldNumRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
          onEnter: () => initCountUp(homesBoughtSoldNumRefElement, 30),
        },
      },
    );
    gsap.fromTo(
      homesBoughtSoldPlusRefElement,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: homesBoughtSoldNumRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
        },
      },
    );
    gsap.fromTo(
      homesBoughtSoldLabelRefElement,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: homesBoughtSoldNumRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
        },
      },
    );

    // clients satisfied Transitions
    gsap.fromTo(
      clientsSatisfiedNumRefElement,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: clientsSatisfiedNumRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
          onEnter: () => initCountUp(clientsSatisfiedNumRefElement, 100),
        },
      },
    );
    gsap.fromTo(
      clientsSatisfiedPercentRefElement,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: clientsSatisfiedNumRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
        },
      },
    );
    gsap.fromTo(
      clientsSatisfiedLabelRefElement,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: clientsSatisfiedNumRefElement,
          start: 'top 80%',
          markers: true,
          once: true,
        },
      },
    );
  });
  return (
    <div className="flex flex-wrap bg-black pt-10 pb-20 lg:pb-36">
      <div className="w-full font-playfair-display tracking-widest text-white text-center text-2xl md:text-3xl mb-14">
        OUR Numbers
      </div>
      <div className="w-full lg:w-1/3">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="font-roboto-serif text-7xl text-white text-center" ref={yoeRef}>
              0
            </div>
            <div className="font-roboto-serif text-7xl text-white" ref={yoePlusRef}>
              +
            </div>
          </div>
          <div className="font-roboto-serif text-white text-xl md:text-2xl text-center mt-4" ref={yoeLabelRef}>
            Years Of Experience
          </div>
        </div>
      </div>
      <div className="w-full mt-8 lg:w-1/3 lg:mt-0">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="font-roboto-serif text-7xl text-white text-center" ref={homesBoughtSoldNumRef}>
              1
            </div>
            <div className="font-roboto-serif text-7xl text-white text-center" ref={homesBoughtSoldPlusRef}>
              +
            </div>
          </div>
          <div
            className="font-roboto-serif text-white text-xl md:text-2xl text-center mt-4"
            ref={homesBoughtSoldLabelRef}
          >
            Homes Bought/Sold
          </div>
        </div>
      </div>
      <div className="w-full mt-8 lg:w-1/3 lg:mt-0">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="font-roboto-serif text-7xl text-white text-center" ref={clientsSatisfiedNumRef}>
              1
            </div>
            <div className="font-roboto-serif text-7xl text-white text-center" ref={clientsSatisfiedPercentRef}>
              %
            </div>
          </div>
          <div
            className="font-roboto-serif text-white text-xl md:text-2xl text-center mt-4"
            ref={clientsSatisfiedLabelRef}
          >
            Clients Satisfied
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
