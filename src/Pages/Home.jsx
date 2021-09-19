import React from "react";

//components
import Hero from "./../Components/Hero/Hero";
import Navbar from "./../Components/Navbar/Navbar";
import Footer from "./../Components/Footer/Footer";
import Players from "./../Components/Players/Players";
import Games from "../Components/Games/Games";


const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Games />
      <Players />
      {/* <Teams /> */}
      <Footer
        siteName="NBA Info"
        email="nbainfo@gmail.com"
        phoneNumber="+371 2837019"
        address="Jove Ilica 15"
        cityAndState="Belgrade, Serbia"
        aboutCompany="NBA Info is a website that provides informations and insights to NBA league. It is a free website for NBA lovers."
        facebookURL="http://www.facebook.com"
        instagramURL="https://www.instagram.com"
        twitterURL="http://twitter.com"
        githubURL="http://github.com"
      />
    </div>
  );
};

export default Home;
