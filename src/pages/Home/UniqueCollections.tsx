import Collection from './Collection.tsx';

const UniqueCollections: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between w-full xl:w-[85%] 3xl:w-[63%] px-4 py-5 md:px-10 md:py-10 mx-auto">
      <div className="w-full font-playfair-display tracking-widest text-2xl md:text-3xl">
        Discover UNIQUE Collections
      </div>
      <div className="w-full mt-2 font-roboto-serif text-base md:text-lg tracking-widest">
        Signature Listings just for you
      </div>
      <Collection city={'Iselin'} />
      <Collection city={'Woodbridge Proper'} />
      <Collection city={'Metuchen'} />
      <Collection city={'Piscataway'} />
    </div>
  );
};
export default UniqueCollections;
