import MainStoryImg from "../../../assets/housesAssets/HouseOfWisdomAssets/MainStory.png";
import Story1 from "../../../assets/housesAssets/HouseOfWisdomAssets/Story1.png";
import Story2 from "../../../assets/housesAssets/HouseOfWisdomAssets/Story2.png";
import Story3 from "../../../assets/housesAssets/HouseOfWisdomAssets/Story3.png";
import Story4 from "../../../assets/housesAssets/HouseOfWisdomAssets/Story4.png";
import DateImg from "../../../assets/housesAssets/HouseOfWisdomAssets/StoryDate.svg";
import UserImg from "../../../assets/housesAssets/HouseOfWisdomAssets/StoryUserImg.svg";

// Define a type for the valid categories
type Category = 'Islamic' | 'Culture' | 'News' | 'Quran' | 'Iman';

const categoryColors: Record<Category, string> = {
    Islamic: 'bg-[#EEE8FF] text-[#6534F1]',
    Iman: 'bg-[#E8F4FF] text-[#3278FF]',
    Culture: 'bg-[#E1FFF8] text-[#0FD43A]',
    News: 'bg-[#FFF4F8] text-[#EA276D]',
    Quran: 'bg-[#E8F5E9] text-[#2E7D32]'
};

interface Article {
    category: Category;
    title: string;
    date: string;
    author: string;
    image: string;
}

const articles: Article[] = [
    {
        category: 'Islamic',
        title: 'How To Build Strong Customer Relationships For many User',
        date: 'Jun 4, 2022',
        author: 'David Martin',
        image: Story1
    },
    {
        category: 'Culture',
        title: '5 Ways Technology Has Improved Business has Today Done!',
        date: 'Jun 4, 2022',
        author: 'David Martin',
        image: Story2
    },
    {
        category: 'News',
        title: 'How Wireless Network Technology is Changing many Business',
        date: 'Jun 4, 2022',
        author: 'David Martin',
        image: Story3
    },
    {
        category: 'Iman',
        title: 'How Technology Made Businesses More works Efficient Do',
        date: 'Jun 4, 2022',
        author: 'David Martin',
        image: Story4
    },
];

const Stories = () => {
    return (
        <div id="Blog" className="container xl:max-w-screen-lg mx-auto px-4 sm:px-16 py-10 mb-10">
            <div className="flex justify-center mt-6 mb-10 text-center">
                <p className="text-center max-w-xl text-[#000248] text-2xl sm:text-3xl md:text-4xl font-bold dm-sans-regular !leading-tight tracking-wider">
                    Check Our House of Wisdom Inside Story
                </p>
            </div>
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden pb-10">
                <img className="w-full h-96 object-cover" src={MainStoryImg} alt="Main article" />
                <div className="absolute inset-0 flex items-end">
                    <div className="bg-white p-4  rounded-b-lg w-full border shadow-none">
                        <button className={`bg-[#F2F7FF] text-xs text-[#3497F1] dm-sans-regular font-medium py-1.5 px-7 rounded-sm mb-5`}>Quran</button>
                        <h2 className="text-[#000248] font-dm-sans text-xl sm:text-2xl md:text-3xl font-semibold leading-none">
                            Translation and Notes: Salvation of the Successors in Beliefs of the Predecessors (Najaath al-Khalaf)
                        </h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                {articles.map((article, index) => (
                    <div key={index} className="flex flex-col sm:flex-row bg-white rounded-lg shadow-sm border overflow-hidden">
                        <img className="w-full sm:w-48 h-48 sm:h-auto object-cover" src={article.image} alt={article.title} />
                        <div className="p-4 flex flex-col justify-between w-full sm:w-2/3">
                            <div>
                                <button className={`text-xs font-medium py-1 px-5 rounded-md ${categoryColors[article.category]}`}>{article.category}</button>
                                <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
                            </div>
                            <div className="flex gap-5 items-center text-gray-500 mt-2">
                                <div className='flex items-center gap-2'>
                                    <img src={DateImg} className='w-3 h-3' alt="date icon" />
                                    <p className='text-xs pt-1'>{article.date}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={UserImg} className='w-3 h-3' alt="user icon" />
                                    <p className='text-xs'>{article.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stories;
