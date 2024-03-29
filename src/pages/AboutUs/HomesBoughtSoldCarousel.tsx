import HomesBoughtSoldCard from './HomesBoughtSoldCard.tsx';
import { useState } from 'react';

export type HomeProps = {
  mediaUrl: string;
  subdivisionName: string;
  unparsedAddress: string;
  closePrice: number;
  representedBuyer: boolean;
  representedSeller: boolean;
  bedroomsTotal: number;
  bathroomsTotal: number;
  livingArea: number;
};
const HomesBoughtSoldCarousel: React.FC<{ homes: HomeProps[] }> = ({ homes }) => {
  const [curr, setCurr] = useState(0);
  const [translateX, setTranslateX] = useState(102);

  const nextIndex = (currentIndex: number, forward: boolean): number => {
    const screen = window.innerWidth;
    const delta = screen < 768 ? 1 : screen < 1024 ? 2 : screen < 1280 ? 2 : screen < 1536 ? 3 : screen < 1600 ? 4 : 4;
    setTranslateX(delta === 1 ? 102 : delta === 2 ? 106 : 102);
    if (forward) {
      return currentIndex === Math.ceil(homes.length / delta) - 1 ? 0 : currentIndex + 1;
    } else {
      return currentIndex === 0 ? Math.ceil(homes.length / delta) - 1 : currentIndex - 1;
    }
  };
  const prev = () => setCurr((curr) => nextIndex(curr, false));

  const next = () => setCurr((curr) => nextIndex(curr, true));
  return (
    <div className="w-full mt-10">
      <div className="overflow-x-hidden pb-5 px-1 relative">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(calc(-1 * ${curr * translateX}%)` }}
        >
          {homes.map((home, idx) => (
            <HomesBoughtSoldCard home={home} key={idx} />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="p-1 rounded-full shadow bg-black/20 text-gray-800 hover:bg-white">
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
          <button className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" onClick={next}>
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
    </div>
  );
};
export default HomesBoughtSoldCarousel;
