import HeadingBtn from "../../../shared/HeadingBtn/HeadingBtn";
import AboutImg from "../../../assets/housesAssets/HouseOfWisdomAssets/About.svg";

export default function AboutUs() {
    return (
        <div id="About" className="container mx-auto max-w-screen-lg flex items-center px-5 sm:px-0 sm:pt-10 ">
            <div className="flex flex-wrap justify-center md:justify-between items-center mx-5 max-w-screen-xl py-3 w-full">
                <div className="max-w-lg md:w-1/2 flex flex-col">
                    <HeadingBtn text={"About Us"} />
                    <p className="text-darkBlue text-2xl sm:text-4xl md:text-5xl font-bold dm-sans-regular mb-4  !leading-tight">Something about House of Wisdom.</p>

                    <p className="mb-4 text-[#757589] kumbh-sans-regular text-sm sm:text font-normal leading-[1.875rem]">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis vulputate tortor egestas.</p>
                    <p className="mb-4 text-[#757589] kumbh-sans-regular text-sm sm:text font-normal leading-7">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse as nulla aliquameget ultrices pretium</p>
                    <button className="sm: md:max-w-40 text-white bg-green hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-normal md:font-semibold rounded-md sm:text-sm md:text-lg px-1 sm:px-1 py-2 sm:py-3.5 mt-4 lg:mt-6 focus:outline-none tracking-wide">
                        Read More
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-end items-center mt-10 md:mt-16">
                    <img src={AboutImg} alt="About Us" className="w-full 
                    md:max-w-[24rem] lg:max-w-[28rem] h-auto object-cover rounded-lg transform transition-transform " />
                </div>
            </div>
        </div>
    );
}
