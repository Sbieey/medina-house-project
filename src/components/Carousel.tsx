import Slider from "react-slick";
import testimony from "../assets/testimony1.png";
// import HOJ from "../assets/HOJ.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyCarousel = () => {
  const slides = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

      ,
      image: testimony,
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: testimony,
    },
    // {
    //   id: 3,
    //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //   image: HOJ,
    // },
    // Add more slides as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-x-hidden pb-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            id="indicators-carousel"
            className="flex flex-row lg:gap-[20px] h-auto items relative w-auto"
            data-carousel="static"
          >
            <div className="flex lg:flex-row gap-[40px] flex-col mt-10 items-center">
              <div className="relative h-[300px]  sm:items-center overflow-hidden rounded-lg md:h-96 lg:w-1/2 w-full">
                <img
                  src={slide.image}
                  className="absolute left-1/2 transform -translate-x-1/2 w-auto h-full object-cover top-0 "
                  alt="Slide Image"
                />
              </div>
              <div className="bg-opacity-50 p-4 lg:w-1/3 w-full">
                <h1
                  className="text-8xl relative bottom-8 font-bold lg:right-10"
                  style={{ fontFamily: "Racing Sans One" }}
                >
                  “
                </h1>
                <h1 className=" relative bottom-10 text-lg">{slide.text}</h1>
              </div>
            </div>
          </div>
        ))}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default MyCarousel;
