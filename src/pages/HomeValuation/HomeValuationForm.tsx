import React from 'react';
import { useAppSelector } from '../../App/hook.ts';
import { selectPage } from './slices/HomeValuationSlice.tsx';
import HomeValuationContactInfo from './HomeValuationContactInfo.tsx';
import HomeValuationEstimate from './HomeValuationEstimate.tsx';

const HomeValuationForm: React.FC = () => {
  const page = useAppSelector(selectPage);

  let htmlElementToDisplay;
  if (page === '1') {
    htmlElementToDisplay = <HomeValuationContactInfo />;
  } else {
    htmlElementToDisplay = <HomeValuationEstimate />;
  }

  return htmlElementToDisplay;
};
export default HomeValuationForm;
