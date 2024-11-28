import { useState } from "react";
import blogDetailsImg1 from "../../assets/c9288405bd8408b6b2a9355ca097f343.png"; // Image 1
import blogDetailsImg6 from "../../assets/057c3d5a0dfbd417b52ba252613f0546.png"; // Image 1
import SideBlock from "./SideBlock/SideBlock";
import { MdKeyboardArrowRight } from "react-icons/md";
// import blogDetailsImg2 from "../../assets/anotherImage2.png"; // Image 2
// import blogDetailsImg3 from "../../assets/anotherImage3.png"; // Image 3
// import blogDetailsImg4 from "../../assets/anotherImage4.png"; // Image 4
// import blogDetailsImg5 from "../../assets/anotherImage5.png"; // Image 5

const images = [blogDetailsImg1, blogDetailsImg1, blogDetailsImg1, blogDetailsImg1, blogDetailsImg1];

const BlogDetails = () => {
      const [currentIndex, setCurrentIndex] = useState(0);

      const handleDotClick = (index) => {
            setCurrentIndex(index);
      };

      return (
            <div className="lg:w-[90%] w-[95%] mx-auto my-10">
                  <div className="xl:h-[80vh] overflow-hidden rounded-md relative">
                        <img
                              className="w-full xl:h-full rounded-md object-cover transition-transform duration-700"
                              src={images[currentIndex]}
                              alt={`Image ${currentIndex + 1}`}
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                              {images.map((_, index) => (
                                    <button
                                          key={index}
                                          className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                                                }`}
                                          onClick={() => handleDotClick(index)}
                                    ></button>
                              ))}
                        </div>
                  </div>
                  <div>
                        <div className="xl:grid pt-16 overflow-hidden space-y-5 xl:space-y-0  gap-5 grid-cols-12">
                              <div className="col-span-9 ">
                                    <h2 className="text-2xl text-[#00509d] font-semibold pb-5">বসুন্ধরায় ৩ বেডরুমের কয়েকটি আকর্ষণীয় অ্যাপার্টমেন্ট!</h2>
                                    <p>ঢাকায় পরিকল্পিত এলাকার তালিকা করলে, শুরুর দিকেই জায়গা করে নেবে বসুন্ধরা আবাসিক এলাকা। এটি শুধুমাত্র সুপরিকল্পিত এলাকাই নয়, এটি এমন এক এলাকা যেখানে কোনো কিছুর সাথে আপোষ না করেই পাওয়া যায় সকল আধুনিক সুযোগ-সুবিধা। এর সবচেয়ে বড় সুবিধাই হল এর অবস্থান। শহরের অভ্যন্তরে অবস্থিত হওয়ায় ঢাকার অন্যান্য এলাকার তুলনায় এই এলাকাটি অসংখ্য সুযোগ-সুবিধা আর সম্ভাবনায় ভরপুর। এর রয়েছে নিজস্ব একটি জীবন ব্যবস্থাপনা, যা বাকি এলাকাগুলো থেকে একে আলাদা করেছে। তাই, আপনি যদি বিলাসবহুল এই এলাকাটির মাঝে থাকতে চান, তাহলে বসুন্ধরা আবাসিক এলাকার তিন বেডরুমের অ্যাপার্টমেন্ট গুলোর মধ্যে থেকে এক্সক্লুসিভ ৫টি অ্যাপার্টমেন্ট এর বিস্তারিত তুলে ধরছি আপনার জন্যই। ১৬০০ বর্গফুটের অত্যাধুনিক অ্যাপার্টমেন্ট অবকাঠামোগত কারণেই বসুন্ধরাকে বলা যায় ঢাকার সবচেয়ে সুসংগঠিত এলাকাগুলোর একটি। অর্থাৎ, এখানে বসবাস যতোটা আরামদায়ক, জীবনযাপনের জন্যও ঠিক ততোটাই সুবিধাজনক। বসুন্ধরা আবাসিক এলাকার তিন বেডরুমের অ্যাপার্টমেন্ট গুলোর মধ্যে দারুণ একটি অ্যাপার্টমেন্ট রয়েছে অ্যাপোলো হাসপাতালের খুব কাছেই। ব্লক এইচ-এ অবস্থিত এই অ্যাপার্টমেন্টটি দক্ষিণমুখী। ১৬০০ বর্গফুটের হওয়ায় বেশ খোলামেলা আর ছিমছাম…</p>

                                    <p className="pt-10">ঢাকায় পরিকল্পিত এলাকার তালিকা করলে, শুরুর দিকেই জায়গা করে নেবে বসুন্ধরা আবাসিক এলাকা। এটি শুধুমাত্র সুপরিকল্পিত এলাকাই নয়, এটি এমন এক এলাকা যেখানে কোনো কিছুর সাথে আপোষ না করেই পাওয়া যায় সকল আধুনিক সুযোগ-সুবিধা। এর সবচেয়ে বড় সুবিধাই হল এর অবস্থান। শহরের অভ্যন্তরে অবস্থিত হওয়ায় ঢাকার অন্যান্য এলাকার তুলনায় এই এলাকাটি অসংখ্য সুযোগ-সুবিধা আর সম্ভাবনায় ভরপুর। এর রয়েছে নিজস্ব একটি জীবন ব্যবস্থাপনা, যা বাকি এলাকাগুলো থেকে একে আলাদা করেছে। তাই, আপনি যদি বিলাসবহুল এই এলাকাটির মাঝে থাকতে চান, তাহলে বসুন্ধরা আবাসিক এলাকার তিন বেডরুমের অ্যাপার্টমেন্ট গুলোর মধ্যে থেকে এক্সক্লুসিভ ৫টি অ্যাপার্টমেন্ট এর বিস্তারিত তুলে ধরছি আপনার জন্যই। ১৬০০ বর্গফুটের অত্যাধুনিক অ্যাপার্টমেন্ট অবকাঠামোগত কারণেই বসুন্ধরাকে বলা যায় ঢাকার সবচেয়ে সুসংগঠিত এলাকাগুলোর একটি। অর্থাৎ, এখানে বসবাস যতোটা আরামদায়ক, জীবনযাপনের জন্যও ঠিক ততোটাই সুবিধাজনক। বসুন্ধরা আবাসিক এলাকার তিন বেডরুমের অ্যাপার্টমেন্ট গুলোর মধ্যে দারুণ একটি অ্যাপার্টমেন্ট রয়েছে অ্যাপোলো হাসপাতালের খুব কাছেই। ব্লক এইচ-এ অবস্থিত এই অ্যাপার্টমেন্টটি দক্ষিণমুখী। ১৬০০ বর্গফুটের হওয়ায় বেশ খোলামেলা আর ছিমছাম…</p>
                                    <div className=" mt-10 ">
                                          <img className="rounded-md border-2 border-[#3391e9] h-full" src={blogDetailsImg6} alt="" />
                                    </div>
                              </div>

                              <div className="col-span-3 ">
                                    <div className=" px-5 pt-5 pb-10 bg-[#E6EEF5] rounded-md">
                                          <h3 className="text-xl ">Categories</h3>
                                          <ul className="space-y-5 pt-5">
                                                <li className="flex gap-2 items-center"><MdKeyboardArrowRight />Home</li>
                                                <li className="flex gap-2 items-center"><MdKeyboardArrowRight />Investment Decision</li>
                                                <li className="flex gap-2 items-center"><MdKeyboardArrowRight />News Real estate</li>
                                          </ul>
                                          <ul className=" mt-5 space-y-2 pt-5">
                                                <li>Buying Tips</li>
                                                <li>Selling Tips</li>
                                                <li>Property Development</li>
                                                <li>Investment Insights</li>
                                                <li>Market Trends</li>
                                                <li>Legal Considerations</li>
                                                <li>Local Market Focus (e.g.,by region) </li>
                                          </ul>
                                    </div>
                                    <div className=" px-5 pt-5 mt-5 h-full rounded-md bg-[#E6EEF5]">
                                          <h3 className="text-xl ">Recent Blog</h3>
                                          <ul className="space-y-2 py-5">
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

                        <div className="xl:grid xl:grid-cols-3 gap-5 mt-10">
                              <SideBlock></SideBlock>
                              <SideBlock></SideBlock>
                              <SideBlock></SideBlock>
                        </div>

                  </div>
            </div>

      );
};

export default BlogDetails;
