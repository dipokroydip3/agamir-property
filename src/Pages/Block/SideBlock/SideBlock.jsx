import sideBlock from '../../../assets/a75a930f1358e5896f32ac2e6fb70e0d.png';

const SideBlock = () => {
      return (
            <div>
                  <div className=' rounded-md'>
                        <img className='min-h-[320px] max-h-[420px]  md:w-full rounded-t-md' src={sideBlock} alt="" />
                        <div className='bg-[#00509d] rounded-b-md text-white py-5 px-5'>
                              <h3 className='pb-5 px-10 text-center text-xl font-semibold'>প্রপার্টির মার্কেটপ্লেস বসুন্ধরার অনবদ্য এগিয়ে চলা!</h3>
                              <div className='text-sm flex justify-between'>
                                    <span>tips</span>
                                    <span>March28,2023</span>
                                    <span>3 Minutes read</span>
                                    <span>12k Views</span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SideBlock;