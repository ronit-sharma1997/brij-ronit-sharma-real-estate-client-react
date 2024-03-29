import HomesBoughtSoldCarousel from './HomesBoughtSoldCarousel.tsx';

const HomesBoughtSold: React.FC = () => {
  const homes = [
    {
      mediaUrl: 'AboutUs/11-marine-place.webp',
      subdivisionName: 'LONG BRANCH',
      unparsedAddress: '11 Marine Pl<br/>Long Branch, NJ 07740',
      closePrice: 1237500,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 2,
      bathroomsTotal: 2,
      livingArea: 1808,
    },
    {
      mediaUrl: 'AboutUs/91-ridge-road.webp',
      subdivisionName: 'BRIARWOOD',
      unparsedAddress: '91 Ridge Rd<br/>Rumson, NJ 07760',
      closePrice: 1930000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 5,
      bathroomsTotal: 6,
      livingArea: 3124,
    },
    {
      mediaUrl: 'AboutUs/133-leonardine-ave.jpg',
      subdivisionName: 'HERITAGE HILLS',
      unparsedAddress: '133 Leonardine Ave<br/>South River, NJ 08882',
      closePrice: 500000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 4,
      bathroomsTotal: 3,
      livingArea: 2401,
    },
    {
      mediaUrl: 'AboutUs/204-ridgley-ave.webp',
      subdivisionName: 'BERKLEY TERRACE',
      unparsedAddress: '204 Ridgley Ave<br/>Iselin, NJ 08830',
      closePrice: 500000,
      representedBuyer: false,
      representedSeller: true,
      bedroomsTotal: 3,
      bathroomsTotal: 1,
      livingArea: 1392,
    },
    {
      mediaUrl: 'AboutUs/28-silzer-ave.webp',
      subdivisionName: 'ISELIN',
      unparsedAddress: '28 Silzer Ave<br/>Iselin, NJ 08830',
      closePrice: 290000,
      representedBuyer: false,
      representedSeller: true,
      bedroomsTotal: 3,
      bathroomsTotal: 2,
      livingArea: 1392,
    },
    {
      mediaUrl: 'AboutUs/343-union-street.webp',
      subdivisionName: 'JERSEY CITY',
      unparsedAddress: '343 Union St<br/>Jersey City, NJ',
      closePrice: 550000,
      representedBuyer: false,
      representedSeller: true,
      bedroomsTotal: 4,
      bathroomsTotal: 3,
      livingArea: 1728,
    },
    {
      mediaUrl: 'AboutUs/112-trento-street.jpg',
      subdivisionName: 'ISELIN',
      unparsedAddress: '112 Trento St<br/>Iselin, NJ 08830',
      closePrice: 500000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 3,
      bathroomsTotal: 2,
      livingArea: 1433,
    },
    {
      mediaUrl: 'AboutUs/92-plymouth-drive.webp',
      subdivisionName: 'ISELIN',
      unparsedAddress: '92 Plymouth Dr<br/>Iselin, NJ 08830',
      closePrice: 295000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 4,
      bathroomsTotal: 3,
      livingArea: 1075,
    },
    {
      mediaUrl: 'AboutUs/15-helene-street.jpg',
      subdivisionName: 'MATCHPONLX HILLS',
      unparsedAddress: '15 Helene St<br/>Old Bridge, NJ 08857',
      closePrice: 525000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 4,
      bathroomsTotal: 3,
      livingArea: 2260,
    },
    {
      mediaUrl: 'AboutUs/16-hallo-street.webp',
      subdivisionName: 'PARK FOREST SEC 7',
      unparsedAddress: '16 Hallo St<br/>Edison, NJ 08837',
      closePrice: 425000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 4,
      bathroomsTotal: 3,
      livingArea: 1506,
    },
    {
      mediaUrl: 'AboutUs/11-drum-street.jpg',
      subdivisionName: 'ISELIN',
      unparsedAddress: '11 Drum St<br/>Iselin, NJ 08830',
      closePrice: 360000,
      representedBuyer: false,
      representedSeller: true,
      bedroomsTotal: 3,
      bathroomsTotal: 2,
      livingArea: 1509,
    },
    {
      mediaUrl: 'AboutUs/252-east-louis-place.webp',
      subdivisionName: 'ISELIN',
      unparsedAddress: '252 East Louis Pl<br/>Iselin, NJ 08830',
      closePrice: 380000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 3,
      bathroomsTotal: 2,
      livingArea: 1378,
    },
    {
      mediaUrl: 'AboutUs/505-new-durham.webp',
      subdivisionName: 'NEW DURHAM HEIGHTS',
      unparsedAddress: '505 New Durham Rd<br/>Piscataway, NJ 08854',
      closePrice: 230000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 3,
      bathroomsTotal: 1,
      livingArea: 910,
    },
    {
      mediaUrl: 'AboutUs/236-berkley-street.webp',
      subdivisionName: 'ISELIN',
      unparsedAddress: '236 Berkley St<br/>Iselin, NJ 08830',
      closePrice: 335000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 4,
      bathroomsTotal: 2,
      livingArea: 1190,
    },
    {
      mediaUrl: 'AboutUs/322-kennedy-street.webp',
      subdivisionName: 'ISELIN',
      unparsedAddress: '322 Kennedy St<br/>Iselin, NJ 08830',
      closePrice: 285000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 3,
      bathroomsTotal: 0,
      livingArea: 1287,
    },
    {
      mediaUrl: 'AboutUs/2-white-birch-court.webp',
      subdivisionName: 'CEDAR HILL SECTION',
      unparsedAddress: '2 White Birch Ct<br/>Branchburg, NJ 08876',
      closePrice: 655000,
      representedBuyer: true,
      representedSeller: false,
      bedroomsTotal: 5,
      bathroomsTotal: 4,
      livingArea: 2806,
    },
  ];
  return (
    <div className="flex flex-wrap justify-between w-full xl:w-[85%] 3xl:w-[63%] px-4 py-5 md:px-10 md:py-10 mx-auto">
      <div className="w-full font-playfair-display tracking-widest text-2xl md:text-3xl">Homes Bought/Sold</div>
      <div className="w-full mt-2 font-roboto-serif tracking-widest text-base md:text-lg">
        Check out some of our clients homes!
      </div>
      <HomesBoughtSoldCarousel homes={homes} />
    </div>
  );
};
export default HomesBoughtSold;
