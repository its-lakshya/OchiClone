const Featured = () => {
  return (
    <div className='w-full py-24'>
      <div className='w-full px-12 border-b-[1px] border-zinc-400 pb-8'>
        <h1 className='text-[3.7vw] font-neue-montreal tracking-tight'>Featured projects</h1>
      </div>
      <div className='px-12'>
        <div className='cards w-full flex gap-4 mt-10'>
          <div className='cardcontainer w-1/2 h-[39vw] relative'>
            <h1 className='absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none tracking-tight font-founders-grotesk text-9xl text-[#CDEA67]'>
              {'FYND'.split('').map((item, index) => <span key={index} className=''>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl bg-green-500 overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt='image'/>
            </div>
          </div>
          <div className='cardcontainer w-1/2 h-[39vw] relative'>
            <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none tracking-tight font-founders-grotesk text-9xl text-[#CDEA67]'>
              {'VISE'.split('').map((item, index) => <span key={index} className=''>{item}</span>)}
            </h1>
            <div className='card w-full h-full rounded-xl bg-green-500 overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt='image'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured