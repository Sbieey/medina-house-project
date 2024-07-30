import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HOW_homeImg from "./../../../assets/housesAssets/HouseOfWisdomAssets/HomeImg.svg";
import HOW_Mosque from "./../../../assets/housesAssets/HouseOfWisdomAssets/HOW-Mosque.png";
import MosqueIcon from "./../../../assets/housesAssets/HouseOfWisdomAssets/MosqueIcon.png";
import HOW_bg from "./../../../assets/housesAssets/HouseOfWisdomAssets/HOW-bg.svg";

const Home = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    const navLinks = [
        "Home",
        "About",
        "Service",
        "Islamic Calendar",
        "Blog",
        "Contact"
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 2);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 2) % 2);
    };

    return (
        <>
            <header id="Home" className="relative bg-[#117C46] min-h-screen">
                <img className="absolute  HOW-bg h-full" src={HOW_bg} alt="" />
                <nav className="bg-[#117C46] border-gray-200 px-4 sm:px-4 py-4 fixed w-full z-50 shadow-lg ">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg py-3 ">
                        <Link to="/" className="flex items-center">
                            <span className="cinzel-decorative-regular self-center text-sm sm:text-lg md:text-xl font-semibold whitespace-nowrap text-white">
                                <span className="text-customYellow">H</span>ouse of <span className="text-customYellow">W</span>isdom
                            </span>
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <button className="text-darkBlue bg-customYellow hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 rounded-md sm:rounded-lg text-xs sm:text-sm px-2 sm:px-4 lg:px-5 py-1.5 md:py-2 lg:py-2.5 focus:outline-none font-semibold">
                                Donate
                            </button>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                type="button"
                                className="inline-flex items-center p-0 sm:p-2 ml-1 text-xs sm:text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ms-5 sm:ms-0 z-50"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!mobileOpen ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div
                            className={`${mobileOpen ? "flex bg-[#117C46] shadow-2xl border-b-4 border-yellow-300 absolute top-16 z-40 px-8 py-4 left-0 w-75" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        >
                            <ul className="flex w-full lg:w-auto flex-col gap-2 mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                                {navLinks.map((link, linkIndex) => (
                                    <li key={linkIndex} className="flex py-2 pr-4 pl-3 text-white text-md font-500 w-full lg:w-auto rounded lg:p-0">
                                        <a href={`#${link}`} className="hover:underline">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="HOME" className="container sm:pb-8 pt-2 mx-auto max-w-screen-xl bg-[#117C46] bg-opacity-50">
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center h-[706px] relative rounded-2xl sm:mx-28">
                        <div className="text-center sm:ms-5 lg:text-left lg:w-1/2">
                            <h2 className="text-white mt-32 lg:mt-0 text-4xl sm:text-5xl md:text-6xl lg:text-6xl dm-sans-regular font-bold tracking-wider px-1 sm:px-0">
                                We work for Muslim Ummah
                            </h2>
                            <p className="text-white font-light mt-5 lg:text-lg w-[85%] mx-auto lg:mx-0">
                                We want to unite Muslims all over the world and bring back the Jamaat of Umar ibn al-Khattab Rad.
                            </p>
                            <div className="flex flex-col items-center sm:flex-row gap-3 justify-center lg:justify-start relative top-10">
                                <button
                                    type="button"
                                    className="flex justify-center items-center shadow-2xl text-darkBlue bg-customYellow hover:bg-[#cab707] focus:ring-4 focus:outline-none sm:font-bold rounded-sm text-xs sm:text-sm w-[7rem] sm:w-[9rem] py-1.5 sm:py-3 "
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                        <div className=" mt-8 pt-8 lg:pt-5 ">
                            <img src={HOW_homeImg} alt="Home" className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg" />
                        </div>
                    </div>
                </div>

                {/* Carousel part */}
                <div className="container relative pb-10 pt-0 sm:pt-10 lg:pt-0 mt-20 sm:mt-16 lg:mt-0 mx-auto max-w-screen-lg px-0 sm:px-0 ">
                    <div className="max-w-7xl w-full items-center bg-bgGreencolor py-3 rounded-3xl z-100 ">
                        <div className="flex flex-col lg:flex-row justify-between items-center sm:px-12 ">
                            <div className="w-full lg:w-1/2 text-center lg:text-left py-5">
                                <div className="flex items-center justify-center lg:justify-start">
                                    <h3 className="text-customYellow font-semibold text-xl ">Nearby Mosque</h3>
                                    <img className="ml-2 w-6 h-6" src={MosqueIcon} alt="Mosque Icon" />
                                    <p className="text-gray-100 mt-2 ms-2 font-light">Southall, Punjab</p>
                                </div>
                                <h4 className="text-white text-3xl md:text-4xl dm-sans-regular font-bold tracking-wider mt-2">Darus Salaam Mosque</h4>
                                <p className="text-gray-100 mt-2 font-light">Lorem ipsum dolor sit amet consectetu</p>
                                <Link to="#" className="text-customYellow font-semibold underline mt-4 block">Map Direction</Link>
                            </div>
                            <div className="carousel-container w-64 sm:w-80 py-5 relative rounded-3xl ">
                                <Carousel
                                    ref={carouselRef}
                                    className="rounded-3xl bg-slate-50 overflow-hidden bg-opacity-1"
                                    showThumbs={false}
                                    showIndicators={false}
                                    showStatus={false}
                                    showArrows={false}
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    interval={3000}
                                    selectedItem={currentSlide}
                                    onChange={(index) => setCurrentSlide(index)}
                                >
                                    <div className="h-48 w-full max-w-[22rem] rounded-3xl overflow-hidden">
                                        <img src={HOW_Mosque} alt="Mosque 1" className="w-full h-full object-cover rounded-3xl" />
                                    </div>
                                    <div className="h-48 w-full max-w-[22rem] rounded-3xl overflow-hidden">
                                        <img src={HOW_Mosque} alt="Mosque 2" className="w-full h-full object-cover rounded-3xl" />
                                    </div>
                                </Carousel>


                                <button
                                    type="button"
                                    className="carousel-control carousel-control-prev absolute left-0"
                                    onClick={prevSlide}
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="carousel-control carousel-control-next absolute"
                                    onClick={nextSlide}
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Home;
