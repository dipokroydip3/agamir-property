import { FaRegPenToSquare } from 'react-icons/fa6';
import sideHeroImage from '../../assets/d9dfc60dd046b7f463bc9d0fbd30add6.png';
import { PiSubtractSquare } from 'react-icons/pi';
import { FaPeopleCarry } from 'react-icons/fa';

const PostProperty = () => {
      return (
            <div>
                  <div className='bg-[#e6eef5] '>
                        <div className='flex gap- w-10/12 m-auto justify-between items-center'>
                              <div className='w-full '>
                                    <img className='' src={sideHeroImage} alt="" />
                              </div>
                              <div className='py-20'>
                                    <h3 className='text-2xl text-[#00509d] font-semibold'>Sale Your <br /> Property Online <br /> Free<span className='text-[#fdc500]'>!</span></h3>
                                    <p className='py-5'>Looking to exchange property online or are you in search of tenants?
                                          Do it with ease with the largest real estate marketplace in
                                          Bangladesh. Start your journey now!</p>
                                    <button className='bg-[#fdc500]  px-4 py-2 rounded'>Get Started</button>
                              </div>
                        </div>
                  </div>
                  <div className='w-9/12 m-auto'>
                        <h3 className='text-3xl text-center mt-16'>How it Work</h3>
                        <p>Real estate can be complicated on its own. But we are here to
                              make your journey simple and easy.</p>
                        <div className='flex justify-center gap-10 py-10'>
                              <div>
                                    <div className='w-28 h-28 rounded-full bg-[#e6eef5] flex justify-center items-center'>
                                          <FaRegPenToSquare className='text-2xl text-[#00509d]' />
                                    </div>
                                    <p>Submit your own property for sale</p>
                              </div>
                              <div>
                                    <div className='w-28 h-28 rounded-full bg-[#e6eef5] flex justify-center items-center'>
                                          <PiSubtractSquare className='text-2xl text-[#00509d]' />
                                    </div>
                                    <p>Submit your own property for sale</p>
                              </div>
                              <div>
                                    <div className='w-28 h-28 rounded-full bg-[#e6eef5] flex justify-center items-center'>
                                          <FaPeopleCarry className='text-2xl text-[#00509d]' />
                                    </div>
                                    <p>Submit your own property for sale</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PostProperty;