const Navbar = () => {
    const navLinks = ['HOME', 'ABOUT US', 'DASHBOARD', 'NEWS & UPDATES', 'CONTACT US' ]
    return ( 
        <>
        <header>
        <nav className="bg-white  border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">LOGO</span>
            </a>
            <div className="flex items-center lg:order-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 mr-9">
                        {navLinks.map((item) => (
                             <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded dark:hover:text-[#D3C00D] bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-black" aria-current="page">{item}</a>
                        </li>
                        ))}
                </ul>
                <a href="#" className="bg-[#019147] text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">JOIN US</a>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            </div>
        </div>
    </nav>
</header>
        </>
     );
}
 
export default Navbar;