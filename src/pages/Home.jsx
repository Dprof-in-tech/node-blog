import React from "react";
import '../index.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HeroSection from "../sections/herosection";

const Home = () => {
    return(
        <div>
            <Navbar />
            <HeroSection />
            <Footer />
        </div>
    )
};

export default Home