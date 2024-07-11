import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard: React.FC<{
  imgUrl: string;
  title: string;
  description: string;
  whenPublished: string;
  howLongRead: string;
}> = ({ imgUrl, title, description, whenPublished, howLongRead }) => {
  return (
    <Link
      className="w-full mt-6 md:mt-12 md:w-[47%] lg:w-[32%] 2xl:w-[31%] rounded overflow-hidden shadow-lg divide-white cursor-pointer"
      to={title.toLowerCase().replaceAll(' ', '-')}
    >
      <div>
        <img className="w-full h-80" src={imgUrl} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-roboto-serif font-semibold text-lg md:text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base font-roboto-serif">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 font-roboto-serif">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2">
            {whenPublished}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mb-2">
            {howLongRead}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default StoryCard;
