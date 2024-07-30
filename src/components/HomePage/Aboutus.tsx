const AboutUs = () => {
  return (
    <>
      <div id="ABOUT US" className="bg-white h-[60vh] mb-10 lg:mb-0  lg:h-[60vh] xl:h-[70vh] xl:mb-10 ">
        <h1 className="text-[#019147] capitalize mt-16 lg:mt-36 font-bold text-2xl lg:text-3xl relative top-5 text-center">
          About Madina House CRM
        </h1>
        <h2 className="text-customYellow capitalize font-semibold text-lg lg:text-3xl relative top-10 text-center">
          Efficient Management and Community Engagement
        </h2>
        <h3 className="lg:text-2xl text-lg capitalize relative top-20 text-center h-[10px]">
          We invite you to join us in this digital journey to strengthen our
          community and
          <br /> <br />
          foster spiritual growth.{" "}
        </h3>
        <h3 className="lg:text-2xl text-lg capitalize relative top-60 text-center h-[10px]">
          Madina House Project - reviving the legacy of Madina. strengthening
          muslim <br /> <br />
          communities through one platform{" "}
        </h3>
        <div className="flex justify-center relative lg:top-96 top-96">
          <button
            type="button"
            className="animate-pulse shadow-2xl lg:mt-10 mt-[60px] shadow-customYellow text-white bg-customYellow hover:bg-customYellow focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-customYellow dark:focus:ring-customYellow"
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
    </>
  );
};

export default AboutUs;
