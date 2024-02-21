import React from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import Intrest from "./components/Intrest";
import Footer from "./components/Footer";
import Card from "./components/Card";
import profileData from "./data/data";
import tour from "./data/tour";
import Tour from "./components/Tour";
import Meme from "./components/Meme";
import Confetti from "react-confetti";

const App = () => {
  // const tours = tour.map((val) => {
  //   return <Tour data={val} key={val.title} />;
  // });

  return (
    <div className="container">
      <Confetti />
      {/* <Profile /> */}
      {/* {profileData.map((val) => (
        <Card props={val} key={val.id} />
      ))} */}
      {/* tour */}
      {/* {tours} */}

      <Meme />

      {/* <About />
      <Intrest />
      <Footer /> */}
    </div>
  );
};

export default App;
