import { useEffect, useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Course from "../components/Course";
import Splash from "../components/Splash";
import Head from "next/head";

import $ from "jquery";
// Local Data
import data from "../yourData";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  // Splash screen
  useEffect(() => {
    setTimeout(() => {
      var splash = document.getElementById("splash");
      splash.style.animation =
        "splash 1s cubic-bezier(0.600, 0.040, 0.980, 0.335) both";
    }, 3000);

    // stars
    function stars(){
      let count = 100;
      let scene = document.querySelector(".scene");
      let i = 0;
      while(i<count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1+size + "px";
        star.style.height = 1+size + "px";
        star.style.animationDuration = 5+duration + "s";
        star.style.animationDelay = duration + "s";

        scene.appendChild(star);
        i++;
      }
    }
    stars();
  });
  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // $(document).ready(function() {
  //   $('body').bind('cut copy', function(e) {
  //       e.preventDefault();
  //     });
  // });
  if (typeof window === "object") {
    // Check if document is finally loaded
    // $(document).ready(function () {
    //   $("body").on("contextmenu", function (e) {
    //     return false;
    //   });
    // });
  }

  return (
    <>
      <Splash></Splash>
      <div className="mx-auto mb-10 ez">
        <Head>
          <title>Julius Alfredo - Portfolio</title>
          <link rel="icon" href="assets/JuliusAlfredo.png" />
        </Head>

        <div className="scene">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleContactScroll={handleContactScroll}
        />
          <div className="moon"></div>
          <div className="grid grid-cols-1 laptop:grid-cols-2 laptop:mb-48 laptop:mt-0 laptopl:mt-16 mob:mb-60 mob:mt-36 laptopxl:mb-64">
            <div className="profile1">
              <img
                src={data.headerImage}
                className="imageProfile"
                width="300vw"
              />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Splash', cursive",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
              
                }}
                className="mt-5 mob:text-3xl laptop:mx-5 laptop:mt-2 mob:mt-24 laptop:text-6xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 glowing"
              >
                {data.headerTaglineOne} <br />
                {data.headerTaglineTwo}
              </h3>
            </div>
          </div>
          <img src="assets/forest.png" className="forest" />
        </div>
        <div className="laptop:mt-4 mob:mt-24 desktop:mt-20 laptopl:mt-28 laptopxl:mt-36 container mx-auto ez">
          {/* Cloud animation */}
          {/* <div className="cloud">
            <img
              style={{ top: "2vh", left: "-5vw" }}
              src="assets/cloud1.png"
            />
          </div> */}
          <div
            ref={aboutRef}
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="mt-6 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0 laptop:mx-4 container mx-auto"
          >
            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-2xl text-bold text-center"
            >
              About.
            </h1>
            <p className="px-12 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl mob:w-full container mx-auto">
              {data.aboutpara}
            </p>
          </div>
        </div>
        <div
          className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0 container mx-auto"
          ref={workRef}
        >
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-2xl px-12 text-bold laptop:mx-4"
          >
            Projects.
          </h1>
          <div className="mt-10 px-12 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 gap-4 container mx-auto">
            {data.projects.map((project, index) => (
              <WorkCard
                key={index}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <div className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0 container mx-auto">
          <h1 className="text-2xl px-12 laptop:mx-4 text-bold">
            Course Certification.
          </h1>
          <div className="mt-10 px-12 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 tab:grid-cols-2 laptop:grid-cols-3 gap-4 container mx-auto">
            {data.course.map((project, index) => (
              <Course
                key={index}
                img={project.imageSrc}
                name={project.title}
                description={project.provider}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0 container mx-auto">
          <h1
            data-aos="flip-left"
            data-aos-duration="1000"
            className="text-2xl px-12  laptop:mx-4 text-bold"
          >
            Specialist.
          </h1>
          <div className="mt-10 px-12  grid grid-cols-2 mob:grid-cols-1 tab:grid-cols-2 laptop:grid-cols-2 laptop:mx-2 gap-6 container mx-auto">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        <div
          className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0 laptop:mx-4 container mx-auto"
          ref={contactRef}
        >
          <h1
            data-aos="flip-left"
            data-aos-duration="1000"
            className="text-2xl text-bold container mx-auto text-center"
          >
            Contact.
          </h1>
          <div data-aos="flip-left" data-aos-duration="1000" className="mt-5 text-center container">
            <Socials />
          </div>
        </div>
        <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0 laptop:mx-4 container mx-auto text-center">
          Made With ❤ by Julius Alfredo ©2022
        </h1>
      </div>
    </>
  );
}
