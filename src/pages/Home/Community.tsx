const Community: React.FC<{ cityImgUrl: string; cityName: string }> = ({ cityImgUrl, cityName }) => {
  return (
    <div className="group relative w-full h-64 md:h-72 md:w-1/2 xl:w-1/3 2xl:w-1/5">
      <img className="w-full h-full" src={cityImgUrl} alt={`${cityName} Picture`} />
      <div className="absolute top-0 w-full h-full bg-black opacity-40 group-hover:opacity-0 transition-[all] duration-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-1/3 transition-[all] duration-700">
        <div className="text-white font-roboto-serif font-medium text-xl md:text-2xl">{cityName}</div>
      </div>
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-2/3 opacity-0 flex group-hover:top-2/3 group-hover:opacity-100 transition-[all] duration-700">
        <div className="rounded-full border-2 px-3 py-2 border-white text-black uppercase font-roboto-serif font-bold bg-white text-xs md:text-sm me-3 hover:cursor-pointer">
          For Sale
        </div>
        <div className="rounded-full border-2 px-3 py-2 border-white text-black uppercase font-roboto-serif font-bold bg-white text-xs md:text-sm hover:cursor-pointer">
          For Rent
        </div>
      </div>
    </div>
  );
};
export default Community;
