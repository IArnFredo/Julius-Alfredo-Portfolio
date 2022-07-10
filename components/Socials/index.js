import React from "react";
import Button from "../Button";

import data from "../../yourData";
import yourData from "../../yourData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} text-center`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <img src={social.icon} alt={social.title} width="30vw"/>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
