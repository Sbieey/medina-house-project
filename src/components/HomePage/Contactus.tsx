import img from "../../assets/mainBg.png";

export const Contactus = () => {
  return (
    <>
      <div
        id="CONTACT US"
        className="h-auto flex mb-10 justify-center w-full lg:w-[99%] bg-cover"
        style={{ background: `url(${img})` }}
      >
        <div className="bg-[#019147] px-[10px] w-full lg:w-[95%] gap-[20px] flex flex-col md:min-h-screen pt-16 pb-20 lg:pb-28 rounded-3xl">
          <text className="text-[#FFFFFF] text-center mb-[30px] lg:mb-[50px] text-3xl lg:text-4xl font-bold">
            Contact Us
          </text>

          <div className="flex flex-col lg:flex-row gap-[20px] justify-center">
            <input
              type="text"
              placeholder="NAME"
              className="form-control bg-[#004E26] rounded-3xl p-4 lg:p-6 w-full lg:w-[500px]"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="form-control bg-[#004E26] rounded-3xl p-4 lg:p-6 w-full lg:w-[500px]"
            />
          </div>
          <div className="flex justify-center mt-6 lg:mt-8">
            <textarea
              className="bg-[#004E26] rounded-3xl p-4 lg:p-6 w-full lg:w-[1040px] h-[200px] lg:h-[400px]"
              placeholder="Type Your Message Here..."
            ></textarea>
          </div>
          <div className="flex justify-center mt-6 lg:mt-8">
            <div className="w-full lg:w-[1040px] flex justify-end">
              <button
                type="button"
                className="bg-customYellow w-[230px] me-2 rounded-2xl p-2 sm:p-3 lg:p-4 text-white text-sm sm-text-xl tracking-wider"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
