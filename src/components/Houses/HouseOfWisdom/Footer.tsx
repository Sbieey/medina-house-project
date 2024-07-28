import { Link } from 'react-router-dom';
import fbIcon from "../../../assets/housesAssets/HouseOfWisdomAssets/FooterFb.svg"
import InstaIcon from "../../../assets/housesAssets/HouseOfWisdomAssets/FooterInsta.svg"
import LinkedInIcon from "../../../assets/housesAssets/HouseOfWisdomAssets/FooterLinkedin.svg"
import PintersetIcon from "../../../assets/housesAssets/HouseOfWisdomAssets/FooterPinterest.svg"
import TwitterIcon from "../../../assets/housesAssets/HouseOfWisdomAssets/FooterTwitter.svg"
const footerLinks = [
    {
        title: "Our Company",
        links: [
            { name: "About Company", url: "/about" },
            { name: "Careers", url: "/careers" },
            { name: "Press media", url: "/press-media" },
            { name: "Our Blog", url: "/blog" },
            { name: "Services", url: "/services" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Madrasa", url: "/madrasa" },
            { name: "Mousq", url: "/mousq" },
            { name: "Quran Learning", url: "/quran-learning" },
            { name: "Hadith Learning", url: "/hadith-learning" },
            { name: "Islamic Culture", url: "/islamic-culture" },
        ],
    },
];

const contactDetails = {
    title: "Contact Us",
    details: {
        address: "Valentin, Street Road 24, New York, USA - 67452",
        phone: "+02)-574-328-301",
        email: "info@yoursite.com",
    },
};

const Footer = () => {
    return (
        <footer className="bg-white xl:max-w-screen-xl mx-auto py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link to="/" className="flex items-center">
                            <span className="cinzel-decorative-regular self-center text-sm sm:text-lg md:text-xl font-semibold whitespace-nowrap text-bgGreencolor">
                                <span className="text-customYellow">H</span>ouse of <span className="text-customYellow">W</span>isdom
                            </span>
                        </Link>
                        <p className="text-[#757589] mb-4 mt-3 leading-7">
                            Lorem ipsum am consectetur the adipiscing elit. Labortis mattis at neque adipiscing nisl.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#"><img src={fbIcon} alt="" /><i className="fab fa-facebook-f"></i></a>

                            <a href="#"><img src={TwitterIcon} alt="" /><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><img src={LinkedInIcon} alt="" /><i className="fab fa-facebook-f"></i></a> <a href="#"><img src={InstaIcon} alt="" /><i className="fab fa-facebook-f"></i></a> <a href="#"><img src={PintersetIcon} alt="" /><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                            <ul className="text-gray-600">
                                {section.links.map((link, idx) => (
                                    <li key={idx} className="mb-2">
                                        <a href={link.url} className="hover:underline text-sm">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{contactDetails.title}</h3>
                        <p className="text-gray-600 mb-2">{contactDetails.details.address}</p>
                        <p className="text-gray-600 mb-2 font-semibold">{contactDetails.details.phone}</p>
                        <p className="text-gray-600">{contactDetails.details.email}</p>
                    </div>
                </div>
                <div className="mt-8 border-t flex flex-col sm:flex-row justify-between border-gray-200 pt-6 text-center">
                    <p className="text-darkBlue">houseofwisdom &copy; 2024. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="text-darkBlue hover:text-gray-700">Privacy & Terms</a>
                        <a href="#" className="text-darkBlue hover:text-gray-700">FAQ</a>
                        <a href="#" className="text-darkBlue hover:text-gray-700">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
