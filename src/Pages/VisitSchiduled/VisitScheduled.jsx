import sideImage from '../../assets/f057cdb354db7a5da134d83cbcff8da0.png';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from 'react-icons/fa';
import Card from '../WishList/Card/Card';

const VisitScheduled = () => {
      return (
            <div>
                  <div className=' my-10 lg:w-[90%] w-[95%] mx-auto'>
                        <div className='xl:flex  gap-32 '>
                              <div className='xl:w-[80%] h-auto relative overflow-hidden  '>
                                    <img className='  w-full h-full ' src={sideImage} alt="" />
                                    <FaAngleLeft className='absolute top-0 bottom-0 left-5 cursor-pointer my-auto border text-4xl rounded-full text-[#00509d] bg-gray-300 bg-transparent' />
                                    <FaAngleRight className='absolute top-0  bottom-0 right-5 text-[#00509d] cursor-pointer my-auto border text-4xl rounded-full bg-gray-300 bg-transparent' />

                              </div>
                              <div>
                                    <h3 className='text-[#00509d] text-xl mt-5 xl:mt-0 font-semibold text-center'>Visit Schedule</h3>
                                    <p className='text-center pb-5'>Please provide all the necessary information.</p>

                                    <div className='relative'>
                                          <div className='flex justify-around gap-3 xl:gap-5 px-5 '>
                                                <div className='border w-32 p-5 hover:bg-[#00509d] hover:text-white rounded-md transition duration-300 text-center h-24 top-0 bottom-0 my-auto '>
                                                      <h3>Fri</h3>
                                                      <p>April?</p>
                                                </div>
                                                <div className='border w-32 p-5 hover:bg-[#00509d] hover:text-white rounded-md transition duration-300 text-center h-24 top-0 bottom-0 my-auto '>
                                                      <h3>Set</h3>
                                                      <p>April 1</p>
                                                </div>
                                                <div className='border w-32 p-5 hover:bg-[#00509d] hover:text-white rounded-md transition duration-300 text-center h-24 top-0 bottom-0 my-auto '>
                                                      <h3>Sun</h3>
                                                      <p>April 2</p>
                                                </div>
                                                <FaAngleLeft className='absolute text- left-0 top-0 bottom-0 my-auto' />
                                                <FaAngleRight className='absolute right-0 top-0 bottom-0 my-auto' />
                                          </div>
                                    </div>
                                    <h3 className='py-5'>Select Time Slot*</h3>
                                    <div className='flex justify-between gap-3 xl:gap-5 pb-5'>
                                          <div>
                                                <p className='px-3 py-2 border rounded'>10 AM - 12 PM</p>
                                          </div>
                                          <div>
                                                <p className='px-3 py-2 border rounded'>10 AM - 12 PM</p>
                                          </div>
                                          <div>
                                                <p className='px-3 py-2 border rounded'>10 AM - 12 PM</p>
                                          </div>
                                    </div>
                                    <div className='space-y-2'>
                                          <h3>Name*</h3>
                                          <input className='rounded w-full' type="text" placeholder='Your Name' />

                                          <h3 >Phone Number*</h3>
                                          <input className='rounded w-full' type="number" placeholder='+880' />

                                          <h3>Email</h3>
                                          <input className='rounded w-full' type="email" placeholder='boibeara@gmail.com' />

                                          <h3>Note</h3>
                                          <input className='rounded w-full' type="text" placeholder='Abc' />

                                          <button className='bg-[#00509d] text-white py-2 w-full rounded'>Submit</button>
                                    </div>
                              </div>

                        </div>
                        <div className='pt-20'>
                              <h3 className='text-xl xl:text-2xl text-[#00509d] font-semibold'>BDT 2.5 core</h3>
                              <p className='text-gray-400 text-md xl:text-lg'>Ready flat for Sale In Uttara, Sector 7</p>
                              <div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                              </div>
                              <h3 className='xl:text-xl  font-semibold py-3'>Buy This Great 1075 Square Feet Residential Flat In Uttar Badda, Purbanchal Road</h3>
                              <p className='py-10'>This lucrative plot has a lot to offer. The plot has a content plan of making sure you get a life with every possible facility. So If you want to live in an environment which is absolutely secure and peaceful then it is the right time and the right place to invest your money. Grab this great opportunity to execute your dreams into reality.</p>

                              <table className="table-auto mt-10 rounded-full border-collapse border border-gray-300 xl:w-8/12 md:w-full">
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
                                                <td className="border border-gray-300 px-4 py-2"></td>
                                          </tr>
                                    </tbody>
                              </table>

                              <h3 className='pt-20 pb-5 text-2xl'>Recommended for you</h3>
                              <div className='space-y-5'>
                                    <div className='xl:w-8/12 space-y-5'>
                                          <Card></Card>
                                          <Card></Card>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default VisitScheduled;