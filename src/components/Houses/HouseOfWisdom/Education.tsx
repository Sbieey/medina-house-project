
import SchoolImg from "../../../assets/housesAssets/HouseOfWisdomAssets/School.svg"
import LibraryImg from "../../../assets/housesAssets/HouseOfWisdomAssets/Library.svg"
import SportsImg from "../../../assets/housesAssets/HouseOfWisdomAssets/Sports.svg"
import PoliticsImg from "../../../assets/housesAssets/HouseOfWisdomAssets/Politics.svg"
import { Link } from "react-router-dom"

const EduCards = [
    {
        icon: SchoolImg,
        title: "Islamic Creative School"
    }, {
        icon: LibraryImg,
        title: "Publication House: Islamic Books"
    }, {
        icon: SportsImg,
        title: "House of Champions: Sports"
    }, {
        icon: PoliticsImg,
        title: "House of  Diplomacy: Politics"
    }
]

export default function Education() {
    return (
        <div className="container max-w-screen-lg  mx-auto flex flex-col items-center justify-center  px-5 sm:px-0">
            <div className="flex flex-col items-center  max-w-screen-lg text-center mb-8 md:mt-16">
                <div className="max-w-2xl mb-4">
                    <p className="text-darkBlue text-3xl sm:text-4xl md:text-5xl font-bold dm-sans-regular mb-4 leading-10 tracking-wider">House of Wisdom Education</p>
                    <p className="text-gray-600 text-xs sm:text-base mt-4 leading-8 kumbh-sans-regular">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis vulputate tortor egestas. </p>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-8 ">
                        {EduCards.map((card, index) => (
                            <div key={index} className="bg-white p-3 sm:py-6 px-1 card-shadow  transition-shadow duration-300 ease-in-out flex flex-col items-center rounded-3xl ">
                                <img src={card.icon} alt={card.title} className="mb-4 md:w-16 py-3" />
                                <p className="px-1 text-lg sm:text-xl leading-6 font-semibold  text-darkBlue dm-sans-regular pb-3">{card.title}</p>
                                <Link to="#" className="text-green font-semibold text-sm pb-3">Join</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
