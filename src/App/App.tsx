import './App.css';
import Home from '../pages/Home/components';
import AboutUs from '../pages/AboutUs';
import PropertySearch from '../pages/PropertySearch/components';
import { Route, Routes } from 'react-router-dom';
import StoryPage from '../pages/Stories/StoryPage.tsx';
import ContactUs from '../pages/ContactUs/ContactUs.tsx';
import HomeValuation from '../pages/HomeValuation/HomeValuation.tsx';
import StoryFullArticle from '../common/components/StoryFullArticle.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/property-search" element={<PropertySearch />}></Route>
        <Route path="/property-search/:city" element={<PropertySearch />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/stories" element={<StoryPage />}></Route>
        <Route path="/stories/:storyTitle" element={<StoryFullArticle />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/home-valuation" element={<HomeValuation />}></Route>
      </Routes>
    </>
  );
}

export default App;
