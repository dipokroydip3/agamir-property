import gridImg1 from '../../../src/assets/bbfb725de94a63c8d6661df0864efc9e.png';
import gridImg2 from '../../../src/assets/58d6069544c47936a069386582bb005c.png';
import gridImg3 from '../../../src/assets/663c8ccf051c7c0ddfe7e0e2de5e1a9d.png';
import gridImg4 from '../../../src/assets/bbfb725de94a63c8d6661df0864efc9e.png';
import Card from '../WishList/Card/Card';
import { IoCalendarOutline, IoPlayBackOutline, IoShareSocialOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { LuCopy } from 'react-icons/lu';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';



const ProductDetails = () => {
      return (
            <div className='lg:w-[90%] w-[95%] py-5 xl:py-16 m-auto'>
                  <div className='grid xl:grid-cols-12 gap-3 xl:gap-5'>
                        <div className='xl:col-span-9 relative'>
                              <img className='w-full h-full' src={gridImg1} alt="" />
                              <span className='absolute w-10  flex justify-center items-center rounded-full opacity-65 h-10 border bg-white left-0 cursor-pointer top-0 bottom-0 m-auto'>
                                    <SlArrowLeft className='' />
                              </span>
                              <div className='absolute w-10  flex justify-center items-center rounded-full opacity-65 h-10 border bg-white right-0 cursor-pointer top-0 bottom-0 m-auto'>
                                    <SlArrowRight />
                              </div>
                              <button className='flex absolute bottom-2 right-2 items-center bg-[#fdc500] rounded px-5 py-1'>
                                    <IoPlayBackOutline />
                                    Request View
                              </button>
                        </div>
                        <div className='flex xl:block xl:col-span-3 gap-3 xl:gap-0 xl:space-y-5'>
                              <div><img src={gridImg2} alt="" /></div>
                              <div><img src={gridImg3} alt="" /></div>
                              <div><img src={gridImg4} alt="" /></div>
                        </div>
                  </div>
                  <div className='xl:grid xl:grid-cols-12 gap-5 mt-10 '>
                        <div className='col-span-9'>
                              <div className='xl:flex justify-between'>
                                    <div>
                                          <h3 className='text-2xl text-[#00509d] font-semibold'>BDT 2.5 core</h3>
                                          <p className='text-gray-400'>Ready flat for Sale In Uttara, Sector 7</p>
                                    </div>
                                    <div className='flex h-9 my-4 xl:my-0 text-sm lg:text-md gap-5'>
                                          <button className='flex items-center gap-1 bg-[#fdc500] px-3 py-1 rounded'><IoCalendarOutline />Booking View</button>
                                          <button className='flex items-center gap-1 bg-[#fee48a] px-4 py-1 rounded'><IoIosSearch />Save</button>
                                          <button className='flex items-center gap-1 bg-[#fee48a] px-4 py-1 rounded'><IoShareSocialOutline />Share</button>
                                    </div>
                              </div>
                              <div className='flex gap-3 py-4'>
                                    <div>
                                          <LuCopy className='text-[#00509d] text-xl' />
                                          <h3>M Block</h3>
                                    </div>
                                    <span className=' border border-[#5190cb]'></span>
                                    <div>
                                          <HiOutlineSquares2X2 className='text-[#00509d] text-xl' />
                                          <h3>5 Katha</h3>
                                    </div>
                              </div>
                              <h3 className=' text-md xl:text-xl  font-semibold py-3'>Buy This Great 1075 Square Feet Residential Flat In Uttar Badda, Purbanchal Road</h3>
                              <p className='py-10 text-center xl:text-left'>This lucrative plot has a lot to offer. The plot has a content plan of making sure you get a life with every possible facility. So If you want to live in an environment which is absolutely secure and peaceful then it is the right time and the right place to invest your money. Grab this great opportunity to execute your dreams into reality.</p>

                              <table className="table-auto xl:mt-10 rounded-full border-collapse border border-gray-300 w-full">
                                    <thead className=''>
                                          <tr className="bg-[#00509d] text-white ">
                                                <th colSpan={2} className="border   border-gray-300 px-4 py-2 text-center">Property information</th>

                                          </tr>
                                    </thead>
                                    <tbody>
                                          <tr>
                                                <td className="border border-gray-300 px-4 py-2">Block  <span>: M Block</span></td>
                                                <td className="border border-gray-300 px-4 py-2">Area  <span>: Agamir property-ID654981789451789</span></td>
                                          </tr>
                                          <tr>
                                                <td className="border border-gray-300 px-4 py-2">Plot Type  <span>: For Rent</span></td>
                                                <td className="border border-gray-300 px-4 py-2">Plot ID  <span>: 16 September 2023</span></td>
                                          </tr>
                                          <tr>
                                                <td className="border border-gray-300 px-4 py-2">Plot Face  <span>: South</span></td>
                                                <td className="border border-gray-300 px-4 py-2">Size  <span>: 5 Katha</span></td>
                                          </tr>
                                          <tr>
                                                <td className="border border-gray-300 px-4 py-2">Front Road  <span>: 25 v& 50 Feet</span></td>
                                                <td className="border border-gray-300 px-4 py-2">Price  <span>: BDT 2.5 core per katha</span></td>
                                          </tr>
                                          <tr>
                                                <td className="border border-gray-300 px-4 py-2">Includes  <span>: </span></td>
                                                <td className="border border-gray-300 px-4 py-2">Row 5, Col 2</td>
                                          </tr>
                                    </tbody>
                              </table>

                              <h3 className='pt-20 pb-5 text-2xl'>Recommended for you</h3>
                              <div className='space-y-5'>
                                    <Card></Card>
                                    <Card></Card>
                              </div>
                        </div>
                        <div className='col-span-3'>
                              <div className='bg-[#e6eef5] border-2 py-3 px-10 border-[#00509d] rounded-md'>
                                    <h3 className='text-center'>Managed by</h3>
                                    <h3 className='text-center text-xl text-[#00509d] font-semibold '>Agamir <br />Property</h3>
                                    <p className='text-center text-sm text-gray-500'>Where Dreams Meet Reality</p>
                                    <div className='flex gap-5 justify-center mt-3 text-white'>
                                          <button className='bg-[#00509d] shadow-xl px-3 py-2 rounded'>Call</button>
                                          <button className='bg-[#00509d] px-3 py-2 shadow-xl rounded'>Email</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductDetails;