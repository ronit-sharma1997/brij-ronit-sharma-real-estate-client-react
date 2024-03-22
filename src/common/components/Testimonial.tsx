import Stars from './Stars.tsx';

const Testimonial: React.FC<{ customerName: string; testimonialTitle: string; testimonialDescription: string }> = ({
  customerName,
  testimonialTitle,
  testimonialDescription,
}) => {
  return (
    <div className="bg-white mx-auto" style={{ flex: '1 0 100%' }}>
      <div className="flex flex-wrap px-3 py-4">
        <div className="w-full xl:w-1/4">
          <img className="w-1/3 xl:w-full rounded-full mx-auto mt-5" src="common/avatar.jfif" alt="Client" />
        </div>
        <div className="w-full xl:w-3/4 px-3">
          <div className="flex flex-wrap">
            <div className="w-full h-[60px] leading-[120px] font-playfair-display font-medium text-[96px] xl:text-[128px]">
              “
            </div>
            <div className="w-full md:w-1/2 font-roboto-serif font-medium text-2xl lg:text-3xl my-auto text-center md:text-left">
              {customerName}
            </div>
            <div className="w-full md:w-1/2 inline-flex justify-center md:justify-end">
              <Stars />
            </div>
            <div className="w-full font-roboto-serif font-semibold text-lg md:text-xl lg:text-2xl uppercase md:mt-5">
              {testimonialTitle}
            </div>
            <div className="hidden md:block font-roboto-serif text-base lg:text-lg leading-normal tracking-wide mt-5">
              <div dangerouslySetInnerHTML={{ __html: testimonialDescription }} />
            </div>
            <div className="w-full h-[40px] leading-[80px] font-playfair-display font-medium text-[96px] xl:text-[128px] text-right align-text-top">
              ”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
