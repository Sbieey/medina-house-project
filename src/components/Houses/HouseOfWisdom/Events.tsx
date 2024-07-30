import { Link } from "react-router-dom";
import Img from "../../../assets/housesAssets/HouseOfWisdomAssets/Events.png"


export default function Events() {
    return (
        <div className="container pb-10  sm:pt-16 lg:pt-0 mt-0 sm:mt-16 lg:mt-24 mx-auto max-w-screen-lg sm:px-5 ">
            <div className="flex flex-col lg:flex-row justify-between items-center sm:px-12  sm:rounded-3xl  bg-[#006833] px-2 pt-3 pb-7">
                <div className="w-full lg:w-2/3 text-center lg:text-left py-5">
                    <div className="flex items-center justify-center lg:justify-start">
                        <h3 className="text-customYellow font-semibold text-xl pt-5">Upcoming Events </h3>
                    </div>
                    <h4 className="text-white text-3xl sm:text-4xl dm-sans-regular font-bold tracking-wider mt-2">Youth Islamic Movement</h4>
                    <p className="text-gray-100 mt-2 font-light">Lorem ipsum dolor sit amet consectetur. </p>
                    <Link to="#" className="text-customYellow font-semibold underline mt-4 block">Lets Join</Link>
                </div>
                <div className="w-48 h-48 md:w-64 md-h-64 sm:me-10 flex justify-start items-center">
                    <img src={Img} alt="About Us" className="rounded-lg" />
                </div>

            </div>
        </div>
    )
}

