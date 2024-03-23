import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-between w-full xl:w-[90%] px-4 py-2 md:px-10 md:py-2 mx-auto font-roboto-serif">
      <div>
        <span className="text-sm md:text-base">Privacy</span>
        <span className="bg-black rounded-full w-1 h-1 inline-block ml-2 align-middle"></span>
        <span className="ml-2 text-sm md:text-base">Terms</span>
        <span className="ml-2 bg-black rounded-full w-1 h-1 inline-block align-middle"></span>
        <span className="ml-2 text-sm md:text-base">Accessibility</span>
      </div>
      <div>
        <FontAwesomeIcon className="w-4 h-4 md:w-6 md:h-6 mr-3" icon={faSquareFacebook} />
        <FontAwesomeIcon className="w-4 h-4 md:w-6 md:h-6" icon={faSquareInstagram} />
      </div>
    </div>
  );
};

export default Privacy;
