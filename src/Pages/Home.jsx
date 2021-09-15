import React from "react";

//components
import Hero from "./../Components/Hero/Hero";
import Navbar from "./../Components/Navbar/Navbar";
import Card from "./../Components/Card/Card";
import Footer from "./../Components/Footer/Footer";

//assets
import img1 from "../assets/images/bg-basketball.png";
import "../Components/Card/Card.css";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      {/* <Slider />
      <Players />
      <Teams /> */}

      {/* Card Experiment */}
      <div className="card-container">
        <Card
          title="Lebron James"
          text="Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"
          image={img1}
          readNumber="4000"
          viewNumber="500"
          commentNumber="10"
          color="rgb(173,83,59)"
        />
        <Card
          title="Derick Rose"
          text="Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"
          image={img1}
          readNumber="4000"
          viewNumber="500"
          commentNumber="10"
          color="rgb(173,83,59)"
        />
        <Card
          title="Stephen Curry"
          text="Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"
          image={img1}
          readNumber="4000"
          viewNumber="500"
          commentNumber="10"
          color="rgb(173,83,59)"
        />
      </div>
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
