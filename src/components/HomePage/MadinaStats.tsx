import icon1 from "../../assets/Icons/icon1.png";
import icon2 from "../../assets/Icons/icon2.png";
import icon3 from "../../assets/Icons/icon3.png";

const stats = [
  {
    icon: icon1,
    counts: "35+",
    place: "countries",
  },
  {
    icon: icon2,
    counts: "50+",
    place: "mosques",
  },
  {
    icon: icon3,
    counts: "465+",
    place: "students",
  },
];

const MadinaStats = () => {
  return (
    <>
      <div className="bg-[#D3C00D] pb-10 pt-16  lg:pb-28 mt-1 lg:mt-32">
        <h1 className="capitalize text-white font-bold text-center text-2xl lg:text-3xl">
          madina house CRM worldwide
        </h1>
        <h2 className="capitalize py-5  text-white text-center text-xl">
          Efficient Management and Community Engagement
        </h2>

        <div className="flex flex-col items-center lg:flex-row gap-5 justify-center mt-6 lg:mt-11">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex py-5 lg:py-10 px-5 lg:px-10 h-[150px] max-w-lg sm:h-[180px] sm:justify-center md:max-w-xs lg:max-w-sm p-6 ml-3 lg:ml-7 mr-3 lg:mr-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#019147] dark:border-[#019147] dark:hover:bg-gray-700"
            >
              <img
                src={stat.icon}
                alt={stat.place}
                className="w-10 lg:h-16 lg:w-16 object-contain"

              />
              <div className="lg:ml-5 px-5 pt-7 lg:pt-0   ">
                <h5 className=" text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {stat.counts}
                </h5>
                <h5 className="uppercase mb-1 text-lg lg:text-3xl tracking-tight text-gray-900 dark:text-white">
                  {stat.place}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MadinaStats;
