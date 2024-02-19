import React from 'react'
import BgImg from '../assets/subMainBg.jpg'

const Menu = () => {
  return (
    <section className='z-20 flex flex-col justify-between fixed text-white w-screen h-screen bg-black p-4'>
      <div className='absolute inset-0 -z-10'>
        <img src={BgImg} className='w-full h-full object-cover opacity-60' alt="" />
      </div>
      <ul className='flex flex-col justify-center items-center uppercase w-full text-xl gap-4'>
        <li className='py-6 rounded-xl bg-slate-500 text-center bg-opacity-50 w-full'>Home</li>
        <li className='py-6 rounded-xl bg-slate-500 text-center bg-opacity-50 w-full'>Blogs</li>
        <li className='py-6 rounded-xl bg-slate-500 text-center bg-opacity-50 w-full'>Resume</li>
        <li className='py-6 rounded-xl bg-slate-500 text-center bg-opacity-50 w-full'>About Me</li>
      </ul>
    <div className='flex gap-6 justify-center items-center mb-6'>
      <span><a className='p-3 bg-green-700 rounded-full' href="#">Insta</a></span>
      <span><a className='p-3 bg-green-700 rounded-full' href="#">Insta</a></span>
      <span><a className='p-3 bg-green-700 rounded-full' href="#">Insta</a></span>
      <span><a className='p-3 bg-green-700 rounded-full' href="#">Insta</a></span>
    </div>
    </section>
  )
}

export default Menu
