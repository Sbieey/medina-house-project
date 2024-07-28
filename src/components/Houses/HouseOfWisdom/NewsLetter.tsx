import YellowBg from "../../../assets/housesAssets/HouseOfWisdomAssets/Newsletter-img6.png";
import Images from "../../../assets/housesAssets/HouseOfWisdomAssets/Newsletter-Images.png";

const NewsLetter = () => {
    return (
        <div className='w-full bg-bgGreencolor pb-5'>
            <div className='container xl:max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center px-10 sm:px-16 py-12'>
                <div className='max-w-xl text-center lg:text-left'>
                    <p className='uppercase dm-sans-regular text-white font-semibold text-lg tracking-wide pt-5'>Get to Meet your Next Agency</p>
                    <h2 className='text-white dm-sans-regular text-2xl sm:text-3xl md:text-4xl font-medium sm:font-bold tracking-wider leading-normal pt-3'>
                        Subscribe newsletter get latest updates and deals
                    </h2>

                    <div className="flex mt-10 w-full max-w-lg">
                        <div className="relative w-full">
                            <input
                                type="text"
                                className="block p-2.5 sm:p-4 w-full z-20 text-xs sm:text-sm md:text-lg rounded-xl border border-customYellow focus:outline-none text-customYellow focus:border-[#e2d351] bg-transparent placeholder-customYellow"
                                placeholder="Enter Your Name"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 px-2 sm:px-5 py-3 h-full text-xs sm:text-lg text-darkBlue bg-customYellow rounded-r-md sm:rounded-r-lg border border-customYellow hover:bg-customYellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium sm:font-bold"
                            >
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center mt-10 lg:mt-0 lg:justify-end items-center max-w-lg mx-auto lg:mx-0">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden flex justify-center items-center">
                        <img src={YellowBg} alt="Yellow Background" className="absolute w-full h-full object-cover" />
                        <img src={Images} alt="Icon 1" className="absolute w-40 sm:h-[207px] sm:w-[195px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
