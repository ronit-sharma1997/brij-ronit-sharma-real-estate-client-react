import StoryCard from './StoryCard.tsx';
import { useAppSelector } from '../../App/hook.ts';
import { selectStories } from '../slices/StoriesSlice.tsx';

const Stories: React.FC = () => {
  const stories = useAppSelector(selectStories);
  return (
    <div className="flex flex-wrap justify-between w-full xl:w-[85%] 3xl:w-[63%] px-4 py-5 md:px-10 md:py-10 mx-auto">
      <div className="w-full font-playfair-display tracking-widest text-2xl md:text-3xl">Read the LATEST Stories</div>
      <div className="w-full mt-2 font-roboto-serif tracking-widest text-base md:text-xl ">
        Up-to-Date News from your fellow real estate experts
      </div>
      {stories.map((story, idx) => (
        <StoryCard
          key={idx}
          imgUrl={story.imgUrl}
          howLongRead={story.howLongRead}
          whenPublished={story.whenPublished}
          description={story.description}
          title={story.title}
        />
      ))}
    </div>
  );
};
export default Stories;
