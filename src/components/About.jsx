const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="w-full pt-20 pb-10 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA67] text-black">
      <h1 className='font-neue-montreal text-[3.6vw] px-12 leading-none font-light w-[90%]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="px-12 w-full flex gap-5 border-t-[0.5px] pt-3 mt-20 border-[#414924]">
        <div className='w-1/2'>
          <h1 className='text-[3.5vw] font-neue-montreal'>Our approach:</h1>
          <button className='flex gap-10 text-sm items-center uppercase px-6 py-4 bg-zinc-900 mt-2 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[55vh] rounded-[12px] overflow-hidden'>
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt='img'/>
        </div>
      </div>
    </div>
  )
}

export default About