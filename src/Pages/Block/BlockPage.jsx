import { IoIosSearch } from "react-icons/io";
import { TiMicrophoneOutline } from "react-icons/ti";
import blogPage1 from '../../assets/947b65cb687bdf2f9b63e5ff76e69e04.png';
import SideBlock from "./SideBlock/SideBlock";



const BlockPage = () => {
      return (
            <div className="my-10 lg:w-[90%] w-[95%] mx-auto">
                  <div className="flex xl:inline-flex my-5  rounded justify-between items-center px-1  bg-[#E6EEF5]">
                        <div className="flex items-center">
                              <IoIosSearch className="text-xl" />
                              {/* <h2 className="text-[#00509d]">Search</h2> */}
                              <input className=" outline-none border-none focus:ring-0 focus:outline-none bg-[#E6EEF5]" type="text" placeholder="Search" />
                        </div>
                        <TiMicrophoneOutline />
                  </div>
                  <div className="xl:grid space-y-5 xl:space-y-0 xl:gap-5 xl:grid-cols-12">
                        <div className="col-span-8 relative overflow-hidden rounded-md">
                              <img className="w-full min-h-[250px] xl:h-[455px] scale-y-110 rounded-md" src={blogPage1} alt="" />
                              <div className="absolute w-full bg-transparent bg-opacity-0 bottom-0 xl:px-10 pb-5 pt-16 bg-gradient-to-t from-black ">
                                    <h3 className=" text-xl xl:text-2xl font-bold text-white text-center">জেমস ডেভেলপমেন্ট লিমিটেড- বসুন্ধরায় লাক্সারিয়াস লিভিং
                                          এর নিশ্চয়তা !</h3>
                              </div>
                        </div>
                        <div className="col-span-4">
                              <SideBlock></SideBlock>
                        </div>
                  </div>
                  <div className="xl:grid xl:grid-cols-12 space-y-5 xl:space-y-0 xl:gap-5 pt-16">
                        <div className="col-span-4">
                              <SideBlock></SideBlock>
                        </div>
                        <div className="col-span-4">
                              <SideBlock></SideBlock>
                        </div>
                        <div className="col-span-4">
                              <SideBlock></SideBlock>
                        </div>
                  </div>
                  <div className="xl:grid pt-16 space-y-5 xl:space-y-0  gap-5 grid-cols-12">
                        <div className="col-span-8 ">
                              <div className="relative overflow-hidden rounded-md">
                                    <img className="w-full  min-h-[250px] xl:h-[455px]  scale-y-110 rounded-md" src={blogPage1} alt="" />
                                    <div className="absolute bg-transparent bg-opacity-0 bottom-0 xl:px-10 pb-5 pt-16 bg-gradient-to-t from-black ">
                                          <h3 className="text-xl xl:text-2xl font-bold text-white text-center">জেমস ডেভেলপমেন্ট লিমিটেড- বসুন্ধরায় লাক্সারিয়াস লিভিং
                                                এর নিশ্চয়তা !</h3>
                                    </div>
                              </div>
                              <div className="xl:flex space-y-5 xl:space-y-0 gap-5 pt-10">
                                    <SideBlock></SideBlock>
                                    <SideBlock></SideBlock>
                              </div>

                        </div>

                        <div className="col-span-4 bg-[#E6EEF5] px-5 pt-5 rounded-md">
                              <h3 className="text-xl text-[#00509d]">Recent Blog</h3>
                              <ul className="space-y-2 pt-5">
                                    <li>Buying Tips</li>
                                    <li>Selling Tips</li>
                                    <li>Property Development</li>
                                    <li>Investment Insights</li>
                                    <li>Market Trends</li>
                                    <li>Legal Considerations</li>
                                    <li>Local Market Focus (e.g.,by region) </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default BlockPage;