import Community from './Community.tsx';
const Communities: React.FC = () => {
  return (
    <div className="flex flex-wrap bg-black pt-5 md:pt-10">
      <div className="w-full font-playfair-display text-2xl tracking-widest text-white text-center md:text-4xl mb-10">
        POPULAR Middlesex County Communities
      </div>
      <Community cityImgUrl={'Home/iselin.jpg'} cityName={'Iselin'} />
      <Community cityImgUrl={'Home/woodbridge.jpg'} cityName={'Woodbridge'} />
      <Community cityImgUrl={'Home/metuchen.webp'} cityName={'Metuchen'} />
      <Community cityImgUrl={'Home/edison.jpg'} cityName={'Edison'} />
      <Community cityImgUrl={'Home/piscataway.jpg'} cityName={'Piscataway'} />
      <Community cityImgUrl={'Home/new-brunswick.jpg'} cityName={'New Brunswick'} />
      <Community cityImgUrl={'Home/perth-amboy.JPG'} cityName={'Perth Amboy'} />
      <div className="w-full min-h-[287px] md:w-1/2 xl:w-1/3 2xl:w-1/5 relative">
        <div className="rounded-none border-2 px-2 py-4 border-white font-roboto-serif text-sm uppercase text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hover:bg-white hover:cursor-pointer hover:text-black transition-[all] duration-700">
          Show all Areas
        </div>
      </div>
    </div>
  );
};
export default Communities;
