import NavBar from './NavBar.tsx';
import Footer from './Footer.tsx';
import { useParams } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectStory } from '../slices/StoriesSlice.tsx';
import Markdown from 'react-markdown';
import style from './markdown-styles.module.css';

const StoryFullArticle: React.FC = () => {
  const { storyTitle } = useParams();
  const story = useSelector((state) => selectStory(state, storyTitle.replaceAll('-', ' ')));

  return (
    <>
      <NavBar
        parentClassName={'flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 text-black border-b-2'}
        hoverStyle={
          'relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'
        }
      />
      <div className="flex flex-wrap w-[30%] mx-auto mt-10">
        <div className="w-full font-playfair-display font-medium tracking-wide text-2xl md:text-3xl">{story.title}</div>

        <div className="inline-flex w-full font-playfair-display text-lg md:text-xl mt-5">
          <img className="w-14 rounded-full" src="/PropertySearch/avatar.jfif" alt="avatar pic" />
          <div className="ml-2">
            <div>Brij & Ronit Sharma</div>
            <div className="text-sm font-roboto-serif">
              {story.whenPublished} · {story.howLongRead}
            </div>
          </div>
        </div>
        <img className="w-full h-96 mt-5" src={`/${story.imgUrl}`} alt="Sunset in the mountains" />
        <Markdown className={style.reactMarkDown}>{story.article}</Markdown>
      </div>
      <hr className="w-full xl:w-[85%] 3xl:w-[63%] mx-auto mt-5" />
      <Footer />
    </>
  );
};

export default StoryFullArticle;
