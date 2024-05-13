import CityCollection from './CityCollection.tsx';
import { useAppDispatch, useAppSelector } from '../../../App/hook.ts';
import { fetchCollectionResults, selectCollectionResults } from '../slices/CollectionSearchSlice.tsx';
import { useEffect } from 'react';

const UniqueCollections: React.FC = () => {
  const collections = useAppSelector(selectCollectionResults);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        await dispatch(fetchCollectionResults()).unwrap();
      } catch (err) {
        console.error('Failed to retrieve unique collections: ', err);
      }
    };

    fetchResults();
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-between w-full xl:w-[85%] 3xl:w-[63%] px-4 py-5 md:px-10 md:py-10 mx-auto">
      <div className="w-full font-playfair-display tracking-widest text-2xl md:text-3xl">
        Discover UNIQUE Collections
      </div>
      <div className="w-full mt-2 font-roboto-serif text-base md:text-lg tracking-widest">
        Signature Listings just for you
      </div>
      {collections.map((collection, idx) => (
        <CityCollection key={idx} collection={collection} />
      ))}
    </div>
  );
};
export default UniqueCollections;
