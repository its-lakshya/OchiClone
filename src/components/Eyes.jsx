import { useEffect, useState } from "react"

const Eyes = () => {

  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
      setRotate(angle - 180)
    })
  },[])

  return (
    <div className='eyes w-full h-screen overflow-hidden z-0'>
      <div data-scroll data-scroll-section data-scroll-speed="-.8" className='relative w-full h-full bg-cover  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute top-1/2 left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center gap-10'>
          <div className='w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center'>
            <div className='relative w-[60%] h-[60%] rounded-full bg-zinc-900'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4'>
                <div className='w-4 h-4 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='w-[14vw] h-[14vw] rounded-full bg-zinc-100 flex items-center justify-center'>
            <div className='relative w-[60%] h-[60%] rounded-full bg-zinc-900'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-4'>
                <div className='w-4 h-4 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes