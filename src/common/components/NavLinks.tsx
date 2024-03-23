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
        <span className={`${hoverStyle}`}>About Us</span>
      </div>
      <span
        className={`font-roboto-serif uppercase font-medium text-base my-auto mx-7 cursor-pointer ${childrenMargin}`}
      >
        <span className={`${hoverStyle}`}>Stories</span>
      </span>
      <div
        className={`font-roboto-serif uppercase font-medium text-base my-auto mx-7 cursor-pointer ${childrenMargin}`}
      >
        <span className={`${hoverStyle}`}>Contact</span>
      </div>
      <div
        className={`font-roboto-serif uppercase font-medium text-base my-auto mx-7 cursor-pointer ${childrenMargin}`}
      >
        <span className={`${hoverStyle}`}>Home Valuation</span>
      </div>
    </div>
  );
};
export default NavLinks;
