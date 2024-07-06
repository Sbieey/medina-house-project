import img from "../assets/mainBg.png";
import bg from "../assets/image 3.png";

const Home = () => {
  return (
    <>
      <div
        id="HOME"
        className="flex pb-5 justify-center w-auto lg:w-[99%]"
        style={{ background: `url(${img})` }}
      >
        <div className="bg-[#019147] mt-100 w-[95%] h-[706px] relative top-10 rounded-2xl">
          <img className="absolute top-[287px] z-100" src={bg} alt="" />
          <div className="flex justify-center">
            <span className="text-[#D3C00D] weight-600 lg:text-4xl mt-14">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </span>
          </div>
          <div className="flex justify-center">
            <text className="text-white text-center font-semibold text-3xl sm:text-4xl md:text-4xl lg:text-6xl w-[100%] lg:relative mt-9">
              Madina House CRM -<br /> Empowering Muslim Community
            </text>
          </div>
          <div className="flex justify-center">
            <p className="text-center relative justify-items-center text-white mt-5 lg:text-2xl w-[70%]">
              Strengthening muslim communities through one platform. We invite
              you to join us in this digital journey to strengthen our community
              and foster spiritual growth
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-3 px-2 justify-center  relative top-32 sm:top-40">
            <button
              type="button"
              className="flex justify-center items-center animate-pulse hover:animate-none shadow-2xl shadow-[#D3C00D] text-white bg-[#D3C00D] hover:bg-[#D3C00D] focus:ring-4 focus:outline-none font-medium rounded-lg  text-xs sm:text-sm px-6 py-3 w-[270px] sm:w-auto sm:px-12 sm:py-3.5"
            >
              Start A Free Trial
              <svg
                className="rtl:rotate-180 w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>

            <button
              type="button"
              className="flex justify-center items-center animate-bounce shadow-2xl shadow-[#D3C00D] text-[#D3C00D] border border-[#D3C00D] bg-transparent hover:bg-[#D3C00D] hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-6 py-3 mt-2 sm:mt-0 w-[270px] sm:w-auto sm:px-8 sm:py-3.5"
            >
              Learn About Madina House
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
