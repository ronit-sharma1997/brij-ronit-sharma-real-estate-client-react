import Story from './Story.tsx';

const Stories: React.FC = () => {
  const stories = [
    {
      imgUrl: 'common/invest-in-real-estate.jpg',
      title: 'Is 2024 the right time to invest in real estate?',
      description:
        'Monitoring trends in local and national real estate markets,\n' +
        '              including supply and demand dynamics, interest rates, and\n' +
        '              demographic shifts that could impact investment opportunities.',
      whenPublished: '9 months ago',
      howLongRead: '5 min read',
    },
    {
      imgUrl: 'common/invest-in-real-estate.jpg',
      title: 'Is 2024 the right time to invest in real estate?',
      description:
        'Monitoring trends in local and national real estate markets,\n' +
        '              including supply and demand dynamics, interest rates, and\n' +
        '              demographic shifts that could impact investment opportunities.',
      whenPublished: '9 months ago',
      howLongRead: '5 min read',
    },
    {
      imgUrl: 'common/invest-in-real-estate.jpg',
      title: 'Is 2024 the right time to invest in real estate?',
      description:
        'Monitoring trends in local and national real estate markets,\n' +
        '              including supply and demand dynamics, interest rates, and\n' +
        '              demographic shifts that could impact investment opportunities.',
      whenPublished: '9 months ago',
      howLongRead: '5 min read',
    },
    {
      imgUrl: 'common/invest-in-real-estate.jpg',
      title: 'Is 2024 the right time to invest in real estate?',
      description:
        'Monitoring trends in local and national real estate markets,\n' +
        '              including supply and demand dynamics, interest rates, and\n' +
        '              demographic shifts that could impact investment opportunities.',
      whenPublished: '9 months ago',
      howLongRead: '5 min read',
    },
  ];
  return (
    <div className="flex flex-wrap justify-between w-full xl:w-[85%] 2xl:w-[63%] px-4 py-5 md:px-10 md:py-10 mx-auto">
      <div className="w-full font-playfair-display text-2xl tracking-widest md:text-4xl">Read the LATEST Stories</div>
      <div className="w-full mt-2 font-roboto-serif text-md tracking-widest md:text-xl">
        Up-to-Date News from your fellow real estate experts
      </div>
      {stories.map((story, idx) => (
        <Story
          key={idx}
          imgUrl={story.imgUrl}
          howLongRead={story.howLongRead}
          whenPublished={story.whenPublished}
          description={story.description}
          title={story.title}
        />
      ))}
      <div className="w-full text-center mt-24">
        <button className="w-full md:w-48 rounded-none border-2 px-2 py-4 border-black font-roboto-serif text-sm uppercase text-black hover:bg-black hover:cursor-pointer hover:text-white transition-[all] duration-700 mr-9">
          Show All
        </button>
      </div>
    </div>
  );
};
export default Stories;
