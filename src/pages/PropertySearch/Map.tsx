import { MapContainer, Popup, TileLayer } from 'react-leaflet';
import { convertHomePriceToMarker } from '../../common/utils/HomeData.tsx';
import PropertySearchCard from './PropertySearchCard.tsx';
import React, { useRef } from 'react';
import EnhancedMarker from './EnhancedMarker.tsx';
import MarkerIconExample from './MarkerIconExample.tsx';

const Map: React.FC<{ properties: object[]; currentListingId: string }> = ({ properties, currentListingId }) => {
  const mapRef = useRef(null);
  return (
    <div className="w-0 min-[1200px]:w-[50%] 2xl:w-[60%] 4xl:w-[65%] sticky top-0">
      <MapContainer
        bounds={properties.map((property) => [property.Latitude, property.Longitude])}
        zoom={15}
        ref={mapRef}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property, idx) => {
          return (
            <EnhancedMarker
              key={idx}
              eventHandlers={{}}
              position={{ lat: property.Latitude, lng: property.Longitude }}
              icon={
                <MarkerIconExample
                  price={convertHomePriceToMarker(property.ListPrice)}
                  propertyId={property.ListingId}
                  currentListingId={currentListingId}
                  bgColor={'bg-red-700'}
                  bgColorActive={'bg-green-700'}
                />
              }
            >
              <Popup maxWidth={400}>
                <PropertySearchCard
                  imgUrl={property.Media[0].MediaURL}
                  sqFt={property.LivingArea}
                  beds={property.BedroomsTotal}
                  baths={property.BathroomsTotalDecimal}
                  address={property.UnparsedAddress}
                  subdivision={property.SubdivisionName}
                  listPrice={property.ListPrice}
                  width={'w-full'}
                  onHover={() => {
                    return;
                  }}
                  listingId={''}
                />
              </Popup>
            </EnhancedMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default Map;