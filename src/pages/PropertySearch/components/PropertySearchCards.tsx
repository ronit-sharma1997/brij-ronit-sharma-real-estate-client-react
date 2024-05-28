import { ChevronDownIcon } from '@heroicons/react/20/solid';
import PropertySearchCard from './PropertySearchCard.tsx';
import React from 'react';
import { useAppSelector } from '../../../App/hook.ts';
import { selectPropertySearchStatus } from '../slices/PropertySearchSlice.tsx';
import PropertySearchCardLoading from './PropertySearchCardLoading.tsx';

const PropertySearchCards: React.FC<{ properties: object[]; onHover: (listingId: string) => void }> = ({
  properties,
  onHover,
}) => {
  const status = useAppSelector(selectPropertySearchStatus);
  return (
    <div className="w-full min-[1200px]:w-[50%] 2xl:w-[40%] 4xl:w-[35%] font-roboto-serif font-medium p-4">
      <div className="flex justify-between">
        {properties.length > 0 && <div>{properties.length} Results</div>}
        <div className="cursor-pointer">
          Sort By: Highest Price
          <ChevronDownIcon className="ml-1 h-5 w-5 inline-block" aria-hidden="true" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-4">
        {properties.map((property) => (
          <PropertySearchCard
            key={property.ListingId}
            subdivision={property.SubdivisionName}
            address={property.UnparsedAddress}
            imgUrl={property.Media ? property.Media[0].MediaURL : 'PropertySearch/image-not-available.png'}
            beds={property.BedroomsTotal}
            baths={property.BathroomsTotalInteger}
            sqFt={property.LivingArea}
            listPrice={property.ListPrice}
            width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'}
            listingId={property.ListingId}
            onHover={onHover}
          />
        ))}
        {status === 'loading' && (
          <>
            <PropertySearchCardLoading width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'} />
            <PropertySearchCardLoading width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'} />
            <PropertySearchCardLoading width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'} />
            <PropertySearchCardLoading width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'} />
            <PropertySearchCardLoading width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'} />
            <PropertySearchCardLoading width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'} />
            <PropertySearchCardLoading width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'} />
            <PropertySearchCardLoading width={'w-full min-[600px]:w-[48%] min-[840px]:w-[32%] min-[1200px]:w-[48%]'} />
          </>
        )}
      </div>
    </div>
  );
};
export default PropertySearchCards;
