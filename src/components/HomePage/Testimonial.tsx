import MyCarousel from "./Carousel";

const Testimonial = () => {
  return (
    <>
      <div className="h-auto w-[auto] ">
        <h1 className="text-center text-4xl font-bold mt-24 mb-6">
          Testimonials
        </h1>
        <h2 className="text-center text-2xl">
          See what our clients say about us
        </h2>
        <div className="mb-10 md:ps-8">
          <MyCarousel />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
