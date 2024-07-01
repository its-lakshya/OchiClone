const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex justify-center items-center px-12 gap-4'>
      <div className='cardcontainer h-[45vh] w-1/2'>
        <div className='card relative w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center'>
          <img className='w-40' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='image'/>
          <button className="absolute left-8 bottom-8 font-neue-montreal text-[#CDEA67] border border-[#CDEA67] rounded-2xl px-2 py-[3px] font-light text-sm">@2023-2024</button>
        </div>
      </div>
      <div className='cardcontainer h-[45vh] w-1/2 flex justify-center items-center gap-4'>
        <div className='card relative w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center'>
          <img className='w-40' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt='image'/>
          <button className="absolute left-8 bottom-8 font-neue-montreal text-zinc-100 border border-zinc-100 rounded-2xl px-2 py-[3px] font-light text-sm uppercase">Rating 5.0 on clutch</button>
        </div>
        <div className='card relative w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center'>
          <img className='w-28' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt='image'/>
          <button className="absolute left-8 bottom-8 font-neue-montreal text-zinc-100 border border-zinc-100 rounded-2xl px-2 py-[3px] font-light text-sm uppercase">Bussiness bootcamp alumni</button>
        </div>
      </div>
    </div>
  )
}

export default Cards