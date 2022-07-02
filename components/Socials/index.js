import React from "react";
import Button from "../Button";

import data from "../../yourData";
import yourData from "../../yourData";

const Socials = ({ className }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className={`${className} flex`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
