import HOW from "../assets/HOW.png";

const HOWsection = () => {
  return (
    <>
      {/* <div className="h-[100vh] w-auto bg-white justify-center mb-5">
        <div className="flex flex-row-reverse justify-center">
          <div className="bg-[#D3C00D] mt-20 w-auto h-[551px] rounded-2xl">
            <img src={HOW} />
          </div>
          <div className="mr-32 mt-52 w-[400px]">
            <h1 className="uppercase text-[#019147] text-2xl font-bold">
              house of wisdom{" "}
            </h1>
            <h2 className="text-[#D3C00D] text-xl font-semibold mt-5">
              Empowering Minds, Enriching Souls
            </h2>
            <p className="capitalize mt-10 text-lg">
              The House of Wisdom is a place where knowledge is treasured, and
              intellectual enlightenment is celebrated. Rooted in
            </p>
            <p className="capitalize mt-10 text-lg">
              the spirit of learning and wisdom, we are dedicated to fostering a
              culture of education, innovation, and intellectual exploration
            </p>
            <button
              type="button"
              className="mt-8 animate-pulse shadow-2xl shadow-[#D3C00D] text-white bg-[#D3C00D] hover:bg-[#D3C00D] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#D3C00D] dark:focus:ring-[#D3C00D]"
            >
              Learn More
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-32">
          <button
            type="button"
            className="py-4 mt-8 mb-5 shadow-2xl text-white bg-[#389740] hover:bg-[#366d2e] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-10 text-center inline-flex items-center dark:hover:bg-[#45803c] dark:focus:ring-[#6dd30d]"
          >
            View All
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div> */}

      <div className="h-auto w-auto bg-white justify-center mb-5">
        <div className="flex flex-col lg:flex-row-reverse justify-center lg:justify-start">
          <div className="bg-[#D3C00D] mt-10 lg:mt-20 w-full lg:w-auto h-[551px] lg:h-auto rounded-2xl flex justify-center items-center">
            <img
              src={HOW}
              alt="House of Wisdom"
              className="max-w-full max-h-full"
            />
          </div>
          <div className="ml-0 lg:ml-32 px-10 mt-10 lg:mt-52 w-full lg:w-[700px]">
            <h1 className="uppercase text-[#019147] text-2xl lg:text-3xl font-bold">
              House of Wisdom
            </h1>
            <h2 className="text-[#D3C00D] text-xl lg:text-2xl font-semibold mt-5">
              Empowering Minds, Enriching Souls
            </h2>
            <p className="capitalize mt-10 text-lg lg:text-xl">
              The House of Wisdom is a place where knowledge is treasured, and
              intellectual enlightenment is celebrated. Rooted in
            </p>
            <p className="capitalize mt-10 text-lg lg:text-xl">
              the spirit of learning and wisdom, we are dedicated to fostering a
              culture of education, innovation, and intellectual exploration
            </p>
            <button
              type="button"
              className="mt-8 animate-pulse shadow-2xl shadow-[#D3C00D] text-white bg-[#D3C00D] hover:bg-[#D3C00D] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 lg:text-base text-center inline-flex items-center dark:hover:bg-[#D3C00D] dark:focus:ring-[#D3C00D]"
            >
              Learn More
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
          </div>
        </div>
        <div className="flex justify-center mt-10 lg:mt-32">
          <button
            type="button"
            className="py-4 mt-8 mb-5 lg:mb-0 shadow-2xl text-white bg-[#389740] hover:bg-[#366d2e] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-10 text-center inline-flex items-center dark:hover:bg-[#45803c] dark:focus:ring-[#6dd30d]"
          >
            View All
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        </div>
      </div>
    </>
  );
};

export default HOWsection;
