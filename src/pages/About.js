import React from "react";
import '@fontsource/ojuju';
import Navbar from "../components/navbar";

const About = () => {
    return(
        <section className="max-w-7xl mx-auto px-8 py-4 font-['ojuju']">
            <Navbar />
            <div className="flex flex-col items-center justify-center w-[85%] h-[fit-content] p-4 mx-auto">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="text-lg font-light">We are a team of writers and content creators 
                    who are passionate about creating content that is engaging and informative. 
                    We are dedicated to providing our readers with the best content in the form 
                    of blogs, articles, radio shows, podcasts and much more. We are always looking 
                    for new writers to join our team and contribute to our platform. If you are 
                    interested in becoming a writer, please contact us. We would love to hear from you!
                </p>
            </div>
        </section>
    )
}

export default About