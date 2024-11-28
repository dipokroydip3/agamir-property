import SideBlock from "../SideBlock/SideBlock";
import blogPage1 from '../../../assets/947b65cb687bdf2f9b63e5ff76e69e04.png';
import blogPage2 from '../../../assets/3d1af15d16489214108cb7130578f13a.png';
import blogPage3 from '../../../assetS/8f31a7dd708e75de37c5ad26a40214f9.png';
import { TiMicrophoneOutline } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";


const BlockWays = () => {
      return (
            <div className="lg:w-[90%] w-[95%] mx-auto lg:my-10 my-10">
                  <div className="flex gap-3 mt-10">
                        <div className="flex cursor-pointer items-center gap-1">
                              Home
                              <MdKeyboardArrowRight />
                        </div>
                        <div className="flex xl:inline-flex my-5  rounded justify-between items-center px-1  bg-[#E6EEF5]">
                              <div className="flex items-center">
                                    <IoIosSearch className="text-xl" />
                                    {/* <h2 className="text-[#00509d]">Search</h2> */}
                                    <input className=" outline-none border-none focus:ring-0 focus:outline-none bg-[#E6EEF5]" type="text" placeholder="Search" />
                              </div>
                              <TiMicrophoneOutline className="cursor-pointer" />
                        </div>
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
                  <div className="flex items-center mt-20 h-80 ">
                        <div className="bg-[#00509d] flex items-center justify-center px-10 rounded-l-md text-white h-full">
                              <div>
                                    <h3 className="text-xl">Why Agamir Property</h3>
                                    <h2 className="text-2xl font-semibold py-3">Health Anytime, Anywhere</h2>
                                    <p>We use technology to make healthcare accessible to you no matter
                                    where you are. You can access your health data, book appointments
                                    review your prescriptions and test results, and
                                    access your medical records.</p>
                              </div>
                        </div>
                        <img className="xl:w-[500px] h-full rounded-r-md" src={blogPage2} alt="" />
                  </div>
                  <div className="flex items-center mt-20 h-80 relative ">
                        <div className="bg-[#00509d] xl:w-[730px] flex items-center justify-center pl-10 rounded-l-md text-white h-full">
                              <div>
                                    <h3 className="text-xl">Why Agamir Property</h3>
                                    <h2 className="text-2xl font-semibold py-3">Health Anytime, Anywhere</h2>
                                    <p>We use technology to make healthcare accessible to you no matter
                                    where you are. You can access your health data, book appointments
                                    review your prescriptions and test results, and
                                    access your medical records.</p>
                              </div>
                        </div>
                        <img className="xl:w-[500px] xl:h-[350px] absolute right-0 h-full rounded-r-md" src={blogPage3} alt="" />
                  </div>
            </div>
      );
};

export default BlockWays;