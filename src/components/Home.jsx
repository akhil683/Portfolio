import React from 'react'
import bgImg from '../assets/mainBg.jpg';

const Home = () => {
  const Img = 'https://cdn.create.vista.com/api/media/small/139022268/stock-photo-businessman-showing-ok-gesture';
  return (
    <main className='w-screen h-screen p-4 bg-red-500'>
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
            <span className=' absolute top-2 p-2 bg-blue-500 rounded-full right-2'>Hello</span>
            <span className=' absolute bottom-2 left-2 rounded-full bg-blue-500 p-2 '>World</span>
            <span></span>
          </div>
        </div>

        <div className='my-4 flex justify-between items-center'>
          <div className='w-[60vw] bg-slate-700 bg-opacity-20 p-2 rounded-2xl '>
            <h2 className='mb-3'>Projects</h2>
            <ul className='flex flex-col gap-2'>
              <li className='p-2 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span className='text-sm'>Hermetica</span> <a href="" className='py-1 px-3 bg-blue-500 bg-opacity-40 rounded-xl'>SH</a></p>
                <p className=' text-xs my-1'>React, Tailwind, Framer Motion</p>
            </li>
               <li className='p-2 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span className='text-sm'>Netflix Clone</span> <a href="" className='py-1 px-3 bg-blue-500 bg-opacity-40 rounded-xl'>SH</a></p>
                <p className=' text-xs my-1'>React, Tailwind, Firebase</p>
              </li>
               <li className='p-2 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span className='text-sm'>Nike Clone</span> <a href="" className='py-1 px-3 bg-blue-500 bg-opacity-40 rounded-xl'>SH</a></p>
                <p className=' text-xs my-1'>React, Tailwind</p>
              </li>
              <li className='p-2 bg-slate-500 bg-opacity-20 rounded-2xl'>
                <p className='flex justify-between items-center'><span className='text-sm'>E-commerce</span> <a href="" className='py-1 px-3 bg-blue-500 bg-opacity-40 rounded-xl'>SH</a></p>
                <p className=' text-xs my-1'>Redux, Firebase</p>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center w-[30vw]'>
            <div>
              <div className='w-20 h-20'>
                <img src={Img} alt="" className='w-full h-full object-cover rounded-3xl' />
              </div>
              <p className='text-center'>Discord</p>
            </div>
             <div>
              <div className='w-20 h-20'>
                <img src={Img} alt="" className='w-full h-full object-cover rounded-3xl' />
              </div>
              <p className='text-center'>Discord</p>
            </div>
             <div>
              <div className='w-20 h-20'>
                <img src={Img} alt="" className='w-full h-full object-cover rounded-3xl' />
              </div>
              <p className='text-center'>Discord</p>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div>
              <div className='w-20 h-20'>
                <img src={Img} alt="" className='w-full h-full object-cover rounded-3xl' />
              </div>
              <p className='text-center'>Resume</p>
            </div>
          <div className='w-[70vw]'>
            <img src="https://denvercoder1-github-readme-stats.vercel.app/api/top-langs/?username=akhil683&langs_count=8&layout=compact&theme=react&border_color=7F3FBF&bg_color=0D1117&title_color=F85D7F&icon_color=F8D866" alt="" className='h-full w-full' />
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center mt-4'>
          <p className=' animate-ping text-2xl'>^</p>
          <p className=' animate-ping text-xl -translate-y-12'>^</p>
          <p className=' -translate-y-2'>Swipe Up</p>
        </div>
      </div> 
    </main>
  )
}

export default Home
