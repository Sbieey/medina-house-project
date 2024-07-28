import HeadingBtn from "../../../shared/HeadingBtn/HeadingBtn";
import ServiceIcon1 from "../../../assets/housesAssets/HouseOfWisdomAssets/Service1.svg";
import ServiceIcon2 from "../../../assets/housesAssets/HouseOfWisdomAssets/Service2.svg";
import ServiceIcon3 from "../../../assets/housesAssets/HouseOfWisdomAssets/Service3.svg";
import ServiceIcon4 from "../../../assets/housesAssets/HouseOfWisdomAssets/Service4.svg";
import ServiceIcon5 from "../../../assets/housesAssets/HouseOfWisdomAssets/Service5.svg";
import ServiceIcon6 from "../../../assets/housesAssets/HouseOfWisdomAssets/Service6.svg";

const services = [
    { title: "Madrasa", description: "Lorem ipsum dolor sit amet consectetur suspendisse the aliquam many done.", icon: ServiceIcon1 },
    { title: "Mosque", description: "Lorem ipsum dolor sit amet consectetur suspendisse the aliquam many done.", icon: ServiceIcon2 },
    { title: "Quran Learning", description: "Lorem ipsum dolor sit amet consectetur suspendisse the aliquam many done.", icon: ServiceIcon4 },
    { title: "Hadith Learning", description: "Lorem ipsum dolor sit amet consectetur suspendisse the aliquam many done.", icon: ServiceIcon6 },
    { title: "Islamic History", description: "Lorem ipsum dolor sit amet consectetur suspendisse the aliquam many done.", icon: ServiceIcon3 },
    { title: "Youth Learning", description: "Lorem ipsum dolor sit amet consectetur suspendisse the aliquam many done.", icon: ServiceIcon5 },
];

export default function Services() {
    return (
        <div id="Service" className="container max-w-screen-lg  mx-auto flex flex-col items-center justify-center  px-5 sm:px-0">
            <div className="flex flex-col items-center  max-w-screen-lg text-center mb-8 md:mt-16">
                <HeadingBtn text={"Service"} />
                <div className="max-w-2xl mb-4">
                    <p className="text-darkBlue text-3xl sm:text-4xl md:text-5xl font-bold dm-sans-regular mb-4 leading-10">We create some Things for your Success Future</p>
                    <p className="text-gray-600 text-xs sm:text-base mt-4 leading-8 kumbh-sans-regular">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis vulputate tortor egestas.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-12 sm:mt-5">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-[0_0_50px_0_rgba(0,0,0,0.07)] transition-shadow duration-300 ease-in-out flex px-5">
                        <div className="flex-shrink-0 mr-6 text-center mb-4 pt-2">
                            <img src={service.icon} alt={`${service.title} icon`} className="w-full max-w-[112px] h-auto" />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl text-darkBlue leading-normal font-bold mb-2 dm-sans-regular">{service.title}</h3>
                            <p className="text-[#757589] leading-7 text-xs sm:text-base">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
