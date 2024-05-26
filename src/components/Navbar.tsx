import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navLinks = [
    "HOME",
    "ABOUT US",
    "DASHBOARD",
    "NEWS & UPDATES",
    "CONTACT US",
  ];
  return (
    <>
      <header className="relative">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                LOGO
              </span>
            </a>

            <div className="flex items-center lg:order-2">
              <button className="text-white bg-[#019147] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Join Us
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                {!mobileOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <div
              className={`${
                mobileOpen
                  ? "flex bg-green-50 shadow-lg absolute top-14 z-50 px-8 py-4 left-0"
                  : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            >
              <ul className="flex w-full lg:w-auto flex-col gap-2 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navLinks.map((link) => (
                  <a href={`#${link}`}>
                    <li className="flex py-2 pr-4 pl-3 text-black font-500 w-full lg:w-auto rounded bg-gray-100 lg:bg-transparent lg:p-0">
                      {link}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
