import React from "react";

const Splash = ({}) => {
  return (
    <div id="splash" className="splashScreen">
      <div className="logoSplash">
        <img className="logoSplashScreen" src="assets/JuliusAlfredo.png"></img>
        <img className="meteor" src="assets/meteor.svg" width="100vw"></img>
        <img
          className="star slide-top"
          style={{ top: "2vh", left: "-5vw" }}
          src="assets/star.svg"
        ></img>
        <img
          className="star slide-top"
          style={{ top: "10vh", left: "50vw" }}
          src="assets/star.svg"
        ></img>
        <img
          className="star slide-bottom"
          style={{ top: "46vh", left: "10vw" }}
          src="assets/star.svg"
        ></img>
        <img
          className="star slide-top"
          style={{ top: "40vh", left: "-5vw" }}
          src="assets/star.svg"
        ></img>
        <img
          className="star slide-bottom"
          style={{ top: "30vh", left: "30vw" }}
          src="assets/star.svg"
        ></img>
        <img
          className="star slide-top"
          style={{ top: "50vh", left: "-15vw" }}
          src="assets/star.svg"
        ></img>
        <img
          className="star slide-bottom"
          style={{ top: "-10vh", left: "25vw" }}
          src="assets/star.svg"
        ></img>
        <img
          className="star slide-bottom"
          style={{ top: "20vh", left: "-10vw" }}
          src="assets/star.svg"
        ></img>
        <img
          className="star slide-top"
          style={{ top: "50vh", left: "40vw" }}
          src="assets/star.svg"
        ></img>
        {/* <object className="star" data="assets/star.svg" width="100%"></object> */}
      </div>
    </div>
  );
};

export default Splash;
