import React from "react";
import '../index.css';
import blog from '../images/blog.jpeg';
import blog1 from '../images/blog2.jpeg';
import '@fontsource/ojuju';

const HeroSection = () => {
  return (
    <section className="max-w-7xl font-bold text-black w-full px-4 py-2 font-['ojuju'] ">
      <main className='flex flex-row w-full justify-evenly h-[fit-content] px-8 py-2 gap-8'>
        <div className="flex flex-col items-center px-4 w-[55%]">
          <span className="flex flex-row items-end gap-4 mb-4">
            <h1 className="text-[4rem] font-extrabold text-black">The Week's Best</h1>
            <a href="#see" className="font-extralight mb-[1rem]">See all posts</a>
          </span>
          <div className="h-[600px] w-[98%] border-solid border-black border-2 rounded-3xl ">
            <img src={blog} alt="blog" className="h-full w-full object-fill rounded-3xl"  />
          </div>
        </div>
        <div className="flex flex-col p-4 gap-6">
          <div className="flex flex-col justify-evenly bg-orange-300 w-full h-[300px] p-4 mt-8 rounded-3xl">
            <span className="flex flex-row items-center justify-between">
              <h2 className="font-bold">New</h2>
              <button className="bg-white rounded-full px-6 py-2">Y</button>
            </span>

            <span>
              <h3 className="font-extralight">become a member</h3>
              <h1 className="text-[2rem] font-semibold w-[85%] text-left">Join as our Blog Contributor</h1>
            </span>

            <button className="border-solid border-black border-2 self-end rounded-3xl px-4 py-2 w-[30%]">Join now</button>
          </div>
          <div className="h-full w-full bg-white rounded-3xl border-solid border-black border-2">
            <img src={blog1} alt="blog" className="h-full w-full object-fit rounded-3xl" />
          </div>
        </div>
      </main>
    </section>
  );
}

export default HeroSection;