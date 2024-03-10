import React from "react";
import Navbar from "../components/navbar";
import '@fontsource/ojuju';

const Articles = () => {
    return(
        <section className="max-w-7xl mx-auto p-4 font-['ojuju']">
            <Navbar />
            <div className="flex flex-col items-start w-[85%] h-[fit-content] p-4 mx-auto">
                <h1 className=" text-4xl font-bold" >Articles</h1>
            </div>
        </section>
    )
};

export default Articles