import { FaArrowRightLong } from "react-icons/fa6";
import OchiCardImage from "../assets/images/OochiCardImage.png"
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.5' className="w-full h-screen pt-1 bg-[#F1F1F1]">
      <div className='textstructure mt-40 px-12'>
        {["We Create", "Eye-Opening", "Presentations"].map((text, index) => (
        <div key={index} className='masker flex items-center gap-[1vw]'>
          {index === 1 ?
          <motion.div
          initial={{width: 0}} animate={{width: '9vw'}} transition={{ease: [0.96, 0, 0.24, 1], duration: 1}}
          className="w-[9vw] h-[5.7vw] relative rounded-md top-[0.6vw] overflow-hidden">
            <img className='bg-cover w-full h-full' src={OchiCardImage} alt="image"/>
          </motion.div>
          : null}
          <h1 className='uppercase font-founders-grotesk text-[9vw] leading-[6.5vw] font-extralight'>{text}</h1>
        </div>
        ))}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-56 flex justify-between items-center py-5 px-16'>
        {["For public and private compines", "From the first pitch to IPO"].map((item, index) => {
          return (
            <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
          )
        })}
      <div className="start flex gap-2 items-center ">
        <div className="px-5 py-2 uppercase border-[1px] rounded-full border-zinc-500 font-light text-sm">Start the project</div>
        <div className='w-10 h-10 rounded-full border-[1px] border-zinc-500 flex justify-center items-center'><FaArrowRightLong className='-rotate-45' /></div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage