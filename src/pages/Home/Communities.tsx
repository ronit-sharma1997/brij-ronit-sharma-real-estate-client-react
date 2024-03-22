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
    </div>
  );
};
export default Communities;
