import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <>
      <div
        className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
        onClick={onClick}
      >
        <div
          className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48"
          style={{ height: "200px" }}
        >
          <img
            data-aos="flip-left"
            data-aos-duration="1000"
            alt={name}
            className="h-full w-full object-cover"
            src={img}
          ></img>
        </div>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mt-5 text-3xl font-medium"
        >
          {name ? name : "Project Name"}
        </h1>
        <h2
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-xl opacity-70"
        >
          {description ? description : "Description"}
        </h2>
      </div>
    </>
  );
};

export default WorkCard;
