import icon1 from "../assets/Icons/icon1.png";
import icon2 from "../assets/Icons/icon2.png";
import icon3 from "../assets/Icons/icon3.png";


const stats = [
    {
        icon: icon1,
        counts: '35+',
        place : 'countries'
    },
    {
        icon: icon2,
        counts: '50+',
        place: 'mosques',
    }, {
        icon: icon3,
        counts: '465+',
        place: 'students'
    }
]

const MadinaStats = () => {
    return ( 
        <>
        <div className="bg-[#D3C00D] h-[60vh] py-28 mt-32">
            <h1 className="capitalize text-white font-bold text-center text-3xl">madina house CRM worldwide</h1>
            <h1 className="capitalize text-white text-center text-2xl">Efficient Management and Community Engagement</h1>

            <div className=" flex flex-col lg:flex-row gap-5 justify-center mt-11 ">
               {stats.map((stat) => (
            <div className="flex py-10 px-10 h-[150px] max-w-sm p-6 ml-7 mr-7 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-[#019147] dark:border-[#019147] dark:hover:bg-gray-700">
                 <img src={stat.icon}/>
                <div className="relative bottom-2 left-5">
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{stat.counts}</h5>
                    <h5 className=" uppercase mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{stat.place}</h5>
                </div>
            </div>
               ))}
            </div>
        </div>
        </>
     );
}
 
export default MadinaStats;