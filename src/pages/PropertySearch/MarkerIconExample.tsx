import React from 'react';

const MarkerIconExample: React.FC<{
  price: string;
  propertyId: string;
  currentListingId: string;
  bgColorActive: string;
  bgColor: string;
}> = ({ price, propertyId, currentListingId, bgColorActive, bgColor }) => {
  return (
    <div
      className={`${propertyId === currentListingId ? bgColorActive : bgColor} rounded-full text-white text-center w-[45px] h-[20px]`}
      onClick={() => console.log('button 1 clicked')}
    >
      {price}
    </div>
  );
};

export default MarkerIconExample;
