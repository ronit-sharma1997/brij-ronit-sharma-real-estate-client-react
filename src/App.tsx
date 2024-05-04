import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PropertySearch from './pages/PropertySearch';
import { Route, Routes } from 'react-router-dom';
import Stories from './common/components/Stories.tsx';
import StoryPage from './pages/Stories/StoryPage.tsx';
import ContactUs from './pages/ContactUs/ContactUs.tsx';
import HomeValuation from './pages/HomeValuation/HomeValuation.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/property-search" element={<PropertySearch />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/stories" element={<StoryPage />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/home-valuation" element={<HomeValuation />}></Route>
      </Routes>
    </>
  );
}

export default App;
