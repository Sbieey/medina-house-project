const AboutUs = () => {
    return ( 
        <>
        <div className="bg-white  h-[80vh]">
            <h1 className="text-[#019147] capitalize mt-10 font-bold text-3xl relative top-5 text-center">About Madina House CRM</h1>
            <h2 className="text-[#D3C00D] capitalize font-semibold text-3xl relative top-10 text-center">Efficient Management and Community Engagement</h2>
            <h3 className="text-2xl capitalize relative top-20 text-center h-[10px]">We invite you to join us in this digital journey to strengthen our community and<br /> <br />foster spiritual growth. </h3>
            <h3 className="text-2xl capitalize relative top-60 text-center h-[10px]">Madina House Project - reviving the legacy of Madina. strengthening muslim <br /> <br />communities through one platform </h3>
            <div className="flex justify-center relative top-96">

            <button type="button" className="animate-pulse shadow-2xl shadow-[#D3C00D] text-white bg-[#D3C00D] hover:bg-[#D3C00D] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#D3C00D] dark:focus:ring-[#D3C00D]">
            Learn More
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></button>
            </div>
        </div>
        </>
     );
}
 
export default AboutUs;