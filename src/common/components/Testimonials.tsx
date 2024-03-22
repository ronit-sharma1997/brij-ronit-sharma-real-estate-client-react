import Testimonial from './Testimonial.tsx';
import TestimonialCarousel from './TestimonialCarousel.tsx';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      customerName: 'Ajay Narula',
      testimonialTitle: 'Amazing Customer Service',
      testimonialDescription:
        'Working with Brij & Ronit was an absolute pleasure! From our first meeting to the successful closing of\n' +
        '              our dream home, their commitment to exceptional customer service was evident at every step.\n' +
        '              <br />\n' +
        '              <br />\n' +
        '              Brij & Ronit not only listened attentively to our preferences but also took the time to understand our\n' +
        '              unique needs. Their knowledge of the local market was impressive, and they provided valuable insights that\n' +
        '              guided us toward making informed decisions.\n' +
        '              <br />\n' +
        '              <br />\n' +
        '              Even after the deal was closed, Brij & Ronit continued to impress us with their commitment to\n' +
        '              post-transaction follow-up. They genuinely cared about our satisfaction and ensured that we were settled\n' +
        '              and happy in our new home.',
    },
    {
      customerName: 'Singh Is King',
      testimonialTitle: 'Amazing Customer Service',
      testimonialDescription:
        'Working with Brij & Ronit was an absolute pleasure! From our first meeting to the successful closing of\n' +
        '              our dream home, their commitment to exceptional customer service was evident at every step.\n' +
        '              <br />\n' +
        '              <br />\n' +
        '              Brij & Ronit not only listened attentively to our preferences but also took the time to understand our\n' +
        '              unique needs. Their knowledge of the local market was impressive, and they provided valuable insights that\n' +
        '              guided us toward making informed decisions.\n' +
        '              <br />\n' +
        '              <br />\n' +
        '              Even after the deal was closed, Brij & Ronit continued to impress us with their commitment to\n' +
        '              post-transaction follow-up. They genuinely cared about our satisfaction and ensured that we were settled\n' +
        '              and happy in our new home.',
    },
    {
      customerName: 'Jezif',
      testimonialTitle: 'Amazing Customer Service',
      testimonialDescription:
        'Working with Brij & Ronit was an absolute pleasure! From our first meeting to the successful closing of\n' +
        '              our dream home, their commitment to exceptional customer service was evident at every step.\n' +
        '              <br />\n' +
        '              <br />\n' +
        '              Brij & Ronit not only listened attentively to our preferences but also took the time to understand our\n' +
        '              unique needs. Their knowledge of the local market was impressive, and they provided valuable insights that\n' +
        '              guided us toward making informed decisions.\n' +
        '              <br />\n' +
        '              <br />\n' +
        '              Even after the deal was closed, Brij & Ronit continued to impress us with their commitment to\n' +
        '              post-transaction follow-up. They genuinely cared about our satisfaction and ensured that we were settled\n' +
        '              and happy in our new home.',
    },
  ];
  return (
    <div className="flex flex-wrap bg-black py-20 md:pt-10">
      <div className="w-full font-playfair-display text-2xl tracking-widest text-white text-center md:text-4xl mb-10">
        Client Testimonials
      </div>
      <TestimonialCarousel
        slides={testimonials.map((testimonial, idx) => (
          <Testimonial
            key={idx}
            customerName={testimonial.customerName}
            testimonialTitle={testimonial.testimonialTitle}
            testimonialDescription={testimonial.testimonialDescription}
          />
        ))}
        autoSlide={true}
        autoSlideInterval={8000}
      />
    </div>
  );
};
export default Testimonials;
