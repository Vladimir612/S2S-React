import React from "react";

import Card from "../Components/Card/Card.jsx";
import img1 from "../Images/img1.jpg";

const Home = () => {
  return (
    <div className="Home">
      <Card
        title="My first Post"
        text="Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"
        image={img1}
        readNumber="4000"
        viewNumber="500"
        commentNumber="10"
        color="rgb(255, 7, 110)"
      />
    </div>
  );
};

export default Home;
