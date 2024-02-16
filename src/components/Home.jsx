import React from 'react'
import bgImg from '../assets/mainBg.jpg';
import { FaDiscord, FaGithub, FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

const Home = () => {
  const Img = 'https://cdn.create.vista.com/api/media/small/139022268/stock-photo-businessman-showing-ok-gesture';
  return (
    <main className='w-screen h-screen p-4'>
      <div className='absolute inset-0'>
        <img src={bgImg} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='relative text-white'>
        <div className='flex gap-2 items-center'>
          <div className=' bg-slate-700 bg-opacity-50 rounded-xl p-2 w-[40vw] h-full'>
            <h2 className=' text-sm'>Skills</h2>
            <ul className='text-xs flex flex-col p-2 gap-2'>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React JS</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Firebase</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className='relative w-[60vw] h-[55vw]'>
            <img className='w-full h-full object-cover rounded-full' src={Img} alt="Akhil's Photo" />
            <span className=' absolute top-2 py-2 px-4 bg-blue-500 rounded-full right-2'>Akhil</span>
            <span className=' absolute bottom-2 left-2 rounded-full bg-blue-500 py-2 px-4 '>Palsra</span>
            <span></span>
          </div>
        </div>

        <div className='my-4 flex gap-2 justify-between items-center'>
          <div className='w-[70vw] bg-slate-700 bg-opacity-20 p-2 rounded-2xl '>
            <h2 className='mb-3'>Projects</h2>
            <ul className='flex flex-col gap-2'>
              <li className='px-2 py-1 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span className='text-sm'>Hermetica</span> <a href="" className='py-1 px-3 bg-blue-500 rounded-xl'><FaExternalLinkAlt className='my-1 text-sm' /></a></p>
                <p className=' text-xs'>React, Tailwind, Framer Motion</p>
            </li>
               <li className='px-2 py-1 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span className='text-sm'>Netflix Clone</span> <a href="" className='py-1 px-3 bg-blue-500 rounded-xl'><FaExternalLinkAlt className='my-1 text-sm' /></a></p>
                <p className=' text-xs'>React, Tailwind, Firebase</p>
              </li>
               <li className='px-2 py-1 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span className='text-sm'>Nike Clone</span> <a href="" className='py-1 px-3 bg-blue-500 rounded-xl'><FaExternalLinkAlt className='my-1 text-sm' /></a></p>
                <p className=' text-xs'>React, Tailwind</p>
              </li>
              <li className='px-2 py-1 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span className='text-sm'>E-commerce</span> <a href="" className='py-1 px-3 bg-blue-500 rounded-xl'><FaExternalLinkAlt className='my-1 text-sm' /></a></p>
                <p className=' text-xs'>Redux, Firebase</p>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center w-[30vw]'>
            <div>
              <div className='w-14 h-14 p-2 bg-indigo-700 rounded-3xl'>
                <FaDiscord className='w-full h-full object-cover' />
              </div>
              <p className='text-center text-sm mt-1'>Discord</p>
            </div>
             <div>
              <div className='w-14 h-14 p-3 bg-blue-500 rounded-3xl'>
                <FaLinkedinIn className='w-full h-full object-cover' />
              </div>
              <p className='text-center'>LinkedIn</p>
            </div>
             <div>
              <div className='w-14 h-14 p-2 bg-black rounded-3xl'>
                <FaGithub className='w-full h-full object-cover bg-black' />
              </div>
              <p className='text-center text-sm mt-1'>GitHub</p>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex flex-col w-[25vw] justify-center items-center'>
              <div className='w-20 h-20 p-3 bg-indigo-600 rounded-3xl'>
                <IoDocumentTextSharp className="w-full h-full object-cover" />
                {/* <img src={Img} alt="" className='w-full h-full object-cover rounded-3xl' /> */}
              </div>
              <p className='text-center'>Resume</p>
            </div>
          <div className='w-[60vw]'>
            <img src="https://denvercoder1-github-readme-stats.vercel.app/api/top-langs/?username=akhil683&langs_count=8&layout=compact&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866" alt="" className='h-full w-full' />
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center mt-4'>
          <p className=' animate-ping text-2xl'>^</p>
          <p className=' animate-ping text-xl -translate-y-12'>^</p>
        </div>
      </div> 
    </main>
  )
}

export default Home;
