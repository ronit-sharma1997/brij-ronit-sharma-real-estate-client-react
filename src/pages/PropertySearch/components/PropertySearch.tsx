import NavBar from '../../../common/components/NavBar.tsx';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './PropertySearch.css';
import Filter from './Filter.tsx';
import PropertySearchCards from './PropertySearchCards.tsx';
import Map from './Map.tsx';
import SearchBar from '../../../common/components/SearchBar.tsx';
import { useAppSelector } from '../../../App/hook.ts';
import { selectProperties } from '../slices/PropertySearchSlice.tsx';
import PropertySearchModal from './PropertySearchModal.tsx';

const PropertySearch: React.FC = () => {
  const [currentListingId, setCurrentListingId] = useState('');
  const properties = useAppSelector(selectProperties);
  return (
    <div className="h-screen flex flex-col">
      <NavBar
        parentClassName={'w-full flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 text-black border-b-2'}
        hoverStyle={
          'relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
        }
      />
      <div className="flex flex-wrap font-roboto-serif w-full font-medium border-b-2">
        <SearchBar propertySearch={true} />
        <Filter
          className={'my-auto max-[1175px]:px-3 max-[1175px]:py-4 min-[1176px]:ml-4 mr-8 cursor-pointer relative'}
          filterType={'ForSale'}
        />
        <Filter className={'hidden xl:block my-auto py-4 min-[1176px]:py-0 mr-10 relative'} filterType={'Price'} />
        <Filter className={'hidden min-[1305px]:block my-auto mr-10 relative'} filterType={'HomeType'} />
        <Filter className={'hidden min-[1500px]:block my-auto relative'} filterType={'BedBath'} />
        <Filter className={'my-auto py-4 max-[1304px]:block min-[1500px]:hidden relative'} filterType={'All'} />
      </div>
      <div className="w-full flex flex-1 overflow-y-scroll">
        <PropertySearchCards properties={properties} onHover={setCurrentListingId} />
        <Map currentListingId={currentListingId} properties={properties} />
      </div>
      <PropertySearchModal />
    </div>
  );
};
export default PropertySearch;
