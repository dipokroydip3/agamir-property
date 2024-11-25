import { FaRegPenToSquare, FaStar } from 'react-icons/fa6';
import sideHeroImage from '../../assets/d9dfc60dd046b7f463bc9d0fbd30add6.png';
import reviewImage from '../../assets/c51709e76a2d6a37084d9e1a63859d89.jpg';
import reviewImage2 from '../../assets/69d255d1881157e65d32484d91389638.jpg';
import { PiSubtractSquare } from 'react-icons/pi';
import { FaPeopleCarry, } from 'react-icons/fa';
import SectionHeader from '../../Components/Common/SectionHeader';
import { AiOutlineYoutube } from 'react-icons/ai';

const PostProperty = () => {
      return (
            <div>
                  <div className='bg-[#e6eef5] '>
                        <div className='xl:flex w-10/12 m-auto justify-between items-center'>
                              <div className='w-full '>
                                    <img className='' src={sideHeroImage} alt="" />
                              </div>
                              <div className='py-10 xl:py-20'>
                                    <h3 className='text-2xl text-[#00509d] font-semibold'>Sale Your <br /> Property Online <br /> Free<span className='text-[#fdc500]'>!</span></h3>
                                    <p className='py-5'>Looking to exchange property online or are you in search of tenants?
                                          Do it with ease with the largest real estate marketplace in
                                          Bangladesh. Start your journey now!</p>
                                    <button className='bg-[#fdc500]  px-4 py-2 rounded'>Get Started</button>
                              </div>
                        </div>
                  </div>
                  <div className='w-9/12 m-auto'>
                        <h3 className='text-4xl text-center mt-16 text-[#00509d] font-bold'>How it Work</h3>
                        <p className='text-center xl:w-96 mx-auto pt-5'>Real estate can be complicated on its own. But we are here to
                              make your journey simple and easy.</p>
                        <div className='flex justify-center gap-10 py-10'>
                              <div>
                                    <div className='w-24 h-24 m-auto rounded-full bg-[#e6eef5] flex justify-center items-center'>
                                          <FaRegPenToSquare className='text-3xl text-[#00509d]' />
                                    </div>
                                    <p className='text-center pt-2 text-gray-400'>Submit your own property for sale</p>
                              </div>
                              <div>
                                    <div className='w-24 h-24 m-auto rounded-full bg-[#e6eef5] flex justify-center items-center'>
                                          <PiSubtractSquare className='text-3xl text-[#00509d]' />
                                    </div>
                                    <p className='text-center pt-2 text-gray-400'>Submit your own property for sale</p>
                              </div>
                              <div>
                                    <div className='w-24 h-24 m-auto rounded-full bg-[#e6eef5] flex justify-center items-center'>
                                          <FaPeopleCarry className='text-3xl text-[#00509d]' />
                                    </div>
                                    <p className='text-center pt-2 text-gray-400'>Submit your own property for sale</p>
                              </div>
                        </div>
                  </div>
                  <div className="lg:my-20 my-10">
                        <SectionHeader state="Our Customer Review"></SectionHeader>
                        <br />
                        <br />
                        <div className="slider ">
                              {/* slider */}
                              {/* slider-track */}
                              <div className="slider-track ">
                                    {Array(10)
                                          .fill()
                                          .map((_, idx) => (
                                                <div
                                                      key={idx}
                                                      className="slide min-w-[450px] group relative  cursor-pointer border border-primary rounded-md"
                                                >
                                                      {/* <h2 className="py-3 bg-blue-200 text-primary text-center text-3xl font-bold border-b-2 border-primary">
                                                            BLOK-H
                                                      </h2>
                                                      <img
                                                            className="w-5/12 mx-auto my-5"
                                                            src="https://assets.dummyjson.com/public/qr-code.png"
                                                            alt="QR Code"
                                                      />
                                                      <div className="my-10 px-3 text-center">
                                                            <h3 className="text-2xl text-primary font-semibold mb-3">
                                                                  Shopping Centers
                                                            </h3>
                                                            <p>
                                                                  Add a little more flare and inspiration to your home. The
                                                                  walls, floors, and accents of the house can be tweaked
                                                                  without major reconstruction or time lost.
                                                            </p>
                                                      </div> */}
                                                      <div>
                                                            <div className='bg-[#E6EEF5] group-hover:py-0 group-hover:px-0 py-5 px-5'>
                                                                  <div className='flex  items-center gap-5'>
                                                                        <div className=' rounded-full w-20 h-20 border border-[#00509d]'><img className='w-full h-full rounded-full' src={reviewImage} alt="" /></div>
                                                                        <div>
                                                                              <h2 className='text-[#00509d] text-xl font-semibold'>Raisul islam Rana</h2>
                                                                              <p>CEO mica kotha.com</p>
                                                                        </div>
                                                                  </div>
                                                                  <p className='py-5'>We are very happy that, Agamir Property gave us a lucrative plot what we needed, their service is too good. They give us the best companion to find out our desire plot.</p>
                                                                  <div className='flex gap-2 text-2xl  text-yellow-300'>
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                        <FaStar />
                                                                  </div>
                                                                  <img className='absolute w-full hidden group-hover:block transition transform ease-in duration-500 h-full top-0 ' src={reviewImage2} alt="" />
                                                                  <AiOutlineYoutube className='text-5xl text-white absolute hidden group-hover:block transition duration-300 top-0 left-0 right-0 bottom-0 m-auto' />
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PostProperty;