import { LuCopy } from 'react-icons/lu';
import cardImage from '../../../assets/208e023d93a44cbc257378428d228ba9.png';
import { MdOutlineEmail, MdOutlineQrCodeScanner } from 'react-icons/md';
import { IoIosSearch } from 'react-icons/io';
import { IoCallOutline } from 'react-icons/io5';


const Card = () => {
      return (
            <div>
                  <div className='block md:flex xl:flex  border-2 rounded bg-[#e6eef5] items-center border-[#00509d] '>
                        <div>
                              <img className='w-96' src={cardImage} alt="" />
                        </div>
                        <div className='pl-5'>
                              <h3 className='text-[#00509d]'>BDT <span className='text-xl font-semibold'>2.99 Core</span></h3>
                              <h3>Ready For construction, South Facing Plot, with file transfer</h3>
                              <div className='flex gap-3 py-3'>
                                    <div>
                                          <LuCopy className='text-[#00509d] text-2xl mb-2' />
                                          <h3>M Block</h3>
                                    </div>
                                    <span></span>
                                    <div>
                                          <MdOutlineQrCodeScanner className='text-[#00509d] text-2xl mb-2'  />
                                          <h3>5 Katha</h3>
                                    </div>
                                    <span></span>
                                    <div>
                                          <IoIosSearch className='text-[#00509d] text-2xl mb-2' />
                                          <h3>ID:23678</h3>
                                    </div>
                              </div>
                              <div>
                                    <div className='flex mb-3 xl:mb-0 gap-5'>
                                          <button className='bg-[#00509d] flex items-center gap-1 px-5 py-1 rounded text-white'><IoCallOutline />Call</button>
                                          <button className='bg-[#00509d] flex items-center gap-1 px-5 py-1 rounded text-white'><MdOutlineEmail  />Email</button>
                                    </div>
                                    <div>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Card;