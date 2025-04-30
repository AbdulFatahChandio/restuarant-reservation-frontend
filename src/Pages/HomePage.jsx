import React from "react";
import HeroSection from "../components/HeroSection"
import About from "../components/About";
import Qualities from "../components/Qualities";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import WhoAreWe from "../components/WhoAreWe";
import Team from "../components/Team";
import Reservation from "../components/Reservation";

const HomePage =()=>{
    return(
        <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
        <Team/>
        <Reservation/>
        <Footer/>
        </>
    )
}

export default HomePage;