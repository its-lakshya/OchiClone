import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-24 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl text-white'>
      <div className='text h-auto border-t-[1px] border-b-[1px] border-zinc-400 flex items-center whitespace-nowrap overflow-hidden'>
        <motion.h1
        initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}}
        className='text-[25vw] -mt-[4.5vw] -mb-[2vw] leading-none font-founders-grotesk font-semibold uppercase pr-20'>
          We are ochi
        </motion.h1>
        <motion.h1
        initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}}
        className='text-[25vw] -mt-[4.5vw] -mb-[2vw] leading-none font-founders-grotesk font-semibold uppercase pr-20'>
          We are ochi
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee