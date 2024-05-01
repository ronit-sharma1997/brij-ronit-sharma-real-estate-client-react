import { Link } from 'react-router-dom';

const NavLinks: React.FC<{
  className: string;
  childrenMargin: string;
  hoverStyle: string;
  propertySearch: React.ReactElement;
}> = ({ className, childrenMargin, hoverStyle, propertySearch }) => {
  return (
    <div className={className}>
      {/* Property Search Navigation Link with Dropdown */}
      {propertySearch}
      <div
        className={`font-roboto-serif uppercase font-medium text-base my-auto mx-7 cursor-pointer ${childrenMargin}`}
      >
        <Link to="/about-us">
          <span className={`${hoverStyle}`}>About Us</span>
        </Link>
      </div>
      <span
        className={`font-roboto-serif uppercase font-medium text-base my-auto mx-7 cursor-pointer ${childrenMargin}`}
      >
        <Link to="/stories">
          <span className={`${hoverStyle}`}>Stories</span>
        </Link>
      </span>

      <div
        className={`font-roboto-serif uppercase font-medium text-base my-auto mx-7 cursor-pointer ${childrenMargin}`}
      >
        <Link to="/contact-us">
          <span className={`${hoverStyle}`}>Contact</span>
        </Link>
      </div>

      <div
        className={`font-roboto-serif uppercase font-medium text-base my-auto mx-7 cursor-pointer ${childrenMargin}`}
      >
        <Link to="/home-valuation">
          <span className={`${hoverStyle}`}>Home Valuation</span>
        </Link>
      </div>
    </div>
  );
};
export default NavLinks;
