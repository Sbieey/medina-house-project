import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import HeadingBtn from '../../../shared/HeadingBtn/HeadingBtn';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../index.css';
import Teacher1 from "../../../assets/housesAssets/HouseOfWisdomAssets/Teacher1.png";
import Teacher2 from "../../../assets/housesAssets/HouseOfWisdomAssets/Teacher2.png";
import Teacher3 from "../../../assets/housesAssets/HouseOfWisdomAssets/Teacher3.png";
import BG from "../../../assets/housesAssets/HouseOfWisdomAssets/TeacherBg.png";

import FbIcon from "../../../assets/SocialIcons/Facebook.svg";
import LinkedinIcon from "../../../assets/SocialIcons/Linkedin.svg";
import GithubIcon from "../../../assets/SocialIcons/Github.svg";
import { Link } from 'react-router-dom';

interface Social {
    icon: string;
    link: string;
}

interface CardData {
    img: string;
    name: string;
    title: string;
    description: string;
    social: Social[];
}

const cardData: CardData[] = [
    {
        img: Teacher1,
        name: "Saikh Ali Tantavi",
        title: "Scholers",
        description: "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
        social: [
            { icon: FbIcon, link: "#" },
            { icon: GithubIcon, link: "#" },
            { icon: LinkedinIcon, link: "#" },
        ]
    },
    {
        img: Teacher2,
        name: "Umar Bin Kaisar",
        title: "Scholers",
        description: "Pop music lover, seeks joy and exciting pop concerts",
        social: [
            { icon: FbIcon, link: "#" },
            { icon: GithubIcon, link: "#" },
            { icon: LinkedinIcon, link: "#" },
        ]
    },
    {
        img: Teacher3,
        name: "Saad Ibne Hasan",
        title: "Scholers",
        description: "Bookworm, creative software developer with precision",
        social: [
            { icon: FbIcon, link: "#" },
            { icon: GithubIcon, link: "#" },
            { icon: LinkedinIcon, link: "#" },
        ]
    }
];

const Teachers: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    const [isActive, setIsActive] = useState<String | null>(null)
    console.log("isActive", isActive);

    const settings: Settings = {
        dots: false,
        draggable: true,
        infinite: true,
        focusOnSelect: true,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const nextSlide = () => {
        setIsActive("next")
        sliderRef.current?.slickNext();
    };

    const prevSlide = () => {
        setIsActive("prev")
        sliderRef.current?.slickPrev();
    };

    return (
        <>
            <div className="container xl:max-w-screen-lg mx-auto flex flex-col items-center justify-center px-7  mb-8 ">
                <div className="flex flex-col items-center max-w-screen-lg text-center mb-8">
                    <HeadingBtn text={"Teachers"} />
                    <div className="max-w-2xl mb-4">
                        <p className="text-[#000248] text-3xl sm:text-4xl md:text-5xl font-bold dm-sans-regular mb-2 leading-10 tracking-wider">
                            Entrust Your Growth to <br />
                            Islamic Scholers
                        </p>
                    </div>
                </div>
                <div className="HOW-carousel-container relative grid grid-cols-1">
                    <Slider {...settings} ref={sliderRef}>
                        {cardData.map((card, index) => (
                            <div className="px-5 w-full relative border-none" key={index}>
                                <div
                                    style={{ backgroundImage: `url(${card.img})`, borderRadius: "15px" }}
                                    className="teacher-card-img relative bg-cover bg-center h-[28rem] w-full"
                                >
                                    <div className="absolute bottom-0 left-0 w-full  bg-[#F8F8F8] py-3.5 px-6 border-none">
                                        <h3 className="text-lg font-semibold font-inter">{card.name}</h3>
                                        <p className="text-[#157E4A] text-sm font-semibold mb-4 font-inter">{card.title}</p>
                                        <p className="text-[rgb(120,122,130)] text-sm font-inter">{card.description}</p>
                                        <div className="flex gap-4 mt-3">
                                            {card.social.map((social, i) => (
                                                <Link to={social.link} target="_blank" rel="noopener noreferrer" key={i}>
                                                    <img src={social.icon} alt={`${social.icon} icon`} className="w-4 h-4" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="arrows-container pt-7">
                        <button className={`custom-prev text-gray-800 border border-[#B7B7B7] ${isActive === "prev" ? "bg-[#157E4A] text-white border-none" : ""}`} onClick={prevSlide}>
                            &lt;
                        </button>
                        <button className={`custom-next text-gray-80 border border-[#B7B7B7] ${isActive === "next" ? "bg-[#157E4A] text-white border-none" : ""}`} onClick={nextSlide}>
                            &gt;
                        </button>
                    </div>
                </div>
            </div>

            {/* Want to join as a techer ... section */}


            <div style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-full'>
                <div className='container xl:max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center px-10 sm:px-16 py-20'>
                    <div className='max-w-xl text-center lg:text-left'>
                        <h2 className='text-white dm-sans-regular text-2xl sm:text-3xl md:text-4xl font-bold capitalize tracking-wider leading-normal'>
                            Want to join as a teacher
                            <br />
                            please hit the button
                        </h2>
                    </div>
                    <button
                        type="button"
                        className="mt-5 lg:mt-0 shadow-2xl text-[#000248] bg-[#D3C00D] hover:bg-[#cab707] focus:ring-4 focus:outline-none sm:font-bold rounded-sm text-xs sm:text-sm w-[8rem] sm:w-[9rem] px-1 sm:px-0 py-2.5 sm:py-3"
                    >
                        Join as a Teacher
                    </button>
                </div>
            </div>
        </>
    );
};

export default Teachers;
