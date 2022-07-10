import React from "react";

const ServiceCard = ({ name, description }) => {
  return (
    <div className="w-full p-4 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-sky-600 hover:scale-105 cursor-pointer">
      <h1 data-aos="flip-left" data-aos-duration="1000" className="text-3xl">{name ? name : "Heading"}</h1>
      <p data-aos="flip-left" data-aos-duration="1000" className="mt-5 opacity-70 text-xl">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ServiceCard;
