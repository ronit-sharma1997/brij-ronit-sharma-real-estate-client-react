import NavBar from '../../common/components/NavBar.tsx';

const Home: React.FC = () => {
  return (
    <NavBar
      parentClassName={
        'flex flex-wrap justify-between px-5 py-5 md:px-10 md:py-5 bg-gradient-to-b from-black text-white'
      }
    />
  );
};
export default Home;
