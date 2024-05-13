import HOJ from "../assets/HOJ.png"

const HOJsection = () => {
    return (  
        <>
        <div className="h-[100vh] flex bg-[#FBFBFB] justify-center ">
            <div className="bg-[#D3C00D] mt-36 w-[542px] h-[551px] rounded-2xl">
                <img src={HOJ}/>
            </div>
            <div className="ml-64 mt-64 w-[400px]">
                <h1 className="uppercase text-[#019147] text-2xl font-bold">house of justice</h1>
                <h2 className="text-[#D3C00D] text-xl font-semibold mt-5">Administering Fairness and Equity</h2>
                <p className="capitalize mt-10 text-lg">We invite you to join us in this digital journey to strengthen our community and foster spiritual growth.</p>
                <p className="capitalize mt-10 text-lg">Madina House Project - reviving the legacy of Madina. strengthening muslim communities through one platform</p>
                <button type="button" className="mt-8 animate-pulse shadow-2xl shadow-[#D3C00D] text-white bg-[#D3C00D] hover:bg-[#D3C00D] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#D3C00D] dark:focus:ring-[#D3C00D]">
                Learn More
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg></button>
            </div>
        </div>
        </>
    );
}
 
export default HOJsection;