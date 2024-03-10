import React from "react";
import { Link } from "react-router-dom";
import '@fontsource/ojuju';
import '../index.css';

const Navbar = () => {
    return(
        <nav className="max-w-7xl mx-auto flex flex-row items-center justify-center w-full font-['ojuju'] mb-8">
        <div className="flex items-center w-[80%] h-[fit-content] px-4 py-2">
        <ul className="flex flex-row items-center gap-[1rem] justify-center">
          <li>
            <Link to ="/" className="font-extrabold text-[2rem]">Blogs</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Articles">Articles</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/write">Be a writer</Link>
          </li>
          <li>
            <Link to="/contact">Talk to us</Link>
          </li>
        </ul>
        </div>
        <div className="flex flex-row gap-4">
          <button className="bg-black rounded-3xl px-4 py-2 w-[4rem]">Q</button>
          <Link to='/Articles'>
            <button className="border-dashed border-black border-2 rounded-3xl px-4 py-2">Read</button>
          </Link>
        </div>
      </nav>
    )
};

export default Navbar